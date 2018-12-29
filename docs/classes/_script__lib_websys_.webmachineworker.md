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

* [baseUrl](_script__lib_websys_.webmachineworker.md#baseurl)
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

*Defined in [script/_lib/WebSys.ts:706](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L706)*

**Returns:** [WebMachineWorker](_script__lib_websys_.webmachineworker.md)

___

## Properties

<a id="baseurl"></a>

###  baseUrl

**● baseUrl**: *`string`* = ""

*Implementation of [MachineWorker](../interfaces/_script__lib_machineworker_.machineworker.md).[baseUrl](../interfaces/_script__lib_machineworker_.machineworker.md#baseurl)*

*Defined in [script/_lib/WebSys.ts:706](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L706)*

___
<a id="worker"></a>

###  worker

**● worker**: *`Worker`*

*Defined in [script/_lib/WebSys.ts:705](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L705)*

___

## Methods

<a id="onmessage"></a>

###  onMessage

▸ **onMessage**(listener: *`Function`*): `void`

*Implementation of [MachineWorker](../interfaces/_script__lib_machineworker_.machineworker.md).[onMessage](../interfaces/_script__lib_machineworker_.machineworker.md#onmessage)*

*Defined in [script/_lib/WebSys.ts:716](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L716)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| listener | `Function` |

**Returns:** `void`

___
<a id="send"></a>

###  send

▸ **send**(msg: *`any`*, transferables?: *`any`[] | `undefined`*): `void`

*Defined in [script/_lib/WebSys.ts:712](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L712)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| msg | `any` |
| `Optional` transferables | `any`[] | `undefined` |

**Returns:** `void`

___
<a id="terminate"></a>

###  terminate

▸ **terminate**(): `void`

*Implementation of [MachineWorker](../interfaces/_script__lib_machineworker_.machineworker.md).[terminate](../interfaces/_script__lib_machineworker_.machineworker.md#terminate)*

*Defined in [script/_lib/WebSys.ts:722](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L722)*

**Returns:** `void`

___

