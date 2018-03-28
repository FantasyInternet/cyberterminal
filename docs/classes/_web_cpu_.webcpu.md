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

* [fillRect](_web_cpu_.webcpu.md#fillrect)
* [log](_web_cpu_.webcpu.md#log)
* [pget](_web_cpu_.webcpu.md#pget)
* [pset](_web_cpu_.webcpu.md#pset)
* [setDisplayMode](_web_cpu_.webcpu.md#setdisplaymode)
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
<a id="fillrect"></a>

###  fillRect

► **fillRect**(x: *`number`*, y: *`number`*, width: *`number`*, height: *`number`*, r: *`number`*, g: *`number`*, b: *`number`*): `void`



*Implementation of [Sys](../interfaces/__classes_sys_.sys.md).[fillRect](../interfaces/__classes_sys_.sys.md#fillrect)*

*Defined in [web-cpu.ts:86](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/web-cpu.ts#L86)*



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

*Defined in [web-cpu.ts:26](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/web-cpu.ts#L26)*



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

*Defined in [web-cpu.ts:75](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/web-cpu.ts#L75)*



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

*Defined in [web-cpu.ts:55](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/web-cpu.ts#L55)*



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

► **setDisplayMode**(mode: *"text"⎮"bitmap"*, width: *`number`*, height: *`number`*): `void`



*Implementation of [Sys](../interfaces/__classes_sys_.sys.md).[setDisplayMode](../interfaces/__classes_sys_.sys.md#setdisplaymode)*

*Defined in [web-cpu.ts:30](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/web-cpu.ts#L30)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| mode | "text"⎮"bitmap"   |  - |
| width | `number`   |  - |
| height | `number`   |  - |





**Returns:** `void`





___

<a id="waitforvsync"></a>

###  waitForVsync

► **waitForVsync**(): `Promise`.<`Object`>



*Defined in [web-cpu.ts:122](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/web-cpu.ts#L122)*





**Returns:** `Promise`.<`Object`>





___


