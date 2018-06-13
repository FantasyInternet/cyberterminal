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
* [textInput](_script__lib_websys_.websys.md#textinput)

### Methods

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

*Defined in [script/_lib/WebSys.ts:22](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L22)*

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

**● inputPriority**: *`string`[]* =  ["text", "mouse", "game"]

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[inputPriority](../interfaces/_script__lib_sys_.sys.md#inputpriority)*

*Defined in [script/_lib/WebSys.ts:21](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L21)*

___
<a id="mouseinput"></a>

###  mouseInput

**● mouseInput**: *[MouseInput](_script__lib_mouseinput_.mouseinput.md)*

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[mouseInput](../interfaces/_script__lib_sys_.sys.md#mouseinput)*

*Defined in [script/_lib/WebSys.ts:19](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L19)*

___
<a id="textinput"></a>

###  textInput

**● textInput**: *[TextInput](_script__lib_textinput_.textinput.md)*

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[textInput](../interfaces/_script__lib_sys_.sys.md#textinput)*

*Defined in [script/_lib/WebSys.ts:18](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L18)*

___

## Methods

<a id="createmachine"></a>

###  createMachine

▸ **createMachine**(): [WebMachineWorker](_script__lib_websys_.webmachineworker.md)

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[createMachine](../interfaces/_script__lib_sys_.sys.md#createmachine)*

*Defined in [script/_lib/WebSys.ts:234](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L234)*

**Returns:** [WebMachineWorker](_script__lib_websys_.webmachineworker.md)

___
<a id="delete"></a>

###  delete

▸ **delete**(filename: *`string`*): `Promise`<`boolean`>

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[delete](../interfaces/_script__lib_sys_.sys.md#delete)*

*Defined in [script/_lib/WebSys.ts:327](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L327)*

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

*Defined in [script/_lib/WebSys.ts:75](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L75)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| buffer | `ArrayBuffer` |

**Returns:** `void`

___
<a id="focusinput"></a>

###  focusInput

▸ **focusInput**(input: * "text" &#124; "mouse" &#124; "game"*): `string`[]

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[focusInput](../interfaces/_script__lib_sys_.sys.md#focusinput)*

*Defined in [script/_lib/WebSys.ts:377](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L377)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input |  "text" &#124; "mouse" &#124; "game"|

**Returns:** `string`[]

___
<a id="head"></a>

###  head

▸ **head**(filename: *`string`*): `Promise`<`string`>

*Defined in [script/_lib/WebSys.ts:336](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L336)*

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

*Defined in [script/_lib/WebSys.ts:347](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L347)*

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

*Defined in [script/_lib/WebSys.ts:422](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L422)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `void`

___
<a id="post"></a>

###  post

▸ **post**(filename: *`string`*, data: * `string` &#124; `ArrayBuffer`*): `Promise`<`ArrayBuffer`>

*Defined in [script/_lib/WebSys.ts:299](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L299)*

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

*Defined in [script/_lib/WebSys.ts:83](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L83)*

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

*Defined in [script/_lib/WebSys.ts:238](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L238)*

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

*Defined in [script/_lib/WebSys.ts:404](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L404)*

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

*Defined in [script/_lib/WebSys.ts:38](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L38)*

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
<a id="settextinput"></a>

###  setTextInput

▸ **setTextInput**(text: *`string`*, pos: *`number`*, len: *`number`*, type?: * `undefined` &#124; `string`*): `void`

*Defined in [script/_lib/WebSys.ts:395](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L395)*

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

*Defined in [script/_lib/WebSys.ts:35](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L35)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| title | `string` |

**Returns:** `void`

___
<a id="starttone"></a>

###  startTone

▸ **startTone**(): `void`

*Defined in [script/_lib/WebSys.ts:370](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L370)*

**Returns:** `void`

___
<a id="stoptone"></a>

###  stopTone

▸ **stopTone**(): `void`

*Defined in [script/_lib/WebSys.ts:373](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L373)*

**Returns:** `void`

___
<a id="waitforvsync"></a>

###  waitForVsync

▸ **waitForVsync**(): `Promise`<`Object`>

*Defined in [script/_lib/WebSys.ts:228](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L228)*

**Returns:** `Promise`<`Object`>

___
<a id="write"></a>

###  write

▸ **write**(filename: *`string`*, data: * `string` &#124; `ArrayBuffer`*): `Promise`<`boolean`>

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[write](../interfaces/_script__lib_sys_.sys.md#write)*

*Defined in [script/_lib/WebSys.ts:289](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L289)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| filename | `string` |
| data |  `string` &#124; `ArrayBuffer`|

**Returns:** `Promise`<`boolean`>

___

