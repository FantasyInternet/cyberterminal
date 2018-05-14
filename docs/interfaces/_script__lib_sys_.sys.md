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
* [displayBitmap](_script__lib_sys_.sys.md#displaybitmap)
* [displayHeight](_script__lib_sys_.sys.md#displayheight)
* [displayMode](_script__lib_sys_.sys.md#displaymode)
* [displayWidth](_script__lib_sys_.sys.md#displaywidth)
* [gameInput](_script__lib_sys_.sys.md#gameinput)
* [inputPriority](_script__lib_sys_.sys.md#inputpriority)
* [mouseInput](_script__lib_sys_.sys.md#mouseinput)
* [textInput](_script__lib_sys_.sys.md#textinput)

### Methods

* [createMachine](_script__lib_sys_.sys.md#createmachine)
* [delete](_script__lib_sys_.sys.md#delete)
* [drawBitmap](_script__lib_sys_.sys.md#drawbitmap)
* [focusInput](_script__lib_sys_.sys.md#focusinput)
* [read](_script__lib_sys_.sys.md#read)
* [setDisplayMode](_script__lib_sys_.sys.md#setdisplaymode)
* [setTextInput](_script__lib_sys_.sys.md#settextinput)
* [startTone](_script__lib_sys_.sys.md#starttone)
* [stopTone](_script__lib_sys_.sys.md#stoptone)
* [write](_script__lib_sys_.sys.md#write)

---

## Properties

<a id="breaker"></a>

###  breaker

**● breaker**: *[Breaker](../classes/_script__lib_breaker_.breaker.md)*

*Defined in [script/_lib/Sys.ts:30](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L30)*

Stop button to break or disconnect current connection.

___
<a id="chipsound"></a>

###  chipSound

**● chipSound**: *[ChipSound](../classes/_script__lib_chipsound_.chipsound.md)*

*Defined in [script/_lib/Sys.ts:20](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L20)*

Tone generator.

___
<a id="displaybitmap"></a>

### `<Optional>` displayBitmap

**● displayBitmap**: *`ImageData`*

*Defined in [script/_lib/Sys.ts:18](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L18)*

The current display bitmap.

___
<a id="displayheight"></a>

###  displayHeight

**● displayHeight**: *`number`*

*Defined in [script/_lib/Sys.ts:16](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L16)*

The current height of the display in characters or pixels.

___
<a id="displaymode"></a>

###  displayMode

**● displayMode**: *`string`*

*Defined in [script/_lib/Sys.ts:12](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L12)*

Name of current display mode.

___
<a id="displaywidth"></a>

###  displayWidth

**● displayWidth**: *`number`*

*Defined in [script/_lib/Sys.ts:14](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L14)*

The current width of the display in characters or pixels.

___
<a id="gameinput"></a>

###  gameInput

**● gameInput**: *[GameInput](../classes/_script__lib_gameinput_.gameinput.md)*

*Defined in [script/_lib/Sys.ts:26](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L26)*

Game input state.

___
<a id="inputpriority"></a>

###  inputPriority

**● inputPriority**: *`string`[]*

*Defined in [script/_lib/Sys.ts:28](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L28)*

Inputs in prioritized order, highest to lowest.

___
<a id="mouseinput"></a>

###  mouseInput

**● mouseInput**: *[MouseInput](../classes/_script__lib_mouseinput_.mouseinput.md)*

*Defined in [script/_lib/Sys.ts:24](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L24)*

Mouse input state.

___
<a id="textinput"></a>

###  textInput

**● textInput**: *[TextInput](../classes/_script__lib_textinput_.textinput.md)*

*Defined in [script/_lib/Sys.ts:22](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L22)*

Text input state.

___

## Methods

<a id="createmachine"></a>

###  createMachine

▸ **createMachine**(): [MachineWorker](_script__lib_machineworker_.machineworker.md)

*Defined in [script/_lib/Sys.ts:64](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L64)*

Create a machine.

**Returns:** [MachineWorker](_script__lib_machineworker_.machineworker.md)
the worker running the machine

___
<a id="delete"></a>

###  delete

▸ **delete**(filename: *`string`*): `Promise`<`boolean`>

*Defined in [script/_lib/Sys.ts:84](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L84)*

Delete a file.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| filename | `string` |  Name of file to delete |

**Returns:** `Promise`<`boolean`>

___
<a id="drawbitmap"></a>

###  drawBitmap

▸ **drawBitmap**(): `void`

*Defined in [script/_lib/Sys.ts:43](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L43)*

Draw current bitmap to screen.

**Returns:** `void`

___
<a id="focusinput"></a>

###  focusInput

▸ **focusInput**(input: *"text" |"mouse" |"game"*): `string`[]

*Defined in [script/_lib/Sys.ts:90](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L90)*

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
<a id="read"></a>

###  read

▸ **read**(filename: *`string`*, options: *`any`*): `Promise`<`any`>

*Defined in [script/_lib/Sys.ts:71](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L71)*

Read a file.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| filename | `string` |  Name of file to read |
| options | `any` |  Options |

**Returns:** `Promise`<`any`>

___
<a id="setdisplaymode"></a>

###  setDisplayMode

▸ **setDisplayMode**(mode: *"text" |"pixel"*, width: *`number`*, height: *`number`*): `void`

*Defined in [script/_lib/Sys.ts:38](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L38)*

Switch display mode.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| mode | "text" |
"pixel"
 |  Name of mode to switch to |
| width | `number` |  The width of the display in characters or pixels |
| height | `number` |  The height of the display in characters or pixels |

**Returns:** `void`

___
<a id="settextinput"></a>

###  setTextInput

▸ **setTextInput**(text: *`string`*, pos: *`number`*, len: *`number`*): `void`

*Defined in [script/_lib/Sys.ts:98](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L98)*

Set the state of the text input.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| text | `string` |  Text to put into editor |
| pos | `number` |  Cursor position |
| len | `number` |  Selection length |

**Returns:** `void`

___
<a id="starttone"></a>

###  startTone

▸ **startTone**(channel: *`number`*, frequency: *`number`*, volume: *`number`*, type: *"sine" |"square" |"sawtooth" |"triangle"*): `void`

*Defined in [script/_lib/Sys.ts:52](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L52)*

Start tone oscillator

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| channel | `number` |  Audio channel to use |
| frequency | `number` |  Frequency of tone |
| volume | `number` |  Volume of tone (0-1) |
| type | "sine" |
"square" |
"sawtooth" |
"triangle"
 |  Wave type |

**Returns:** `void`

___
<a id="stoptone"></a>

###  stopTone

▸ **stopTone**(channel: *`number`*): `void`

*Defined in [script/_lib/Sys.ts:58](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L58)*

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

*Defined in [script/_lib/Sys.ts:78](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L78)*

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

