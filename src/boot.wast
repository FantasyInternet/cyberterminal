(module
  ;; Push memory range to buffer stack.
  (import "env" "pushFromMemory" (func $pushFromMemory (param $offset i32) (param $length i32)))
  ;; Pop one buffer off the buffer stack and store in memory.
  (import "env" "popToMemory" (func $popToMemory (param $offset i32)))
  ;; Pop API function name off the buffer stack and return index or 0 if not found.
  (import "env" "getApiFunctionIndex" (func $getApiFunctionIndex (result i32)))
  ;; Call API function by index. Use any number of parameters and return values.
  (import "env" "callApiFunction" (func $callApiFunction (param $index i32) (param $a i32) (result i32)))
  (import "env" "callApiFunction" (func $api_i32i32_i32 (param $index i32) (param $a i32) (param $b i32) (result i32)))

  ;; Pop string from buffer stack and log it to the console.
  (import "env" "log" (func $log ))
  ;; Log numbers to the console. Use any number of parameters.
  (import "env" "logNumber" (func $log1Number  (param $a i32) ))
  (import "env" "logNumber" (func $log2Numbers (param $a i32) (param $b i32) ))
  (import "env" "logNumber" (func $log3Numbers (param $a i32) (param $b i32) (param $c i32) ))
  ;; Pop string from buffer stack and print it to text display.
  (import "env" "print" (func $print ))

  ;; Set the display mode(0=text,1=pixel), resolution and (optionally) display size (for overscan).
  (import "env" "setDisplayMode" (func $setDisplayMode (param $mode i32) (param $width i32) (param $height i32) (param $visibleWidth i32) (param $visibleHeight i32) ))
  ;; Copy memory range to display buffer ($destOffset optional) and commit display buffer.
  (import "env" "displayMemory" (func $displayMemory (param $offset i32) (param $length i32) (param $destOffset i32)))

  ;; Pop URL from buffer stack and connect to it.
  (import "env" "connectTo" (func $connectTo ))
  ;; Shut down this connection
  (import "env" "shutdown" (func $shutdown ))
  ;; Push base URL to buffer stack and return its length in bytes.  
  (import "env" "getBaseUrl" (func $getBaseUrl (result i32)))
  ;; Pop URL from buffer stack and set it as base URL.
  (import "env" "setBaseUrl" (func $setBaseUrl ))

  ;; Pop path from buffer stack, read it and push the contents to buffer stack. Returns a request ID.
  ;; Callback can expect success boolean, length in bytes and same request ID as parameters.
  (import "env" "read" (func $read (param $tableIndex i32) (result i32)))
  ;; Pop path from buffer stack, read it and push the pixel data to buffer stack. Returns a request ID.
  ;; Callback can expect success boolean, width and height in pixels and same request ID as parameters.
  ;; (import "env" "readImage" (func $readImage (param $tableIndex i32) (result i32)))
  ;; Pop data and path from buffer stack and write it to file. Returns a request ID.
  ;; Callback can expect success boolean and same request ID as parameters.
  (import "env" "write" (func $write (param $tableIndex i32) (result i32)))
  ;; Pop path from buffer stack and delete the file. Returns a request ID.
  ;; Callback can expect success boolean and same request ID as parameters.
  (import "env" "delete" (func $delete (param $tableIndex i32) (result i32)))
  ;; Pop path from buffer stack and retrieve directory contents. Returns a request ID.
  ;; Callback can expect success boolean, length in bytes and same request ID as parameters.
  (import "env" "list" (func $list (param $tableIndex i32) (result i32)))

  ;; Prioritize  given type of input. 1=text, 2=mouse, 3=game.
  (import "env" "focusInput" (func $focusInput (param $input i32)))

  ;; Push text input text to buffer stack and return its length in bytes.
  (import "env" "getInputText" (func $getInputText (result i32)))
  ;; Get character position of carret in text input.
  (import "env" "getInputPosition" (func $getInputPosition (result i32)))
  ;; Get number of characters selected in text input.
  (import "env" "getInputSelected" (func $getInputSelected (result i32)))
  ;; Get key code of key that was just pressed this step.
  (import "env" "getInputKey" (func $getInputKey (result i32)))
  ;; Set the type of text input. 0=multiline, 1=singleline, 2=password, 3=number, 4=url, 5=email, 6=phone
  (import "env" "setInputType" (func $setInputType (param i32)))
  ;; Pop text from buffer stack and set text of text input.
  (import "env" "setInputText" (func $setInputText))
  ;; Set position and (optionally) selection of text input.
  (import "env" "setInputPosition" (func $setInputPosition (param $position i32) (param $selected i32)))
  ;; Pop replacement and search substrings from buffer stack and
  ;; replace first occurence in text input.
  (import "env" "replaceInputText" (func $replaceInputText (param $fromIndex i32)))

  ;; Get X coordinate of mouse input.
  (import "env" "getMouseX" (func $getMouseX (result i32)))
  ;; Get Y coordinate of mouse input.
  (import "env" "getMouseY" (func $getMouseY (result i32)))
  ;; Check if mouse button is pressed.
  (import "env" "getMousePressed" (func $getMousePressed (result i32)))

  ;; Get X coodinate of game input. (-1 to 1)
  (import "env" "getGameAxisX" (func $getGameAxisX (result f32)))
  ;; Get Y coodinate of game input. (-1 to 1)
  (import "env" "getGameAxisY" (func $getGameAxisY (result f32)))
  ;; Check if game button A is pressed.
  (import "env" "getGameButtonA" (func $getGameButtonA (result i32)))
  ;; Check if game button B is pressed.
  (import "env" "getGameButtonB" (func $getGameButtonB (result i32)))
  ;; Check if game button X is pressed.
  (import "env" "getGameButtonX" (func $getGameButtonX (result i32)))
  ;; Check if game button Y is pressed.
  (import "env" "getGameButtonY" (func $getGameButtonY (result i32)))

  ;; Start generating a tone.
  (import "env" "startTone" (func $startTone (param $channel i32) (param $frequency i32) (param $volume f32) (param $type i32)))
  ;; Stop generating a tone.
  (import "env" "stopTone" (func $stopTone (param $channel i32)))

  ;; Set step interval. Set to -1 to only step on input.
  (import "env" "setStepInterval" (func $setStepInterval (param $milliseconds f64)))
  ;; Pop wasm binary code from buffer stack and load it. Returns new process ID.
  ;; All exports from boot.wasm starting with "api." are forwarded to the process.
  (import "env" "loadProcess" (func $loadProcess (result i32)))
  ;; Step a process, keeping it alive.
  (import "env" "stepProcess" (func $stepProcess (param $pid i32)))
  ;; Call back a process. Any parameters beyond the first two will be forwarded to the callback function.
  (import "env" "callbackProcess" (func $callbackProcess (param $pid i32) (param $tableIndex i32) (param $param i32)))
  ;; Kill a process.
  (import "env" "killProcess" (func $killProcess (param $pid i32)))
  ;; Transfer a chunk of memory from one process to another
  (import "env" "transferMemory" (func $transferMemory (param $srcPid i32) (param $srcOffset i32) (param $length i32) (param $destPid i32) (param $destOffset i32)))

  ;; transpile wa(s)t into wasm on the buffer stack and return byte length.
  ;; (import "env" "wabt" (func $wabt (result i32)))

  ;; All JavaScript Math functions are available.
  (import "Math" "random" (func $random (result f32)))





;;--------;;--------;;--------;;--------;;--------;;--------;;--------;;







  ;; Table for callback functions.
  (table $table 8 anyfunc)
    (elem (i32.const 1) $storeImages)
    (export "table" (table $table))

  ;; Linear memory.
  (memory $memory 1)
    (export "memory" (memory $memory))
    (data (i32.const 1010) "Hello world from WASM!");;22
    (data (i32.const 1040) "./images/sleepyhead.png");;23
    (data (i32.const 1080) "./images/pointer.png");;20
    (data (i32.const 1120) "./images/font.png");;17
    (data (i32.const 1160) "http://codeartistic.ninja");;25
    (data (i32.const 1190) "readImage");;9

  ;; Global variables
  (global $readImage (mut i32) (i32.const 0))
  (global $codeartistic (mut i32) (i32.const 0))
  (global $sleepyheadReq (mut i32) (i32.const 0))
  (global $sleepyhead    (mut i32) (i32.const 0))
  (global $pointerReq (mut i32) (i32.const 0))
  (global $pointer    (mut i32) (i32.const 0))
  (global $fontReq (mut i32) (i32.const 0))

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

  ;; Init function is called once on start.
  (func $init
    (call $log (call $pushFromMemory (i32.const 1010) (i32.const 22)))
    (set_global $sleepyhead    (call $createImg (i32.const 0) (i32.const 0)))
    (set_global $pointer       (call $createImg (i32.const 0) (i32.const 0)))
    (set_global $font          (call $createImg (i32.const 0) (i32.const 0)))
    (set_global $readImage     (call $getApiFunctionIndex (call $pushFromMemory (i32.const 1190) (i32.const 9))))
    (if (get_global $readImage)(then
      (set_global $sleepyheadReq (call $callApiFunction (get_global $readImage) (call $pushFromMemory (i32.const 1040) (i32.const 23)) (i32.const 1)))
      (set_global $pointerReq    (call $callApiFunction (get_global $readImage) (call $pushFromMemory (i32.const 1080) (i32.const 20)) (i32.const 1)))
      (set_global $fontReq       (call $callApiFunction (get_global $readImage) (call $pushFromMemory (i32.const 1120) (i32.const 17)) (i32.const 1)))
    ))
    (set_global $codeartistic  (call $createPart (i32.const 25)))
    (call $copyMem (i32.const 1160) (call $getPartOffset (get_global $codeartistic)) (call $getPartLength (get_global $codeartistic)))
    (set_global $display (call $createImg (i32.const 320) (i32.const 200)))
    (call $setDisplayMode (i32.const 1) (call $getImgWidth (get_global $display)) (call $getImgHeight (get_global $display)) (call $getImgWidth (get_global $display)) (call $getImgHeight (get_global $display)))
    (call $focusInput (i32.const 3))
    (call $setStepInterval (f64.div (f64.const 1000) (f64.const 60)))

    (set_global $bgColor (call $rgb (i32.const 0) (i32.const 0) (i32.const 0)))
    (set_global $ballColor (call $rgb (i32.const 255) (i32.const 255) (i32.const 255)))
    (set_global $leftColor (call $rgb (i32.const 0) (i32.const 0) (i32.const 255)))
    (set_global $rightColor (call $rgb (i32.const 255) (i32.const 0) (i32.const 0)))
    (set_global $inputText (call $createPart (i32.const 1)))
  )
  (export "init" (func $init))

  (func $storeImages (param $success i32) (param $w i32) (param $h i32) (param $req i32)
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


  ;; Step function is called once every interval.
  (func $step (param $t f64)
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
        (call $startTone (i32.const 0) (i32.const 440) (f32.const 1) (i32.const 0))
        (set_global $beep (i32.const 4))
      )(else
        (set_global $ballX (i32.const 310))
        (set_global $ballY (get_global $right))
        (set_global $ballVY (i32.div_s (get_global $ballVY) (i32.const 2)))
        (call $startTone (i32.const 0) (i32.const 110) (f32.const 1) (i32.const 0))
        (set_global $beep (i32.const 30))
      ))
    ))
    (if (i32.ge_s (get_global $ballX) (i32.const 312)) (then
      (if (i32.and (i32.ge_s (get_global $ballY) (i32.sub (get_global $right) (i32.const 20))) (i32.le_s (get_global $ballY) (i32.add (get_global $right) (i32.const 20)))) (then
        (set_global $ballVX (i32.mul (get_global $ballVX) (i32.const -1)))
        (set_global $ballVY (i32.add (get_global $ballVY) (get_global $rightV)))
        (call $startTone (i32.const 0) (i32.const 440) (f32.const 1) (i32.const 0))
        (set_global $beep (i32.const 4))
      )(else
        (set_global $ballX (i32.const 10))
        (set_global $ballY (get_global $left))
        (set_global $ballVY (i32.div_s (get_global $ballVY) (i32.const 2)))
        (call $startTone (i32.const 0) (i32.const 110) (f32.const 1) (i32.const 0))
        (set_global $beep (i32.const 30))
      ))
    ))
    (if (i32.and (i32.le_s (get_global $ballY) (i32.const 0)) (i32.lt_s (get_global $ballVY) (i32.const 0))) (then
      (set_global $ballVY (i32.mul (get_global $ballVY) (i32.const -1)))
      (call $startTone (i32.const 0) (i32.const 220) (f32.const 1) (i32.const 0))
      (set_global $beep (i32.const 4))
    ))
    (if (i32.and (i32.ge_s (get_global $ballY) (call $getImgHeight (get_global $display))) (i32.gt_s (get_global $ballVY) (i32.const 0))) (then
      (set_global $ballVY (i32.mul (get_global $ballVY) (i32.const -1)))
      (call $startTone (i32.const 0) (i32.const 220) (f32.const 1) (i32.const 0))
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
  (export "step" (func $step))

  ;; Display function is called whenever the display needs to be redrawn.
  (func $display (param $t f64)
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
    (call $printChar (get_global $display) (i32.const 72))  ;; H
    (call $printChar (get_global $display) (i32.const 101)) ;; e
    (call $printChar (get_global $display) (i32.const 108)) ;; l
    (call $printChar (get_global $display) (i32.const 108)) ;; l
    (call $printChar (get_global $display) (i32.const 111)) ;; o
    (call $printChar (get_global $display) (i32.const 32))  ;; (space)
    (call $printChar (get_global $display) (i32.const 119)) ;; w
    (call $printChar (get_global $display) (i32.const 111)) ;; o
    (call $printChar (get_global $display) (i32.const 114)) ;; r
    (call $printChar (get_global $display) (i32.const 108)) ;; l
    (call $printChar (get_global $display) (i32.const 100)) ;; d
    (call $printChar (get_global $display) (i32.const 33))  ;; !

    (set_global $txtX (i32.const 0))
    (set_global $txtY (i32.const 128))
    (call $resizePart (get_global $inputText) (call $getInputText))
    (call $popToMemory (call $getPartOffset (get_global $inputText)))
    (call $printInput (get_global $display) (get_global $inputText) (call $getInputPosition) (call $getInputSelected) (get_global $leftColor))

    (call $copyImg (get_global $pointer) (i32.const 0) (i32.const 0) (get_global $display) (call $getMouseX) (call $getMouseY) (call $getImgWidth (get_global $pointer)) (call $getImgHeight (get_global $pointer)))
    (call $displayMemory (i32.add (call $getPartOffset (get_global $display)) (i32.const 8)) (i32.sub (call $getPartLength (get_global $display)) (i32.const 8)) (i32.const 0))
  )
  (export "display" (func $display))

  ;; Break function is called whenever Esc is pressed.
  (func $break
    (call $shutdown)
  )
  (export "break" (func $break))




;;--------;;--------;;--------;;--------;;--------;;--------;;--------;;





  ;; String manipulation
  
  (func $printStr (param $str i32)
    (call $print (call $pushFromMemory (call $getPartOffset (get_local $str)) (call $getPartLength (get_local $str))))
  )
  
  (func $createString (param $srcOffset i32) (result i32)
    (local $str i32)
    (local $len i32)
    (set_local $len (i32.const 0))
    (block(loop
      (br_if 1 (i32.eq (i32.load8_u (i32.add (get_local $srcOffset) (get_local $len))) (i32.const 0)))
      (set_local $len (i32.add (get_local $len) (i32.const 1)))
      (br 0)
    ))
    (set_local $str (call $createPart (get_local $len)))
    (call $copyMem (get_local $srcOffset) (call $getPartOffset (get_local $str)) (get_local $len))
    (get_local $str)
  )

  (func $byteAt (param $str i32) (param $pos i32) (result i32)
    (i32.load8_u (i32.add (call $getPartOffset (get_local $str)) (get_local $pos)))
  )
  
  (func $substr (param $str i32) (param $pos i32) (param $len i32) (result i32)
    (local $strc i32)
    (if (i32.gt_u (get_local $pos) (call $getPartLength (get_local $str))) (then
      (set_local $pos (call $getPartLength (get_local $str)))
    ))
    (if (i32.gt_u (get_local $len) (i32.sub (call $getPartLength (get_local $str)) (get_local $pos))) (then
      (set_local $len (i32.sub (call $getPartLength (get_local $str)) (get_local $pos)) )
    ))
    (set_local $strc (call $createPart (get_local $len)))
    (call $copyMem (i32.add (call $getPartOffset (get_local $str)) (get_local $pos)) (call $getPartOffset (get_local $strc)) (get_local $len))
    (get_local $strc)
  )
  
  (func $concat (param $stra i32) (param $strb i32) (result i32)
    (local $strc i32)
    (set_local $strc (call $createPart (i32.add (call $getPartLength (get_local $stra)) (call $getPartLength (get_local $strb)))))
    (call $copyMem (call $getPartOffset (get_local $stra)) (call $getPartOffset (get_local $strc)) (call $getPartLength (get_local $stra)))
    (call $copyMem (call $getPartOffset (get_local $strb)) (i32.add (call $getPartOffset (get_local $strc)) (call $getPartLength (get_local $stra))) (call $getPartLength (get_local $strb)))
    (get_local $strc)
  )
  
  (func $appendBytes (param $str i32) (param $bytes i64)
    (local $l i32)
    (set_local $l (call $getPartLength (get_local $str)))
    (call $resizePart (get_local $str) (i32.add (get_local $l) (i32.const 9)))
    (set_local $l (i32.add (get_local $l) (i32.const 1)))
    (i64.store (i32.add (call $getPartOffset (get_local $str)) (get_local $l)) (i64.const 0))
    (set_local $l (i32.sub (get_local $l) (i32.const 1)))
    (i64.store (i32.add (call $getPartOffset (get_local $str)) (get_local $l)) (get_local $bytes))
    (set_local $l (i32.add (get_local $l) (i32.const 1)))
    (block(loop
      (br_if 1 (i32.eq (call $byteAt (get_local $str) (get_local $l)) (i32.const 0)))
      (set_local $l (i32.add (get_local $l) (i32.const 1)))
      (br 0)
    ))
    (call $resizePart (get_local $str) (get_local $l))
  )
  
  (func $usascii (param $str i32)
    (local $i i32)
    (local $l i32)
    (set_local $i (call $getPartOffset (get_local $str)))
    (set_local $l (call $getPartLength (get_local $str)))
    (block (loop
      (br_if 1 (i32.eq (get_local $l) (i32.const 0)))
      (if (i32.gt_u (i32.load8_u (get_local $i)) (i32.const 127)) (then
        (i32.store8 (get_local $i) (i32.const 63))
      ))
      (set_local $i (i32.add (get_local $i) (i32.const 1)))
      (set_local $l (i32.sub (get_local $l) (i32.const 1)))
      (br 0)
    ))
  )
  
  (func $getLine (param $str i32) (param $linenum i32) (result i32)
    (local $line i32)
    (local $col i32)
    (local $p i32)
    (local $strc i32)
    (block(loop
      (br_if 1 (get_local $strc))
      (set_local $col (i32.add (get_local $col) (i32.const 1)))
      (if (i32.eq (call $byteAt (get_local $str) (get_local $p)) (i32.const 10)) (then
        (if (i32.eq (get_local $line) (get_local $linenum)) (then
          (set_local $p (i32.sub (get_local $p) (get_local $col)))
          (set_local $strc (call $substr (get_local $str) (get_local $p) (get_local $col)))
          (set_local $p (i32.add (get_local $p) (get_local $col)))
        ))
        (set_local $line (i32.add (get_local $line) (i32.const 1)))
        (set_local $col (i32.const 0))
      ))
      (set_local $p (i32.add (get_local $p) (i32.const 1)))
      (br 0)
    ))
    (get_local $strc)
  )

  (func $countLines (param $str i32) (result i32)
    (local $line i32)
    (local $p i32)
    (local $l i32)
    (set_local $line (i32.const 1))
    (set_local $l (call $getPartLength (get_local $str)))
    (block(loop
      (br_if 1 (i32.ge_u (get_local $p) (get_local $l)))
      (if (i32.eq (call $byteAt (get_local $str) (get_local $p)) (i32.const 10)) (then
        (set_local $line (i32.add (get_local $line) (i32.const 1)))
      ))
      (set_local $p (i32.add (get_local $p) (i32.const 1)))
      (br 0)
    ))
    (get_local $line)
  )

  (func $lineAt (param $str i32) (param $pos i32) (result i32)
    (local $line i32)
    (local $p i32)
    (block(loop
      (br_if 1 (i32.eq (get_local $p) (get_local $pos)))
      (if (i32.eq (call $byteAt (get_local $str) (get_local $p)) (i32.const 10)) (then
        (set_local $line (i32.add (get_local $line) (i32.const 1)))
      ))
      (set_local $p (i32.add (get_local $p) (i32.const 1)))
      (br 0)
    ))
    (get_local $line)
  )

  (func $columnAt (param $str i32) (param $pos i32) (result i32)
    (local $col i32)
    (local $p i32)
    (block(loop
      (br_if 1 (i32.eq (get_local $p) (get_local $pos)))
      (set_local $col (i32.add (get_local $col) (i32.const 1)))
      (if (i32.eq (call $byteAt (get_local $str) (get_local $p)) (i32.const 10)) (then
        (set_local $col (i32.const 0))
      ))
      (set_local $p   (i32.add (get_local $p)   (i32.const 1)))
      (br 0)
    ))
    (get_local $col)
  )
  
  (func $uintToStr (param $int i32) (result i32)
    (local $order i32)
    (local $digit i32)
    (local $str i32)
    (set_local $order (i32.const 1000000000))
    (set_local $str (call $createPart (i32.const 0)))
    (block(loop
      (br_if 1 (i32.eq (get_local $order) (i32.const 0)))
      (set_local $digit (i32.div_u (get_local $int) (get_local $order)))
      (if (i32.or (get_local $digit) (call $getPartLength (get_local $str))) (then
        (call $appendBytes (get_local $str) (i64.extend_u/i32 (i32.add (i32.const 0x30) (get_local $digit))))
      ))
      (set_local $int (i32.rem_u (get_local $int) (get_local $order)))
      (set_local $order (i32.div_u (get_local $order) (i32.const 10)))
      (br 0)
    ))
    (get_local $str)
  )
  
  (func $compare (param $stra i32) (param $strb i32) (result i32)
    (local $p i32)
    (local $l i32)
    (if (i32.ne (call $getPartLength (get_local $stra)) (call $getPartLength (get_local $strb))) (then
      (return (i32.const 0))
    ))
    (set_local $l (call $getPartLength (get_local $stra)))
    (block(loop
      (br_if 1 (i32.eq (get_local $p) (get_local $l)))
      (if (i32.ne (call $byteAt (get_local $stra) (get_local $p)) (call $byteAt (get_local $strb) (get_local $p))) (then
        (return (i32.const 0))
      ))
      (set_local $p (i32.add (get_local $p) (i32.const 1)))
      (br 0)
    ))
    (i32.const 1)
  )
  
  (func $indexOf (param $haystack i32) (param $needle i32) (param $pos i32) (result i32)
    (local $sub i32)
    (if (i32.lt_u (call $getPartLength (get_local $haystack)) (call $getPartLength (get_local $needle))) (then
      (return (i32.const -1))
    ))
    (set_local $sub (call $createPart (call $getPartLength (get_local $needle))))
    (block(loop
      (br_if 1 (i32.ge_u (get_local $pos) (i32.sub (call $getPartLength (get_local $haystack)) (call $getPartLength (get_local $needle)))))
      (call $copyMem (i32.add (call $getPartOffset (get_local $haystack)) (get_local $pos)) (call $getPartOffset (get_local $sub)) (call $getPartLength (get_local $sub)))
      (if (call $compare (get_local $sub) (get_local $needle)) (then
        (return (get_local $pos))
      ))
      (set_local $pos (i32.add (get_local $pos) (i32.const 1)))
      (br 0)
    ))
    (i32.const -1)
  )

  (func $lastIndexOf (param $haystack i32) (param $needle i32) (param $pos i32) (result i32)
    (local $sub i32)
    (if (i32.lt_u (call $getPartLength (get_local $haystack)) (call $getPartLength (get_local $needle))) (then
      (return (i32.const -1))
    ))
    (set_local $sub (call $createPart (call $getPartLength (get_local $needle))))
    (block(loop
      (br_if 1 (i32.eq (get_local $pos) (i32.const 0)))
      (call $copyMem (i32.add (call $getPartOffset (get_local $haystack)) (get_local $pos)) (call $getPartOffset (get_local $sub)) (call $getPartLength (get_local $sub)))
      (if (call $compare (get_local $sub) (get_local $needle)) (then
        (return (get_local $pos))
      ))
      (set_local $pos (i32.sub (get_local $pos) (i32.const 1)))
      (br 0)
    ))
    (i32.const -1)
  )
  
  (func $trim (param $str i32)
    (local $p i32)
    (local $l i32)
    (set_local $p (call $getPartOffset (get_local $str)))
    (set_local $l (call $getPartLength (get_local $str)))
    (block(loop
      (br_if 1 (i32.or (i32.eqz (get_local $l)) (i32.gt_u (i32.load8_u (get_local $p)) (i32.const 32))))
      (set_local $p (i32.add (get_local $p) (i32.const 1)))
      (set_local $l (i32.sub (get_local $l) (i32.const 1)))
      (br 0)
    ))
    (call $copyMem (get_local $p) (call $getPartOffset (get_local $str)) (get_local $l))
    (block(loop
      (br_if 1 (i32.or (i32.eqz (get_local $l)) (i32.gt_u (call $byteAt (get_local $str) (i32.sub (get_local $l) (i32.const 1))) (i32.const 32))))
      (set_local $l (i32.sub (get_local $l) (i32.const 1)))
      (br 0)
    ))
    (call $resizePart (get_local $str) (get_local $l))
  )

 

  

 

  ;; Graphic routines

  (global $display (mut i32) (i32.const -1))
  (global $font    (mut i32) (i32.const -1))

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

  (data (i32.const 0) "\00\00\00\00\00\00\00\00\10\00\00\00\00\00\00\00")
  (global $nextPartId (mut i32) (i32.const 1))
  (global $parentPart (mut i32) (i32.const 0))

  (func $getPartIndex (param $id i32) (result i32)
    (local $indexOffset i32)
    (local $indexLength i32)
    (local $p i32)
    (set_local $indexOffset (i32.const 0x00))
    (set_local $indexLength (i32.const 0x10))
    (set_local $p (get_local $indexOffset))
    (block(loop
      (br_if 1 (i32.ge_u (get_local $p) (i32.add (get_local $indexOffset) (get_local $indexLength))))
      (if (i32.eq (i32.load (get_local $p)) (get_local $id)) (then
        (return (get_local $p))
      ))
      (if (i32.eq (i32.load (get_local $p)) (i32.const 0)) (then
        (set_local $indexOffset (i32.load (i32.add (get_local $p) (i32.const 0x8))))
        (set_local $indexLength (i32.load (i32.add (get_local $p) (i32.const 0xc))))
        (set_local $p (get_local $indexOffset))
      )(else
        (set_local $p (i32.add (get_local $p) (i32.const 0x10)))
      ))
      (br 0)
    ))
    (i32.const -1)
  )
  (func $getPartParent (param $id i32) (result i32)
    (local $i i32)
    (set_local $i (call $getPartIndex (get_local $id)))
    (if (i32.ne (get_local $i) (i32.const -1)) (then
      (set_local $i (i32.load (i32.add (get_local $i) (i32.const 0x4))))
    ))
    (get_local $i)
  )
  (func $getPartOffset (param $id i32) (result i32)
    (local $i i32)
    (set_local $i (call $getPartIndex (get_local $id)))
    (if (i32.ne (get_local $i) (i32.const -1)) (then
      (set_local $i (i32.load (i32.add (get_local $i) (i32.const 0x8))))
    ))
    (get_local $i)
  )
  (func $getPartLength (param $id i32) (result i32)
    (local $i i32)
    (set_local $i (call $getPartIndex (get_local $id)))
    (if (i32.ne (get_local $i) (i32.const -1)) (then
      (set_local $i (i32.load (i32.add (get_local $i) (i32.const 0xc))))
    ))
    (get_local $i)
  )

  (func $getNextPart (param $fromOffset i32) (result i32)
    (local $indexOffset i32)
    (local $indexLength i32)
    (local $id i32)
    (local $offset i32)
    (local $bestId i32)
    (local $bestIdOffset i32)
    (local $p i32)
    (set_local $indexOffset (i32.const 0x00))
    (set_local $indexLength (i32.const 0x10))
    (set_local $bestId (i32.const -1))
    (set_local $bestIdOffset (i32.const -1))
    (set_local $p (get_local $indexOffset))
    (block(loop
      (br_if 1 (i32.ge_u (get_local $p) (i32.add (get_local $indexOffset) (get_local $indexLength))))
      (set_local $id (i32.load (get_local $p)))
      (set_local $offset (i32.load (i32.add (get_local $p) (i32.const 0x8))))
      (if (i32.and (i32.ge_u (get_local $offset) (get_local $fromOffset)) (i32.lt_u (get_local $offset) (get_local $bestIdOffset))) (then
        (set_local $bestId (get_local $id))
        (set_local $bestIdOffset (get_local $offset))
      ))
      (if (i32.eq (i32.load (get_local $p)) (i32.const 0)) (then
        (set_local $indexOffset (i32.load (i32.add (get_local $p) (i32.const 0x8))))
        (set_local $indexLength (i32.load (i32.add (get_local $p) (i32.const 0xc))))
        (set_local $p (get_local $indexOffset))
      )(else
        (set_local $p (i32.add (get_local $p) (i32.const 0x10)))
      ))
      (br 0)
    ))
    (get_local $bestId)
  )

  (func $alloc (param $len i32) (result i32)
    (local $offset i32)
    (local $nextId i32)
    (local $nextOffset i32)
    (set_local $offset (i32.const 0x10))
    (block(loop
      (set_local $nextId (call $getNextPart (get_local $offset)))
      (if (i32.eq (get_local $nextId) (i32.const -1))(then
        (set_local $nextOffset (i32.mul (current_memory) (i32.const 65536)))
      )(else
        (set_local $nextOffset (call $getPartOffset (get_local $nextId)))
      ))
      (br_if 1 (i32.gt_u (i32.sub (get_local $nextOffset) (get_local $offset)) (get_local $len)))
      (br_if 1 (i32.eq (get_local $nextId) (i32.const -1)))
      (set_local $offset (i32.add (get_local $nextOffset) (i32.add (call $getPartLength (get_local $nextId)) (i32.const 1))))
      (br 0)
    ))
    (if (i32.le_u (i32.sub (get_local $nextOffset) (get_local $offset)) (get_local $len)) (then
      (if (i32.lt_s (grow_memory (i32.add (i32.div_u (get_local $len) (i32.const 65536)) (i32.const 1))) (i32.const 0)) (then
        (unreachable)
      ))
      (set_local $offset (call $alloc (get_local $len)))
    ))
    (get_local $offset)
  )
  (func $resizePart (param $id i32) (param $newlen i32)
    (local $offset i32)
    (local $len i32)
    (set_local $offset (call $getPartOffset (get_local $id)))
    (set_local $len (call $getPartLength (get_local $id)))
    (if (i32.le_u (get_local $newlen) (get_local $len)) (then
      (i32.store (i32.add (call $getPartIndex (get_local $id)) (i32.const 0xc)) (get_local $newlen))
    )(else
      (i32.store (i32.add (call $getPartIndex (get_local $id)) (i32.const 0x8)) (call $alloc (get_local $newlen)))
      (i32.store (i32.add (call $getPartIndex (get_local $id)) (i32.const 0xc)) (get_local $newlen))
      (call $copyMem (get_local $offset) (call $getPartOffset (get_local $id)) (get_local $len))
    ))
  )
  (func $copyMem (param $fromOffset i32) (param $toOffset i32) (param $len i32)
    (local $delta i32)
    (if (i32.eqz (get_local $len)) (return))
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
      (br_if 1 (i32.eqz (get_local $len)))
      (i32.store8 (get_local $toOffset) (i32.load8_u (get_local $fromOffset)))
      (set_local $fromOffset (i32.add (get_local $fromOffset) (get_local $delta)))
      (set_local $toOffset   (i32.add (get_local $toOffset  ) (get_local $delta)))
      (set_local $len        (i32.sub (get_local $len)        (i32.const 1)))
      (br 0)
    ))
  )
  (func $createPart (param $len i32) (result i32)
    (local $offset i32)
    (call $resizePart (i32.const 0) (i32.add (call $getPartLength (i32.const 0)) (i32.const 0x10)))
    (set_local $offset (i32.sub (i32.add (call $getPartOffset (i32.const 0)) (call $getPartLength (i32.const 0))) (i32.const 0x10)))
    (i32.store (i32.add (get_local $offset) (i32.const 0x0)) (get_global $nextPartId))
    (i32.store (i32.add (get_local $offset) (i32.const 0x4)) (get_global $parentPart))
    (i32.store (i32.add (get_local $offset) (i32.const 0x8)) (call $alloc (get_local $len)))
    (i32.store (i32.add (get_local $offset) (i32.const 0xc)) (get_local $len))
    (get_global $nextPartId)
    (set_global $nextPartId (i32.add (get_global $nextPartId) (i32.const 1)))
  )

  (func $deletePart (param $id i32)
    (local $indexOffset i32)
    (local $indexLength i32)
    (local $p i32)
    (set_local $indexOffset (call $getPartOffset (i32.const 0)))
    (set_local $indexLength (call $getPartLength (i32.const 0)))
    (set_local $p (get_local $indexOffset))
    (block(loop
      (br_if 1 (i32.ge_u (get_local $p) (i32.add (get_local $indexOffset) (get_local $indexLength))))
      (if (i32.eq (i32.load (get_local $p)) (get_local $id)) (then
        (call $copyMem (i32.sub (i32.add (get_local $indexOffset) (get_local $indexLength)) (i32.const 0x10)) (get_local $p) (i32.const 0x10))
        (set_local $indexLength (i32.sub (get_local $indexLength) (i32.const 0x10)))
        (call $resizePart (i32.const 0) (get_local $indexLength))
        (set_local $p (i32.sub (get_local $p) (i32.const 0x10)))
      ))
      (if (i32.eq (i32.load (i32.add (get_local $p) (i32.const 0x4))) (get_local $id)) (then
        (call $deletePart (i32.load (get_local $p)))
        (set_local $indexOffset (call $getPartOffset (i32.const 0)))
        (set_local $indexLength (call $getPartLength (i32.const 0)))
        (set_local $p (i32.sub (get_local $indexOffset) (i32.const 0x10)))
      ))
      (set_local $p (i32.add (get_local $p) (i32.const 0x10)))
      (br 0)
    ))
    (if (i32.eq (get_global $parentPart) (get_local $id))(then
      (call $exitPart)
    ))
  )
  (func $movePartUp (param $id i32)
    (local $p i32)
    (set_local $p (call $getPartIndex (get_local $id)))
    (i32.store (i32.add (get_local $p) (i32.const 0x4)) (call $getPartParent (call $getPartParent (get_local $id))))
  )
  (func $enterPart (param $id i32)
    (set_global $parentPart (get_local $id))
  )
  (func $exitPart
    (set_global $parentPart (call $getPartParent (get_global $parentPart)))
  )
  (func $deleteParent
    (call $deletePart (get_global $parentPart))
  )
)
