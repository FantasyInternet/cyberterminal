[cyberterminal](../README.md) > ["_lib/Sys"](../modules/__lib_sys_.md) > [Sys](../interfaces/__lib_sys_.sys.md)

# Interface: Sys

Unified interface to system I/O

## Hierarchy

**Sys**

## Implemented by

* [ElectronSys](../classes/__lib_electronsys_.electronsys.md)
* [WebSys](../classes/__lib_websys_.websys.md)

## Index

### Properties

* [breaker](__lib_sys_.sys.md#breaker)
* [chipSound](__lib_sys_.sys.md#chipsound)
* [gameInput](__lib_sys_.sys.md#gameinput)
* [inputPriority](__lib_sys_.sys.md#inputpriority)
* [mouseInput](__lib_sys_.sys.md#mouseinput)
* [textInput](__lib_sys_.sys.md#textinput)

### Methods

* [createMachine](__lib_sys_.sys.md#createmachine)
* [delete](__lib_sys_.sys.md#delete)
* [drawBitmap](__lib_sys_.sys.md#drawbitmap)
* [focusInput](__lib_sys_.sys.md#focusinput)
* [openWeb](__lib_sys_.sys.md#openweb)
* [print](__lib_sys_.sys.md#print)
* [read](__lib_sys_.sys.md#read)
* [replaceTextInput](__lib_sys_.sys.md#replacetextinput)
* [setDisplayMode](__lib_sys_.sys.md#setdisplaymode)
* [setTextInput](__lib_sys_.sys.md#settextinput)
* [setTitle](__lib_sys_.sys.md#settitle)
* [startTone](__lib_sys_.sys.md#starttone)
* [stopTone](__lib_sys_.sys.md#stoptone)
* [write](__lib_sys_.sys.md#write)

---

## Properties

<a id="breaker"></a>

###  breaker

**● breaker**: *[Breaker](../classes/__lib_breaker_.breaker.md)*

*Defined in [_lib/Sys.ts:22](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L22)*

Stop button to break or disconnect current connection.

___
<a id="chipsound"></a>

###  chipSound

**● chipSound**: *[ChipSound](../classes/__lib_chipsound_.chipsound.md)*

*Defined in [_lib/Sys.ts:12](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L12)*

Tone generator.

___
<a id="gameinput"></a>

###  gameInput

**● gameInput**: *[GameInput](../classes/__lib_gameinput_.gameinput.md)*

*Defined in [_lib/Sys.ts:18](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L18)*

Game input state.

___
<a id="inputpriority"></a>

###  inputPriority

**● inputPriority**: *`string`[]*

*Defined in [_lib/Sys.ts:20](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L20)*

Inputs in prioritized order, highest to lowest.

___
<a id="mouseinput"></a>

###  mouseInput

**● mouseInput**: *[MouseInput](../classes/__lib_mouseinput_.mouseinput.md)*

*Defined in [_lib/Sys.ts:16](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L16)*

Mouse input state.

___
<a id="textinput"></a>

###  textInput

**● textInput**: *[TextInput](../classes/__lib_textinput_.textinput.md)*

*Defined in [_lib/Sys.ts:14](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L14)*

Text input state.

___

## Methods

<a id="createmachine"></a>

###  createMachine

▸ **createMachine**(): [MachineWorker](__lib_machineworker_.machineworker.md)

*Defined in [_lib/Sys.ts:67](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L67)*

Create a machine.

**Returns:** [MachineWorker](__lib_machineworker_.machineworker.md)
the worker running the machine

___
<a id="delete"></a>

###  delete

▸ **delete**(filename: *`string`*): `Promise`<`boolean`>

*Defined in [_lib/Sys.ts:87](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L87)*

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

*Defined in [_lib/Sys.ts:41](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L41)*

Draw given bitmap to pixel display.

**Parameters:**

| Param | Type |
| ------ | ------ |
| buffer | `ArrayBuffer` | 

**Returns:** `void`

___
<a id="focusinput"></a>

###  focusInput

▸ **focusInput**(input: *"text" |"mouse" |"game"*): `string`[]

*Defined in [_lib/Sys.ts:93](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L93)*

Focus on given type of input.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| input | "text" |
"mouse" |
"game"
 |  The type of input to prioritize |

**Returns:** `string`[]

___
<a id="openweb"></a>

###  openWeb

▸ **openWeb**(url: *`string`*): `void`

*Defined in [_lib/Sys.ts:116](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L116)*

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

*Defined in [_lib/Sys.ts:46](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L46)*

Print string to text display.

**Parameters:**

| Param | Type |
| ------ | ------ |
| str | `string` | 

**Returns:** `void`

___
<a id="read"></a>

###  read

▸ **read**(filename: *`string`*, options: *`any`*): `Promise`<`any`>

*Defined in [_lib/Sys.ts:74](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L74)*

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

*Defined in [_lib/Sys.ts:110](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L110)*

Replace first occurrence of a substring with another.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| search | `string` |  string to search for |
| replace | `string` |  replacement string |
| fromIndex | `number` |  position to search from |

**Returns:** `void`

___
<a id="setdisplaymode"></a>

###  setDisplayMode

▸ **setDisplayMode**(mode: *"none" |"text" |"pixel"*, width: *`number`*, height: *`number`*): `void`

*Defined in [_lib/Sys.ts:36](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L36)*

Switch display mode.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| mode | "none" |
"text" |
"pixel"
 |  Name of mode to switch to |
| width | `number` |  The width of the display in characters or pixels |
| height | `number` |  The height of the display in characters or pixels |

**Returns:** `void`

___
<a id="settextinput"></a>

###  setTextInput

▸ **setTextInput**(text: *`string`*, pos: *`number`*, len: *`number`*, type?: *"multiline" |"text" |"password" |"number" |"url" |"email" |"tel"*): `void`

*Defined in [_lib/Sys.ts:102](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L102)*

Set the state of the text input.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| text | `string` |  Text to put into editor |
| pos | `number` |  Cursor position |
| len | `number` |  Selection length |
| `Optional` type | "multiline" |
"text" |
"password" |
"number" |
"url" |
"email" |
"tel"
 |  Type of text input |

**Returns:** `void`

___
<a id="settitle"></a>

###  setTitle

▸ **setTitle**(title: *`string`*): `void`

*Defined in [_lib/Sys.ts:28](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L28)*

Set the title of the window.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string` |  New title |

**Returns:** `void`

___
<a id="starttone"></a>

###  startTone

▸ **startTone**(channel: *`number`*, frequency: *`number`*, volume?: *`undefined` |`number`*, type?: *"sine" |"square" |"sawtooth" |"triangle"*): `void`

*Defined in [_lib/Sys.ts:55](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L55)*

Start tone oscillator

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| channel | `number` |  Audio channel to use |
| frequency | `number` |  Frequency of tone |
| `Optional` volume | `undefined` |
`number`
 |  Volume of tone (0-1) |
| `Optional` type | "sine" |
"square" |
"sawtooth" |
"triangle"
 |  Wave type |

**Returns:** `void`

___
<a id="stoptone"></a>

###  stopTone

▸ **stopTone**(channel: *`number`*): `void`

*Defined in [_lib/Sys.ts:61](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L61)*

Stop tone oscillator

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| channel | `number` |  Audio channel |

**Returns:** `void`

___
<a id="write"></a>

###  write

▸ **write**(filename: *`string`*, data: *`string` |`ArrayBuffer`*): `Promise`<`boolean`>

*Defined in [_lib/Sys.ts:81](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L81)*

Write to a file.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| filename | `string` |  Name of file to write to |
| data | `string` |
`ArrayBuffer`
 |  Data to write |

**Returns:** `Promise`<`boolean`>

___

