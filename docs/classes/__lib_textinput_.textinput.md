[cyberterminal](../README.md) > ["_lib/TextInput"](../modules/__lib_textinput_.md) > [TextInput](../classes/__lib_textinput_.textinput.md)

# Class: TextInput

Class for taking care of text input

## Hierarchy

**TextInput**

## Index

### Constructors

* [constructor](__lib_textinput_.textinput.md#constructor)

### Properties

* [sys](__lib_textinput_.textinput.md#sys)

### Methods

* [addEventListener](__lib_textinput_.textinput.md#addeventlistener)
* [blur](__lib_textinput_.textinput.md#blur)
* [focus](__lib_textinput_.textinput.md#focus)
* [removeEventListener](__lib_textinput_.textinput.md#removeeventlistener)
* [setState](__lib_textinput_.textinput.md#setstate)

### Object literals

* [state](__lib_textinput_.textinput.md#state)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new TextInput**(sys: *[Sys](../interfaces/__lib_sys_.sys.md)*, _element: *`HTMLElement`*): [TextInput](__lib_textinput_.textinput.md)

*Defined in [_lib/TextInput.ts:13](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/TextInput.ts#L13)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| sys | [Sys](../interfaces/__lib_sys_.sys.md) | 
| _element | `HTMLElement` | 

**Returns:** [TextInput](__lib_textinput_.textinput.md)

___

## Properties

<a id="sys"></a>

###  sys

**● sys**: *[Sys](../interfaces/__lib_sys_.sys.md)*

*Defined in [_lib/TextInput.ts:15](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/TextInput.ts#L15)*

___

## Methods

<a id="addeventlistener"></a>

###  addEventListener

▸ **addEventListener**(fn: *`Function`*): `void`

*Defined in [_lib/TextInput.ts:64](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/TextInput.ts#L64)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| fn | `Function` | 

**Returns:** `void`

___
<a id="blur"></a>

###  blur

▸ **blur**(): `void`

*Defined in [_lib/TextInput.ts:44](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/TextInput.ts#L44)*

**Returns:** `void`

___
<a id="focus"></a>

###  focus

▸ **focus**(): `void`

*Defined in [_lib/TextInput.ts:41](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/TextInput.ts#L41)*

**Returns:** `void`

___
<a id="removeeventlistener"></a>

###  removeEventListener

▸ **removeEventListener**(fn: *`Function`*): `void`

*Defined in [_lib/TextInput.ts:71](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/TextInput.ts#L71)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| fn | `Function` | 

**Returns:** `void`

___
<a id="setstate"></a>

###  setState

▸ **setState**(state: *`any`*): `void`

*Defined in [_lib/TextInput.ts:48](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/TextInput.ts#L48)*

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

*Defined in [_lib/TextInput.ts:7](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/TextInput.ts#L7)*

<a id="state.key"></a>

####  key

**● key**: *`number`* = 0

*Defined in [_lib/TextInput.ts:12](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/TextInput.ts#L12)*

___
<a id="state.len"></a>

####  len

**● len**: *`number`* = 0

*Defined in [_lib/TextInput.ts:11](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/TextInput.ts#L11)*

___
<a id="state.pos"></a>

####  pos

**● pos**: *`number`* = 0

*Defined in [_lib/TextInput.ts:10](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/TextInput.ts#L10)*

___
<a id="state.text"></a>

####  text

**● text**: *`string`* = ""

*Defined in [_lib/TextInput.ts:9](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/TextInput.ts#L9)*

___
<a id="state.type"></a>

####  type

**● type**: *`string`* = "multiline"

*Defined in [_lib/TextInput.ts:8](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/TextInput.ts#L8)*

___

___

