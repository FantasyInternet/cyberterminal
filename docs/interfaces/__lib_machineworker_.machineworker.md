[cyberterminal](../README.md) > ["_lib/MachineWorker"](../modules/__lib_machineworker_.md) > [MachineWorker](../interfaces/__lib_machineworker_.machineworker.md)

# Interface: MachineWorker

Interface to MachineWorker

## Hierarchy

**MachineWorker**

## Implemented by

* [WebMachineWorker](../classes/__lib_websys_.webmachineworker.md)

## Index

### Methods

* [onMessage](__lib_machineworker_.machineworker.md#onmessage)
* [send](__lib_machineworker_.machineworker.md#send)
* [terminate](__lib_machineworker_.machineworker.md#terminate)

---

## Methods

<a id="onmessage"></a>

###  onMessage

▸ **onMessage**(listener: *`Function`*): `void`

*Defined in [_lib/MachineWorker.ts:16](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/MachineWorker.ts#L16)*

Register an event listener for received messages.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| listener | `Function` |  Callback function to call whenever a message is received |

**Returns:** `void`

___
<a id="send"></a>

###  send

▸ **send**(msg: *`any`*, transferables?: *`any`[]*): `void`

*Defined in [_lib/MachineWorker.ts:10](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/MachineWorker.ts#L10)*

Send a message to machine.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| msg | `any` |  Message to send |
| `Optional` transferables | `any`[] |  Objects to transfer |

**Returns:** `void`

___
<a id="terminate"></a>

###  terminate

▸ **terminate**(): `void`

*Defined in [_lib/MachineWorker.ts:21](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/MachineWorker.ts#L21)*

Terminate the machine!

**Returns:** `void`

___

