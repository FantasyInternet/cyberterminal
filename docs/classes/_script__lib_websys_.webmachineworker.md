[cyberterminal](../README.md) > ["script/_lib/WebSys"](../modules/_script__lib_websys_.md) > [WebMachineWorker](../classes/_script__lib_websys_.webmachineworker.md)



# Class: WebMachineWorker

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


### ⊕ **new WebMachineWorker**(src: *`string`*): [WebMachineWorker](_script__lib_websys_.webmachineworker.md)


*Defined in [script/_lib/WebSys.ts:157](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L157)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| src | `string`   |  - |





**Returns:** [WebMachineWorker](_script__lib_websys_.webmachineworker.md)

---


## Properties
<a id="worker"></a>

###  worker

**●  worker**:  *`Worker`* 

*Defined in [script/_lib/WebSys.ts:157](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L157)*





___


## Methods
<a id="onmessage"></a>

###  onMessage

► **onMessage**(listener: *`Function`*): `void`



*Implementation of [MachineWorker](../interfaces/_script__lib_machineworker_.machineworker.md).[onMessage](../interfaces/_script__lib_machineworker_.machineworker.md#onmessage)*

*Defined in [script/_lib/WebSys.ts:167](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L167)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| listener | `Function`   |  - |





**Returns:** `void`





___

<a id="send"></a>

###  send

► **send**(msg: *`any`*, transferables?: *`any`[]⎮`undefined`*): `void`



*Defined in [script/_lib/WebSys.ts:163](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L163)*



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



*Implementation of [MachineWorker](../interfaces/_script__lib_machineworker_.machineworker.md).[terminate](../interfaces/_script__lib_machineworker_.machineworker.md#terminate)*

*Defined in [script/_lib/WebSys.ts:173](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L173)*





**Returns:** `void`





___


