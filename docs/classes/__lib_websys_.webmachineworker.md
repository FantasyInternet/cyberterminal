[cyberterminal](../README.md) > ["_lib/WebSys"](../modules/__lib_websys_.md) > [WebMachineWorker](../classes/__lib_websys_.webmachineworker.md)

# Class: WebMachineWorker

## Hierarchy

**WebMachineWorker**

## Implements

* [MachineWorker](../interfaces/__lib_machineworker_.machineworker.md)

## Index

### Constructors

* [constructor](__lib_websys_.webmachineworker.md#constructor)

### Properties

* [worker](__lib_websys_.webmachineworker.md#worker)

### Methods

* [onMessage](__lib_websys_.webmachineworker.md#onmessage)
* [send](__lib_websys_.webmachineworker.md#send)
* [terminate](__lib_websys_.webmachineworker.md#terminate)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new WebMachineWorker**(): [WebMachineWorker](__lib_websys_.webmachineworker.md)

*Defined in [_lib/WebSys.ts:514](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L514)*

**Returns:** [WebMachineWorker](__lib_websys_.webmachineworker.md)

___

## Properties

<a id="worker"></a>

###  worker

**● worker**: *`Worker`*

*Defined in [_lib/WebSys.ts:514](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L514)*

___

## Methods

<a id="onmessage"></a>

###  onMessage

▸ **onMessage**(listener: *`Function`*): `void`

*Implementation of [MachineWorker](../interfaces/__lib_machineworker_.machineworker.md).[onMessage](../interfaces/__lib_machineworker_.machineworker.md#onmessage)*

*Defined in [_lib/WebSys.ts:524](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L524)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| listener | `Function` | 

**Returns:** `void`

___
<a id="send"></a>

###  send

▸ **send**(msg: *`any`*, transferables?: *`any`[] |`undefined`*): `void`

*Defined in [_lib/WebSys.ts:520](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L520)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| msg | `any` | 
| `Optional` transferables | `any`[] |
`undefined`
 | 

**Returns:** `void`

___
<a id="terminate"></a>

###  terminate

▸ **terminate**(): `void`

*Implementation of [MachineWorker](../interfaces/__lib_machineworker_.machineworker.md).[terminate](../interfaces/__lib_machineworker_.machineworker.md#terminate)*

*Defined in [_lib/WebSys.ts:530](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L530)*

**Returns:** `void`

___

