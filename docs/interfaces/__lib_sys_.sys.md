[cyberterminal](../README.md) > ["_lib/Sys"](../modules/__lib_sys_.md) > [Sys](../interfaces/__lib_sys_.sys.md)



# Interface: Sys


Unified interface to system I/O

## Implemented by

* [WebSys](../classes/__lib_websys_.websys.md)


## Properties
<a id="displaybitmap"></a>

### «Optional» displayBitmap

**●  displayBitmap**:  *`ImageData`* 

*Defined in [_lib/Sys.ts:12](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L12)*



The current display bitmap.




___

<a id="displayheight"></a>

###  displayHeight

**●  displayHeight**:  *`number`* 

*Defined in [_lib/Sys.ts:10](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L10)*



The current height of the display in characters or pixels.




___

<a id="displaymode"></a>

###  displayMode

**●  displayMode**:  *`string`* 

*Defined in [_lib/Sys.ts:6](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L6)*



Name of current display mode.




___

<a id="displaywidth"></a>

###  displayWidth

**●  displayWidth**:  *`number`* 

*Defined in [_lib/Sys.ts:8](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L8)*



The current width of the display in characters or pixels.




___


## Methods
<a id="createmachine"></a>

###  createMachine

► **createMachine**(): [MachineWorker](__lib_machineworker_.machineworker.md)



*Defined in [_lib/Sys.ts:26](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L26)*



Create a machine.




**Returns:** [MachineWorker](__lib_machineworker_.machineworker.md)
the worker running the machine






___

<a id="setdisplaymode"></a>

###  setDisplayMode

► **setDisplayMode**(mode: *"text"⎮"bitmap"*, width: *`number`*, height: *`number`*): `void`



*Defined in [_lib/Sys.ts:20](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L20)*



Switch display mode.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| mode | "text"⎮"bitmap"   |  Name of mode to switch to |
| width | `number`   |  The width of the display in characters or pixels |
| height | `number`   |  The height of the display in characters or pixels |





**Returns:** `void`





___


