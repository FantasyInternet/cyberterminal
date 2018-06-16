(module
  ;; Read the API spec on https://fantasyinternet.github.io/api
  (import "env" "pushFromMemory" (func $pushFromMemory (param $offset i32) (param $length i32)))
  (import "env" "popToMemory" (func $popToMemory (param $offset i32)))

  (import "env" "log" (func $log ))
  (import "env" "logNumber" (func $log1Number  (param $a i32) ))
  (import "env" "logNumber" (func $log2Numbers (param $a i32) (param $b i32) ))
  (import "env" "logNumber" (func $log3Numbers (param $a i32) (param $b i32) (param $c i32) ))
  (import "env" "print" (func $print ))

  (import "env" "setDisplayMode" (func $setDisplayMode (param $mode i32) (param $width i32) (param $height i32)  ))

  (import "env" "connectTo" (func $connectTo ))

  (import "env" "read" (func $read (param $tableIndex i32) (result i32)))
  (import "env" "write" (func $write (param $tableIndex i32) (result i32)))
  (import "env" "delete" (func $delete (param $tableIndex i32) (result i32)))
  (import "env" "list" (func $list (param $tableIndex i32) (result i32)))

  (import "env" "focusInput" (func $focusInput (param $input i32)))

  (import "env" "getInputText" (func $getInputText (result i32)))
  (import "env" "getInputPosition" (func $getInputPosition (result i32)))
  (import "env" "getInputSelected" (func $getInputSelected (result i32)))
  (import "env" "getInputKey" (func $getInputKey (result i32)))
  (import "env" "setInputType" (func $setInputType (param i32)))
  (import "env" "setInputText" (func $setInputText))
  (import "env" "setInputPosition" (func $setInputPosition (param $position i32) (param $selected i32)))
  (import "env" "replaceInputText" (func $replaceInputText (param $fromIndex i32)))

  (import "env" "setStepInterval" (func $setStepInterval (param $milliseconds f64)))






;;--------;;--------;;--------;;--------;;--------;;--------;;--------;;







  ;; Table for callback functions.
  (table $table 8 anyfunc)
    (elem (i32.const 0) $noop)
    (elem (i32.const 1) $updateBoot)
    (elem (i32.const 2) $readHistory)
    (export "table" (table $table))

  ;; Linear memory.
  (memory $memory 1)
    (export "memory" (memory $memory))
    (data (i32.const 0xf100) "\1b[K\1b[H\t\t\t\t_______________\n_______________________________/ CyberTerminal \\_______________________________\n\n")
    (data (i32.const 0xf200) "\n")
    (data (i32.const 0xf300) "./updates/cyberterminal.wasm")
    (data (i32.const 0xf400) "./boot.wasm")
    (data (i32.const 0xf500) "./history.txt")
    (data (i32.const 0xf600) "\1b[K\n\1b[AConnect to URL: ")
    (data (i32.const 0xf700) ": ")

  ;; Global variables
  (global $homeCode   (mut i32) (i32.const 0))
  (global $nl         (mut i32) (i32.const 0))
  (global $inputPos   (mut i32) (i32.const 1024))
  (global $inputText  (mut i32) (i32.const 0))
  (global $mode       (mut i32) (i32.const 0))
  (global $urlprompt  (mut i32) (i32.const 0))
  (global $history    (mut i32) (i32.const 0))
  (global $colon      (mut i32) (i32.const 0))

  ;; Init function is called once on start.
  (func $init
    (set_global $homeCode  (call $createString (i32.const 0xf100)))
    (set_global $urlprompt  (call $createString (i32.const 0xf600)))
    (set_global $nl (call $createString (i32.const 0xf200)))
    (set_global $colon (call $createString (i32.const 0xf700)))
    (call $setStepInterval (f64.const -1))
    (call $setDisplayMode (i32.const 0) (i32.const 80) (i32.const 20))

    (call $setInputType (i32.const 4))
    (call $focusInput (i32.const 1))
    (set_global $inputText (call $createPart (i32.const 7)))
    (i64.store   (i32.add (call $getPartOffset (get_global $inputText)) (i32.const 0)) (i64.const 0x2f2f2f3a70747468));;"http:///"
    (call $setInputText (call $pushFromMemory (call $getPartOffset (get_global $inputText)) (call $getPartLength (get_global $inputText))))
    (call $setInputPosition (call $getPartLength (get_global $inputText)) (i32.const 0))

    (call $printStr (get_global $homeCode))
    ;; (call $printStr (get_global $inputText))
    (call $pushFromMemory (i32.const 0xf400) (i32.const 11))
    (drop (call $read (call $pushFromMemory (i32.const 0xf500) (i32.const 13)) (i32.const 2)))
    (drop (call $read (call $pushFromMemory (i32.const 0xf300) (i32.const 28)) (i32.const 1)))
  )
  (export "init" (func $init))

  (func $updateBoot (param $success i32) (param $len i32)
    (if (get_local $success)(then
      (drop (call $write (i32.const 0)))
    ))
  )
  (func $noop)
  (func $readHistory (param $success i32) (param $len i32)
    (local $lines i32)
    (local $line i32)
    (if (get_local $success)(then
      (set_global $history (call $createPart (get_local $len)))
      (call $popToMemory (call $getPartOffset (get_global $history)))
      (set_local $lines (call $countLines (get_global $history)))
      (if (i32.gt_u (get_local $lines) (i32.const 10))(then
        (set_local $lines (i32.const 10))
      ))
      (block(loop
        (br_if 1 (i32.ge_u (get_local $line) (get_local $lines)))
        (call $printStr (call $uintToStr (get_local $line)))
        (call $printStr (get_global $colon))
        (call $printStr (call $getLine (get_global $history) (get_local $line)))
        (set_local $line (i32.add (get_local $line) (i32.const 1)))
        (br 0)
      ))
      ;; (call $printStr (get_global $history))
      (call $printStr (get_global $nl))
      (call $printStr (get_global $nl))
      (set_global $mode (i32.const 1))
    )(else
      (set_global $history (call $createPart (i32.const 0)))
      (set_global $mode (i32.const 2))
    ))
  )

  ;; Step function is called once every interval.
  (func $step (param $t f64)
    (local $pos i32)
    (local $len i32)
    (local $newhist i32)
    (call $enterPart (call $createPart (i32.const 0)))
    (if (i32.eq (get_global $mode) (i32.const 1))(then
      (if (call $getInputKey) (then
        (if (i32.and (i32.ge_u (call $getInputKey) (i32.const 48)) (i32.lt_u (call $getInputKey) (i32.const 58)))(then
          (set_local $newhist (call $getLine (get_global $history) (i32.sub (call $getInputKey) (i32.const 48))))
          (call $trim (get_local $newhist))
          (call $pushFromMemory (call $getPartOffset (get_local $newhist)) (call $getPartLength (get_local $newhist)))
          (call $setInputText)
          (call $setInputPosition (call $getPartLength (get_local $newhist)) (i32.const 0))
        )(else
        ))
        (set_global $mode (i32.const 2))
        ;; (call $log1Number (call $getInputKey))
      ))
    ))
    (if (i32.eq (get_global $mode) (i32.const 2))(then
      (if (call $getInputKey) (then
        (set_local $pos (call $getInputPosition))
        (call $resizePart (get_global $inputText) (call $getInputText))
        (call $popToMemory (call $getPartOffset (get_global $inputText)))
        ;; (call $printStr (get_global $nl))
        ;; (call $printStr (call $uintToStr (i32.trunc_u/f64 (get_local $t))))
        (call $printStr (get_global $urlprompt))
        (call $printStr (get_global $inputText))
        (call $printStr (get_global $urlprompt))
        (call $printStr (call $substr (get_global $inputText) (i32.const 0) (get_local $pos)))
        (set_global $inputPos (get_local $pos))
      ))
      
      (if (i32.eq (call $getInputKey) (i32.const 13)) (then
        (call $appendBytes (get_global $inputText) (i64.const 10))
        (set_local $newhist (call $concat (get_global $inputText) (get_global $history)))
        (call $resizePart (get_global $history) (call $getPartLength (get_local $newhist)))
        (call $copyMem (call $getPartOffset (get_local $newhist)) (call $getPartOffset (get_global $history)) (call $getPartLength (get_global $history)))
        (drop (call $write
          (call $pushFromMemory (i32.const 0xf500) (i32.const 13))
          (call $pushFromMemory (call $getPartOffset (get_global $history)) (call $getPartLength (get_global $history)))
          (i32.const 0)
        ))
        (call $connectTo (drop (call $getInputText)))
        ;; (set_global $mode (i32.const 1))
      ))
    ))
    (call $deleteParent)
  )
  (export "step" (func $step))

  ;; Display function is called whenever the display needs to be redrawn.
  (func $display (param $t f64)
  )
  (export "display" (func $display))





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
          (set_local $p (i32.sub (get_local $p) (i32.sub (get_local $col) (i32.const 1))))
          (set_local $strc (call $substr (get_local $str) (get_local $p) (get_local $col)))
          (set_local $p (i32.add (get_local $p) (i32.sub (get_local $col) (i32.const 1))))
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
    (if (i32.eqz (call $getPartLength (get_local $str)))(then
      (call $appendBytes (get_local $str) (i64.const 0x30) )
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

  (func $pushString (param $str i32)
    (call $pushFromMemory (call $getPartOffset (get_local $str)) (call $getPartLength (get_local $str)))
  )

  (func $popString (param $len i32) (result i32)
    (local $str i32)
    (set_local $str (call $createPart (get_local $len)))
    (call $popToMemory (call $getPartOffset (get_local $str)))
    (get_local $str)
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
