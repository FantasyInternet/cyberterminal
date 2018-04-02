[cyberterminal](../README.md) > ["_lib/Machine"](../modules/__lib_machine_.md) > [Machine](../classes/__lib_machine_.machine.md)



# Class: Machine


Central processing unit for browsers See [Sys](../interfaces/__classes_sys_.sys.md) for documentation

## Index

### Constructors

* [constructor](__lib_machine_.machine.md#constructor)


### Properties

* [url](__lib_machine_.machine.md#url)


### Accessors

* [displayBitmap](__lib_machine_.machine.md#displaybitmap)
* [displayHeight](__lib_machine_.machine.md#displayheight)
* [displayMode](__lib_machine_.machine.md#displaymode)
* [displayWidth](__lib_machine_.machine.md#displaywidth)


### Methods

* [commitDisplay](__lib_machine_.machine.md#commitdisplay)
* [fillRect](__lib_machine_.machine.md#fillrect)
* [log](__lib_machine_.machine.md#log)
* [palette](__lib_machine_.machine.md#palette)
* [pget](__lib_machine_.machine.md#pget)
* [pset](__lib_machine_.machine.md#pset)
* [setDisplayMode](__lib_machine_.machine.md#setdisplaymode)
* [wait](__lib_machine_.machine.md#wait)
* [waitForVsync](__lib_machine_.machine.md#waitforvsync)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Machine**(url: *`string`*): [Machine](__lib_machine_.machine.md)


*Defined in [_lib/Machine.ts:9](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L9)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   |  - |





**Returns:** [Machine](__lib_machine_.machine.md)

---


## Properties
<a id="url"></a>

###  url

**●  url**:  *`string`* 

*Defined in [_lib/Machine.ts:11](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L11)*





___


## Accessors
<a id="displaybitmap"></a>

###  displayBitmap


getdisplayBitmap(): `undefined`⎮`ImageData`

*Defined in [_lib/Machine.ts:9](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L9)*





**Returns:** `undefined`⎮`ImageData`



___

<a id="displayheight"></a>

###  displayHeight


getdisplayHeight(): `number`

*Defined in [_lib/Machine.ts:8](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L8)*





**Returns:** `number`



___

<a id="displaymode"></a>

###  displayMode


getdisplayMode(): `string`

*Defined in [_lib/Machine.ts:6](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L6)*





**Returns:** `string`



___

<a id="displaywidth"></a>

###  displayWidth


getdisplayWidth(): `number`

*Defined in [_lib/Machine.ts:7](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L7)*





**Returns:** `number`



___


## Methods
<a id="commitdisplay"></a>

###  commitDisplay

► **commitDisplay**(): `Promise`.<`number`>



*Defined in [_lib/Machine.ts:168](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L168)*





**Returns:** `Promise`.<`number`>





___

<a id="fillrect"></a>

###  fillRect

► **fillRect**(x: *`number`*, y: *`number`*, width: *`number`*, height: *`number`*, r: *`number`*, g?: *`number`*, b?: *`number`*): `void`



*Defined in [_lib/Machine.ts:98](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L98)*



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



*Defined in [_lib/Machine.ts:22](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L22)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| msg | `any`   |  - |





**Returns:** `void`





___

<a id="palette"></a>

###  palette

► **palette**(id: *`number`*, r: *`number`*, g: *`number`*, b: *`number`*): `void`



*Defined in [_lib/Machine.ts:143](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L143)*



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



*Defined in [_lib/Machine.ts:83](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L83)*



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



*Defined in [_lib/Machine.ts:58](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L58)*



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

<a id="setdisplaymode"></a>

###  setDisplayMode

► **setDisplayMode**(mode: *"text"⎮"indexed"⎮"rgb"*, width: *`number`*, height: *`number`*, displayWidth?: *`number`*, displayHeight?: *`number`*): `void`



*Defined in [_lib/Machine.ts:26](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L26)*



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



*Defined in [_lib/Machine.ts:157](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L157)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| milliseconds | `number`  | 0 |   - |





**Returns:** `Promise`.<`Object`>





___

<a id="waitforvsync"></a>

###  waitForVsync

► **waitForVsync**(): `Promise`.<`number`>



*Defined in [_lib/Machine.ts:163](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L163)*





**Returns:** `Promise`.<`number`>





___


