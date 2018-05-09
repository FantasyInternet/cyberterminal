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
* [drawBitmap](_script__lib_sys_.sys.md#drawbitmap)
* [prioritizeInput](_script__lib_sys_.sys.md#prioritizeinput)
* [read](_script__lib_sys_.sys.md#read)
* [setDisplayMode](_script__lib_sys_.sys.md#setdisplaymode)
* [startTone](_script__lib_sys_.sys.md#starttone)
* [stopTone](_script__lib_sys_.sys.md#stoptone)

---

## Properties

<a id="chipsound"></a>

###  chipSound

**● chipSound**: *[ChipSound](../classes/_script__lib_chipsound_.chipsound.md)*

*Defined in [script/_lib/Sys.ts:19](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L19)*

Tone generator.

___
<a id="displaybitmap"></a>

### `<Optional>` displayBitmap

**● displayBitmap**: *`ImageData`*

*Defined in [script/_lib/Sys.ts:17](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L17)*

The current display bitmap.

___
<a id="displayheight"></a>

###  displayHeight

**● displayHeight**: *`number`*

*Defined in [script/_lib/Sys.ts:15](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L15)*

The current height of the display in characters or pixels.

___
<a id="displaymode"></a>

###  displayMode

**● displayMode**: *`string`*

*Defined in [script/_lib/Sys.ts:11](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L11)*

Name of current display mode.

___
<a id="displaywidth"></a>

###  displayWidth

**● displayWidth**: *`number`*

*Defined in [script/_lib/Sys.ts:13](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L13)*

The current width of the display in characters or pixels.

___
<a id="gameinput"></a>

###  gameInput

**● gameInput**: *[GameInput](../classes/_script__lib_gameinput_.gameinput.md)*

*Defined in [script/_lib/Sys.ts:25](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L25)*

Game input state.

___
<a id="inputpriority"></a>

###  inputPriority

**● inputPriority**: *`string`[]*

*Defined in [script/_lib/Sys.ts:27](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L27)*

Inputs in prioritized order, highest to lowest.

___
<a id="mouseinput"></a>

###  mouseInput

**● mouseInput**: *[MouseInput](../classes/_script__lib_mouseinput_.mouseinput.md)*

*Defined in [script/_lib/Sys.ts:23](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L23)*

Mouse input state.

___
<a id="textinput"></a>

###  textInput

**● textInput**: *[TextInput](../classes/_script__lib_textinput_.textinput.md)*

*Defined in [script/_lib/Sys.ts:21](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L21)*

Text input state.

___

## Methods

<a id="createmachine"></a>

###  createMachine

▸ **createMachine**(): [MachineWorker](_script__lib_machineworker_.machineworker.md)

*Defined in [script/_lib/Sys.ts:61](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L61)*

Create a machine.

**Returns:** [MachineWorker](_script__lib_machineworker_.machineworker.md)
the worker running the machine

___
<a id="drawbitmap"></a>

###  drawBitmap

▸ **drawBitmap**(): `void`

*Defined in [script/_lib/Sys.ts:40](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L40)*

Draw current bitmap to screen.

**Returns:** `void`

___
<a id="prioritizeinput"></a>

###  prioritizeInput

▸ **prioritizeInput**(input: *"text" |"mouse" |"game"*): `string`[]

*Defined in [script/_lib/Sys.ts:74](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L74)*

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

*Defined in [script/_lib/Sys.ts:68](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L68)*

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

▸ **setDisplayMode**(mode: *"text" |"indexed" |"rgb"*, width: *`number`*, height: *`number`*): `void`

*Defined in [script/_lib/Sys.ts:35](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L35)*

Switch display mode.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| mode | "text" |
"indexed" |
"rgb"
 |  Name of mode to switch to |
| width | `number` |  The width of the display in characters or pixels |
| height | `number` |  The height of the display in characters or pixels |

**Returns:** `void`

___
<a id="starttone"></a>

###  startTone

▸ **startTone**(channel: *`number`*, frequency: *`number`*, volume: *`number`*, type: *"sine" |"square" |"sawtooth" |"triangle"*): `void`

*Defined in [script/_lib/Sys.ts:49](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L49)*

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

*Defined in [script/_lib/Sys.ts:55](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L55)*

Stop tone oscillator

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| channel | `number` |  Audio channel |

**Returns:** `void`

___

