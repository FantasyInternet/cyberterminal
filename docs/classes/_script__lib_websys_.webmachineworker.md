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

*Defined in [script/_lib/WebSys.ts:701](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L701)*

**Returns:** [WebMachineWorker](_script__lib_websys_.webmachineworker.md)

___

## Properties

<a id="baseurl"></a>

###  baseUrl

**● baseUrl**: *`string`* = ""

*Implementation of [MachineWorker](../interfaces/_script__lib_machineworker_.machineworker.md).[baseUrl](../interfaces/_script__lib_machineworker_.machineworker.md#baseurl)*

*Defined in [script/_lib/WebSys.ts:701](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L701)*

___
<a id="worker"></a>

###  worker

**● worker**: *`Worker`*

*Defined in [script/_lib/WebSys.ts:700](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L700)*

___

## Methods

<a id="onmessage"></a>

###  onMessage

▸ **onMessage**(listener: *`Function`*): `void`

*Implementation of [MachineWorker](../interfaces/_script__lib_machineworker_.machineworker.md).[onMessage](../interfaces/_script__lib_machineworker_.machineworker.md#onmessage)*

*Defined in [script/_lib/WebSys.ts:711](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L711)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| listener | `Function` |

**Returns:** `void`

___
<a id="send"></a>

###  send

▸ **send**(msg: *`any`*, transferables?: * `any`[] &#124; `undefined`*): `void`

*Defined in [script/_lib/WebSys.ts:707](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L707)*

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

*Defined in [script/_lib/WebSys.ts:717](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L717)*

**Returns:** `void`

___

