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


;;@require $str "fantasyinternet.wast/strings.wast"
;;@require $mem "fantasyinternet.wast/memory.wast"






  ;; Table for callback functions.
  (table $table 8 anyfunc)
    (elem (i32.const 0) $noop)
    (elem (i32.const 1) $updateBoot)
    (elem (i32.const 2) $readHistory)
    (export "table" (table $table))

  ;; Linear memory.
  (memory $memory 1)
    (data (i32.const 0xf100) "\1b[K\1b[H\t\t\t\t\1b[1m_______________\n_______________________________/ \1b[31mCy\1b[33mber\1b[32mTer\1b[36mmin\1b[35mal\1b[0;1m \\_______________________________\n\n")
    (data (i32.const 0xf200) "\n")
    (data (i32.const 0xf300) "./updates/cyberterminal.wasm")
    (data (i32.const 0xf400) "./boot.wasm")
    (data (i32.const 0xf500) "./history.txt")
    (data (i32.const 0xf600) "\1b[K\n\1b[A\1b[1;37mURL: \1b[0m")
    (data (i32.const 0xf700) ": ")
    (data (i32.const 0xf800) "\1b[1;37mHistory:\1b[0m\n\n")
    (export "memory" (memory $memory))

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
    (set_global $homeCode  (call $str.createString (i32.const 0xf100)))
    (set_global $urlprompt  (call $str.createString (i32.const 0xf600)))
    (set_global $nl (call $str.createString (i32.const 0xf200)))
    (set_global $colon (call $str.createString (i32.const 0xf700)))
    (call $setStepInterval (f64.const -1))
    (call $setDisplayMode (i32.const 0) (i32.const 80) (i32.const 20))

    (call $setInputType (i32.const 4))
    (call $focusInput (i32.const 1))
    (set_global $inputText (call $mem.createPart (i32.const 7)))
    (i64.store   (i32.add (call $mem.getPartOffset (get_global $inputText)) (i32.const 0)) (i64.const 0x2f2f2f3a70747468));;"http:///"
    (call $setInputText (call $pushFromMemory (call $mem.getPartOffset (get_global $inputText)) (call $mem.getPartLength (get_global $inputText))))
    (call $setInputPosition (call $mem.getPartLength (get_global $inputText)) (i32.const 0))

    (call $str.printStr (get_global $homeCode))
    ;; (call $str.printStr (get_global $inputText))
    (drop (call $read (call $pushFromMemory (i32.const 0xf500) (i32.const 13)) (i32.const 2)))
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
      (set_global $history (call $mem.createPart (get_local $len)))
      (call $popToMemory (call $mem.getPartOffset (get_global $history)))
      (set_local $lines (call $str.countLines (get_global $history)))
      (if (i32.gt_u (get_local $lines) (i32.const 10))(then
        (set_local $lines (i32.const 10))
      ))
      (call $str.printStr (call $str.createString (i32.const 0xf800)))
      (block(loop
        (br_if 1 (i32.ge_u (get_local $line) (get_local $lines)))
        (call $str.printStr (call $str.uintToStr (get_local $line)))
        (call $str.printStr (get_global $colon))
        (call $str.printStr (call $str.getLine (get_global $history) (get_local $line)))
        (set_local $line (i32.add (get_local $line) (i32.const 1)))
        (br 0)
      ))
      ;; (call $str.printStr (get_global $history))
      (call $str.printStr (get_global $nl))
      (call $str.printStr (get_global $nl))
      (set_global $mode (i32.const 1))
    )(else
      (set_global $history (call $mem.createPart (i32.const 0)))
      (call $str.printStr (get_global $urlprompt))
      (call $str.printStr (get_global $inputText))
      (set_global $mode (i32.const 2))
    ))
    (call $pushFromMemory (i32.const 0xf400) (i32.const 11))
    (drop (call $read (call $pushFromMemory (i32.const 0xf300) (i32.const 28)) (i32.const 1)))
  )

  ;; Step function is called once every interval.
  (func $step (param $t f64)
    (local $pos i32)
    (local $len i32)
    (local $newhist i32)
    (local $line i32)
    (local $lineStr i32)
    (local $lines i32)
    (call $mem.enterPart (call $mem.createPart (i32.const 0)))
    (if (i32.eq (get_global $mode) (i32.const 1))(then
      (if (call $getInputKey) (then
        (if (i32.and (i32.ge_u (call $getInputKey) (i32.const 48)) (i32.lt_u (call $getInputKey) (i32.const 58)))(then
          (set_local $newhist (call $str.getLine (get_global $history) (i32.sub (call $getInputKey) (i32.const 48))))
          (call $str.trim (get_local $newhist))
          (call $pushFromMemory (call $mem.getPartOffset (get_local $newhist)) (call $mem.getPartLength (get_local $newhist)))
          (call $setInputText)
          (call $setInputPosition (call $mem.getPartLength (get_local $newhist)) (i32.const 0))
        )(else
        ))
        (set_global $mode (i32.const 2))
        ;; (call $log1Number (call $getInputKey))
      ))
    ))
    (if (i32.eq (get_global $mode) (i32.const 2))(then
      (if (call $getInputKey) (then
        (set_local $pos (call $getInputPosition))
        (call $mem.resizePart (get_global $inputText) (call $getInputText))
        (call $popToMemory (call $mem.getPartOffset (get_global $inputText)))
        ;; (call $str.printStr (get_global $nl))
        ;; (call $str.printStr (call $str.uintToStr (i32.trunc_u/f64 (get_local $t))))
        (call $str.printStr (get_global $urlprompt))
        (call $str.printStr (get_global $inputText))
        (call $str.printStr (get_global $urlprompt))
        (call $str.printStr (call $str.substr (get_global $inputText) (i32.const 0) (get_local $pos)))
        (set_global $inputPos (get_local $pos))
      ))
      
      (if (i32.eq (call $getInputKey) (i32.const 13)) (then
        (set_local $newhist (get_global $inputText) )
        (call $str.trim (get_local $newhist))
        (call $str.appendBytes (get_local $newhist) (i64.const 10))
        (set_local $lines (call $str.countLines (get_global $history)))
        (block(loop
          (br_if 1 (i32.ge_u (get_local $line) (get_local $lines)))
          (set_local $lineStr (call $str.getLine (get_global $history) (get_local $line)))
          (if (i32.eqz (call $str.equal (get_global $inputText) (get_local $lineStr)))(then
            (set_local $newhist (call $str.concat (get_local $newhist) (get_local $lineStr)))
          ))
          (set_local $line (i32.add (get_local $line) (i32.const 1)))
          (br 0)
        ))

        (call $mem.resizePart (get_global $history) (call $mem.getPartLength (get_local $newhist)))
        (call $mem.copyMem (call $mem.getPartOffset (get_local $newhist)) (call $mem.getPartOffset (get_global $history)) (call $mem.getPartLength (get_global $history)))
        (drop (call $write
          (call $pushFromMemory (i32.const 0xf500) (i32.const 13))
          (call $pushFromMemory (call $mem.getPartOffset (get_global $history)) (call $mem.getPartLength (get_global $history)))
          (i32.const 0)
        ))
        (call $connectTo (drop (call $getInputText)))
        ;; (set_global $mode (i32.const 1))
      ))
    ))
    (call $mem.deleteParent)
  )
  (export "step" (func $step))

  ;; Display function is called whenever the display needs to be redrawn.
  (func $display (param $t f64)
  )
  (export "display" (func $display))
)
