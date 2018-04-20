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


### Accessors

* [displayBitmap](_script__lib_websys_.websys.md#displaybitmap)
* [displayHeight](_script__lib_websys_.websys.md#displayheight)
* [displayMode](_script__lib_websys_.websys.md#displaymode)
* [displayWidth](_script__lib_websys_.websys.md#displaywidth)


### Methods

* [createMachine](_script__lib_websys_.websys.md#createmachine)
* [drawBitmap](_script__lib_websys_.websys.md#drawbitmap)
* [onGameInput](_script__lib_websys_.websys.md#ongameinput)
* [read](_script__lib_websys_.websys.md#read)
* [setDisplayMode](_script__lib_websys_.websys.md#setdisplaymode)
* [waitForVsync](_script__lib_websys_.websys.md#waitforvsync)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new WebSys**(): [WebSys](_script__lib_websys_.websys.md)


*Defined in [script/_lib/WebSys.ts:11](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L11)*





**Returns:** [WebSys](_script__lib_websys_.websys.md)

---


## Accessors
<a id="displaybitmap"></a>

###  displayBitmap


getdisplayBitmap(): `undefined`⎮`ImageData`

*Defined in [script/_lib/WebSys.ts:11](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L11)*





**Returns:** `undefined`⎮`ImageData`



___

<a id="displayheight"></a>

###  displayHeight


getdisplayHeight(): `number`

*Defined in [script/_lib/WebSys.ts:10](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L10)*





**Returns:** `number`



___

<a id="displaymode"></a>

###  displayMode


getdisplayMode(): `string`

*Defined in [script/_lib/WebSys.ts:8](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L8)*





**Returns:** `string`



___

<a id="displaywidth"></a>

###  displayWidth


getdisplayWidth(): `number`

*Defined in [script/_lib/WebSys.ts:9](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L9)*





**Returns:** `number`



___


## Methods
<a id="createmachine"></a>

###  createMachine

► **createMachine**(): [WebMachineWorker](_script__lib_websys_.webmachineworker.md)



*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[createMachine](../interfaces/_script__lib_sys_.sys.md#createmachine)*

*Defined in [script/_lib/WebSys.ts:59](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L59)*





**Returns:** [WebMachineWorker](_script__lib_websys_.webmachineworker.md)





___

<a id="drawbitmap"></a>

###  drawBitmap

► **drawBitmap**(): `void`



*Implementation of [Sys](../interfaces/_script__lib_sys_.sys.md).[drawBitmap](../interfaces/_script__lib_sys_.sys.md#drawbitmap)*

*Defined in [script/_lib/WebSys.ts:47](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L47)*





**Returns:** `void`





___

<a id="ongameinput"></a>

###  onGameInput

► **onGameInput**(fn: *`Function`*, remove?: *`boolean`*): `void`



*Defined in [script/_lib/WebSys.ts:78](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L78)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| fn | `Function`  | - |   - |
| remove | `boolean`  | false |   - |





**Returns:** `void`





___

<a id="read"></a>

###  read

► **read**(filename: *`string`*, options?: *`any`*): `Promise`.<`string`⎮`ArrayBuffer`>



*Defined in [script/_lib/WebSys.ts:63](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L63)*



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



*Defined in [script/_lib/WebSys.ts:20](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L20)*



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



*Defined in [script/_lib/WebSys.ts:53](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L53)*





**Returns:** `Promise`.<`Object`>





___


