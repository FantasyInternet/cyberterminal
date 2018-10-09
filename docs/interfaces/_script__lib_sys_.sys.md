[cyberterminal](../README.md) > ["script/_lib/Sys"](../modules/_script__lib_sys_.md) > [Sys](../interfaces/_script__lib_sys_.sys.md)

# Interface: Sys

Unified interface to system I/O

## Hierarchy

**Sys**

## Implemented by

* [ElectronSys](../classes/_script__lib_electronsys_.electronsys.md)
* [WebSys](../classes/_script__lib_websys_.websys.md)

## Index

### Properties

* [breaker](_script__lib_sys_.sys.md#breaker)
* [chipSound](_script__lib_sys_.sys.md#chipsound)
* [gameInput](_script__lib_sys_.sys.md#gameinput)
* [inputPriority](_script__lib_sys_.sys.md#inputpriority)
* [mouseInput](_script__lib_sys_.sys.md#mouseinput)
* [startupUrl](_script__lib_sys_.sys.md#startupurl)
* [textInput](_script__lib_sys_.sys.md#textinput)

### Methods

* [addEventListener](_script__lib_sys_.sys.md#addeventlistener)
* [createMachine](_script__lib_sys_.sys.md#createmachine)
* [delete](_script__lib_sys_.sys.md#delete)
* [drawBitmap](_script__lib_sys_.sys.md#drawbitmap)
* [focusInput](_script__lib_sys_.sys.md#focusinput)
* [list](_script__lib_sys_.sys.md#list)
* [openWeb](_script__lib_sys_.sys.md#openweb)
* [print](_script__lib_sys_.sys.md#print)
* [rampFrequency](_script__lib_sys_.sys.md#rampfrequency)
* [rampVolume](_script__lib_sys_.sys.md#rampvolume)
* [read](_script__lib_sys_.sys.md#read)
* [replaceTextInput](_script__lib_sys_.sys.md#replacetextinput)
* [setAddress](_script__lib_sys_.sys.md#setaddress)
* [setDisplayMode](_script__lib_sys_.sys.md#setdisplaymode)
* [setNativeMouse](_script__lib_sys_.sys.md#setnativemouse)
* [setTextInput](_script__lib_sys_.sys.md#settextinput)
* [startTone](_script__lib_sys_.sys.md#starttone)
* [stopTone](_script__lib_sys_.sys.md#stoptone)
* [write](_script__lib_sys_.sys.md#write)

---

## Properties

<a id="breaker"></a>

###  breaker

**● breaker**: *[Breaker](../classes/_script__lib_breaker_.breaker.md)*

*Defined in [script/_lib/Sys.ts:22](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L22)*

Stop button to break or disconnect current connection.

___
<a id="chipsound"></a>

###  chipSound

**● chipSound**: *[ChipSound](../classes/_script__lib_chipsound_.chipsound.md)*

*Defined in [script/_lib/Sys.ts:12](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L12)*

Tone generator.

___
<a id="gameinput"></a>

###  gameInput

**● gameInput**: *[GameInput](../classes/_script__lib_gameinput_.gameinput.md)*

*Defined in [script/_lib/Sys.ts:18](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L18)*

Game input state.

___
<a id="inputpriority"></a>

###  inputPriority

**● inputPriority**: *( "text" &#124; "mouse" &#124; "game")[]*

*Defined in [script/_lib/Sys.ts:20](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L20)*

Inputs in prioritized order, highest to lowest.

___
<a id="mouseinput"></a>

###  mouseInput

**● mouseInput**: *[MouseInput](../classes/_script__lib_mouseinput_.mouseinput.md)*

*Defined in [script/_lib/Sys.ts:16](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L16)*

Mouse input state.

___
<a id="startupurl"></a>

###  startupUrl

**● startupUrl**: *`string`*

*Defined in [script/_lib/Sys.ts:24](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L24)*

Start URL

___
<a id="textinput"></a>

###  textInput

**● textInput**: *[TextInput](../classes/_script__lib_textinput_.textinput.md)*

*Defined in [script/_lib/Sys.ts:14](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L14)*

Text input state.

___

## Methods

<a id="addeventlistener"></a>

###  addEventListener

▸ **addEventListener**(event: *`string`*, listener: *`Function`*): `void`

*Defined in [script/_lib/Sys.ts:148](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L148)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `string` |
| listener | `Function` |

**Returns:** `void`

___
<a id="createmachine"></a>

###  createMachine

▸ **createMachine**(): [MachineWorker](_script__lib_machineworker_.machineworker.md)

*Defined in [script/_lib/Sys.ts:85](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L85)*

Create a machine.

**Returns:** [MachineWorker](_script__lib_machineworker_.machineworker.md)
the worker running the machine

___
<a id="delete"></a>

###  delete

▸ **delete**(filename: *`string`*): `Promise`<`boolean`>

*Defined in [script/_lib/Sys.ts:105](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L105)*

Delete a file.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| filename | `string` |  Name of file to delete |

**Returns:** `Promise`<`boolean`>

___
<a id="drawbitmap"></a>

###  drawBitmap

▸ **drawBitmap**(buffer: *`ArrayBuffer`*): `void`

*Defined in [script/_lib/Sys.ts:43](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L43)*

Draw given bitmap to pixel display.

**Parameters:**

| Param | Type |
| ------ | ------ |
| buffer | `ArrayBuffer` |

**Returns:** `void`

___
<a id="focusinput"></a>

###  focusInput

▸ **focusInput**(input: * "text" &#124; "mouse" &#124; "game"*): `string`[]

*Defined in [script/_lib/Sys.ts:117](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L117)*

Focus on given type of input.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| input |  "text" &#124; "mouse" &#124; "game"|  The type of input to prioritize |

**Returns:** `string`[]

___
<a id="list"></a>

###  list

▸ **list**(path: *`string`*): `Promise`<`any`>

*Defined in [script/_lib/Sys.ts:111](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L111)*

List contents of a directory.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| path | `string` |  Name of directory to list |

**Returns:** `Promise`<`any`>

___
<a id="openweb"></a>

###  openWeb

▸ **openWeb**(url: *`string`*): `void`

*Defined in [script/_lib/Sys.ts:146](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L146)*

Open a link in default web browser.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  URL to open |

**Returns:** `void`

___
<a id="print"></a>

###  print

▸ **print**(str: *`string`*): `void`

*Defined in [script/_lib/Sys.ts:48](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L48)*

Print string to text display.

**Parameters:**

| Param | Type |
| ------ | ------ |
| str | `string` |

**Returns:** `void`

___
<a id="rampfrequency"></a>

###  rampFrequency

▸ **rampFrequency**(channel: *`number`*, frequency: *`number`*, duration: *`number`*): `void`

*Defined in [script/_lib/Sys.ts:65](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L65)*

Slide to given frequency

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| channel | `number` |  Audio channel to use |
| frequency | `number` |  Frequency of tone |
| duration | `number` |  The amount of time (in seconds) to slide |

**Returns:** `void`

___
<a id="rampvolume"></a>

###  rampVolume

▸ **rampVolume**(channel: *`number`*, volume: *`number`*, duration: *`number`*): `void`

*Defined in [script/_lib/Sys.ts:73](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L73)*

Slide to given volume

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| channel | `number` |  Audio channel to use |
| volume | `number` |  Volume of tone (0-1) |
| duration | `number` |  The amount of time (in seconds) to slide |

**Returns:** `void`

___
<a id="read"></a>

###  read

▸ **read**(filename: *`string`*, options: *`any`*): `Promise`<`any`>

*Defined in [script/_lib/Sys.ts:92](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L92)*

Read a file.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| filename | `string` |  Name of file to read |
| options | `any` |  Options |

**Returns:** `Promise`<`any`>

___
<a id="replacetextinput"></a>

###  replaceTextInput

▸ **replaceTextInput**(search: *`string`*, replace: *`string`*, fromIndex: *`number`*): `void`

*Defined in [script/_lib/Sys.ts:134](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L134)*

Replace first occurrence of a substring with another.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| search | `string` |  string to search for |
| replace | `string` |  replacement string |
| fromIndex | `number` |  position to search from |

**Returns:** `void`

___
<a id="setaddress"></a>

###  setAddress

▸ **setAddress**(url: *`string`*): `void`

*Defined in [script/_lib/Sys.ts:30](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L30)*

Set the current URL.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  URL |

**Returns:** `void`

___
<a id="setdisplaymode"></a>

###  setDisplayMode

▸ **setDisplayMode**(mode: * "none" &#124; "text" &#124; "pixel"*, width: *`number`*, height: *`number`*): `void`

*Defined in [script/_lib/Sys.ts:38](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L38)*

Switch display mode.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| mode |  "none" &#124; "text" &#124; "pixel"|  Name of mode to switch to |
| width | `number` |  The width of the display in characters or pixels |
| height | `number` |  The height of the display in characters or pixels |

**Returns:** `void`

___
<a id="setnativemouse"></a>

###  setNativeMouse

▸ **setNativeMouse**(type: *`string`*): `void`

*Defined in [script/_lib/Sys.ts:140](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L140)*

Set the appearance of the native mouse cursor.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| type | `string` |  Type of Cursor |

**Returns:** `void`

___
<a id="settextinput"></a>

###  setTextInput

▸ **setTextInput**(text: *`string`*, pos: *`number`*, len: *`number`*, type?: * "multiline" &#124; "text" &#124; "password" &#124; "number" &#124; "url" &#124; "email" &#124; "tel"*): `void`

*Defined in [script/_lib/Sys.ts:126](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L126)*

Set the state of the text input.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| text | `string` |  Text to put into editor |
| pos | `number` |  Cursor position |
| len | `number` |  Selection length |
| `Optional` type |  "multiline" &#124; "text" &#124; "password" &#124; "number" &#124; "url" &#124; "email" &#124; "tel"|  Type of text input |

**Returns:** `void`

___
<a id="starttone"></a>

###  startTone

▸ **startTone**(channel: *`number`*, frequency: *`number`*, volume?: * `undefined` &#124; `number`*, type?: * "sine" &#124; "square" &#124; "sawtooth" &#124; "triangle" &#124; "noise"*): `void`

*Defined in [script/_lib/Sys.ts:57](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L57)*

Start tone oscillator

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| channel | `number` |  Audio channel to use |
| frequency | `number` |  Frequency of tone |
| `Optional` volume |  `undefined` &#124; `number`|  Volume of tone (0-1) |
| `Optional` type |  "sine" &#124; "square" &#124; "sawtooth" &#124; "triangle" &#124; "noise"|  Wave type |

**Returns:** `void`

___
<a id="stoptone"></a>

###  stopTone

▸ **stopTone**(channel: *`number`*): `void`

*Defined in [script/_lib/Sys.ts:79](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L79)*

Stop tone oscillator

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| channel | `number` |  Audio channel |

**Returns:** `void`

___
<a id="write"></a>

###  write

▸ **write**(filename: *`string`*, data: * `string` &#124; `ArrayBuffer`*): `Promise`<`boolean`>

*Defined in [script/_lib/Sys.ts:99](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L99)*

Write to a file.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| filename | `string` |  Name of file to write to |
| data |  `string` &#124; `ArrayBuffer`|  Data to write |

**Returns:** `Promise`<`boolean`>

___

