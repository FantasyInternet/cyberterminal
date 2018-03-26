[cyberterminal](../README.md) > ["web-sys"](../modules/_web_sys_.md) > [WebSys](../classes/_web_sys_.websys.md)



# Class: WebSys


Sys implementation for web browsers. See [Sys](../interfaces/__classes_sys_.sys.md) for documentation

## Implements

* [Sys](../interfaces/__classes_sys_.sys.md)

## Index

### Accessors

* [displayBitmap](_web_sys_.websys.md#displaybitmap)
* [displayHeight](_web_sys_.websys.md#displayheight)
* [displayMode](_web_sys_.websys.md#displaymode)
* [displayWidth](_web_sys_.websys.md#displaywidth)


### Methods

* [log](_web_sys_.websys.md#log)
* [pget](_web_sys_.websys.md#pget)
* [pset](_web_sys_.websys.md#pset)
* [setDisplayMode](_web_sys_.websys.md#setdisplaymode)



---
## Accessors
<a id="displaybitmap"></a>

###  displayBitmap


getdisplayBitmap(): `undefined`⎮`ImageData`

*Defined in web-sys.ts:11*





**Returns:** `undefined`⎮`ImageData`



___

<a id="displayheight"></a>

###  displayHeight


getdisplayHeight(): `number`

*Defined in web-sys.ts:10*





**Returns:** `number`



___

<a id="displaymode"></a>

###  displayMode


getdisplayMode(): `string`

*Defined in web-sys.ts:8*





**Returns:** `string`



___

<a id="displaywidth"></a>

###  displayWidth


getdisplayWidth(): `number`

*Defined in web-sys.ts:9*





**Returns:** `number`



___


## Methods
<a id="log"></a>

###  log

► **log**(msg: *`any`*): `void`



*Implementation of [Sys](../interfaces/__classes_sys_.sys.md).[log](../interfaces/__classes_sys_.sys.md#log)*

*Defined in web-sys.ts:13*



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

*Defined in web-sys.ts:58*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| x | `number`   |  - |
| y | `number`   |  - |





**Returns:** `Uint8ClampedArray`





___

<a id="pset"></a>

###  pset

► **pset**(x: *`number`*, y: *`number`*, r: *`number`*, g: *`number`*, b: *`number`*, a?: *`number`*): `void`



*Defined in web-sys.ts:40*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| x | `number`  | - |   - |
| y | `number`  | - |   - |
| r | `number`  | - |   - |
| g | `number`  | - |   - |
| b | `number`  | - |   - |
| a | `number`  | 255 |   - |





**Returns:** `void`





___

<a id="setdisplaymode"></a>

###  setDisplayMode

► **setDisplayMode**(mode: *"text"⎮"bitmap"*, width: *`number`*, height: *`number`*): `void`



*Implementation of [Sys](../interfaces/__classes_sys_.sys.md).[setDisplayMode](../interfaces/__classes_sys_.sys.md#setdisplaymode)*

*Defined in web-sys.ts:17*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| mode | "text"⎮"bitmap"   |  - |
| width | `number`   |  - |
| height | `number`   |  - |





**Returns:** `void`





___


