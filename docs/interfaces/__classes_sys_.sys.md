[cyberterminal](../README.md) > ["_classes/Sys"](../modules/__classes_sys_.md) > [Sys](../interfaces/__classes_sys_.sys.md)



# Interface: Sys


Unified interface to system I/O

## Implemented by

* [WebSys](../classes/_web_sys_.websys.md)


## Properties
<a id="displaybitmap"></a>

### «Optional» displayBitmap

**●  displayBitmap**:  *`ImageData`* 

*Defined in _classes/Sys.ts:12*



The current display bitmap.




___

<a id="displayheight"></a>

###  displayHeight

**●  displayHeight**:  *`number`* 

*Defined in _classes/Sys.ts:10*



The current height of the display in characters or pixels.




___

<a id="displaymode"></a>

###  displayMode

**●  displayMode**:  *`string`* 

*Defined in _classes/Sys.ts:6*



Name of current display mode.




___

<a id="displaywidth"></a>

###  displayWidth

**●  displayWidth**:  *`number`* 

*Defined in _classes/Sys.ts:8*



The current width of the display in characters or pixels.




___


## Methods
<a id="log"></a>

###  log

► **log**(msg: *`any`*): `void`



*Defined in _classes/Sys.ts:19*



Write something to console.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| msg | `any`   |  Something to write |





**Returns:** `void`





___

<a id="pget"></a>

###  pget

► **pget**(x: *`number`*, y: *`number`*): `Uint8ClampedArray`



*Defined in _classes/Sys.ts:46*



Get a specific pixel and return its color.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| x | `number`   |  X coordinate |
| y | `number`   |  Y coordinate |





**Returns:** `Uint8ClampedArray`
The red,green,blue and alpha values in an array.






___

<a id="pset"></a>

###  pset

► **pset**(x: *`number`*, y: *`number`*, r: *`number`*, g: *`number`*, b: *`number`*, a?: *`undefined`⎮`number`*): `void`



*Defined in _classes/Sys.ts:38*



Set a specific pixel a specific color.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| x | `number`   |  X coordinate |
| y | `number`   |  Y coordinate |
| r | `number`   |  Red |
| g | `number`   |  Green |
| b | `number`   |  Blue |
| a | `undefined`⎮`number`   |  Alpha (default 255) |





**Returns:** `void`





___

<a id="setdisplaymode"></a>

###  setDisplayMode

► **setDisplayMode**(mode: *"text"⎮"bitmap"*, width: *`number`*, height: *`number`*): `void`



*Defined in _classes/Sys.ts:27*



Switch display mode.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| mode | "text"⎮"bitmap"   |  Name of mode to switch to |
| width | `number`   |  The width of the display in characters or pixels |
| height | `number`   |  The height of the display in characters or pixels |





**Returns:** `void`





___


