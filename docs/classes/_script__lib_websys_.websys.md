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
* [waitForVsync](_script__lib_websys_.websys.md#waitforvsync)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new WebSys**(): [WebSys](_script__lib_websys_.websys.md)


*Defined in [script/_lib/WebSys.ts:18](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L18)*





**Returns:** [WebSys](_script__lib_websys_.websys.md)

---


## Properties
<a id="chipsound"></a>

###  chipSound

**●  chipSound**:  *[ChipSound](_script__lib_chipsound_.chipsound.md)*  =  new ChipSound()

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[chipSound](../interfaces/_script__lib_sys_.sys.md#chipsound)*

*Defined in [script/_lib/WebSys.ts:12](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L12)*





___

<a id="gameinput"></a>

###  gameInput

**●  gameInput**:  *[GameInput](_script__lib_gameinput_.gameinput.md)*  =  new GameInput()

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[gameInput](../interfaces/_script__lib_sys_.sys.md#gameinput)*

*Defined in [script/_lib/WebSys.ts:14](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L14)*





___

<a id="mouseinput"></a>

###  mouseInput

**●  mouseInput**:  *[MouseInput](_script__lib_mouseinput_.mouseinput.md)*  =  new MouseInput()

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[mouseInput](../interfaces/_script__lib_sys_.sys.md#mouseinput)*

*Defined in [script/_lib/WebSys.ts:13](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L13)*





___


## Accessors
<a id="displaybitmap"></a>

###  displayBitmap


getdisplayBitmap(): `undefined`⎮`ImageData`

*Defined in [script/_lib/WebSys.ts:18](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L18)*





**Returns:** `undefined`⎮`ImageData`



___

<a id="displayheight"></a>

###  displayHeight


getdisplayHeight(): `number`

*Defined in [script/_lib/WebSys.ts:17](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L17)*





**Returns:** `number`



___

<a id="displaymode"></a>

###  displayMode


getdisplayMode(): `string`

*Defined in [script/_lib/WebSys.ts:15](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L15)*





**Returns:** `string`



___

<a id="displaywidth"></a>

###  displayWidth


getdisplayWidth(): `number`

*Defined in [script/_lib/WebSys.ts:16](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L16)*





**Returns:** `number`



___


## Methods
<a id="createmachine"></a>

###  createMachine

► **createMachine**(): [WebMachineWorker](_script__lib_websys_.webmachineworker.md)



*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[createMachine](../interfaces/_script__lib_sys_.sys.md#createmachine)*

*Defined in [script/_lib/WebSys.ts:65](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L65)*





**Returns:** [WebMachineWorker](_script__lib_websys_.webmachineworker.md)





___

<a id="drawbitmap"></a>

###  drawBitmap

► **drawBitmap**(): `void`



*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[drawBitmap](../interfaces/_script__lib_sys_.sys.md#drawbitmap)*

*Defined in [script/_lib/WebSys.ts:53](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L53)*





**Returns:** `void`





___

<a id="read"></a>

###  read

► **read**(filename: *`string`*, options?: *`any`*): `Promise`.<`string`⎮`ArrayBuffer`>



*Defined in [script/_lib/WebSys.ts:69](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L69)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| filename | `string`  | - |   - |
| options | `any`  |  {} |   - |





**Returns:** `Promise`.<`string`⎮`ArrayBuffer`>





___

<a id="setdisplaymode"></a>

###  setDisplayMode

► **setDisplayMode**(mode: *"text"⎮"indexed"⎮"rgb"*, width: *`number`*, height: *`number`*, displayWidth?: *`number`*, displayHeight?: *`number`*): `void`



*Defined in [script/_lib/WebSys.ts:26](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L26)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| mode | "text"⎮"indexed"⎮"rgb"  | - |   - |
| width | `number`  | - |   - |
| height | `number`  | - |   - |
| displayWidth | `number`  |  width |   - |
| displayHeight | `number`  |  height |   - |





**Returns:** `void`





___

<a id="waitforvsync"></a>

###  waitForVsync

► **waitForVsync**(): `Promise`.<`Object`>



*Defined in [script/_lib/WebSys.ts:59](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L59)*





**Returns:** `Promise`.<`Object`>





___


