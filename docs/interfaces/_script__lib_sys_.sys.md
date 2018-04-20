[cyberterminal](../README.md) > ["script/_lib/Sys"](../modules/_script__lib_sys_.md) > [Sys](../interfaces/_script__lib_sys_.sys.md)



# Interface: Sys


Unified interface to system I/O

## Implemented by

* [ElectronSys](../classes/_script__lib_electronsys_.electronsys.md)
* [WebSys](../classes/_script__lib_websys_.websys.md)


## Properties
<a id="displaybitmap"></a>

### «Optional» displayBitmap

**●  displayBitmap**:  *`ImageData`* 

*Defined in [script/_lib/Sys.ts:12](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L12)*



The current display bitmap.




___

<a id="displayheight"></a>

###  displayHeight

**●  displayHeight**:  *`number`* 

*Defined in [script/_lib/Sys.ts:10](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L10)*



The current height of the display in characters or pixels.




___

<a id="displaymode"></a>

###  displayMode

**●  displayMode**:  *`string`* 

*Defined in [script/_lib/Sys.ts:6](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L6)*



Name of current display mode.




___

<a id="displaywidth"></a>

###  displayWidth

**●  displayWidth**:  *`number`* 

*Defined in [script/_lib/Sys.ts:8](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L8)*



The current width of the display in characters or pixels.




___


## Methods
<a id="createmachine"></a>

###  createMachine

► **createMachine**(): [MachineWorker](_script__lib_machineworker_.machineworker.md)



*Defined in [script/_lib/Sys.ts:31](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L31)*



Create a machine.




**Returns:** [MachineWorker](_script__lib_machineworker_.machineworker.md)
the worker running the machine






___

<a id="drawbitmap"></a>

###  drawBitmap

► **drawBitmap**(): `void`



*Defined in [script/_lib/Sys.ts:25](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L25)*



Draw current bitmap to screen.




**Returns:** `void`





___

<a id="ongameinput"></a>

###  onGameInput

► **onGameInput**(fn: *`Function`*): `void`



*Defined in [script/_lib/Sys.ts:37](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L37)*



Register a listener for game input events.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| fn | `Function`   |  Function to call whenever game input state changes |





**Returns:** `void`





___

<a id="setdisplaymode"></a>

###  setDisplayMode

► **setDisplayMode**(mode: *"text"⎮"indexed"⎮"rgb"*, width: *`number`*, height: *`number`*): `void`



*Defined in [script/_lib/Sys.ts:20](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L20)*



Switch display mode.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| mode | "text"⎮"indexed"⎮"rgb"   |  Name of mode to switch to |
| width | `number`   |  The width of the display in characters or pixels |
| height | `number`   |  The height of the display in characters or pixels |





**Returns:** `void`





___


