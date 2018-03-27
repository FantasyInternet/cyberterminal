[cyberterminal](../README.md) > ["web-sys"](../modules/_web_sys_.md) > [WebSys](../classes/_web_sys_.websys.md)



# Class: WebSys


Sys implementation for web browsers. See [Sys](../interfaces/__classes_sys_.sys.md) for documentation

## Implements

* [Sys](../interfaces/__classes_sys_.sys.md)

## Index

### Constructors

* [constructor](_web_sys_.websys.md#constructor)


### Accessors

* [displayBitmap](_web_sys_.websys.md#displaybitmap)
* [displayHeight](_web_sys_.websys.md#displayheight)
* [displayMode](_web_sys_.websys.md#displaymode)
* [displayWidth](_web_sys_.websys.md#displaywidth)


### Methods

* [fillRect](_web_sys_.websys.md#fillrect)
* [log](_web_sys_.websys.md#log)
* [pget](_web_sys_.websys.md#pget)
* [pset](_web_sys_.websys.md#pset)
* [setDisplayMode](_web_sys_.websys.md#setdisplaymode)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new WebSys**(_container: *`HTMLElement`*): [WebSys](_web_sys_.websys.md)


*Defined in [web-sys.ts:11](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/web-sys.ts#L11)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| _container | `HTMLElement`   |  - |





**Returns:** [WebSys](_web_sys_.websys.md)

---


## Accessors
<a id="displaybitmap"></a>

###  displayBitmap


getdisplayBitmap(): `undefined`⎮`ImageData`

*Defined in [web-sys.ts:11](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/web-sys.ts#L11)*





**Returns:** `undefined`⎮`ImageData`



___

<a id="displayheight"></a>

###  displayHeight


getdisplayHeight(): `number`

*Defined in [web-sys.ts:10](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/web-sys.ts#L10)*





**Returns:** `number`



___

<a id="displaymode"></a>

###  displayMode


getdisplayMode(): `string`

*Defined in [web-sys.ts:8](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/web-sys.ts#L8)*





**Returns:** `string`



___

<a id="displaywidth"></a>

###  displayWidth


getdisplayWidth(): `number`

*Defined in [web-sys.ts:9](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/web-sys.ts#L9)*





**Returns:** `number`



___


## Methods
<a id="fillrect"></a>

###  fillRect

► **fillRect**(x: *`number`*, y: *`number`*, width: *`number`*, height: *`number`*, r: *`number`*, g: *`number`*, b: *`number`*): `void`



*Implementation of [Sys](../interfaces/__classes_sys_.sys.md).[fillRect](../interfaces/__classes_sys_.sys.md#fillrect)*

*Defined in [web-sys.ts:79](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/web-sys.ts#L79)*



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

*Defined in [web-sys.ts:18](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/web-sys.ts#L18)*



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

*Defined in [web-sys.ts:68](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/web-sys.ts#L68)*



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

*Defined in [web-sys.ts:49](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/web-sys.ts#L49)*



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

*Defined in [web-sys.ts:22](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/web-sys.ts#L22)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| mode | "text"⎮"bitmap"   |  - |
| width | `number`   |  - |
| height | `number`   |  - |





**Returns:** `void`





___


