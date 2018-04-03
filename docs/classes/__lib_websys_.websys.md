[cyberterminal](../README.md) > ["_lib/WebSys"](../modules/__lib_websys_.md) > [WebSys](../classes/__lib_websys_.websys.md)



# Class: WebSys


Sys implementation for web browsers. See [Sys](../interfaces/__lib_sys_.sys.md) for documentation

## Implements

* [Sys](../interfaces/__lib_sys_.sys.md)

## Index

### Constructors

* [constructor](__lib_websys_.websys.md#constructor)


### Accessors

* [displayBitmap](__lib_websys_.websys.md#displaybitmap)
* [displayHeight](__lib_websys_.websys.md#displayheight)
* [displayMode](__lib_websys_.websys.md#displaymode)
* [displayWidth](__lib_websys_.websys.md#displaywidth)


### Methods

* [createMachine](__lib_websys_.websys.md#createmachine)
* [drawBitmap](__lib_websys_.websys.md#drawbitmap)
* [read](__lib_websys_.websys.md#read)
* [setDisplayMode](__lib_websys_.websys.md#setdisplaymode)
* [waitForVsync](__lib_websys_.websys.md#waitforvsync)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new WebSys**(): [WebSys](__lib_websys_.websys.md)


*Defined in [_lib/WebSys.ts:11](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L11)*





**Returns:** [WebSys](__lib_websys_.websys.md)

---


## Accessors
<a id="displaybitmap"></a>

###  displayBitmap


getdisplayBitmap(): `undefined`⎮`ImageData`

*Defined in [_lib/WebSys.ts:11](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L11)*





**Returns:** `undefined`⎮`ImageData`



___

<a id="displayheight"></a>

###  displayHeight


getdisplayHeight(): `number`

*Defined in [_lib/WebSys.ts:10](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L10)*





**Returns:** `number`



___

<a id="displaymode"></a>

###  displayMode


getdisplayMode(): `string`

*Defined in [_lib/WebSys.ts:8](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L8)*





**Returns:** `string`



___

<a id="displaywidth"></a>

###  displayWidth


getdisplayWidth(): `number`

*Defined in [_lib/WebSys.ts:9](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L9)*





**Returns:** `number`



___


## Methods
<a id="createmachine"></a>

###  createMachine

► **createMachine**(): [WebMachineWorker](__lib_websys_.webmachineworker.md)



*Implementation of [Sys](../interfaces/__lib_sys_.sys.md).[createMachine](../interfaces/__lib_sys_.sys.md#createmachine)*

*Defined in [_lib/WebSys.ts:58](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L58)*





**Returns:** [WebMachineWorker](__lib_websys_.webmachineworker.md)





___

<a id="drawbitmap"></a>

###  drawBitmap

► **drawBitmap**(): `void`



*Implementation of [Sys](../interfaces/__lib_sys_.sys.md).[drawBitmap](../interfaces/__lib_sys_.sys.md#drawbitmap)*

*Defined in [_lib/WebSys.ts:46](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L46)*





**Returns:** `void`





___

<a id="read"></a>

###  read

► **read**(filename: *`string`*): `Promise`.<`string`>



*Defined in [_lib/WebSys.ts:62](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L62)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| filename | `string`   |  - |





**Returns:** `Promise`.<`string`>





___

<a id="setdisplaymode"></a>

###  setDisplayMode

► **setDisplayMode**(mode: *"text"⎮"indexed"⎮"rgb"*, width: *`number`*, height: *`number`*, displayWidth?: *`number`*, displayHeight?: *`number`*): `void`



*Defined in [_lib/WebSys.ts:19](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L19)*



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



*Defined in [_lib/WebSys.ts:52](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L52)*





**Returns:** `Promise`.<`Object`>





___


