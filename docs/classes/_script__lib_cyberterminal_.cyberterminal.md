[cyberterminal](../README.md) > ["script/_lib/CyberTerminal"](../modules/_script__lib_cyberterminal_.md) > [CyberTerminal](../classes/_script__lib_cyberterminal_.cyberterminal.md)

# Class: CyberTerminal

Terminal app

## Hierarchy

**CyberTerminal**

## Index

### Constructors

* [constructor](_script__lib_cyberterminal_.cyberterminal.md#constructor)

### Properties

* [machineWorkers](_script__lib_cyberterminal_.cyberterminal.md#machineworkers)
* [sys](_script__lib_cyberterminal_.cyberterminal.md#sys)

### Methods

* [addMachine](_script__lib_cyberterminal_.cyberterminal.md#addmachine)
* [connectTo](_script__lib_cyberterminal_.cyberterminal.md#connectto)
* [removeMachine](_script__lib_cyberterminal_.cyberterminal.md#removemachine)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CyberTerminal**(sys: *[Sys](../interfaces/_script__lib_sys_.sys.md)*): [CyberTerminal](_script__lib_cyberterminal_.cyberterminal.md)

*Defined in [script/_lib/CyberTerminal.ts:7](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/CyberTerminal.ts#L7)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| sys | [Sys](../interfaces/_script__lib_sys_.sys.md) | 

**Returns:** [CyberTerminal](_script__lib_cyberterminal_.cyberterminal.md)

___

## Properties

<a id="machineworkers"></a>

###  machineWorkers

**● machineWorkers**: *[MachineWorker](../interfaces/_script__lib_machineworker_.machineworker.md)[]* =  []

*Defined in [script/_lib/CyberTerminal.ts:7](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/CyberTerminal.ts#L7)*

___
<a id="sys"></a>

###  sys

**● sys**: *[Sys](../interfaces/_script__lib_sys_.sys.md)*

*Defined in [script/_lib/CyberTerminal.ts:9](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/CyberTerminal.ts#L9)*

___

## Methods

<a id="addmachine"></a>

###  addMachine

▸ **addMachine**(): [MachineWorker](../interfaces/_script__lib_machineworker_.machineworker.md)

*Defined in [script/_lib/CyberTerminal.ts:37](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/CyberTerminal.ts#L37)*

**Returns:** [MachineWorker](../interfaces/_script__lib_machineworker_.machineworker.md)

___
<a id="connectto"></a>

###  connectTo

▸ **connectTo**(url: *`string`*): `Promise`<`void`>

*Defined in [script/_lib/CyberTerminal.ts:16](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/CyberTerminal.ts#L16)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| url | `string` | 

**Returns:** `Promise`<`void`>

___
<a id="removemachine"></a>

###  removeMachine

▸ **removeMachine**(): `void`

*Defined in [script/_lib/CyberTerminal.ts:46](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/CyberTerminal.ts#L46)*

**Returns:** `void`

___

