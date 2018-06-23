[cyberterminal](../README.md) > ["script/_lib/WebSys"](../modules/_script__lib_websys_.md) > [WebSys](../classes/_script__lib_websys_.websys.md)

# Class: WebSys

Sys implementation for web browsers. See [Sys](../interfaces/__lib_sys_.sys.md) for documentation

## Hierarchy

**WebSys**

↳  [ElectronSys](_script__lib_electronsys_.electronsys.md)

## Implements

* [Sys](../interfaces/_script__lib_sys_.sys.md)

## Index

### Constructors

* [constructor](_script__lib_websys_.websys.md#constructor)

### Properties

* [breaker](_script__lib_websys_.websys.md#breaker)
* [chipSound](_script__lib_websys_.websys.md#chipsound)
* [gameInput](_script__lib_websys_.websys.md#gameinput)
* [inputPriority](_script__lib_websys_.websys.md#inputpriority)
* [mouseInput](_script__lib_websys_.websys.md#mouseinput)
* [startupUrl](_script__lib_websys_.websys.md#startupurl)
* [textInput](_script__lib_websys_.websys.md#textinput)

### Methods

* [addEventListener](_script__lib_websys_.websys.md#addeventlistener)
* [createMachine](_script__lib_websys_.websys.md#createmachine)
* [delete](_script__lib_websys_.websys.md#delete)
* [drawBitmap](_script__lib_websys_.websys.md#drawbitmap)
* [focusInput](_script__lib_websys_.websys.md#focusinput)
* [head](_script__lib_websys_.websys.md#head)
* [list](_script__lib_websys_.websys.md#list)
* [openWeb](_script__lib_websys_.websys.md#openweb)
* [post](_script__lib_websys_.websys.md#post)
* [print](_script__lib_websys_.websys.md#print)
* [read](_script__lib_websys_.websys.md#read)
* [replaceTextInput](_script__lib_websys_.websys.md#replacetextinput)
* [setDisplayMode](_script__lib_websys_.websys.md#setdisplaymode)
* [setNativeMouse](_script__lib_websys_.websys.md#setnativemouse)
* [setTextInput](_script__lib_websys_.websys.md#settextinput)
* [setTitle](_script__lib_websys_.websys.md#settitle)
* [startTone](_script__lib_websys_.websys.md#starttone)
* [stopTone](_script__lib_websys_.websys.md#stoptone)
* [waitForVsync](_script__lib_websys_.websys.md#waitforvsync)
* [write](_script__lib_websys_.websys.md#write)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new WebSys**(): [WebSys](_script__lib_websys_.websys.md)

*Defined in [script/_lib/WebSys.ts:23](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L23)*

**Returns:** [WebSys](_script__lib_websys_.websys.md)

___

## Properties

<a id="breaker"></a>

###  breaker

**● breaker**: *[Breaker](_script__lib_breaker_.breaker.md)*

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[breaker](../interfaces/_script__lib_sys_.sys.md#breaker)*

*Defined in [script/_lib/WebSys.ts:22](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L22)*

___
<a id="chipsound"></a>

###  chipSound

**● chipSound**: *[ChipSound](_script__lib_chipsound_.chipsound.md)*

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[chipSound](../interfaces/_script__lib_sys_.sys.md#chipsound)*

*Defined in [script/_lib/WebSys.ts:17](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L17)*

___
<a id="gameinput"></a>

###  gameInput

**● gameInput**: *[GameInput](_script__lib_gameinput_.gameinput.md)*

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[gameInput](../interfaces/_script__lib_sys_.sys.md#gameinput)*

*Defined in [script/_lib/WebSys.ts:20](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L20)*

___
<a id="inputpriority"></a>

###  inputPriority

**● inputPriority**: *( "text" &#124; "mouse" &#124; "game")[]* =  ["text", "mouse", "game"]

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[inputPriority](../interfaces/_script__lib_sys_.sys.md#inputpriority)*

*Defined in [script/_lib/WebSys.ts:21](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L21)*

___
<a id="mouseinput"></a>

###  mouseInput

**● mouseInput**: *[MouseInput](_script__lib_mouseinput_.mouseinput.md)*

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[mouseInput](../interfaces/_script__lib_sys_.sys.md#mouseinput)*

*Defined in [script/_lib/WebSys.ts:19](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L19)*

___
<a id="startupurl"></a>

###  startupUrl

**● startupUrl**: *`string`*

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[startupUrl](../interfaces/_script__lib_sys_.sys.md#startupurl)*

*Defined in [script/_lib/WebSys.ts:23](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L23)*

___
<a id="textinput"></a>

###  textInput

**● textInput**: *[TextInput](_script__lib_textinput_.textinput.md)*

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[textInput](../interfaces/_script__lib_sys_.sys.md#textinput)*

*Defined in [script/_lib/WebSys.ts:18](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L18)*

___

## Methods

<a id="addeventlistener"></a>

###  addEventListener

▸ **addEventListener**(event: *`string`*, fn: *`Function`*): `void`

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[addEventListener](../interfaces/_script__lib_sys_.sys.md#addeventlistener)*

*Defined in [script/_lib/WebSys.ts:440](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L440)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `string` |
| fn | `Function` |

**Returns:** `void`

___
<a id="createmachine"></a>

###  createMachine

▸ **createMachine**(): [WebMachineWorker](_script__lib_websys_.webmachineworker.md)

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[createMachine](../interfaces/_script__lib_sys_.sys.md#createmachine)*

*Defined in [script/_lib/WebSys.ts:243](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L243)*

**Returns:** [WebMachineWorker](_script__lib_websys_.webmachineworker.md)

___
<a id="delete"></a>

###  delete

▸ **delete**(filename: *`string`*): `Promise`<`boolean`>

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[delete](../interfaces/_script__lib_sys_.sys.md#delete)*

*Defined in [script/_lib/WebSys.ts:336](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L336)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| filename | `string` |

**Returns:** `Promise`<`boolean`>

___
<a id="drawbitmap"></a>

###  drawBitmap

▸ **drawBitmap**(buffer: *`ArrayBuffer`*): `void`

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[drawBitmap](../interfaces/_script__lib_sys_.sys.md#drawbitmap)*

*Defined in [script/_lib/WebSys.ts:81](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L81)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| buffer | `ArrayBuffer` |

**Returns:** `void`

___
<a id="focusinput"></a>

###  focusInput

▸ **focusInput**(input: * "text" &#124; "mouse" &#124; "game"*): ( "text" &#124; "mouse" &#124; "game")[]

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[focusInput](../interfaces/_script__lib_sys_.sys.md#focusinput)*

*Defined in [script/_lib/WebSys.ts:386](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L386)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input |  "text" &#124; "mouse" &#124; "game"|

**Returns:** ( "text" &#124; "mouse" &#124; "game")[]

___
<a id="head"></a>

###  head

▸ **head**(filename: *`string`*): `Promise`<`string`>

*Defined in [script/_lib/WebSys.ts:345](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L345)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| filename | `string` |

**Returns:** `Promise`<`string`>

___
<a id="list"></a>

###  list

▸ **list**(path: *`string`*): `Promise`<`string`>

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[list](../interfaces/_script__lib_sys_.sys.md#list)*

*Defined in [script/_lib/WebSys.ts:356](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L356)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| path | `string` |

**Returns:** `Promise`<`string`>

___
<a id="openweb"></a>

###  openWeb

▸ **openWeb**(url: *`string`*): `void`

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[openWeb](../interfaces/_script__lib_sys_.sys.md#openweb)*

*Defined in [script/_lib/WebSys.ts:436](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L436)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `void`

___
<a id="post"></a>

###  post

▸ **post**(filename: *`string`*, data: * `string` &#124; `ArrayBuffer`*): `Promise`<`ArrayBuffer`>

*Defined in [script/_lib/WebSys.ts:308](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L308)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| filename | `string` |
| data |  `string` &#124; `ArrayBuffer`|

**Returns:** `Promise`<`ArrayBuffer`>

___
<a id="print"></a>

###  print

▸ **print**(str: *`string`*): `void`

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[print](../interfaces/_script__lib_sys_.sys.md#print)*

*Defined in [script/_lib/WebSys.ts:89](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L89)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| str | `string` |

**Returns:** `void`

___
<a id="read"></a>

###  read

▸ **read**(filename: *`string`*, options?: *`any`*): `Promise`<`any`>

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[read](../interfaces/_script__lib_sys_.sys.md#read)*

*Defined in [script/_lib/WebSys.ts:247](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L247)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| filename | `string` | - |
| `Default value` options | `any` |  {} |

**Returns:** `Promise`<`any`>

___
<a id="replacetextinput"></a>

###  replaceTextInput

▸ **replaceTextInput**(search: *`string`*, replace?: *`string`*, fromIndex?: *`number`*): `void`

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[replaceTextInput](../interfaces/_script__lib_sys_.sys.md#replacetextinput)*

*Defined in [script/_lib/WebSys.ts:413](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L413)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| search | `string` | - |
| `Default value` replace | `string` | &quot;&quot; |
| `Default value` fromIndex | `number` | 0 |

**Returns:** `void`

___
<a id="setdisplaymode"></a>

###  setDisplayMode

▸ **setDisplayMode**(mode: * "none" &#124; "text" &#124; "pixel"*, width: *`number`*, height: *`number`*, visibleWidth?: *`number`*, visibleHeight?: *`number`*): `void`

*Defined in [script/_lib/WebSys.ts:44](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L44)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| mode |  "none" &#124; "text" &#124; "pixel"| - |
| width | `number` | - |
| height | `number` | - |
| `Default value` visibleWidth | `number` |  width |
| `Default value` visibleHeight | `number` |  height |

**Returns:** `void`

___
<a id="setnativemouse"></a>

###  setNativeMouse

▸ **setNativeMouse**(type: *`string`*): `void`

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[setNativeMouse](../interfaces/_script__lib_sys_.sys.md#setnativemouse)*

*Defined in [script/_lib/WebSys.ts:431](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L431)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `string` |

**Returns:** `void`

___
<a id="settextinput"></a>

###  setTextInput

▸ **setTextInput**(text: *`string`*, pos: *`number`*, len: *`number`*, type?: * `undefined` &#124; `string`*): `void`

*Defined in [script/_lib/WebSys.ts:404](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L404)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| text | `string` |
| pos | `number` |
| len | `number` |
| `Optional` type |  `undefined` &#124; `string`|

**Returns:** `void`

___
<a id="settitle"></a>

###  setTitle

▸ **setTitle**(title: *`string`*): `void`

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[setTitle](../interfaces/_script__lib_sys_.sys.md#settitle)*

*Defined in [script/_lib/WebSys.ts:41](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L41)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| title | `string` |

**Returns:** `void`

___
<a id="starttone"></a>

###  startTone

▸ **startTone**(): `void`

*Defined in [script/_lib/WebSys.ts:379](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L379)*

**Returns:** `void`

___
<a id="stoptone"></a>

###  stopTone

▸ **stopTone**(): `void`

*Defined in [script/_lib/WebSys.ts:382](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L382)*

**Returns:** `void`

___
<a id="waitforvsync"></a>

###  waitForVsync

▸ **waitForVsync**(): `Promise`<`Object`>

*Defined in [script/_lib/WebSys.ts:237](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L237)*

**Returns:** `Promise`<`Object`>

___
<a id="write"></a>

###  write

▸ **write**(filename: *`string`*, data: * `string` &#124; `ArrayBuffer`*): `Promise`<`boolean`>

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[write](../interfaces/_script__lib_sys_.sys.md#write)*

*Defined in [script/_lib/WebSys.ts:298](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L298)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| filename | `string` |
| data |  `string` &#124; `ArrayBuffer`|

**Returns:** `Promise`<`boolean`>

___

