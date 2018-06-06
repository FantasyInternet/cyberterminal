(module
  ;; Push memory range to buffer stack.
  (import "env" "pushFromMemory" (func $pushFromMemory (param $offset i32) (param $length i32)))
  ;; Pop one buffer off the buffer stack and store in memory.
  (import "env" "popToMemory" (func $popToMemory (param $offset i32)))

  ;; Pop string from buffer stack and log it to console.
  (import "env" "log" (func $log ))
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
  (import "env" "readImage" (func $readImage (param $tableIndex i32) (result i32)))
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
  (import "env" "wabt" (func $wabt (result i32)))

  ;; All JavaScript Math functions are available.
  (import "Math" "random" (func $random (result f32)))





;;--------;;--------;;--------;;--------;;--------;;--------;;--------;;







  ;; Table for callback functions.
  (table $table 8 anyfunc)
    (export "table" (table $table))

  ;; Linear memory.
  (memory $memory 1)
    (export "memory" (memory $memory))
    (data (i32.const 0xf100) "\1b[K\1b[H_______________________________/ CyberTerminal \\_______________________________\n\nConnect to URL: ")
    (data (i32.const 0xf200) "\n")

  ;; Global variables
  (global $homeCode   (mut i32) (i32.const 0))
  (global $nl         (mut i32) (i32.const 0))
  (global $inputPos   (mut i32) (i32.const 1024))
  (global $inputText  (mut i32) (i32.const 0))

  ;; Init function is called once on start.
  (func $init
    (set_global $homeCode  (call $createString (i32.const 0xf100)))
    ;; (set_global $nl (call $createString (i32.const 0xf200)))
    (call $setStepInterval (f64.const -1))
    (call $setDisplayMode (i32.const 0) (i32.const 80) (i32.const 20) (i32.const 80) (i32.const 20))

    (call $setInputType (i32.const 4))
    (call $focusInput (i32.const 1))
    (set_global $inputText (call $createPart (i32.const 7)))
    (i64.store   (i32.add (call $getPartOffset (get_global $inputText)) (i32.const 0)) (i64.const 0x2f2f2f3a70747468));;"http:///"
    (call $setInputText (call $pushFromMemory (call $getPartOffset (get_global $inputText)) (call $getPartLength (get_global $inputText))))
    (call $setInputPosition (call $getPartLength (get_global $inputText)) (i32.const 0))

    (call $printStr (get_global $homeCode))
    (call $printStr (get_global $inputText))
  )
  (export "init" (func $init))

  ;; Step function is called once every interval.
  (func $step (param $t f64)
    (local $gc i32)
    (local $pos i32)
    (local $len i32)
    (set_local $gc (call $getPartLength (i32.const 0)))
    (if (call $getInputKey) (then
      (set_local $pos (call $getInputPosition))
      (call $resizePart (get_global $inputText) (call $getInputText))
      (call $popToMemory (call $getPartOffset (get_global $inputText)))
      ;; (call $printStr (get_global $nl))
      ;; (call $printStr (call $uintToStr (i32.trunc_u/f64 (get_local $t))))
      (call $printStr (get_global $homeCode))
      (call $printStr (get_global $inputText))
      (call $printStr (get_global $homeCode))
      (call $printStr (call $substr (get_global $inputText) (i32.const 0) (get_local $pos)))
      (set_global $inputPos (get_local $pos))
    ))
    
    (if (i32.eq (call $getInputKey) (i32.const 13)) (then
      (call $connectTo (drop (call $getInputText)))
    ))
    (call $resizePart (i32.const 0) (get_local $gc))
  )
  (export "step" (func $step))

  ;; Display function is called whenever the display needs to be redrawn.
  (func $display (param $t f64)
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
