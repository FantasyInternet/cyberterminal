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

* [gameInput](_script__lib_electronsys_.electronsys.md#gameinput)


### Accessors

* [displayBitmap](_script__lib_electronsys_.electronsys.md#displaybitmap)
* [displayHeight](_script__lib_electronsys_.electronsys.md#displayheight)
* [displayMode](_script__lib_electronsys_.electronsys.md#displaymode)
* [displayWidth](_script__lib_electronsys_.electronsys.md#displaywidth)


### Methods

* [createMachine](_script__lib_electronsys_.electronsys.md#createmachine)
* [drawBitmap](_script__lib_electronsys_.electronsys.md#drawbitmap)
* [read](_script__lib_electronsys_.electronsys.md#read)
* [setDisplayMode](_script__lib_electronsys_.electronsys.md#setdisplaymode)
* [waitForVsync](_script__lib_electronsys_.electronsys.md#waitforvsync)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new ElectronSys**(): [ElectronSys](_script__lib_electronsys_.electronsys.md)


*Inherited from [WebSys](_script__lib_websys_.websys.md).[constructor](_script__lib_websys_.websys.md#constructor)*

*Defined in [script/_lib/WebSys.ts:14](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L14)*





**Returns:** [ElectronSys](_script__lib_electronsys_.electronsys.md)

---


## Properties
<a id="gameinput"></a>

###  gameInput

**●  gameInput**:  *[GameInput](_script__lib_gameinput_.gameinput.md)*  =  new GameInput()

*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[gameInput](../interfaces/_script__lib_sys_.sys.md#gameinput)*

*Inherited from [WebSys](_script__lib_websys_.websys.md).[gameInput](_script__lib_websys_.websys.md#gameinput)*

*Defined in [script/_lib/WebSys.ts:10](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L10)*





___


## Accessors
<a id="displaybitmap"></a>

###  displayBitmap


getdisplayBitmap(): `undefined`⎮`ImageData`

*Inherited from [WebSys](_script__lib_websys_.websys.md).[displayBitmap](_script__lib_websys_.websys.md#displaybitmap)*

*Defined in [script/_lib/WebSys.ts:14](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L14)*





**Returns:** `undefined`⎮`ImageData`



___

<a id="displayheight"></a>

###  displayHeight


getdisplayHeight(): `number`

*Inherited from [WebSys](_script__lib_websys_.websys.md).[displayHeight](_script__lib_websys_.websys.md#displayheight)*

*Defined in [script/_lib/WebSys.ts:13](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L13)*





**Returns:** `number`



___

<a id="displaymode"></a>

###  displayMode


getdisplayMode(): `string`

*Inherited from [WebSys](_script__lib_websys_.websys.md).[displayMode](_script__lib_websys_.websys.md#displaymode)*

*Defined in [script/_lib/WebSys.ts:11](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L11)*





**Returns:** `string`



___

<a id="displaywidth"></a>

###  displayWidth


getdisplayWidth(): `number`

*Inherited from [WebSys](_script__lib_websys_.websys.md).[displayWidth](_script__lib_websys_.websys.md#displaywidth)*

*Defined in [script/_lib/WebSys.ts:12](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L12)*





**Returns:** `number`



___


## Methods
<a id="createmachine"></a>

###  createMachine

► **createMachine**(): [WebMachineWorker](_script__lib_websys_.webmachineworker.md)



*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[createMachine](../interfaces/_script__lib_sys_.sys.md#createmachine)*

*Inherited from [WebSys](_script__lib_websys_.websys.md).[createMachine](_script__lib_websys_.websys.md#createmachine)*

*Defined in [script/_lib/WebSys.ts:61](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L61)*





**Returns:** [WebMachineWorker](_script__lib_websys_.webmachineworker.md)





___

<a id="drawbitmap"></a>

###  drawBitmap

► **drawBitmap**(): `void`



*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[drawBitmap](../interfaces/_script__lib_sys_.sys.md#drawbitmap)*

*Inherited from [WebSys](_script__lib_websys_.websys.md).[drawBitmap](_script__lib_websys_.websys.md#drawbitmap)*

*Defined in [script/_lib/WebSys.ts:49](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L49)*





**Returns:** `void`





___

<a id="read"></a>

###  read

► **read**(filename: *`string`*, options?: *`any`*): `Promise`.<`any`>



*Overrides [WebSys](_script__lib_websys_.websys.md).[read](_script__lib_websys_.websys.md#read)*

*Defined in [script/_lib/ElectronSys.ts:11](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/ElectronSys.ts#L11)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| filename | `string`  | - |   - |
| options | `any`  |  {} |   - |





**Returns:** `Promise`.<`any`>





___

<a id="setdisplaymode"></a>

###  setDisplayMode

► **setDisplayMode**(mode: *"text"⎮"indexed"⎮"rgb"*, width: *`number`*, height: *`number`*, displayWidth?: *`number`*, displayHeight?: *`number`*): `void`



*Inherited from [WebSys](_script__lib_websys_.websys.md).[setDisplayMode](_script__lib_websys_.websys.md#setdisplaymode)*

*Defined in [script/_lib/WebSys.ts:22](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L22)*



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



*Inherited from [WebSys](_script__lib_websys_.websys.md).[waitForVsync](_script__lib_websys_.websys.md#waitforvsync)*

*Defined in [script/_lib/WebSys.ts:55](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L55)*





**Returns:** `Promise`.<`Object`>





___


