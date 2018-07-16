[cyberterminal](../README.md) > ["script/_lib/ElectronSys"](../modules/_script__lib_electronsys_.md) > [ElectronSys](../classes/_script__lib_electronsys_.electronsys.md)

# Class: ElectronSys

Sys implementation for electron app. See [Sys](../interfaces/__lib_sys_.sys.md) for documentation

## Hierarchy

 [WebSys](_script__lib_websys_.websys.md)

**↳ ElectronSys**

## Implements

* [Sys](../interfaces/_script__lib_sys_.sys.md)

## Index

### Constructors

* [constructor](_script__lib_electronsys_.electronsys.md#constructor)

### Properties

* [breaker](_script__lib_electronsys_.electronsys.md#breaker)
* [chipSound](_script__lib_electronsys_.electronsys.md#chipsound)
* [gameInput](_script__lib_electronsys_.electronsys.md#gameinput)
* [inputPriority](_script__lib_electronsys_.electronsys.md#inputpriority)
* [mouseInput](_script__lib_electronsys_.electronsys.md#mouseinput)
* [startupUrl](_script__lib_electronsys_.electronsys.md#startupurl)
* [textInput](_script__lib_electronsys_.electronsys.md#textinput)

### Methods

* [addEventListener](_script__lib_electronsys_.electronsys.md#addeventlistener)
* [createMachine](_script__lib_electronsys_.electronsys.md#createmachine)
* [delete](_script__lib_electronsys_.electronsys.md#delete)
* [drawBitmap](_script__lib_electronsys_.electronsys.md#drawbitmap)
* [focusInput](_script__lib_electronsys_.electronsys.md#focusinput)
* [head](_script__lib_electronsys_.electronsys.md#head)
* [list](_script__lib_electronsys_.electronsys.md#list)
* [openWeb](_script__lib_electronsys_.electronsys.md#openweb)
* [post](_script__lib_electronsys_.electronsys.md#post)
* [print](_script__lib_electronsys_.electronsys.md#print)
* [read](_script__lib_electronsys_.electronsys.md#read)
* [replaceTextInput](_script__lib_electronsys_.electronsys.md#replacetextinput)
* [setAddress](_script__lib_electronsys_.electronsys.md#setaddress)
* [setDisplayMode](_script__lib_electronsys_.electronsys.md#setdisplaymode)
* [setNativeMouse](_script__lib_electronsys_.electronsys.md#setnativemouse)
* [setTextInput](_script__lib_electronsys_.electronsys.md#settextinput)
* [showLink](_script__lib_electronsys_.electronsys.md#showlink)
* [startTone](_script__lib_electronsys_.electronsys.md#starttone)
* [stopTone](_script__lib_electronsys_.electronsys.md#stoptone)
* [waitForVsync](_script__lib_electronsys_.electronsys.md#waitforvsync)
* [write](_script__lib_electronsys_.electronsys.md#write)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ElectronSys**(): [ElectronSys](_script__lib_electronsys_.electronsys.md)

*Overrides [WebSys](_script__lib_websys_.websys.md).[constructor](_script__lib_websys_.websys.md#constructor)*

*Defined in [script/_lib/ElectronSys.ts:23](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/ElectronSys.ts#L23)*

**Returns:** [ElectronSys](_script__lib_electronsys_.electronsys.md)

___

## Properties

<a id="breaker"></a>

###  breaker

**● breaker**: *[Breaker](_script__lib_breaker_.breaker.md)*

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[breaker](../interfaces/_script__lib_sys_.sys.md#breaker)*

*Inherited from [WebSys](_script__lib_websys_.websys.md).[breaker](_script__lib_websys_.websys.md#breaker)*

*Defined in [script/_lib/WebSys.ts:22](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L22)*

___
<a id="chipsound"></a>

###  chipSound

**● chipSound**: *[ChipSound](_script__lib_chipsound_.chipsound.md)*

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[chipSound](../interfaces/_script__lib_sys_.sys.md#chipsound)*

*Inherited from [WebSys](_script__lib_websys_.websys.md).[chipSound](_script__lib_websys_.websys.md#chipsound)*

*Defined in [script/_lib/WebSys.ts:17](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L17)*

___
<a id="gameinput"></a>

###  gameInput

**● gameInput**: *[GameInput](_script__lib_gameinput_.gameinput.md)*

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[gameInput](../interfaces/_script__lib_sys_.sys.md#gameinput)*

*Inherited from [WebSys](_script__lib_websys_.websys.md).[gameInput](_script__lib_websys_.websys.md#gameinput)*

*Defined in [script/_lib/WebSys.ts:20](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L20)*

___
<a id="inputpriority"></a>

###  inputPriority

**● inputPriority**: *( "text" &#124; "mouse" &#124; "game")[]* =  ["text", "mouse", "game"]

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[inputPriority](../interfaces/_script__lib_sys_.sys.md#inputpriority)*

*Inherited from [WebSys](_script__lib_websys_.websys.md).[inputPriority](_script__lib_websys_.websys.md#inputpriority)*

*Defined in [script/_lib/WebSys.ts:21](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L21)*

___
<a id="mouseinput"></a>

###  mouseInput

**● mouseInput**: *[MouseInput](_script__lib_mouseinput_.mouseinput.md)*

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[mouseInput](../interfaces/_script__lib_sys_.sys.md#mouseinput)*

*Inherited from [WebSys](_script__lib_websys_.websys.md).[mouseInput](_script__lib_websys_.websys.md#mouseinput)*

*Defined in [script/_lib/WebSys.ts:19](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L19)*

___
<a id="startupurl"></a>

###  startupUrl

**● startupUrl**: *`string`*

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[startupUrl](../interfaces/_script__lib_sys_.sys.md#startupurl)*

*Inherited from [WebSys](_script__lib_websys_.websys.md).[startupUrl](_script__lib_websys_.websys.md#startupurl)*

*Defined in [script/_lib/WebSys.ts:23](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L23)*

___
<a id="textinput"></a>

###  textInput

**● textInput**: *[TextInput](_script__lib_textinput_.textinput.md)*

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[textInput](../interfaces/_script__lib_sys_.sys.md#textinput)*

*Inherited from [WebSys](_script__lib_websys_.websys.md).[textInput](_script__lib_websys_.websys.md#textinput)*

*Defined in [script/_lib/WebSys.ts:18](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L18)*

___

## Methods

<a id="addeventlistener"></a>

###  addEventListener

▸ **addEventListener**(event: *`string`*, fn: *`Function`*): `void`

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[addEventListener](../interfaces/_script__lib_sys_.sys.md#addeventlistener)*

*Inherited from [WebSys](_script__lib_websys_.websys.md).[addEventListener](_script__lib_websys_.websys.md#addeventlistener)*

*Defined in [script/_lib/WebSys.ts:456](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L456)*

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

*Inherited from [WebSys](_script__lib_websys_.websys.md).[createMachine](_script__lib_websys_.websys.md#createmachine)*

*Defined in [script/_lib/WebSys.ts:246](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L246)*

**Returns:** [WebMachineWorker](_script__lib_websys_.webmachineworker.md)

___
<a id="delete"></a>

###  delete

▸ **delete**(filename: *`string`*): `Promise`<`boolean`>

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[delete](../interfaces/_script__lib_sys_.sys.md#delete)*

*Overrides [WebSys](_script__lib_websys_.websys.md).[delete](_script__lib_websys_.websys.md#delete)*

*Defined in [script/_lib/ElectronSys.ts:120](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/ElectronSys.ts#L120)*

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

*Inherited from [WebSys](_script__lib_websys_.websys.md).[drawBitmap](_script__lib_websys_.websys.md#drawbitmap)*

*Defined in [script/_lib/WebSys.ts:84](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L84)*

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

*Inherited from [WebSys](_script__lib_websys_.websys.md).[focusInput](_script__lib_websys_.websys.md#focusinput)*

*Defined in [script/_lib/WebSys.ts:389](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L389)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input |  "text" &#124; "mouse" &#124; "game"|

**Returns:** ( "text" &#124; "mouse" &#124; "game")[]

___
<a id="head"></a>

###  head

▸ **head**(filename: *`string`*): `Promise`<`string`>

*Inherited from [WebSys](_script__lib_websys_.websys.md).[head](_script__lib_websys_.websys.md#head)*

*Defined in [script/_lib/WebSys.ts:348](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L348)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| filename | `string` |

**Returns:** `Promise`<`string`>

___
<a id="list"></a>

###  list

▸ **list**(path: *`string`*): `Promise`<`any`>

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[list](../interfaces/_script__lib_sys_.sys.md#list)*

*Overrides [WebSys](_script__lib_websys_.websys.md).[list](_script__lib_websys_.websys.md#list)*

*Defined in [script/_lib/ElectronSys.ts:135](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/ElectronSys.ts#L135)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| path | `string` |

**Returns:** `Promise`<`any`>

___
<a id="openweb"></a>

###  openWeb

▸ **openWeb**(path: *`string`*): `boolean`

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[openWeb](../interfaces/_script__lib_sys_.sys.md#openweb)*

*Overrides [WebSys](_script__lib_websys_.websys.md).[openWeb](_script__lib_websys_.websys.md#openweb)*

*Defined in [script/_lib/ElectronSys.ts:162](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/ElectronSys.ts#L162)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| path | `string` |

**Returns:** `boolean`

___
<a id="post"></a>

###  post

▸ **post**(filename: *`string`*, data: * `string` &#124; `ArrayBuffer`*): `Promise`<`ArrayBuffer`>

*Inherited from [WebSys](_script__lib_websys_.websys.md).[post](_script__lib_websys_.websys.md#post)*

*Defined in [script/_lib/WebSys.ts:311](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L311)*

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

*Inherited from [WebSys](_script__lib_websys_.websys.md).[print](_script__lib_websys_.websys.md#print)*

*Defined in [script/_lib/WebSys.ts:92](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L92)*

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

*Overrides [WebSys](_script__lib_websys_.websys.md).[read](_script__lib_websys_.websys.md#read)*

*Defined in [script/_lib/ElectronSys.ts:50](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/ElectronSys.ts#L50)*

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

*Inherited from [WebSys](_script__lib_websys_.websys.md).[replaceTextInput](_script__lib_websys_.websys.md#replacetextinput)*

*Defined in [script/_lib/WebSys.ts:416](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L416)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| search | `string` | - |
| `Default value` replace | `string` | &quot;&quot; |
| `Default value` fromIndex | `number` | 0 |

**Returns:** `void`

___
<a id="setaddress"></a>

###  setAddress

▸ **setAddress**(url: *`string`*): `void`

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[setAddress](../interfaces/_script__lib_sys_.sys.md#setaddress)*

*Overrides [WebSys](_script__lib_websys_.websys.md).[setAddress](_script__lib_websys_.websys.md#setaddress)*

*Defined in [script/_lib/ElectronSys.ts:46](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/ElectronSys.ts#L46)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `void`

___
<a id="setdisplaymode"></a>

###  setDisplayMode

▸ **setDisplayMode**(mode: * "none" &#124; "text" &#124; "pixel"*, width: *`number`*, height: *`number`*, visibleWidth?: *`number`*, visibleHeight?: *`number`*): `void`

*Inherited from [WebSys](_script__lib_websys_.websys.md).[setDisplayMode](_script__lib_websys_.websys.md#setdisplaymode)*

*Defined in [script/_lib/WebSys.ts:45](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L45)*

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

*Inherited from [WebSys](_script__lib_websys_.websys.md).[setNativeMouse](_script__lib_websys_.websys.md#setnativemouse)*

*Defined in [script/_lib/WebSys.ts:434](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L434)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `string` |

**Returns:** `void`

___
<a id="settextinput"></a>

###  setTextInput

▸ **setTextInput**(text: *`string`*, pos: *`number`*, len: *`number`*, type?: * `undefined` &#124; `string`*): `void`

*Inherited from [WebSys](_script__lib_websys_.websys.md).[setTextInput](_script__lib_websys_.websys.md#settextinput)*

*Defined in [script/_lib/WebSys.ts:407](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L407)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| text | `string` |
| pos | `number` |
| len | `number` |
| `Optional` type |  `undefined` &#124; `string`|

**Returns:** `void`

___
<a id="showlink"></a>

###  showLink

▸ **showLink**(url: *`string`*): `HTMLElement`

*Inherited from [WebSys](_script__lib_websys_.websys.md).[showLink](_script__lib_websys_.websys.md#showlink)*

*Defined in [script/_lib/WebSys.ts:443](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L443)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `HTMLElement`

___
<a id="starttone"></a>

###  startTone

▸ **startTone**(): `void`

*Inherited from [WebSys](_script__lib_websys_.websys.md).[startTone](_script__lib_websys_.websys.md#starttone)*

*Defined in [script/_lib/WebSys.ts:382](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L382)*

**Returns:** `void`

___
<a id="stoptone"></a>

###  stopTone

▸ **stopTone**(): `void`

*Inherited from [WebSys](_script__lib_websys_.websys.md).[stopTone](_script__lib_websys_.websys.md#stoptone)*

*Defined in [script/_lib/WebSys.ts:385](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L385)*

**Returns:** `void`

___
<a id="waitforvsync"></a>

###  waitForVsync

▸ **waitForVsync**(): `Promise`<`Object`>

*Inherited from [WebSys](_script__lib_websys_.websys.md).[waitForVsync](_script__lib_websys_.websys.md#waitforvsync)*

*Defined in [script/_lib/WebSys.ts:240](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L240)*

**Returns:** `Promise`<`Object`>

___
<a id="write"></a>

###  write

▸ **write**(filename: *`string`*, data: * `string` &#124; `ArrayBuffer`*): `Promise`<`boolean`>

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[write](../interfaces/_script__lib_sys_.sys.md#write)*

*Overrides [WebSys](_script__lib_websys_.websys.md).[write](_script__lib_websys_.websys.md#write)*

*Defined in [script/_lib/ElectronSys.ts:90](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/ElectronSys.ts#L90)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| filename | `string` |
| data |  `string` &#124; `ArrayBuffer`|

**Returns:** `Promise`<`boolean`>

___

