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

* [chipSound](_script__lib_electronsys_.electronsys.md#chipsound)
* [gameInput](_script__lib_electronsys_.electronsys.md#gameinput)
* [inputPriority](_script__lib_electronsys_.electronsys.md#inputpriority)
* [mouseInput](_script__lib_electronsys_.electronsys.md#mouseinput)
* [textInput](_script__lib_electronsys_.electronsys.md#textinput)

### Accessors

* [displayBitmap](_script__lib_electronsys_.electronsys.md#displaybitmap)
* [displayHeight](_script__lib_electronsys_.electronsys.md#displayheight)
* [displayMode](_script__lib_electronsys_.electronsys.md#displaymode)
* [displayWidth](_script__lib_electronsys_.electronsys.md#displaywidth)

### Methods

* [createMachine](_script__lib_electronsys_.electronsys.md#createmachine)
* [drawBitmap](_script__lib_electronsys_.electronsys.md#drawbitmap)
* [focusInput](_script__lib_electronsys_.electronsys.md#focusinput)
* [read](_script__lib_electronsys_.electronsys.md#read)
* [setDisplayMode](_script__lib_electronsys_.electronsys.md#setdisplaymode)
* [startTone](_script__lib_electronsys_.electronsys.md#starttone)
* [stopTone](_script__lib_electronsys_.electronsys.md#stoptone)
* [waitForVsync](_script__lib_electronsys_.electronsys.md#waitforvsync)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ElectronSys**(): [ElectronSys](_script__lib_electronsys_.electronsys.md)

*Inherited from [WebSys](_script__lib_websys_.websys.md).[constructor](_script__lib_websys_.websys.md#constructor)*

*Defined in [script/_lib/WebSys.ts:23](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L23)*

**Returns:** [ElectronSys](_script__lib_electronsys_.electronsys.md)

___

## Properties

<a id="chipsound"></a>

###  chipSound

**● chipSound**: *[ChipSound](_script__lib_chipsound_.chipsound.md)*

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[chipSound](../interfaces/_script__lib_sys_.sys.md#chipsound)*

*Inherited from [WebSys](_script__lib_websys_.websys.md).[chipSound](_script__lib_websys_.websys.md#chipsound)*

*Defined in [script/_lib/WebSys.ts:15](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L15)*

___
<a id="gameinput"></a>

###  gameInput

**● gameInput**: *[GameInput](_script__lib_gameinput_.gameinput.md)*

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[gameInput](../interfaces/_script__lib_sys_.sys.md#gameinput)*

*Inherited from [WebSys](_script__lib_websys_.websys.md).[gameInput](_script__lib_websys_.websys.md#gameinput)*

*Defined in [script/_lib/WebSys.ts:18](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L18)*

___
<a id="inputpriority"></a>

###  inputPriority

**● inputPriority**: *`string`[]* =  ["text", "mouse", "game"]

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[inputPriority](../interfaces/_script__lib_sys_.sys.md#inputpriority)*

*Inherited from [WebSys](_script__lib_websys_.websys.md).[inputPriority](_script__lib_websys_.websys.md#inputpriority)*

*Defined in [script/_lib/WebSys.ts:19](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L19)*

___
<a id="mouseinput"></a>

###  mouseInput

**● mouseInput**: *[MouseInput](_script__lib_mouseinput_.mouseinput.md)*

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[mouseInput](../interfaces/_script__lib_sys_.sys.md#mouseinput)*

*Inherited from [WebSys](_script__lib_websys_.websys.md).[mouseInput](_script__lib_websys_.websys.md#mouseinput)*

*Defined in [script/_lib/WebSys.ts:17](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L17)*

___
<a id="textinput"></a>

###  textInput

**● textInput**: *[TextInput](_script__lib_textinput_.textinput.md)*

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[textInput](../interfaces/_script__lib_sys_.sys.md#textinput)*

*Inherited from [WebSys](_script__lib_websys_.websys.md).[textInput](_script__lib_websys_.websys.md#textinput)*

*Defined in [script/_lib/WebSys.ts:16](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L16)*

___

## Accessors

<a id="displaybitmap"></a>

###  displayBitmap

getdisplayBitmap(): `undefined` |`ImageData`

*Inherited from [WebSys](_script__lib_websys_.websys.md).[displayBitmap](_script__lib_websys_.websys.md#displaybitmap)*

*Defined in [script/_lib/WebSys.ts:23](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L23)*

**Returns:** `undefined` |
`ImageData`

___
<a id="displayheight"></a>

###  displayHeight

getdisplayHeight(): `number`

*Inherited from [WebSys](_script__lib_websys_.websys.md).[displayHeight](_script__lib_websys_.websys.md#displayheight)*

*Defined in [script/_lib/WebSys.ts:22](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L22)*

**Returns:** `number`

___
<a id="displaymode"></a>

###  displayMode

getdisplayMode(): `string`

*Inherited from [WebSys](_script__lib_websys_.websys.md).[displayMode](_script__lib_websys_.websys.md#displaymode)*

*Defined in [script/_lib/WebSys.ts:20](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L20)*

**Returns:** `string`

___
<a id="displaywidth"></a>

###  displayWidth

getdisplayWidth(): `number`

*Inherited from [WebSys](_script__lib_websys_.websys.md).[displayWidth](_script__lib_websys_.websys.md#displaywidth)*

*Defined in [script/_lib/WebSys.ts:21](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L21)*

**Returns:** `number`

___

## Methods

<a id="createmachine"></a>

###  createMachine

▸ **createMachine**(): [WebMachineWorker](_script__lib_websys_.webmachineworker.md)

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[createMachine](../interfaces/_script__lib_sys_.sys.md#createmachine)*

*Inherited from [WebSys](_script__lib_websys_.websys.md).[createMachine](_script__lib_websys_.websys.md#createmachine)*

*Defined in [script/_lib/WebSys.ts:74](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L74)*

**Returns:** [WebMachineWorker](_script__lib_websys_.webmachineworker.md)

___
<a id="drawbitmap"></a>

###  drawBitmap

▸ **drawBitmap**(): `void`

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[drawBitmap](../interfaces/_script__lib_sys_.sys.md#drawbitmap)*

*Inherited from [WebSys](_script__lib_websys_.websys.md).[drawBitmap](_script__lib_websys_.websys.md#drawbitmap)*

*Defined in [script/_lib/WebSys.ts:62](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L62)*

**Returns:** `void`

___
<a id="focusinput"></a>

###  focusInput

▸ **focusInput**(input: *"text" |"mouse" |"game"*): `string`[]

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[focusInput](../interfaces/_script__lib_sys_.sys.md#focusinput)*

*Inherited from [WebSys](_script__lib_websys_.websys.md).[focusInput](_script__lib_websys_.websys.md#focusinput)*

*Defined in [script/_lib/WebSys.ts:117](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L117)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | "text" |
"mouse" |
"game"
 | 

**Returns:** `string`[]

___
<a id="read"></a>

###  read

▸ **read**(filename: *`string`*, options?: *`any`*): `Promise`<`Object`>

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[read](../interfaces/_script__lib_sys_.sys.md#read)*

*Overrides [WebSys](_script__lib_websys_.websys.md).[read](_script__lib_websys_.websys.md#read)*

*Defined in [script/_lib/ElectronSys.ts:11](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/ElectronSys.ts#L11)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| filename | `string` | - | 
| `Default value` options | `any` |  {} | 

**Returns:** `Promise`<`Object`>

___
<a id="setdisplaymode"></a>

###  setDisplayMode

▸ **setDisplayMode**(mode: *"text" |"indexed" |"rgb"*, width: *`number`*, height: *`number`*, displayWidth?: *`number`*, displayHeight?: *`number`*): `void`

*Inherited from [WebSys](_script__lib_websys_.websys.md).[setDisplayMode](_script__lib_websys_.websys.md#setdisplaymode)*

*Defined in [script/_lib/WebSys.ts:35](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L35)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| mode | "text" |
"indexed" |
"rgb"
 | - | 
| width | `number` | - | 
| height | `number` | - | 
| `Default value` displayWidth | `number` |  width | 
| `Default value` displayHeight | `number` |  height | 

**Returns:** `void`

___
<a id="starttone"></a>

###  startTone

▸ **startTone**(): `void`

*Inherited from [WebSys](_script__lib_websys_.websys.md).[startTone](_script__lib_websys_.websys.md#starttone)*

*Defined in [script/_lib/WebSys.ts:110](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L110)*

**Returns:** `void`

___
<a id="stoptone"></a>

###  stopTone

▸ **stopTone**(): `void`

*Inherited from [WebSys](_script__lib_websys_.websys.md).[stopTone](_script__lib_websys_.websys.md#stoptone)*

*Defined in [script/_lib/WebSys.ts:113](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L113)*

**Returns:** `void`

___
<a id="waitforvsync"></a>

###  waitForVsync

▸ **waitForVsync**(): `Promise`<`Object`>

*Inherited from [WebSys](_script__lib_websys_.websys.md).[waitForVsync](_script__lib_websys_.websys.md#waitforvsync)*

*Defined in [script/_lib/WebSys.ts:68](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L68)*

**Returns:** `Promise`<`Object`>

___

