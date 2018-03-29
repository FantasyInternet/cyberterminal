[cyberterminal](../README.md) > ["web-cpu"](../modules/_web_cpu_.md) > [WebCpu](../classes/_web_cpu_.webcpu.md)



# Class: WebCpu


Central processing unit for browsers See [Sys](../interfaces/__classes_sys_.sys.md) for documentation

## Implements

* [Sys](../interfaces/__classes_sys_.sys.md)

## Index

### Constructors

* [constructor](_web_cpu_.webcpu.md#constructor)


### Accessors

* [displayBitmap](_web_cpu_.webcpu.md#displaybitmap)
* [displayHeight](_web_cpu_.webcpu.md#displayheight)
* [displayMode](_web_cpu_.webcpu.md#displaymode)
* [displayWidth](_web_cpu_.webcpu.md#displaywidth)


### Methods

* [commitDisplay](_web_cpu_.webcpu.md#commitdisplay)
* [fillRect](_web_cpu_.webcpu.md#fillrect)
* [log](_web_cpu_.webcpu.md#log)
* [pget](_web_cpu_.webcpu.md#pget)
* [pset](_web_cpu_.webcpu.md#pset)
* [setDisplayMode](_web_cpu_.webcpu.md#setdisplaymode)
* [wait](_web_cpu_.webcpu.md#wait)
* [waitForVsync](_web_cpu_.webcpu.md#waitforvsync)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new WebCpu**(): [WebCpu](_web_cpu_.webcpu.md)


*Defined in [web-cpu.ts:11](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/web-cpu.ts#L11)*





**Returns:** [WebCpu](_web_cpu_.webcpu.md)

---


## Accessors
<a id="displaybitmap"></a>

###  displayBitmap


getdisplayBitmap(): `undefined`⎮`ImageData`

*Defined in [web-cpu.ts:11](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/web-cpu.ts#L11)*





**Returns:** `undefined`⎮`ImageData`



___

<a id="displayheight"></a>

###  displayHeight


getdisplayHeight(): `number`

*Defined in [web-cpu.ts:10](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/web-cpu.ts#L10)*





**Returns:** `number`



___

<a id="displaymode"></a>

###  displayMode


getdisplayMode(): `string`

*Defined in [web-cpu.ts:8](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/web-cpu.ts#L8)*





**Returns:** `string`



___

<a id="displaywidth"></a>

###  displayWidth


getdisplayWidth(): `number`

*Defined in [web-cpu.ts:9](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/web-cpu.ts#L9)*





**Returns:** `number`



___


## Methods
<a id="commitdisplay"></a>

###  commitDisplay

► **commitDisplay**(): `Promise`.<`number`>



*Defined in [web-cpu.ts:131](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/web-cpu.ts#L131)*





**Returns:** `Promise`.<`number`>





___

<a id="fillrect"></a>

###  fillRect

► **fillRect**(x: *`number`*, y: *`number`*, width: *`number`*, height: *`number`*, r: *`number`*, g: *`number`*, b: *`number`*): `void`



*Implementation of [Sys](../interfaces/__classes_sys_.sys.md).[fillRect](../interfaces/__classes_sys_.sys.md#fillrect)*

*Defined in [web-cpu.ts:84](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/web-cpu.ts#L84)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| x | `number`   |  - |
| y | `number`   |  - |
| width | `number`   |  - |
| height | `number`   |  - |
| r | `number`   |  - |
| g | `number`   |  - |
| b | `number`   |  - |





**Returns:** `void`





___

<a id="log"></a>

###  log

► **log**(msg: *`any`*): `void`



*Implementation of [Sys](../interfaces/__classes_sys_.sys.md).[log](../interfaces/__classes_sys_.sys.md#log)*

*Defined in [web-cpu.ts:24](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/web-cpu.ts#L24)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| msg | `any`   |  - |





**Returns:** `void`





___

<a id="pget"></a>

###  pget

► **pget**(x: *`number`*, y: *`number`*): `Uint8ClampedArray`



*Implementation of [Sys](../interfaces/__classes_sys_.sys.md).[pget](../interfaces/__classes_sys_.sys.md#pget)*

*Defined in [web-cpu.ts:73](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/web-cpu.ts#L73)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| x | `number`   |  - |
| y | `number`   |  - |





**Returns:** `Uint8ClampedArray`





___

<a id="pset"></a>

###  pset

► **pset**(x: *`number`*, y: *`number`*, r: *`number`*, g: *`number`*, b: *`number`*): `void`



*Implementation of [Sys](../interfaces/__classes_sys_.sys.md).[pset](../interfaces/__classes_sys_.sys.md#pset)*

*Defined in [web-cpu.ts:53](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/web-cpu.ts#L53)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| x | `number`   |  - |
| y | `number`   |  - |
| r | `number`   |  - |
| g | `number`   |  - |
| b | `number`   |  - |





**Returns:** `void`





___

<a id="setdisplaymode"></a>

###  setDisplayMode

► **setDisplayMode**(mode: *"text"⎮"bitmap"*, width: *`number`*, height: *`number`*, displayWidth?: *`number`*, displayHeight?: *`number`*): `void`



*Defined in [web-cpu.ts:28](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/web-cpu.ts#L28)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| mode | "text"⎮"bitmap"  | - |   - |
| width | `number`  | - |   - |
| height | `number`  | - |   - |
| displayWidth | `number`  |  width |   - |
| displayHeight | `number`  |  height |   - |





**Returns:** `void`





___

<a id="wait"></a>

###  wait

► **wait**(milliseconds?: *`number`*): `Promise`.<`Object`>



*Defined in [web-cpu.ts:120](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/web-cpu.ts#L120)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| milliseconds | `number`  | 0 |   - |





**Returns:** `Promise`.<`Object`>





___

<a id="waitforvsync"></a>

###  waitForVsync

► **waitForVsync**(): `Promise`.<`number`>



*Defined in [web-cpu.ts:126](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/web-cpu.ts#L126)*





**Returns:** `Promise`.<`number`>





___


