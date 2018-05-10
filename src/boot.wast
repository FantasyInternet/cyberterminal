(module
  (import "api" "pushFromMemory" (func $pushFromMemory (param i32) (param i32)))
  (import "api" "popToMemory" (func $popToMemory (param i32) ))
  (import "api" "log" (func $log))
  (import "api" "wait" (func $wait (param i32) (param i32)))
  (import "api" "setDisplayMode" (func $setDisplayMode (param i32) (param i32) (param i32) ))
  (import "api" "displayMemory" (func $displayMemory (param i32) (param i32) ))
  (import "api" "focusInput" (func $focusInput (param i32) ))
  (import "api" "getInputText" (func $getInputText (result i32) ))
  (import "api" "getInputPosition" (func $getInputPosition (result i32) ))
  (import "api" "getInputSelected" (func $getInputSelected (result i32) ))
  (import "api" "getMouseX" (func $getMouseX (result i32) ))
  (import "api" "getMouseY" (func $getMouseY (result i32) ))
  (import "api" "getMousePressed" (func $getMousePressed (result i32) ))
  (import "api" "getGameAxisX" (func $getGameAxisX (result f32) ))
  (import "api" "getGameAxisY" (func $getGameAxisY (result f32) ))
  (import "api" "getGameButtonA" (func $getGameButtonA (result i32) ))
  (import "api" "getGameButtonB" (func $getGameButtonB (result i32) ))
  (import "api" "getGameButtonX" (func $getGameButtonX (result i32) ))
  (import "api" "getGameButtonY" (func $getGameButtonY (result i32) ))
  (import "api" "startTone" (func $startTone (param i32) (param i32) ))
  (import "api" "stopTone" (func $stopTone (param i32) ))
  (import "api" "readImage" (func $readImage (param i32) (result i32)))
  (import "api" "connectTo" (func $connectTo))

  (table $table 8 anyfunc)
    (export "table" (table $table))

  (memory $memory 1)
    (export "memory" (memory $memory))
    (data (i32.const 10) "Hello world from WASM!")
    (data (i32.const 40) "./images/sleepyhead.png")
    (data (i32.const 80) "./images/pointer.png")
    (data (i32.const 120) "./images/font.png")
    (data (i32.const 160) "http://codeartistic.ninja")

  ;; Memory management
  (global $partIndexOffset (mut i32) (i32.const 0))
  (func $getPartCount (result i32)
    (i32.div_u (i32.load (get_global $partIndexOffset)) (i32.const 4))
  )
  (func $getPartOffset (param $id i32) (result i32)
    (local $offset i32)
    (set_local $offset (get_global $partIndexOffset))
    (if (i32.gt_u (get_local $id) (i32.const 0)) (then
      (set_local $offset (i32.load (i32.add (get_global $partIndexOffset) (i32.mul (get_local $id) (i32.const 4)))))
    ))
    (i32.add (get_local $offset) (i32.const 4))
  )
  (func $getPartLength (param $id i32) (result i32)
    (i32.load (i32.sub (call $getPartOffset (get_local $id)) (i32.const 4)))
  )

  (func $getNextPart (param $fromOffset i32) (result i32)
    (local $pos i32)
    (local $partsLeft i32)
    (local $bestOffset i32)
    (local $bestId i32)
    (local $offset i32)
    (local $id i32)
    (set_local $pos (get_global $partIndexOffset))
    (set_local $partsLeft (call $getPartCount))
    (set_local $bestOffset (i32.mul (current_memory) (i32.const 65536)))
    (set_local $bestId (i32.add (get_local $partsLeft) (i32.const 1)))
    (set_local $offset (get_global $partIndexOffset))
    (set_local $id (i32.const 0))
    (block (loop
      (if (i32.and (i32.lt_u (get_local $offset) (get_local $bestOffset)) (i32.ge_u (get_local $offset) (get_local $fromOffset))) (then
        (set_local $bestId (get_local $id))
        (set_local $bestOffset (get_local $offset))
      ))
      (br_if 1 (i32.le_u (get_local $partsLeft) (i32.const 0)))
      (set_local $pos (i32.add (get_local $pos) (i32.const 4)))
      (set_local $id  (i32.add (get_local $id)  (i32.const 1)))
      (set_local $offset (i32.load (get_local $pos)))
      (set_local $partsLeft (i32.sub (get_local $partsLeft) (i32.const 1)))
      (br 0)
    ))
    (get_local $bestId)
  )

  (func $alloc (param $len i32) (result i32)
    (local $offset i32)
    (local $partCount i32)
    (local $id i32)
    (local $nextOffset i32)
    (set_local $offset (i32.const 0))
    (set_local $len (i32.add (get_local $len) (i32.const 4)))
    (set_local $partCount (call $getPartCount))
    (block (loop
      (set_local $id (call $getNextPart (get_local $offset)))
      (if (i32.gt_u (get_local $id) (get_local $partCount)) (then
        (set_local $nextOffset (i32.mul (current_memory) (i32.const 65536)))
      )(else
        (set_local $nextOffset (call $getPartOffset (get_local $id)))
      ))
      (br_if 1 (i32.lt_u (i32.add (get_local $offset) (get_local $len)) (get_local $nextOffset)))
      (if (i32.gt_u (get_local $id) (get_local $partCount)) (then
        (if (i32.lt_s (grow_memory (i32.const 1)) (i32.const 0)) (then
          (unreachable)
        ))
        (set_local $offset (i32.const 0))
      )(else
        (set_local $offset (i32.add (get_local $nextOffset) (call $getPartLength (get_local $id))))
      ))
      (br 0)
    ))
    (set_local $len (i32.sub (get_local $len) (i32.const 4)))
    (i32.store (get_local $offset) (get_local $len))
    (get_local $offset)
  )
  (func $resizePart (param $id i32) (param $len i32)
    (local $offset i32)
    (local $nextId i32)
    (local $nextOffset i32)
    (local $newOffset i32)
    (set_local $offset (call $getPartOffset (get_local $id)))
    (set_local $len (i32.add (get_local $len) (i32.const 4)))
    (set_local $nextId (call $getNextPart (get_local $offset)))
    (set_local $nextOffset (call $getPartOffset (get_local $nextId)))
    (if (i32.lt_u (i32.add (get_local $offset) (get_local $len)) (get_local $nextOffset)) (then
      (set_local $offset (i32.sub (get_local $offset) (i32.const 4)))
      (set_local $len    (i32.sub (get_local $len)    (i32.const 4)))
      (i32.store (get_local $offset) (get_local $len))
    )(else
      (set_local $offset (i32.sub (get_local $offset) (i32.const 4)))
      (set_local $newOffset (call $alloc (get_local $len)))
      (call $copyMem (get_local $offset) (get_local $newOffset) (get_local $len))
      (set_local $len    (i32.sub (get_local $len)    (i32.const 4)))
      (i32.store (get_local $newOffset) (get_local $len))
      (if (i32.eq (get_local $id) (i32.const 0)) (then
        (set_global $partIndexOffset (get_local $newOffset))
      )(else
        (i32.store (i32.add (get_global $partIndexOffset) (i32.mul (get_local $id) (i32.const 4))) (get_local $newOffset))
      ))
    ))
  )
  (func $copyMem (param $fromOffset i32) (param $toOffset i32) (param $len i32)
    (local $delta i32)
    (if (i32.gt_u (get_local $fromOffset) (get_local $toOffset)) (then
      (set_local $delta (i32.const 1))
    )(else
      (set_local $delta (i32.const -1))
      (set_local $len (i32.sub (get_local $len) (i32.const 1)))
      (set_local $fromOffset (i32.add (get_local $fromOffset) (get_local $len)))
      (set_local $toOffset   (i32.add (get_local $toOffset  ) (get_local $len)))
      (set_local $len (i32.add (get_local $len) (i32.const 1)))
    ))
    (block (loop
      (i32.store8 (get_local $toOffset) (i32.load8_u (get_local $fromOffset)))
      (set_local $fromOffset (i32.add (get_local $fromOffset) (get_local $delta)))
      (set_local $toOffset   (i32.add (get_local $toOffset  ) (get_local $delta)))
      (set_local $len (i32.sub (get_local $len) (i32.const 1)))
      (br_if 1 (i32.le_u (get_local $len) (i32.const 0)))
      (br 0)
    ))
  )
  (func $createPart (param $len i32) (result i32)
    (local $id i32)
    (call $resizePart (i32.const 0) (i32.add (call $getPartLength (i32.const 0)) (i32.const 4)))
    (set_local $id (call $getPartCount))
    (i32.store (i32.add (get_global $partIndexOffset) (i32.mul (get_local $id) (i32.const 4))) (call $alloc (get_local $len)))
    (get_local $id)
  )

  (func $setup
    (call $log (call $pushFromMemory (i32.const 10) (i32.const 22)))
    (set_global $sleepyhead    (call $createImg (i32.const 0) (i32.const 0)))
    (set_global $sleepyheadReq (call $readImage (call $pushFromMemory (i32.const  40) (i32.const 23)) (i32.const 1)))
    (set_global $pointer       (call $createImg (i32.const 0) (i32.const 0)))
    (set_global $pointerReq    (call $readImage (call $pushFromMemory (i32.const  80) (i32.const 20)) (i32.const 1)))
    (set_global $font          (call $createImg (i32.const 0) (i32.const 0)))
    (set_global $fontReq       (call $readImage (call $pushFromMemory (i32.const 120) (i32.const 17)) (i32.const 1)))
    (set_global $codeartistic  (call $createPart (i32.const 25)))
    (call $copyMem (i32.const 160) (call $getPartOffset (get_global $codeartistic)) (call $getPartLength (get_global $codeartistic)))
    (set_global $display (call $createImg (i32.const 320) (i32.const 200)))
    (call $setDisplayMode (i32.const 1) (call $getImgWidth (get_global $display)) (call $getImgHeight (get_global $display)))
    (call $focusInput (i32.const 3))

    (set_global $bgColor (call $rgb (i32.const 0) (i32.const 0) (i32.const 0)))
    (set_global $ballColor (call $rgb (i32.const 255) (i32.const 255) (i32.const 255)))
    (set_global $leftColor (call $rgb (i32.const 0) (i32.const 0) (i32.const 255)))
    (set_global $rightColor (call $rgb (i32.const 255) (i32.const 0) (i32.const 0)))
    (set_global $inputText (call $createPart (i32.const 1)))
  )
  (export "setup" (func $setup))

  (global $codeartistic (mut i32) (i32.const 0))
  (global $sleepyheadReq (mut i32) (i32.const 0))
  (global $sleepyhead    (mut i32) (i32.const 0))
  (global $pointerReq (mut i32) (i32.const 0))
  (global $pointer    (mut i32) (i32.const 0))
  (global $fontReq (mut i32) (i32.const 0))
  (global $font    (mut i32) (i32.const 0))
  (func $storeImages (param $w i32) (param $h i32) (param $req i32)
    (if (i32.eq (get_local $req) (get_global $sleepyheadReq)) (then
      (set_global $sleepyhead (call $createImg (get_local $w) (get_local $h)))
      (call $popToMemory (i32.add (call $getPartOffset (get_global $sleepyhead)) (i32.const 8)))
    ))
    (if (i32.eq (get_local $req) (get_global $pointerReq)) (then
      (set_global $pointer (call $createImg (get_local $w) (get_local $h)))
      (call $popToMemory (i32.add (call $getPartOffset (get_global $pointer)) (i32.const 8)))
    ))
    (if (i32.eq (get_local $req) (get_global $fontReq)) (then
      (set_global $font (call $createImg (get_local $w) (get_local $h)))
      (call $popToMemory (i32.add (call $getPartOffset (get_global $font)) (i32.const 8)))
    ))
  )
  (elem (i32.const 1) $storeImages)

  (global $left (mut i32) (i32.const 100))
  (global $leftV (mut i32) (i32.const 0))
  (global $leftColor (mut i32) (i32.const 100))
  (global $right (mut i32) (i32.const 100))
  (global $rightV (mut i32) (i32.const 0))
  (global $rightColor (mut i32) (i32.const 100))
  (global $ballX (mut i32) (i32.const 160))
  (global $ballY (mut i32) (i32.const 100))
  (global $ballVX (mut i32) (i32.const 1))
  (global $ballVY (mut i32) (i32.const 0))
  (global $bgColor (mut i32) (i32.const 0))
  (global $ballColor (mut i32) (i32.const 0))
  (global $beep (mut i32) (i32.const 1))
  (global $inputText (mut i32) (i32.const 1))
  (func $update (param $t f64)
    (set_global $beep (i32.sub (get_global $beep) (i32.const 1)))
    (if (i32.eq (get_global $beep) (i32.const 0)) (then
      (call $stopTone (i32.const 0) )
    ))
    (set_global $ballX (i32.add (get_global $ballX) (get_global $ballVX)))
    (set_global $ballY (i32.add (get_global $ballY) (get_global $ballVY)))
    (set_global $left  (i32.add (get_global $left)  (get_global $leftV)))
    (set_global $right (i32.add (get_global $right) (get_global $rightV)))
    (if (i32.le_s (get_global $ballX) (i32.const 8)) (then
      (if (i32.and (i32.ge_s (get_global $ballY) (i32.sub (get_global $left) (i32.const 20))) (i32.le_s (get_global $ballY) (i32.add (get_global $left) (i32.const 20)))) (then
        (set_global $ballVX (i32.mul (get_global $ballVX) (i32.const -1)))
        (set_global $ballVY (i32.add (get_global $ballVY) (get_global $leftV)))
        (call $startTone (i32.const 0) (i32.const 440))
        (set_global $beep (i32.const 4))
      )(else
        (set_global $ballX (i32.const 310))
        (set_global $ballY (get_global $right))
        (set_global $ballVY (i32.div_s (get_global $ballVY) (i32.const 2)))
        (call $startTone (i32.const 0) (i32.const 110))
        (set_global $beep (i32.const 30))
      ))
    ))
    (if (i32.ge_s (get_global $ballX) (i32.const 312)) (then
      (if (i32.and (i32.ge_s (get_global $ballY) (i32.sub (get_global $right) (i32.const 20))) (i32.le_s (get_global $ballY) (i32.add (get_global $right) (i32.const 20)))) (then
        (set_global $ballVX (i32.mul (get_global $ballVX) (i32.const -1)))
        (set_global $ballVY (i32.add (get_global $ballVY) (get_global $rightV)))
        (call $startTone (i32.const 0) (i32.const 440))
        (set_global $beep (i32.const 4))
      )(else
        (set_global $ballX (i32.const 10))
        (set_global $ballY (get_global $left))
        (set_global $ballVY (i32.div_s (get_global $ballVY) (i32.const 2)))
        (call $startTone (i32.const 0) (i32.const 110))
        (set_global $beep (i32.const 30))
        (call $wait (i32.const 4000) (i32.const 0))
      ))
    ))
    (if (i32.and (i32.le_s (get_global $ballY) (i32.const 0)) (i32.lt_s (get_global $ballVY) (i32.const 0))) (then
      (set_global $ballVY (i32.mul (get_global $ballVY) (i32.const -1)))
      (call $startTone (i32.const 0) (i32.const 220))
      (set_global $beep (i32.const 4))
    ))
    (if (i32.and (i32.ge_s (get_global $ballY) (call $getImgHeight (get_global $display))) (i32.gt_s (get_global $ballVY) (i32.const 0))) (then
      (set_global $ballVY (i32.mul (get_global $ballVY) (i32.const -1)))
      (call $startTone (i32.const 0) (i32.const 220))
      (set_global $beep (i32.const 4))
    ))
    ;; (if (i32.lt_s (get_global $ballVX) (i32.const 0)) (then
    ;;   (set_global $rightV (i32.const 0))
    ;;   (if (i32.lt_s (get_global $ballY) (get_global $left)) (then
    ;;     (set_global $leftV (i32.const -1))
    ;;   )(else
    ;;     (set_global $leftV (i32.const 1))
    ;;   ))
    ;; )(else
    (set_global $leftV (i32.trunc_s/f32 (call $getGameAxisY)))
    (if (call $getGameButtonY) (set_global $left (get_global $right)))
    (if (call $getGameButtonB) (call $connectTo (call $pushFromMemory (call $getPartOffset (get_global $codeartistic)) (call $getPartLength (get_global $codeartistic)))))
    (set_global $rightV (i32.const 0))
    (if (i32.ge_s (get_global $ballX) (i32.const 160)) (then
      (if (i32.lt_s (get_global $ballY) (get_global $right)) (then
        (set_global $rightV (i32.const -1))
      )(else
        (set_global $rightV (i32.const 1))
      ))
    ))
  )
  (export "update" (func $update))
  (func $draw (param $t f64)
    (call $rect (get_global $display) (i32.const 0) (i32.const 0) (call $getImgWidth (get_global $display)) (call $getImgHeight (get_global $display)) (get_global $bgColor))
    (call $copyImg (get_global $sleepyhead) (i32.const 0) (i32.const 0) (get_global $display) (i32.const 80) (i32.const 16) (call $getImgWidth (get_global $sleepyhead)) (call $getImgHeight (get_global $sleepyhead)))
    (if (call $getMousePressed) (then
      (set_global $ballX (call $getMouseX))
      (set_global $ballY (call $getMouseY))
    ))
    (call $rect (get_global $display) (i32.sub (get_global $ballX) (i32.const 4)) (i32.sub (get_global $ballY) (i32.const 4)) (i32.const 8) (i32.const 8) (get_global $ballColor))
    (call $rect (get_global $display) (i32.const 0)   (i32.sub (get_global $left)  (i32.const 16)) (i32.const 8) (i32.const 32) (get_global $leftColor))
    (call $rect (get_global $display) (i32.const 312) (i32.sub (get_global $right) (i32.const 16)) (i32.const 8) (i32.const 32) (get_global $rightColor))
    (set_global $txtX (i32.const 160))
    (set_global $txtY (i32.const 32))
    (call $print (get_global $display) (i32.const 72))  ;; H
    (call $print (get_global $display) (i32.const 101)) ;; e
    (call $print (get_global $display) (i32.const 108)) ;; l
    (call $print (get_global $display) (i32.const 108)) ;; l
    (call $print (get_global $display) (i32.const 111)) ;; o
    (call $print (get_global $display) (i32.const 32))  ;; (space)
    (call $print (get_global $display) (i32.const 119)) ;; w
    (call $print (get_global $display) (i32.const 111)) ;; o
    (call $print (get_global $display) (i32.const 114)) ;; r
    (call $print (get_global $display) (i32.const 108)) ;; l
    (call $print (get_global $display) (i32.const 100)) ;; d
    (call $print (get_global $display) (i32.const 33))  ;; !

    (set_global $txtX (i32.const 0))
    (set_global $txtY (i32.const 128))
    (call $resizePart (get_global $inputText) (call $getInputText))
    (call $popToMemory (call $getPartOffset (get_global $inputText)))
    (call $printInput (get_global $display) (get_global $inputText) (call $getInputPosition) (call $getInputSelected) (get_global $leftColor))

    (call $copyImg (get_global $pointer) (i32.const 0) (i32.const 0) (get_global $display) (call $getMouseX) (call $getMouseY) (call $getImgWidth (get_global $pointer)) (call $getImgHeight (get_global $pointer)))
    (call $displayMemory (i32.add (call $getPartOffset (get_global $display)) (i32.const 8)) (i32.sub (call $getPartLength (get_global $display)) (i32.const 8)))
  )
  (export "draw" (func $draw))

  (func $resetRight
    (set_global $right (i32.const 0))
  )
  (elem (i32.const 0) $resetRight)


  ;; graphics

  (global $display (mut i32) (i32.const -1))
  (func $rgb (param $r i32) (param $g i32) (param $b i32) (result i32)
    (local $c i32)
    (set_local $c (i32.const 255))
    (set_local $c (i32.mul (get_local $c) (i32.const 256)))
    (set_local $c (i32.add (get_local $c) (get_local $b)))
    (set_local $c (i32.mul (get_local $c) (i32.const 256)))
    (set_local $c (i32.add (get_local $c) (get_local $g)))
    (set_local $c (i32.mul (get_local $c) (i32.const 256)))
    (set_local $c (i32.add (get_local $c) (get_local $r)))
    (get_local $c)
  )

  (func $createImg (param $w i32) (param $h i32) (result i32)
    (local $img i32)
    (local $imgOffset i32)
    (set_local $img (call $createPart (i32.add (i32.const 8) (i32.mul (i32.mul (get_local $w) (get_local $h)) (i32.const 4)))))
    (set_local $imgOffset (call $getPartOffset (get_local $img)))
    (i32.store (i32.add (get_local $imgOffset) (i32.const 0)) (get_local $w))
    (i32.store (i32.add (get_local $imgOffset) (i32.const 4)) (get_local $h))
    (get_local $img)
  )
  (func $getImgWidth (param $img i32) (result i32)
    (i32.load (call $getPartOffset (get_local $img)))
  )
  (func $getImgHeight (param $img i32) (result i32)
    (i32.load (i32.add (call $getPartOffset (get_local $img)) (i32.const 4)))
  )

  (func $pget (param $img i32) (param $x i32) (param $y i32) (result i32)
    (local $imgOffset i32)
    (local $imgWidth i32)
    (local $imgHeight i32)
    (local $i i32)
    (set_local $imgOffset (call $getPartOffset (get_local $img)))
    (set_local $imgWidth (i32.load (get_local $imgOffset)))
    (set_local $imgOffset (i32.add (get_local $imgOffset) (i32.const 4)))
    (set_local $imgHeight (i32.load (get_local $imgOffset)))
    (set_local $imgOffset (i32.add (get_local $imgOffset) (i32.const 4)))

    (set_local $i (i32.mul (i32.const 4) (i32.add (get_local $x) (i32.mul (get_local $y) (get_local $imgWidth)))))
    (i32.load (i32.add (get_local $imgOffset) (get_local $i)))
  )
  (func $pset (param $img i32) (param $x i32) (param $y i32) (param $c i32)
    (local $imgOffset i32)
    (local $imgWidth i32)
    (local $imgHeight i32)
    (local $i i32)
    (set_local $imgOffset (call $getPartOffset (get_local $img)))
    (set_local $imgWidth (i32.load (get_local $imgOffset)))
    (set_local $imgOffset (i32.add (get_local $imgOffset) (i32.const 4)))
    (set_local $imgHeight (i32.load (get_local $imgOffset)))
    (set_local $imgOffset (i32.add (get_local $imgOffset) (i32.const 4)))

    (br_if 0 (i32.ge_u (get_local $x) (get_local $imgWidth)))
    (br_if 0 (i32.ge_u (get_local $y) (get_local $imgHeight)))
    (set_local $i (i32.mul (i32.const 4) (i32.add (get_local $x) (i32.mul (get_local $y) (get_local $imgWidth)))))
    (i32.store (i32.add (get_local $imgOffset) (get_local $i)) (get_local $c))
  )

  (func $rect (param $img i32) (param $x i32) (param $y i32) (param $w i32) (param $h i32) (param $c i32)
    (local $i i32)
    (local $j i32)
    (local $imgOffset i32)
    (local $imgWidth i32)
    (local $imgHeight i32)
    (set_local $imgOffset (call $getPartOffset (get_local $img)))
    (set_local $imgWidth (i32.load (get_local $imgOffset)))
    (set_local $imgOffset (i32.add (get_local $imgOffset) (i32.const 4)))
    (set_local $imgHeight (i32.load (get_local $imgOffset)))
    (set_local $imgOffset (i32.add (get_local $imgOffset) (i32.const 4)))
    
    (br_if 0 (i32.ge_s (get_local $x) (get_local $imgWidth)))
    (br_if 0 (i32.ge_s (get_local $y) (get_local $imgHeight)))
    (br_if 0 (i32.lt_s (i32.add (get_local $x) (get_local $w)) (i32.const 0)))
    (br_if 0 (i32.lt_s (i32.add (get_local $y) (get_local $h)) (i32.const 0)))
    (if (i32.lt_s (get_local $x) (i32.const 0)) (then
      (set_local $w (i32.add (get_local $w) (get_local $x)))
      (set_local $x (i32.const 0))
    ))
    (if (i32.lt_s (get_local $y) (i32.const 0)) (then
      (set_local $h (i32.add (get_local $h) (get_local $y)))
      (set_local $y (i32.const 0))
    ))
    (if (i32.gt_s (i32.add (get_local $x) (get_local $w)) (get_local $imgWidth)) (then
      (set_local $w (i32.sub (get_local $imgWidth) (get_local $x)))))
    (if (i32.gt_s (i32.add (get_local $y) (get_local $h)) (get_local $imgHeight)) (then
      (set_local $h (i32.sub (get_local $imgHeight) (get_local $y)))))
    (set_local $i (i32.mul (i32.const 4) (i32.add (get_local $x) (i32.mul (get_local $y) (get_local $imgWidth)))))
    (block (loop
      (br_if 1 (i32.eq (get_local $h) (i32.const 0)))
      (set_local $j (get_local $w))
      (block (loop
        (br_if 1 (i32.eq (get_local $j) (i32.const 0)))
        (i32.store (i32.add (get_local $imgOffset) (get_local $i)) (get_local $c))
        (set_local $i (i32.add (get_local $i) (i32.const 4)))
        (set_local $j (i32.sub (get_local $j) (i32.const 1)))
        (br 0)
      ))
      (set_local $i (i32.sub (i32.add (get_local $i) (i32.mul (i32.const 4) (get_local $imgWidth))) (i32.mul (i32.const 4) (get_local $w))))
      (set_local $h (i32.sub (get_local $h) (i32.const 1)))
      (br 0)
    ))
  )

  (func $copyImg (param $simg i32) (param $sx i32) (param $sy i32) (param $dimg i32) (param $dx i32) (param $dy i32) (param $w i32) (param $h i32)
    (local $x i32)
    (local $y i32)
    (local $c i32)
    (block (set_local $y (i32.const 0)) (loop
      (br_if 1 (i32.ge_u (get_local $y) (get_local $h)))
      (block (set_local $x (i32.const 0)) (loop
        (br_if 1 (i32.ge_u (get_local $x) (get_local $w)))
        (set_local $c (call $pget (get_local $simg)
          (i32.add (get_local $sx) (get_local $x))
          (i32.add (get_local $sy) (get_local $y))
        ))
        (if (i32.gt_u (get_local $c) (i32.const 0x77777777)) (then
          (call $pset (get_local $dimg)
            (i32.add (get_local $dx) (get_local $x))
            (i32.add (get_local $dy) (get_local $y))
            (get_local $c)
          )
        ))
        (set_local $x (i32.add (get_local $x) (i32.const 1)))
        (br 0)
      ))
      (set_local $y (i32.add (get_local $y) (i32.const 1)))
      (br 0)
    ))
  )

  (global $txtX (mut i32) (i32.const 0))
  (global $txtY (mut i32) (i32.const 0))
  (func $print (param $img i32) (param $char i32)
    (call $copyImg (get_global $font) (i32.const 0) (i32.mul (get_local $char) (i32.const 8)) (get_local $img) (get_global $txtX) (get_global $txtY) (i32.const 8) (i32.const 8))
    (set_global $txtX (i32.add (get_global $txtX) (i32.const 8)))
    (if (i32.eq (get_local $char) (i32.const 9)) (then
      (set_global $txtX (i32.sub (get_global $txtX) (i32.const 8)))
      (set_global $txtX (i32.div_u (get_global $txtX) (i32.const 32)))
      (set_global $txtX (i32.mul (get_global $txtX) (i32.const 32)))
      (set_global $txtX (i32.add (get_global $txtX) (i32.const 32)))
    ))
    (if (i32.eq (get_local $char) (i32.const 10)) (then
      (set_global $txtX (i32.const 0))
      (set_global $txtY (i32.add (get_global $txtY) (i32.const 8)))
    ))
    (if (i32.ge_u (get_global $txtX) (call $getImgWidth (get_local $img))) (then
      (set_global $txtX (i32.const 0))
      (set_global $txtY (i32.add (get_global $txtY) (i32.const 8)))
    ))
    (if (i32.ge_u (get_global $txtY) (call $getImgHeight (get_local $img))) (then
      (call $copyImg (get_local $img) (i32.const 0) (i32.const 8) (get_local $img) (i32.const 0) (i32.const 0) (call $getImgWidth (get_local $img)) (i32.sub (call $getImgHeight (get_local $img)) (i32.const 8)))
      (call $rect (get_local $img) (i32.const 0) (i32.sub (call $getImgHeight (get_local $img)) (i32.const 8)) (call $getImgWidth (get_local $img)) (i32.const 8) (call $pget (get_local $img) (i32.sub (call $getImgWidth (get_local $img)) (i32.const 1)) (i32.sub (call $getImgHeight (get_local $img)) (i32.const 1))))
      (set_global $txtY (i32.sub (get_global $txtY) (i32.const 8)))
    ))
  )

  (func $printStr (param $img i32) (param $str i32)
    (local $i i32)
    (local $len i32)
    (set_local $i (call $getPartOffset (get_local $str)))
    (set_local $len (call $getPartLength (get_local $str)))
    (if (i32.gt_u (get_local $len) (i32.const 0)) (then
      (loop
        (call $print (get_local $img) (i32.load8_u (get_local $i)))
        (set_local $i (i32.add (get_local $i) (i32.const 1)))
        (set_local $len (i32.sub (get_local $len) (i32.const 1)))
        (br_if 0 (i32.gt_u (get_local $len) (i32.const 0)))
      )
    ))
  )

  (func $printInput (param $img i32) (param $str i32) (param $pos i32) (param $sel i32) (param $c i32)
    (local $i i32)
    (local $len i32)
    (set_local $i (call $getPartOffset (get_local $str)))
    (set_local $len (call $getPartLength (get_local $str)))
    (if (i32.gt_u (get_local $len) (i32.const 0)) (then
      (loop
        (if (i32.eq (get_local $pos) (i32.const 0)) (then
          (if (i32.gt_u (get_local $sel) (i32.const 0)) (then
            (call $rect (get_local $img) (get_global $txtX) (get_global $txtY) (i32.const 8) (i32.const 8) (get_local $c))
            (set_local $sel (i32.sub (get_local $sel) (i32.const 1)))
          )(else
            (call $rect (get_local $img) (get_global $txtX) (get_global $txtY) (i32.const 1) (i32.const 8) (get_local $c))
            (set_local $pos (i32.sub (get_local $pos) (i32.const 1)))
          ))
        )(else
          (set_local $pos (i32.sub (get_local $pos) (i32.const 1)))
        ))
        (call $print (get_local $img) (i32.load8_u (get_local $i)))
        (set_local $i (i32.add (get_local $i) (i32.const 1)))
        (set_local $len (i32.sub (get_local $len) (i32.const 1)))
        (br_if 0 (i32.gt_u (get_local $len) (i32.const 0)))
      )
      (if (i32.eq (get_local $pos) (i32.const 0)) (then
        (if (i32.gt_u (get_local $sel) (i32.const 0)) (then
          (call $rect (get_local $img) (get_global $txtX) (get_global $txtY) (i32.const 8) (i32.const 8) (get_local $c))
          (set_local $sel (i32.sub (get_local $sel) (i32.const 1)))
        )(else
          (call $rect (get_local $img) (get_global $txtX) (get_global $txtY) (i32.const 1) (i32.const 8) (get_local $c))
          (set_local $pos (i32.sub (get_local $pos) (i32.const 1)))
        ))
      )(else
        (set_local $pos (i32.sub (get_local $pos) (i32.const 1)))
      ))
    ))
  )

)