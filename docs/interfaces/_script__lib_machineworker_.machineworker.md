[cyberterminal](../README.md) > ["script/_lib/MachineWorker"](../modules/_script__lib_machineworker_.md) > [MachineWorker](../interfaces/_script__lib_machineworker_.machineworker.md)

# Interface: MachineWorker

Interface to MachineWorker

## Hierarchy

**MachineWorker**

## Implemented by

* [WebMachineWorker](../classes/_script__lib_websys_.webmachineworker.md)

## Index

### Properties

* [baseUrl](_script__lib_machineworker_.machineworker.md#baseurl)

### Methods

* [onMessage](_script__lib_machineworker_.machineworker.md#onmessage)
* [send](_script__lib_machineworker_.machineworker.md#send)
* [terminate](_script__lib_machineworker_.machineworker.md#terminate)

---

## Properties

<a id="baseurl"></a>

###  baseUrl

**● baseUrl**: *`string`*

*Defined in [script/_lib/MachineWorker.ts:6](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/MachineWorker.ts#L6)*

Current base URL.

___

## Methods

<a id="onmessage"></a>

###  onMessage

▸ **onMessage**(listener: *`Function`*): `void`

*Defined in [script/_lib/MachineWorker.ts:19](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/MachineWorker.ts#L19)*

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

*Defined in [script/_lib/MachineWorker.ts:13](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/MachineWorker.ts#L13)*

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

*Defined in [script/_lib/MachineWorker.ts:24](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/MachineWorker.ts#L24)*

Terminate the machine!

**Returns:** `void`

___

