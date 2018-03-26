[cyberterminal](../README.md) > ["_classes/Sys"](../modules/__classes_sys_.md) > [Sys](../interfaces/__classes_sys_.sys.md)



# Interface: Sys


Unified interface to system I/O

## Implemented by

* [WebSys](../classes/_web_sys_.websys.md)


## Properties
<a id="displayheight"></a>

### «Optional» displayHeight

**●  displayHeight**:  *`undefined`⎮`number`* 

*Defined in _classes/Sys.ts:7*





___

<a id="displaymode"></a>

### «Optional» displayMode

**●  displayMode**:  *`undefined`⎮`string`* 

*Defined in _classes/Sys.ts:5*





___

<a id="displaywidth"></a>

### «Optional» displayWidth

**●  displayWidth**:  *`undefined`⎮`number`* 

*Defined in _classes/Sys.ts:6*





___


## Methods
<a id="log"></a>

###  log

► **log**(msg: *`any`*): `void`



*Defined in _classes/Sys.ts:14*



Write something to console.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| msg | `any`   |  Something to write |





**Returns:** `void`





___

<a id="setdisplaymode"></a>

###  setDisplayMode

► **setDisplayMode**(mode: *"text"⎮"bitmap"*, width: *`number`*, height: *`number`*): `void`



*Defined in _classes/Sys.ts:22*



Switch display mode.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| mode | "text"⎮"bitmap"   |  Name of mode to switch to |
| width | `number`   |  The width of the display in characters or pixels |
| height | `number`   |  The height of the display in characters or pixels |





**Returns:** `void`





___


