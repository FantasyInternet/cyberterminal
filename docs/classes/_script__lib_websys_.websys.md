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

* [chipSound](_script__lib_websys_.websys.md#chipsound)
* [gameInput](_script__lib_websys_.websys.md#gameinput)
* [mouseInput](_script__lib_websys_.websys.md#mouseinput)

### Accessors

* [displayBitmap](_script__lib_websys_.websys.md#displaybitmap)
* [displayHeight](_script__lib_websys_.websys.md#displayheight)
* [displayMode](_script__lib_websys_.websys.md#displaymode)
* [displayWidth](_script__lib_websys_.websys.md#displaywidth)

### Methods

* [createMachine](_script__lib_websys_.websys.md#createmachine)
* [drawBitmap](_script__lib_websys_.websys.md#drawbitmap)
* [read](_script__lib_websys_.websys.md#read)
* [setDisplayMode](_script__lib_websys_.websys.md#setdisplaymode)
* [startTone](_script__lib_websys_.websys.md#starttone)
* [stopTone](_script__lib_websys_.websys.md#stoptone)
* [waitForVsync](_script__lib_websys_.websys.md#waitforvsync)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new WebSys**(): [WebSys](_script__lib_websys_.websys.md)

*Defined in [script/_lib/WebSys.ts:20](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L20)*

**Returns:** [WebSys](_script__lib_websys_.websys.md)

___

## Properties

<a id="chipsound"></a>

###  chipSound

**● chipSound**: *[ChipSound](_script__lib_chipsound_.chipsound.md)* =  new ChipSound()

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[chipSound](../interfaces/_script__lib_sys_.sys.md#chipsound)*

*Defined in [script/_lib/WebSys.ts:14](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L14)*

___
<a id="gameinput"></a>

###  gameInput

**● gameInput**: *[GameInput](_script__lib_gameinput_.gameinput.md)* =  new GameInput()

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[gameInput](../interfaces/_script__lib_sys_.sys.md#gameinput)*

*Defined in [script/_lib/WebSys.ts:16](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L16)*

___
<a id="mouseinput"></a>

###  mouseInput

**● mouseInput**: *[MouseInput](_script__lib_mouseinput_.mouseinput.md)* =  new MouseInput()

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[mouseInput](../interfaces/_script__lib_sys_.sys.md#mouseinput)*

*Defined in [script/_lib/WebSys.ts:15](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L15)*

___

## Accessors

<a id="displaybitmap"></a>

###  displayBitmap

getdisplayBitmap(): `undefined` |`ImageData`

*Defined in [script/_lib/WebSys.ts:20](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L20)*

**Returns:** `undefined` |
`ImageData`

___
<a id="displayheight"></a>

###  displayHeight

getdisplayHeight(): `number`

*Defined in [script/_lib/WebSys.ts:19](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L19)*

**Returns:** `number`

___
<a id="displaymode"></a>

###  displayMode

getdisplayMode(): `string`

*Defined in [script/_lib/WebSys.ts:17](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L17)*

**Returns:** `string`

___
<a id="displaywidth"></a>

###  displayWidth

getdisplayWidth(): `number`

*Defined in [script/_lib/WebSys.ts:18](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L18)*

**Returns:** `number`

___

## Methods

<a id="createmachine"></a>

###  createMachine

▸ **createMachine**(): [WebMachineWorker](_script__lib_websys_.webmachineworker.md)

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[createMachine](../interfaces/_script__lib_sys_.sys.md#createmachine)*

*Defined in [script/_lib/WebSys.ts:67](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L67)*

**Returns:** [WebMachineWorker](_script__lib_websys_.webmachineworker.md)

___
<a id="drawbitmap"></a>

###  drawBitmap

▸ **drawBitmap**(): `void`

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[drawBitmap](../interfaces/_script__lib_sys_.sys.md#drawbitmap)*

*Defined in [script/_lib/WebSys.ts:55](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L55)*

**Returns:** `void`

___
<a id="read"></a>

###  read

▸ **read**(filename: *`string`*, options?: *`any`*): `Promise`<`Object`>

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[read](../interfaces/_script__lib_sys_.sys.md#read)*

*Defined in [script/_lib/WebSys.ts:71](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L71)*

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

*Defined in [script/_lib/WebSys.ts:28](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L28)*

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

*Defined in [script/_lib/WebSys.ts:103](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L103)*

**Returns:** `void`

___
<a id="stoptone"></a>

###  stopTone

▸ **stopTone**(): `void`

*Defined in [script/_lib/WebSys.ts:106](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L106)*

**Returns:** `void`

___
<a id="waitforvsync"></a>

###  waitForVsync

▸ **waitForVsync**(): `Promise`<`Object`>

*Defined in [script/_lib/WebSys.ts:61](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L61)*

**Returns:** `Promise`<`Object`>

___

