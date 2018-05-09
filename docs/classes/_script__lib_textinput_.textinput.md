[cyberterminal](../README.md) > ["script/_lib/TextInput"](../modules/_script__lib_textinput_.md) > [TextInput](../classes/_script__lib_textinput_.textinput.md)

# Class: TextInput

Class for taking care of text input

## Hierarchy

**TextInput**

## Index

### Constructors

* [constructor](_script__lib_textinput_.textinput.md#constructor)

### Properties

* [sys](_script__lib_textinput_.textinput.md#sys)

### Methods

* [addEventListener](_script__lib_textinput_.textinput.md#addeventlistener)
* [blur](_script__lib_textinput_.textinput.md#blur)
* [focus](_script__lib_textinput_.textinput.md#focus)
* [removeEventListener](_script__lib_textinput_.textinput.md#removeeventlistener)
* [setState](_script__lib_textinput_.textinput.md#setstate)

### Object literals

* [state](_script__lib_textinput_.textinput.md#state)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new TextInput**(sys: *[Sys](../interfaces/_script__lib_sys_.sys.md)*, _element: *`HTMLElement`*): [TextInput](_script__lib_textinput_.textinput.md)

*Defined in [script/_lib/TextInput.ts:11](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/TextInput.ts#L11)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| sys | [Sys](../interfaces/_script__lib_sys_.sys.md) | 
| _element | `HTMLElement` | 

**Returns:** [TextInput](_script__lib_textinput_.textinput.md)

___

## Properties

<a id="sys"></a>

###  sys

**● sys**: *[Sys](../interfaces/_script__lib_sys_.sys.md)*

*Defined in [script/_lib/TextInput.ts:13](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/TextInput.ts#L13)*

___

## Methods

<a id="addeventlistener"></a>

###  addEventListener

▸ **addEventListener**(fn: *`Function`*): `void`

*Defined in [script/_lib/TextInput.ts:35](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/TextInput.ts#L35)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| fn | `Function` | 

**Returns:** `void`

___
<a id="blur"></a>

###  blur

▸ **blur**(): `void`

*Defined in [script/_lib/TextInput.ts:24](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/TextInput.ts#L24)*

**Returns:** `void`

___
<a id="focus"></a>

###  focus

▸ **focus**(): `void`

*Defined in [script/_lib/TextInput.ts:21](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/TextInput.ts#L21)*

**Returns:** `void`

___
<a id="removeeventlistener"></a>

###  removeEventListener

▸ **removeEventListener**(fn: *`Function`*): `void`

*Defined in [script/_lib/TextInput.ts:42](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/TextInput.ts#L42)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| fn | `Function` | 

**Returns:** `void`

___
<a id="setstate"></a>

###  setState

▸ **setState**(state: *`any`*): `void`

*Defined in [script/_lib/TextInput.ts:28](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/TextInput.ts#L28)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| state | `any` | 

**Returns:** `void`

___

## Object literals

<a id="state"></a>

###  state

**state**: *`object`*

*Defined in [script/_lib/TextInput.ts:7](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/TextInput.ts#L7)*

<a id="state.len"></a>

####  len

**● len**: *`number`* = 0

*Defined in [script/_lib/TextInput.ts:10](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/TextInput.ts#L10)*

___
<a id="state.pos"></a>

####  pos

**● pos**: *`number`* = 0

*Defined in [script/_lib/TextInput.ts:9](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/TextInput.ts#L9)*

___
<a id="state.text"></a>

####  text

**● text**: *`string`* = ""

*Defined in [script/_lib/TextInput.ts:8](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/TextInput.ts#L8)*

___

___

