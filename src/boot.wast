(module
  ;; Push memory range to buffer stack.
  (import "api" "pushFromMemory" (func $pushFromMemory (param $offset i32) (param $length i32)))
  ;; Pop one buffer off the buffer stack and store in memory.
  (import "api" "popToMemory" (func $popToMemory (param $offset i32)))

  ;; Pop string from buffer stack and log it to console.
  (import "api" "log" (func $log ))
  ;; Pop string from buffer stack and print it to text display.
  (import "api" "print" (func $print ))

  ;; Set the display mode(0=text,1=pixel), resolution and (optionally) display size (for overscan).
  (import "api" "setDisplayMode" (func $setDisplayMode (param $mode i32) (param $width i32) (param $height i32) (param $visibleWidth i32) (param $visibleHeight i32) ))
  ;; Copy memory range to display buffer ($destOffset optional) and commit display buffer.
  (import "api" "displayMemory" (func $displayMemory (param $offset i32) (param $length i32) (param $destOffset i32)))

  ;; Call given index in function table on timeout. Returns a request ID.
  ;; Callback in function table can expect same request ID as parameter.
  (import "api" "wait" (func $wait (param $milliseconds i32) (param $tableIndex i32) (result i32)))
  ;; Commit display buffer and call given index in function table on vsync. Returns a request ID.
  ;; Callback can expect a timestamp and same request ID as parameter.
  (import "api" "waitForVsync" (func $waitForVsync (param $tableIndex i32) (result i32)))
  ;; Commit display buffer and call given index in function table when done. Returns a request ID.
  ;; Callback can expect a timestamp and same request ID as parameter.
  (import "api" "commitDisplay" (func $commitDisplay (param $tableIndex i32) (result i32)))

  ;; Pop URL from buffer stack and connect to it.
  (import "api" "connectTo" (func $connectTo ))
  ;; Shut down this connection
  (import "api" "shutdown" (func $shutdown ))
  ;; Push base URL to buffer stack and return its length in bytes.  
  (import "api" "getBaseUrl" (func $getBaseUrl (result i32)))
  ;; Pop URL from buffer stack and set it as base URL.
  (import "api" "setBaseUrl" (func $setBaseUrl ))

  ;; Pop path from buffer stack, read it and push the contents to buffer stack. Returns a request ID.
  ;; Callback can expect length in bytes and same request ID as parameter.
  (import "api" "read" (func $read (param $tableIndex i32) (result i32)))
  ;; Pop path from buffer stack, read it and push the pixel data to buffer stack. Returns a request ID.
  ;; Callback can expect width and height in pixels and same request ID as parameter.
  (import "api" "readImage" (func $readImage (param $tableIndex i32) (result i32)))
  ;; Pop data and path from buffer stack and write it to file. Returns a request ID.
  ;; Callback can expect success boolean and same request ID as parameter.
  (import "api" "write" (func $write (param $tableIndex i32) (result i32)))
  ;; Pop path from buffer stack and delete the file. Returns a request ID.
  ;; Callback can expect success boolean and same request ID as parameter.
  (import "api" "delete" (func $delete (param $tableIndex i32) (result i32)))

  ;; Prioritize  given type of input. 1=text, 2=mouse, 3=game.
  (import "api" "focusInput" (func $focusInput (param $input i32)))

  ;; Push text input text to buffer stack and return its length in bytes.
  (import "api" "getInputText" (func $getInputText (result i32)))
  ;; Get character position of carret in text input.
  (import "api" "getInputPosition" (func $getInputPosition (result i32)))
  ;; Get number of characters selected in text input.
  (import "api" "getInputSelected" (func $getInputSelected (result i32)))
  ;; Pop text from buffer stack and set text of text input.
  (import "api" "setInputText" (func $setInputText))
  ;; Set position and (optionally) selection of text input.
  (import "api" "setInputPosition" (func $setInputPosition (param $position i32) (param $selected i32)))
  ;; Pop replacement and search substrings from buffer stack and
  ;; replace first occurence in text input.
  (import "api" "replaceInputText" (func $replaceInputText (param $fromIndex i32)))

  ;; Get X coordinate of mouse input.
  (import "api" "getMouseX" (func $getMouseX (result i32)))
  ;; Get Y coordinate of mouse input.
  (import "api" "getMouseY" (func $getMouseY (result i32)))
  ;; Check if mouse button is pressed.
  (import "api" "getMousePressed" (func $getMousePressed (result i32)))

  ;; Get X coodinate of game input. (-1 to 1)
  (import "api" "getGameAxisX" (func $getGameAxisX (result f32)))
  ;; Get Y coodinate of game input. (-1 to 1)
  (import "api" "getGameAxisY" (func $getGameAxisY (result f32)))
  ;; Check if game button A is pressed.
  (import "api" "getGameButtonA" (func $getGameButtonA (result i32)))
  ;; Check if game button B is pressed.
  (import "api" "getGameButtonB" (func $getGameButtonB (result i32)))
  ;; Check if game button X is pressed.
  (import "api" "getGameButtonX" (func $getGameButtonX (result i32)))
  ;; Check if game button Y is pressed.
  (import "api" "getGameButtonY" (func $getGameButtonY (result i32)))

  ;; Start generating a tone.
  (import "api" "startTone" (func $startTone (param $channel i32) (param $frequency i32) (param $volume f32)))
  ;; Stop generating a tone.
  (import "api" "stopTone" (func $stopTone (param $channel i32)))

  ;; Set update interval.
  (import "api" "setUpdateInterval" (func $setUpdateInterval (param $milliseconds i32)))
  ;; Pop wasm binary code from buffer stack and load it. Returns new process ID.
  ;; All exports from boot.wasm starting with "api." are forwarded to the process.
  (import "api" "loadProcess" (func $loadProcess (result i32)))
  ;; Update a process, keeping it alive.
  (import "api" "updateProcess" (func $updateProcess (param $pid i32)))
  ;; Call back a process. Any parameters beyond the first two will be forwarded to the callback function.
  (import "api" "callbackProcess" (func $callbackProcess (param $pid i32) (param $tableIndex i32) (param $param i32)))
  ;; Kill a process.
  (import "api" "killProcess" (func $killProcess (param $pid i32)))
  ;; Transfer a chunk of memory from one process to another
  (import "api" "transferMemory" (func $transferMemory (param $srcPid i32) (param $srcOffset i32) (param $length i32) (param $destPid i32) (param $destOffset i32)))

  ;; transpile wa(s)t into wasm on the buffer stack and return byte length.
  (import "api" "wabt" (func $wabt (result i32)))

  ;; All JavaScript Math functions are available.
  (import "Math" "random" (func $random (result f32)))


  ;; Table for callback functions.
  (table $table 8 anyfunc)
    (export "table" (table $table))

  ;; Linear memory.
  (memory $memory 1)
    (export "memory" (memory $memory))
    (data (i32.const 100) "./images/font.png")
    (data (i32.const 200) "./images/pointer.png")

  ;; Global variables
  (global $intro  (mut i32) (i32.const 1))
  (global $homeCode   (mut i32) (i32.const 1))
  (global $inputPos   (mut i32) (i32.const 1024))
  (global $inputText  (mut i32) (i32.const 1))
  (global $font       (mut i32) (i32.const 1))

  ;; Setup function is called once on start.
  (func $setup
    (set_global $homeCode  (call $createPart (i32.const 56)))
    (i64.store   (i32.add (call $getPartOffset (get_global $homeCode)) (i32.const 0)) (i64.const 0x0909485b1b4b5b1b));;"Esc[KEsc[H\t\t"
    (i64.store   (i32.add (call $getPartOffset (get_global $homeCode)) (i32.const 8)) (i64.const 0x3d2d2d2d20202009));;"\t   ---="
    (i64.store   (i32.add (call $getPartOffset (get_global $homeCode)) (i32.const 16)) (i64.const 0x5472656279433d3d));;"==CyberT"
    (i64.store   (i32.add (call $getPartOffset (get_global $homeCode)) (i32.const 24)) (i64.const 0x3d6c616e696d7265));;"erminal="
    (i64.store   (i32.add (call $getPartOffset (get_global $homeCode)) (i32.const 32)) (i64.const 0x0a0a202d2d2d3d3d));;"==--- \n\n"
    (i64.store   (i32.add (call $getPartOffset (get_global $homeCode)) (i32.const 40)) (i64.const 0x207463656e6e6f43));;"Connect "
    (i64.store   (i32.add (call $getPartOffset (get_global $homeCode)) (i32.const 48)) (i64.const 0x203a4c5255206f74));;"to URL: "
    (call $setUpdateInterval (i32.const 32))
    (call $setDisplayMode (i32.const 0) (i32.const 80) (i32.const 20) (i32.const 80) (i32.const 20))

    (call $focusInput (i32.const 1))
    (set_global $inputText (call $createPart (i32.const 64)))
    ;; (set_global $inputText (call $createPart (call $getBaseUrl)))
    ;; (call $setInputText)
    ;; (call $setInputPosition (call $getPartLength (get_global $inputText)) (i32.const 0))
    ;; (call $print (call $pushFromMemory (call $getPartOffset (get_global $intro)) (call $getPartLength (get_global $intro))))
    (return)
  )
  (export "setup" (func $setup))

  ;; Update function is called once every interval.
  (func $update (param $t f64)
    (local $pos i32)
    (local $len i32)
    (set_local $pos (call $getInputPosition))
    (if (i32.ne (get_local $pos) (get_global $inputPos)) (then
      (call $resizePart (get_global $inputText) (call $getInputText))
      (call $popToMemory (call $getPartOffset (get_global $inputText)))
      (call $print (call $pushFromMemory (call $getPartOffset (get_global $homeCode)) (call $getPartLength (get_global $homeCode))))
      (call $print (call $pushFromMemory (call $getPartOffset (get_global $inputText)) (call $getPartLength (get_global $inputText))))
      (call $print (call $pushFromMemory (call $getPartOffset (get_global $homeCode)) (call $getPartLength (get_global $homeCode))))
      (call $print (call $pushFromMemory (call $getPartOffset (get_global $inputText)) (get_local $pos)))
      (set_global $inputPos (get_local $pos))
    ))
    
    (if (i32.eq (i32.load8_u (i32.add (call $getPartOffset (get_global $inputText)) (i32.sub (call $getInputPosition) (i32.const 1)))) (i32.const 10)) (then
      (call $setInputText (call $pushFromMemory (call $getPartOffset (get_global $inputText)) (i32.sub (call $getInputPosition) (i32.const 1))))
      (call $connectTo (call $getInputText))
      (return)
    ))
  )
  (export "update" (func $update))

  ;; Draw function is called whenever the display needs to be redrawn.
  (func $draw (param $t f64)
  )
  (export "draw" (func $draw))

  ;; Break function is called whenever Esc is pressed.
  (func $break
  )
  (export "break" (func $break))

  ;; Graphic routines

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

  (func $printChar (param $img i32) (param $char i32)
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
        (call $printChar (get_local $img) (i32.load8_u (get_local $i)))
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
        (call $printChar (get_local $img) (i32.load8_u (get_local $i)))
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
    (set_local $len (i32.add (get_local $len) (i32.const 8)))
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
    (set_local $len (i32.sub (get_local $len) (i32.const 8)))
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
    (i32.store (i32.add (get_global $partIndexOffset) (i32.mul (get_local $id) (i32.const 4))) (call $alloc (i32.add (get_local $len) (i32.const 8))))
    (call $resizePart (get_local $id) (get_local $len))
    (get_local $id)
  )
)