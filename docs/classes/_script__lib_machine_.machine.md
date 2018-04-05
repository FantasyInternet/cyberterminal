[cyberterminal](../README.md) > ["script/_lib/Machine"](../modules/_script__lib_machine_.md) > [Machine](../classes/_script__lib_machine_.machine.md)



# Class: Machine


Central processing unit for browsers See [Sys](../interfaces/__classes_sys_.sys.md) for documentation

## Index

### Constructors

* [constructor](_script__lib_machine_.machine.md#constructor)


### Properties

* [url](_script__lib_machine_.machine.md#url)


### Accessors

* [displayBitmap](_script__lib_machine_.machine.md#displaybitmap)
* [displayHeight](_script__lib_machine_.machine.md#displayheight)
* [displayMode](_script__lib_machine_.machine.md#displaymode)
* [displayWidth](_script__lib_machine_.machine.md#displaywidth)


### Methods

* [commitDisplay](_script__lib_machine_.machine.md#commitdisplay)
* [fillRect](_script__lib_machine_.machine.md#fillrect)
* [log](_script__lib_machine_.machine.md#log)
* [palette](_script__lib_machine_.machine.md#palette)
* [pget](_script__lib_machine_.machine.md#pget)
* [pset](_script__lib_machine_.machine.md#pset)
* [read](_script__lib_machine_.machine.md#read)
* [run](_script__lib_machine_.machine.md#run)
* [setDisplayMode](_script__lib_machine_.machine.md#setdisplaymode)
* [wait](_script__lib_machine_.machine.md#wait)
* [waitForVsync](_script__lib_machine_.machine.md#waitforvsync)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Machine**(url: *`string`*): [Machine](_script__lib_machine_.machine.md)


*Defined in [script/_lib/Machine.ts:9](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L9)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   |  - |





**Returns:** [Machine](_script__lib_machine_.machine.md)

---


## Properties
<a id="url"></a>

###  url

**●  url**:  *`string`* 

*Defined in [script/_lib/Machine.ts:11](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L11)*





___


## Accessors
<a id="displaybitmap"></a>

###  displayBitmap


getdisplayBitmap(): `undefined`⎮`ImageData`

*Defined in [script/_lib/Machine.ts:9](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L9)*





**Returns:** `undefined`⎮`ImageData`



___

<a id="displayheight"></a>

###  displayHeight


getdisplayHeight(): `number`

*Defined in [script/_lib/Machine.ts:8](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L8)*





**Returns:** `number`



___

<a id="displaymode"></a>

###  displayMode


getdisplayMode(): `string`

*Defined in [script/_lib/Machine.ts:6](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L6)*





**Returns:** `string`



___

<a id="displaywidth"></a>

###  displayWidth


getdisplayWidth(): `number`

*Defined in [script/_lib/Machine.ts:7](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L7)*





**Returns:** `number`



___


## Methods
<a id="commitdisplay"></a>

###  commitDisplay

► **commitDisplay**(): `Promise`.<`number`>



*Defined in [script/_lib/Machine.ts:172](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L172)*





**Returns:** `Promise`.<`number`>





___

<a id="fillrect"></a>

###  fillRect

► **fillRect**(x: *`number`*, y: *`number`*, width: *`number`*, height: *`number`*, r: *`number`*, g?: *`number`*, b?: *`number`*): `void`



*Defined in [script/_lib/Machine.ts:94](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L94)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| x | `number`  | - |   - |
| y | `number`  | - |   - |
| width | `number`  | - |   - |
| height | `number`  | - |   - |
| r | `number`  | - |   - |
| g | `number`  |  r |   - |
| b | `number`  |  r |   - |





**Returns:** `void`





___

<a id="log"></a>

###  log

► **log**(msg: *`any`*): `void`



*Defined in [script/_lib/Machine.ts:19](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L19)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| msg | `any`   |  - |





**Returns:** `void`





___

<a id="palette"></a>

###  palette

► **palette**(id: *`number`*, r: *`number`*, g: *`number`*, b: *`number`*): `void`



*Defined in [script/_lib/Machine.ts:141](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L141)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `number`   |  - |
| r | `number`   |  - |
| g | `number`   |  - |
| b | `number`   |  - |





**Returns:** `void`





___

<a id="pget"></a>

###  pget

► **pget**(x: *`number`*, y: *`number`*): `undefined`⎮`number`⎮`Uint8ClampedArray`



*Defined in [script/_lib/Machine.ts:79](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L79)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| x | `number`   |  - |
| y | `number`   |  - |





**Returns:** `undefined`⎮`number`⎮`Uint8ClampedArray`





___

<a id="pset"></a>

###  pset

► **pset**(x: *`number`*, y: *`number`*, r: *`number`*, g?: *`number`*, b?: *`number`*): `void`



*Defined in [script/_lib/Machine.ts:52](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L52)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| x | `number`  | - |   - |
| y | `number`  | - |   - |
| r | `number`  | - |   - |
| g | `number`  |  r |   - |
| b | `number`  |  r |   - |





**Returns:** `void`





___

<a id="read"></a>

###  read

► **read**(filename: *`string`*, options?: *`any`*): `Promise`.<`any`>



*Defined in [script/_lib/Machine.ts:187](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L187)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| filename | `string`  | - |   - |
| options | `any`  |  {} |   - |





**Returns:** `Promise`.<`any`>





___

<a id="run"></a>

###  run

► **run**(wasm: *`ArrayBuffer`*, api?: *`any`*): `Promise`.<`void`>



*Defined in [script/_lib/Machine.ts:191](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L191)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| wasm | `ArrayBuffer`  | - |   - |
| api | `any`  |  this._generateRomApi() |   - |





**Returns:** `Promise`.<`void`>





___

<a id="setdisplaymode"></a>

###  setDisplayMode

► **setDisplayMode**(mode: *"text"⎮"indexed"⎮"rgb"*, width: *`number`*, height: *`number`*, displayWidth?: *`number`*, displayHeight?: *`number`*): `void`



*Defined in [script/_lib/Machine.ts:23](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L23)*



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

<a id="wait"></a>

###  wait

► **wait**(milliseconds?: *`number`*): `Promise`.<`Object`>



*Defined in [script/_lib/Machine.ts:161](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L161)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| milliseconds | `number`  | 0 |   - |





**Returns:** `Promise`.<`Object`>





___

<a id="waitforvsync"></a>

###  waitForVsync

► **waitForVsync**(): `Promise`.<`number`>



*Defined in [script/_lib/Machine.ts:167](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L167)*





**Returns:** `Promise`.<`number`>





___


