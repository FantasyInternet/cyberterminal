[cyberterminal](../README.md) > ["script/_lib/WebSys"](../modules/_script__lib_websys_.md) > [WebMachineWorker](../classes/_script__lib_websys_.webmachineworker.md)

# Class: WebMachineWorker

## Hierarchy

**WebMachineWorker**

## Implements

* [MachineWorker](../interfaces/_script__lib_machineworker_.machineworker.md)

## Index

### Constructors

* [constructor](_script__lib_websys_.webmachineworker.md#constructor)

### Properties

* [worker](_script__lib_websys_.webmachineworker.md#worker)

### Methods

* [onMessage](_script__lib_websys_.webmachineworker.md#onmessage)
* [send](_script__lib_websys_.webmachineworker.md#send)
* [terminate](_script__lib_websys_.webmachineworker.md#terminate)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new WebMachineWorker**(): [WebMachineWorker](_script__lib_websys_.webmachineworker.md)

*Defined in [script/_lib/WebSys.ts:572](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L572)*

**Returns:** [WebMachineWorker](_script__lib_websys_.webmachineworker.md)

___

## Properties

<a id="worker"></a>

###  worker

**● worker**: *`Worker`*

*Defined in [script/_lib/WebSys.ts:572](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L572)*

___

## Methods

<a id="onmessage"></a>

###  onMessage

▸ **onMessage**(listener: *`Function`*): `void`

*Implementation of [MachineWorker](../interfaces/_script__lib_machineworker_.machineworker.md).[onMessage](../interfaces/_script__lib_machineworker_.machineworker.md#onmessage)*

*Defined in [script/_lib/WebSys.ts:582](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L582)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| listener | `Function` |

**Returns:** `void`

___
<a id="send"></a>

###  send

▸ **send**(msg: *`any`*, transferables?: * `any`[] &#124; `undefined`*): `void`

*Defined in [script/_lib/WebSys.ts:578](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L578)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| msg | `any` |
| `Optional` transferables |  `any`[] &#124; `undefined`|

**Returns:** `void`

___
<a id="terminate"></a>

###  terminate

▸ **terminate**(): `void`

*Implementation of [MachineWorker](../interfaces/_script__lib_machineworker_.machineworker.md).[terminate](../interfaces/_script__lib_machineworker_.machineworker.md#terminate)*

*Defined in [script/_lib/WebSys.ts:588](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L588)*

**Returns:** `void`

___

