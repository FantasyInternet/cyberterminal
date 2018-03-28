[cyberterminal](../README.md) > ["web-sys"](../modules/_web_sys_.md) > [WebSys](../classes/_web_sys_.websys.md)



# Class: WebSys


Sys implementation for web browsers.

## Index

### Constructors

* [constructor](_web_sys_.websys.md#constructor)


### Accessors

* [displayBitmap](_web_sys_.websys.md#displaybitmap)
* [displayHeight](_web_sys_.websys.md#displayheight)
* [displayMode](_web_sys_.websys.md#displaymode)
* [displayWidth](_web_sys_.websys.md#displaywidth)


### Methods

* [setDisplayMode](_web_sys_.websys.md#setdisplaymode)
* [waitForVsync](_web_sys_.websys.md#waitforvsync)



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
<a id="setdisplaymode"></a>

###  setDisplayMode

► **setDisplayMode**(mode: *"text"⎮"bitmap"*, width: *`number`*, height: *`number`*): `void`



*Defined in [web-sys.ts:19](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/web-sys.ts#L19)*



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



*Defined in [web-sys.ts:46](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/web-sys.ts#L46)*





**Returns:** `Promise`.<`Object`>





___


