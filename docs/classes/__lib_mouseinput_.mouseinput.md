[cyberterminal](../README.md) > ["_lib/MouseInput"](../modules/__lib_mouseinput_.md) > [MouseInput](../classes/__lib_mouseinput_.mouseinput.md)

# Class: MouseInput

Class for taking care of mouse input

## Hierarchy

**MouseInput**

## Index

### Constructors

* [constructor](__lib_mouseinput_.mouseinput.md#constructor)

### Properties

* [scale](__lib_mouseinput_.mouseinput.md#scale)
* [sys](__lib_mouseinput_.mouseinput.md#sys)

### Accessors

* [element](__lib_mouseinput_.mouseinput.md#element)

### Methods

* [addEventListener](__lib_mouseinput_.mouseinput.md#addeventlistener)
* [blur](__lib_mouseinput_.mouseinput.md#blur)
* [focus](__lib_mouseinput_.mouseinput.md#focus)
* [removeEventListener](__lib_mouseinput_.mouseinput.md#removeeventlistener)

### Object literals

* [state](__lib_mouseinput_.mouseinput.md#state)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MouseInput**(sys: *[Sys](../interfaces/__lib_sys_.sys.md)*): [MouseInput](__lib_mouseinput_.mouseinput.md)

*Defined in [_lib/MouseInput.ts:21](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/MouseInput.ts#L21)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| sys | [Sys](../interfaces/__lib_sys_.sys.md) |

**Returns:** [MouseInput](__lib_mouseinput_.mouseinput.md)

___

## Properties

<a id="scale"></a>

###  scale

**● scale**: *`number`* = 1

*Defined in [_lib/MouseInput.ts:11](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/MouseInput.ts#L11)*

___
<a id="sys"></a>

###  sys

**● sys**: *[Sys](../interfaces/__lib_sys_.sys.md)*

*Defined in [_lib/MouseInput.ts:23](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/MouseInput.ts#L23)*

___

## Accessors

<a id="element"></a>

###  element

setelement(val: *`HTMLElement`*): `void`

*Defined in [_lib/MouseInput.ts:13](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/MouseInput.ts#L13)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| val | `HTMLElement` |

**Returns:** `void`

___

## Methods

<a id="addeventlistener"></a>

###  addEventListener

▸ **addEventListener**(fn: *`Function`*): `void`

*Defined in [_lib/MouseInput.ts:31](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/MouseInput.ts#L31)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| fn | `Function` |

**Returns:** `void`

___
<a id="blur"></a>

###  blur

▸ **blur**(): `void`

*Defined in [_lib/MouseInput.ts:26](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/MouseInput.ts#L26)*

**Returns:** `void`

___
<a id="focus"></a>

###  focus

▸ **focus**(): `void`

*Defined in [_lib/MouseInput.ts:25](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/MouseInput.ts#L25)*

**Returns:** `void`

___
<a id="removeeventlistener"></a>

###  removeEventListener

▸ **removeEventListener**(fn: *`Function`*): `void`

*Defined in [_lib/MouseInput.ts:38](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/MouseInput.ts#L38)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| fn | `Function` |

**Returns:** `void`

___

## Object literals

<a id="state"></a>

###  state

**state**: *`object`*

*Defined in [_lib/MouseInput.ts:7](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/MouseInput.ts#L7)*

<a id="state.pressed"></a>

####  pressed

**● pressed**: *`boolean`* = false

*Defined in [_lib/MouseInput.ts:9](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/MouseInput.ts#L9)*

___
<a id="state.x"></a>

####  x

**● x**: *`number`* = 0

*Defined in [_lib/MouseInput.ts:8](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/MouseInput.ts#L8)*

___
<a id="state.y"></a>

####  y

**● y**: *`number`* = 0

*Defined in [_lib/MouseInput.ts:8](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/MouseInput.ts#L8)*

___

___

