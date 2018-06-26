(module
  (import "env" "pushFromMemory" (func $pushFromMemory (param $offset i32) (param $length i32)))
  (import "env" "popToMemory" (func $popToMemory (param $offset i32)))
  (import "env" "setDisplayMode" (func $setDisplayMode (param $mode i32) (param $width i32) (param $height i32)))
  (import "env" "print" (func $print ))
  (import "env" "getInputKey" (func $getInputKey (result i32)))
  (import "env" "getInputText" (func $getInputText (result i32)))
  (import "env" "replaceInputText" (func $replaceInputText ))
  (import "env" "getMouseX" (func $getMouseX (result i32)))
  (import "env" "getMouseY" (func $getMouseY (result i32)))
  (import "env" "getMousePressed" (func $getMousePressed (result i32)))

  ;;@require $str "fantasyinternet.wast/strings.wast"
  ;;@require $mem "fantasyinternet.wast/memory.wast"

  ;; Table for callback functions.
  (table $table 8 anyfunc)
    (export "table" (table $table))

  ;; Linear memory.
  (memory $memory 1)
    (data (i32.const 0xf100) "Hello world and stuff...")
    (data (i32.const 0xf200) "\1b[")
    (data (i32.const 0xf300) ";")
    (data (i32.const 0xf400) "H")
    (export "memory" (memory $memory))

  ;; Global variables
  (global $inputText (mut i32) (i32.const 1))

  ;; Init function is called once on start.
  (func $init
    (call $setDisplayMode (i32.const 0) (i32.const 80) (i32.const 20))
    (call $str.printStr (call $str.createString (i32.const 0xf100)))
  )
  (export "init" (func $init))

  ;; Step function is called once every interval.
  (func $step (param $t f64)
    (local $code i32)
    (call $mem.enterPart (call $mem.createPart (i32.const 0)))
    (if (call $getMousePressed)(then
      (set_local $code (call $str.concat (call $str.createString (i32.const 0xf200)) (call $str.uintToStr (i32.add (i32.const 1) (call $getMouseY))) ))
      (set_local $code (call $str.concat (get_local $code) (call $str.createString (i32.const 0xf300)) ))
      (set_local $code (call $str.concat (get_local $code) (call $str.uintToStr (i32.add (i32.const 1) (call $getMouseX))) ))
      (set_local $code (call $str.concat (get_local $code) (call $str.createString (i32.const 0xf400)) ))
      (call $str.printStr (get_local $code))
    ))
    (if (call $getInputKey)(then
      (call $print (drop (call $getInputText)))
      (call $replaceInputText (drop (call $getInputText)) (call $pushFromMemory (i32.const 0) (i32.const 0)))
    ))
    (call $mem.deleteParent)
  )
  (export "step" (func $step))

  ;; Display function is called whenever the display needs to be redrawn.
  (func $display (param $t f64)
  )
  (export "display" (func $display))




)
