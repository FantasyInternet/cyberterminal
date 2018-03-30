[cyberterminal](../README.md) > ["_lib/MachineWorker"](../modules/__lib_machineworker_.md) > [MachineWorker](../interfaces/__lib_machineworker_.machineworker.md)



# Interface: MachineWorker


Interface to MachineWorker

## Implemented by

* [WebMachineWorker](../classes/__lib_websys_.webmachineworker.md)


## Methods
<a id="onmessage"></a>

###  onMessage

► **onMessage**(listener: *`Function`*): `void`



*Defined in _lib/MachineWorker.ts:16*



Register an event listener for received messages.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| listener | `Function`   |  Callback function to call whenever a message is received |





**Returns:** `void`





___

<a id="send"></a>

###  send

► **send**(msg: *`any`*, transferables?: *`any`[]*): `void`



*Defined in _lib/MachineWorker.ts:10*



Send a message to machine.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| msg | `any`   |  Message to send |
| transferables | `any`[]   |  Objects to transfer |





**Returns:** `void`





___


