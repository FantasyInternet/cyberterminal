[cyberterminal](../README.md) > ["script/_lib/MouseInput"](../modules/_script__lib_mouseinput_.md) > [MouseInput](../classes/_script__lib_mouseinput_.mouseinput.md)

# Class: MouseInput

Class for taking care of mouse input

## Hierarchy

**MouseInput**

## Index

### Constructors

* [constructor](_script__lib_mouseinput_.mouseinput.md#constructor)

### Properties

* [scaleX](_script__lib_mouseinput_.mouseinput.md#scalex)
* [scaleY](_script__lib_mouseinput_.mouseinput.md#scaley)
* [sys](_script__lib_mouseinput_.mouseinput.md#sys)

### Accessors

* [element](_script__lib_mouseinput_.mouseinput.md#element)

### Methods

* [addEventListener](_script__lib_mouseinput_.mouseinput.md#addeventlistener)
* [blur](_script__lib_mouseinput_.mouseinput.md#blur)
* [focus](_script__lib_mouseinput_.mouseinput.md#focus)
* [removeEventListener](_script__lib_mouseinput_.mouseinput.md#removeeventlistener)

### Object literals

* [state](_script__lib_mouseinput_.mouseinput.md#state)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MouseInput**(sys: *[Sys](../interfaces/_script__lib_sys_.sys.md)*): [MouseInput](_script__lib_mouseinput_.mouseinput.md)

*Defined in [script/_lib/MouseInput.ts:20](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/MouseInput.ts#L20)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| sys | [Sys](../interfaces/_script__lib_sys_.sys.md) |

**Returns:** [MouseInput](_script__lib_mouseinput_.mouseinput.md)

___

## Properties

<a id="scalex"></a>

###  scaleX

**● scaleX**: *`number`* = 1

*Defined in [script/_lib/MouseInput.ts:11](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/MouseInput.ts#L11)*

___
<a id="scaley"></a>

###  scaleY

**● scaleY**: *`number`* = 1

*Defined in [script/_lib/MouseInput.ts:12](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/MouseInput.ts#L12)*

___
<a id="sys"></a>

###  sys

**● sys**: *[Sys](../interfaces/_script__lib_sys_.sys.md)*

*Defined in [script/_lib/MouseInput.ts:22](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/MouseInput.ts#L22)*

___

## Accessors

<a id="element"></a>

###  element

setelement(val: *`HTMLElement`*): `void`

*Defined in [script/_lib/MouseInput.ts:14](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/MouseInput.ts#L14)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| val | `HTMLElement` |

**Returns:** `void`

___

## Methods

<a id="addeventlistener"></a>

###  addEventListener

▸ **addEventListener**(fn: *`Function`*): `void`

*Defined in [script/_lib/MouseInput.ts:36](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/MouseInput.ts#L36)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fn | `Function` |

**Returns:** `void`

___
<a id="blur"></a>

###  blur

▸ **blur**(): `void`

*Defined in [script/_lib/MouseInput.ts:31](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/MouseInput.ts#L31)*

**Returns:** `void`

___
<a id="focus"></a>

###  focus

▸ **focus**(): `void`

*Defined in [script/_lib/MouseInput.ts:30](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/MouseInput.ts#L30)*

**Returns:** `void`

___
<a id="removeeventlistener"></a>

###  removeEventListener

▸ **removeEventListener**(fn: *`Function`*): `void`

*Defined in [script/_lib/MouseInput.ts:43](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/MouseInput.ts#L43)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fn | `Function` |

**Returns:** `void`

___

## Object literals

<a id="state"></a>

###  state

**state**: *`object`*

*Defined in [script/_lib/MouseInput.ts:7](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/MouseInput.ts#L7)*

<a id="state.pressed"></a>

####  pressed

**● pressed**: *`boolean`* = false

*Defined in [script/_lib/MouseInput.ts:9](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/MouseInput.ts#L9)*

___
<a id="state.x"></a>

####  x

**● x**: *`number`* = 0

*Defined in [script/_lib/MouseInput.ts:8](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/MouseInput.ts#L8)*

___
<a id="state.y"></a>

####  y

**● y**: *`number`* = 0

*Defined in [script/_lib/MouseInput.ts:8](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/MouseInput.ts#L8)*

___

___

