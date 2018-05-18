[cyberterminal](../README.md) > ["_lib/CyberTerminal"](../modules/__lib_cyberterminal_.md) > [CyberTerminal](../classes/__lib_cyberterminal_.cyberterminal.md)

# Class: CyberTerminal

Terminal app

## Hierarchy

**CyberTerminal**

## Index

### Constructors

* [constructor](__lib_cyberterminal_.cyberterminal.md#constructor)

### Properties

* [machineWorkers](__lib_cyberterminal_.cyberterminal.md#machineworkers)
* [sys](__lib_cyberterminal_.cyberterminal.md#sys)

### Methods

* [addMachine](__lib_cyberterminal_.cyberterminal.md#addmachine)
* [connectTo](__lib_cyberterminal_.cyberterminal.md#connectto)
* [removeMachine](__lib_cyberterminal_.cyberterminal.md#removemachine)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CyberTerminal**(sys: *[Sys](../interfaces/__lib_sys_.sys.md)*): [CyberTerminal](__lib_cyberterminal_.cyberterminal.md)

*Defined in [_lib/CyberTerminal.ts:7](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/CyberTerminal.ts#L7)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| sys | [Sys](../interfaces/__lib_sys_.sys.md) | 

**Returns:** [CyberTerminal](__lib_cyberterminal_.cyberterminal.md)

___

## Properties

<a id="machineworkers"></a>

###  machineWorkers

**● machineWorkers**: *[MachineWorker](../interfaces/__lib_machineworker_.machineworker.md)[]* =  []

*Defined in [_lib/CyberTerminal.ts:7](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/CyberTerminal.ts#L7)*

___
<a id="sys"></a>

###  sys

**● sys**: *[Sys](../interfaces/__lib_sys_.sys.md)*

*Defined in [_lib/CyberTerminal.ts:9](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/CyberTerminal.ts#L9)*

___

## Methods

<a id="addmachine"></a>

###  addMachine

▸ **addMachine**(): [MachineWorker](../interfaces/__lib_machineworker_.machineworker.md)

*Defined in [_lib/CyberTerminal.ts:48](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/CyberTerminal.ts#L48)*

**Returns:** [MachineWorker](../interfaces/__lib_machineworker_.machineworker.md)

___
<a id="connectto"></a>

###  connectTo

▸ **connectTo**(url: *`string`*): `Promise`<`void`>

*Defined in [_lib/CyberTerminal.ts:27](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/CyberTerminal.ts#L27)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| url | `string` | 

**Returns:** `Promise`<`void`>

___
<a id="removemachine"></a>

###  removeMachine

▸ **removeMachine**(): `void`

*Defined in [_lib/CyberTerminal.ts:59](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/CyberTerminal.ts#L59)*

**Returns:** `void`

___

