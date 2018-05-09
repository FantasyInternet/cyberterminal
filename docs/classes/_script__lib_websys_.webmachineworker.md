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

*Defined in [script/_lib/WebSys.ts:205](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L205)*

**Returns:** [WebMachineWorker](_script__lib_websys_.webmachineworker.md)

___

## Properties

<a id="worker"></a>

###  worker

**● worker**: *`Worker`*

*Defined in [script/_lib/WebSys.ts:205](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L205)*

___

## Methods

<a id="onmessage"></a>

###  onMessage

▸ **onMessage**(listener: *`Function`*): `void`

*Implementation of [MachineWorker](../interfaces/_script__lib_machineworker_.machineworker.md).[onMessage](../interfaces/_script__lib_machineworker_.machineworker.md#onmessage)*

*Defined in [script/_lib/WebSys.ts:215](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L215)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| listener | `Function` | 

**Returns:** `void`

___
<a id="send"></a>

###  send

▸ **send**(msg: *`any`*, transferables?: *`any`[] |`undefined`*): `void`

*Defined in [script/_lib/WebSys.ts:211](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L211)*

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

*Implementation of [MachineWorker](../interfaces/_script__lib_machineworker_.machineworker.md).[terminate](../interfaces/_script__lib_machineworker_.machineworker.md#terminate)*

*Defined in [script/_lib/WebSys.ts:221](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L221)*

**Returns:** `void`

___

