[cyberterminal](../README.md) > ["_lib/WebSys"](../modules/__lib_websys_.md) > [WebMachineWorker](../classes/__lib_websys_.webmachineworker.md)



# Class: WebMachineWorker

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


### ⊕ **new WebMachineWorker**(src: *`string`*): [WebMachineWorker](__lib_websys_.webmachineworker.md)


*Defined in [_lib/WebSys.ts:135](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L135)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| src | `string`   |  - |





**Returns:** [WebMachineWorker](__lib_websys_.webmachineworker.md)

---


## Properties
<a id="worker"></a>

###  worker

**●  worker**:  *`Worker`* 

*Defined in [_lib/WebSys.ts:135](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L135)*





___


## Methods
<a id="onmessage"></a>

###  onMessage

► **onMessage**(listener: *`Function`*): `void`



*Implementation of [MachineWorker](../interfaces/__lib_machineworker_.machineworker.md).[onMessage](../interfaces/__lib_machineworker_.machineworker.md#onmessage)*

*Defined in [_lib/WebSys.ts:145](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L145)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| listener | `Function`   |  - |





**Returns:** `void`





___

<a id="send"></a>

###  send

► **send**(msg: *`any`*, transferables?: *`any`[]⎮`undefined`*): `void`



*Defined in [_lib/WebSys.ts:141](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L141)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| msg | `any`   |  - |
| transferables | `any`[]⎮`undefined`   |  - |





**Returns:** `void`





___

<a id="terminate"></a>

###  terminate

► **terminate**(): `void`



*Implementation of [MachineWorker](../interfaces/__lib_machineworker_.machineworker.md).[terminate](../interfaces/__lib_machineworker_.machineworker.md#terminate)*

*Defined in [_lib/WebSys.ts:151](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L151)*





**Returns:** `void`





___


