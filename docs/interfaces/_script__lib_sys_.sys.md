[cyberterminal](../README.md) > ["script/_lib/Sys"](../modules/_script__lib_sys_.md) > [Sys](../interfaces/_script__lib_sys_.sys.md)



# Interface: Sys


Unified interface to system I/O

## Implemented by

* [ElectronSys](../classes/_script__lib_electronsys_.electronsys.md)
* [WebSys](../classes/_script__lib_websys_.websys.md)


## Properties
<a id="chipsound"></a>

###  chipSound

**●  chipSound**:  *[ChipSound](../classes/_script__lib_chipsound_.chipsound.md)* 

*Defined in [script/_lib/Sys.ts:18](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L18)*



Tone generator.




___

<a id="displaybitmap"></a>

### «Optional» displayBitmap

**●  displayBitmap**:  *`ImageData`* 

*Defined in [script/_lib/Sys.ts:16](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L16)*



The current display bitmap.




___

<a id="displayheight"></a>

###  displayHeight

**●  displayHeight**:  *`number`* 

*Defined in [script/_lib/Sys.ts:14](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L14)*



The current height of the display in characters or pixels.




___

<a id="displaymode"></a>

###  displayMode

**●  displayMode**:  *`string`* 

*Defined in [script/_lib/Sys.ts:10](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L10)*



Name of current display mode.




___

<a id="displaywidth"></a>

###  displayWidth

**●  displayWidth**:  *`number`* 

*Defined in [script/_lib/Sys.ts:12](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L12)*



The current width of the display in characters or pixels.




___

<a id="gameinput"></a>

###  gameInput

**●  gameInput**:  *[GameInput](../classes/_script__lib_gameinput_.gameinput.md)* 

*Defined in [script/_lib/Sys.ts:22](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L22)*



Game input state.




___

<a id="mouseinput"></a>

###  mouseInput

**●  mouseInput**:  *[MouseInput](../classes/_script__lib_mouseinput_.mouseinput.md)* 

*Defined in [script/_lib/Sys.ts:20](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L20)*



Mouse input state.




___


## Methods
<a id="createmachine"></a>

###  createMachine

► **createMachine**(): [MachineWorker](_script__lib_machineworker_.machineworker.md)



*Defined in [script/_lib/Sys.ts:41](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L41)*



Create a machine.




**Returns:** [MachineWorker](_script__lib_machineworker_.machineworker.md)
the worker running the machine






___

<a id="drawbitmap"></a>

###  drawBitmap

► **drawBitmap**(): `void`



*Defined in [script/_lib/Sys.ts:35](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L35)*



Draw current bitmap to screen.




**Returns:** `void`





___

<a id="setdisplaymode"></a>

###  setDisplayMode

► **setDisplayMode**(mode: *"text"⎮"indexed"⎮"rgb"*, width: *`number`*, height: *`number`*): `void`



*Defined in [script/_lib/Sys.ts:30](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Sys.ts#L30)*



Switch display mode.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| mode | "text"⎮"indexed"⎮"rgb"   |  Name of mode to switch to |
| width | `number`   |  The width of the display in characters or pixels |
| height | `number`   |  The height of the display in characters or pixels |





**Returns:** `void`





___


