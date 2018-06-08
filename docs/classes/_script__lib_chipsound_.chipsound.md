[cyberterminal](../README.md) > ["script/_lib/ChipSound"](../modules/_script__lib_chipsound_.md) > [ChipSound](../classes/_script__lib_chipsound_.chipsound.md)

# Class: ChipSound

Class responsible for creating bleeps and bloops! 🎶

## Hierarchy

**ChipSound**

## Index

### Constructors

* [constructor](_script__lib_chipsound_.chipsound.md#constructor)

### Methods

* [startTone](_script__lib_chipsound_.chipsound.md#starttone)
* [stopAll](_script__lib_chipsound_.chipsound.md#stopall)
* [stopTone](_script__lib_chipsound_.chipsound.md#stoptone)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ChipSound**(): [ChipSound](_script__lib_chipsound_.chipsound.md)

*Defined in [script/_lib/ChipSound.ts:4](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/ChipSound.ts#L4)*

**Returns:** [ChipSound](_script__lib_chipsound_.chipsound.md)

___

## Methods

<a id="starttone"></a>

###  startTone

▸ **startTone**(channel: *`number`*, frequency: *`number`*, volume?: *`number`*, type?: * "sine" &#124; "square" &#124; "sawtooth" &#124; "triangle"*): `void`

*Defined in [script/_lib/ChipSound.ts:19](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/ChipSound.ts#L19)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| channel | `number` | - |
| frequency | `number` | - |
| `Default value` volume | `number` | 1 |
| `Default value` type |  "sine" &#124; "square" &#124; "sawtooth" &#124; "triangle"| &quot;square&quot; |

**Returns:** `void`

___
<a id="stopall"></a>

###  stopAll

▸ **stopAll**(): `void`

*Defined in [script/_lib/ChipSound.ts:54](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/ChipSound.ts#L54)*

**Returns:** `void`

___
<a id="stoptone"></a>

###  stopTone

▸ **stopTone**(channel: *`number`*): `void`

*Defined in [script/_lib/ChipSound.ts:43](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/ChipSound.ts#L43)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| channel | `number` |

**Returns:** `void`

___

