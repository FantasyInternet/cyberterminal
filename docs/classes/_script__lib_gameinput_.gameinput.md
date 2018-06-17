[cyberterminal](../README.md) > ["script/_lib/GameInput"](../modules/_script__lib_gameinput_.md) > [GameInput](../classes/_script__lib_gameinput_.gameinput.md)

# Class: GameInput

Class for taking care of game input

## Hierarchy

**GameInput**

## Index

### Constructors

* [constructor](_script__lib_gameinput_.gameinput.md#constructor)

### Properties

* [sys](_script__lib_gameinput_.gameinput.md#sys)

### Methods

* [addEventListener](_script__lib_gameinput_.gameinput.md#addeventlistener)
* [blur](_script__lib_gameinput_.gameinput.md#blur)
* [focus](_script__lib_gameinput_.gameinput.md#focus)
* [removeEventListener](_script__lib_gameinput_.gameinput.md#removeeventlistener)

### Object literals

* [state](_script__lib_gameinput_.gameinput.md#state)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new GameInput**(sys: *[Sys](../interfaces/_script__lib_sys_.sys.md)*, _element: *`HTMLElement`*): [GameInput](_script__lib_gameinput_.gameinput.md)

*Defined in [script/_lib/GameInput.ts:10](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/GameInput.ts#L10)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| sys | [Sys](../interfaces/_script__lib_sys_.sys.md) |
| _element | `HTMLElement` |

**Returns:** [GameInput](_script__lib_gameinput_.gameinput.md)

___

## Properties

<a id="sys"></a>

###  sys

**● sys**: *[Sys](../interfaces/_script__lib_sys_.sys.md)*

*Defined in [script/_lib/GameInput.ts:12](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/GameInput.ts#L12)*

___

## Methods

<a id="addeventlistener"></a>

###  addEventListener

▸ **addEventListener**(fn: *`Function`*): `void`

*Defined in [script/_lib/GameInput.ts:62](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/GameInput.ts#L62)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| fn | `Function` |

**Returns:** `void`

___
<a id="blur"></a>

###  blur

▸ **blur**(): `void`

*Defined in [script/_lib/GameInput.ts:50](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/GameInput.ts#L50)*

**Returns:** `void`

___
<a id="focus"></a>

###  focus

▸ **focus**(): `void`

*Defined in [script/_lib/GameInput.ts:44](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/GameInput.ts#L44)*

**Returns:** `void`

___
<a id="removeeventlistener"></a>

###  removeEventListener

▸ **removeEventListener**(fn: *`Function`*): `void`

*Defined in [script/_lib/GameInput.ts:69](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/GameInput.ts#L69)*

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

*Defined in [script/_lib/GameInput.ts:7](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/GameInput.ts#L7)*

<a id="state.axis"></a>

####  axis

**axis**: *`object`*

*Defined in [script/_lib/GameInput.ts:8](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/GameInput.ts#L8)*

<a id="state.axis.x"></a>

####  x

**● x**: *`number`* = 0

*Defined in [script/_lib/GameInput.ts:8](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/GameInput.ts#L8)*

___
<a id="state.axis.y"></a>

####  y

**● y**: *`number`* = 0

*Defined in [script/_lib/GameInput.ts:8](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/GameInput.ts#L8)*

___

___
<a id="state.buttons"></a>

####  buttons

**buttons**: *`object`*

*Defined in [script/_lib/GameInput.ts:9](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/GameInput.ts#L9)*

<a id="state.buttons.a"></a>

####  a

**● a**: *`boolean`* = false

*Defined in [script/_lib/GameInput.ts:9](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/GameInput.ts#L9)*

___
<a id="state.buttons.b"></a>

####  b

**● b**: *`boolean`* = false

*Defined in [script/_lib/GameInput.ts:9](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/GameInput.ts#L9)*

___
<a id="state.buttons.x-1"></a>

####  x

**● x**: *`boolean`* = false

*Defined in [script/_lib/GameInput.ts:9](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/GameInput.ts#L9)*

___
<a id="state.buttons.y-1"></a>

####  y

**● y**: *`boolean`* = false

*Defined in [script/_lib/GameInput.ts:9](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/GameInput.ts#L9)*

___

___

___

