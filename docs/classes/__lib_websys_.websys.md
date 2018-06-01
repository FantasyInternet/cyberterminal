[cyberterminal](../README.md) > ["_lib/WebSys"](../modules/__lib_websys_.md) > [WebSys](../classes/__lib_websys_.websys.md)

# Class: WebSys

Sys implementation for web browsers. See [Sys](../interfaces/__lib_sys_.sys.md) for documentation

## Hierarchy

**WebSys**

↳  [ElectronSys](__lib_electronsys_.electronsys.md)

## Implements

* [Sys](../interfaces/__lib_sys_.sys.md)

## Index

### Constructors

* [constructor](__lib_websys_.websys.md#constructor)

### Properties

* [breaker](__lib_websys_.websys.md#breaker)
* [chipSound](__lib_websys_.websys.md#chipsound)
* [gameInput](__lib_websys_.websys.md#gameinput)
* [inputPriority](__lib_websys_.websys.md#inputpriority)
* [mouseInput](__lib_websys_.websys.md#mouseinput)
* [textInput](__lib_websys_.websys.md#textinput)

### Methods

* [createMachine](__lib_websys_.websys.md#createmachine)
* [delete](__lib_websys_.websys.md#delete)
* [drawBitmap](__lib_websys_.websys.md#drawbitmap)
* [focusInput](__lib_websys_.websys.md#focusinput)
* [list](__lib_websys_.websys.md#list)
* [openWeb](__lib_websys_.websys.md#openweb)
* [print](__lib_websys_.websys.md#print)
* [read](__lib_websys_.websys.md#read)
* [replaceTextInput](__lib_websys_.websys.md#replacetextinput)
* [setDisplayMode](__lib_websys_.websys.md#setdisplaymode)
* [setTextInput](__lib_websys_.websys.md#settextinput)
* [setTitle](__lib_websys_.websys.md#settitle)
* [startTone](__lib_websys_.websys.md#starttone)
* [stopTone](__lib_websys_.websys.md#stoptone)
* [waitForVsync](__lib_websys_.websys.md#waitforvsync)
* [write](__lib_websys_.websys.md#write)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new WebSys**(): [WebSys](__lib_websys_.websys.md)

*Defined in [_lib/WebSys.ts:22](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L22)*

**Returns:** [WebSys](__lib_websys_.websys.md)

___

## Properties

<a id="breaker"></a>

###  breaker

**● breaker**: *[Breaker](__lib_breaker_.breaker.md)*

*Implementation of [Sys](../interfaces/__lib_sys_.sys.md).[breaker](../interfaces/__lib_sys_.sys.md#breaker)*

*Defined in [_lib/WebSys.ts:22](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L22)*

___
<a id="chipsound"></a>

###  chipSound

**● chipSound**: *[ChipSound](__lib_chipsound_.chipsound.md)*

*Implementation of [Sys](../interfaces/__lib_sys_.sys.md).[chipSound](../interfaces/__lib_sys_.sys.md#chipsound)*

*Defined in [_lib/WebSys.ts:17](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L17)*

___
<a id="gameinput"></a>

###  gameInput

**● gameInput**: *[GameInput](__lib_gameinput_.gameinput.md)*

*Implementation of [Sys](../interfaces/__lib_sys_.sys.md).[gameInput](../interfaces/__lib_sys_.sys.md#gameinput)*

*Defined in [_lib/WebSys.ts:20](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L20)*

___
<a id="inputpriority"></a>

###  inputPriority

**● inputPriority**: *`string`[]* =  ["text", "mouse", "game"]

*Implementation of [Sys](../interfaces/__lib_sys_.sys.md).[inputPriority](../interfaces/__lib_sys_.sys.md#inputpriority)*

*Defined in [_lib/WebSys.ts:21](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L21)*

___
<a id="mouseinput"></a>

###  mouseInput

**● mouseInput**: *[MouseInput](__lib_mouseinput_.mouseinput.md)*

*Implementation of [Sys](../interfaces/__lib_sys_.sys.md).[mouseInput](../interfaces/__lib_sys_.sys.md#mouseinput)*

*Defined in [_lib/WebSys.ts:19](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L19)*

___
<a id="textinput"></a>

###  textInput

**● textInput**: *[TextInput](__lib_textinput_.textinput.md)*

*Implementation of [Sys](../interfaces/__lib_sys_.sys.md).[textInput](../interfaces/__lib_sys_.sys.md#textinput)*

*Defined in [_lib/WebSys.ts:18](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L18)*

___

## Methods

<a id="createmachine"></a>

###  createMachine

▸ **createMachine**(): [WebMachineWorker](__lib_websys_.webmachineworker.md)

*Implementation of [Sys](../interfaces/__lib_sys_.sys.md).[createMachine](../interfaces/__lib_sys_.sys.md#createmachine)*

*Defined in [_lib/WebSys.ts:193](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L193)*

**Returns:** [WebMachineWorker](__lib_websys_.webmachineworker.md)

___
<a id="delete"></a>

###  delete

▸ **delete**(filename: *`string`*): `Promise`<`boolean`>

*Implementation of [Sys](../interfaces/__lib_sys_.sys.md).[delete](../interfaces/__lib_sys_.sys.md#delete)*

*Defined in [_lib/WebSys.ts:258](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L258)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| filename | `string` | 

**Returns:** `Promise`<`boolean`>

___
<a id="drawbitmap"></a>

###  drawBitmap

▸ **drawBitmap**(buffer: *`ArrayBuffer`*): `void`

*Implementation of [Sys](../interfaces/__lib_sys_.sys.md).[drawBitmap](../interfaces/__lib_sys_.sys.md#drawbitmap)*

*Defined in [_lib/WebSys.ts:75](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L75)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| buffer | `ArrayBuffer` | 

**Returns:** `void`

___
<a id="focusinput"></a>

###  focusInput

▸ **focusInput**(input: *"text" |"mouse" |"game"*): `string`[]

*Implementation of [Sys](../interfaces/__lib_sys_.sys.md).[focusInput](../interfaces/__lib_sys_.sys.md#focusinput)*

*Defined in [_lib/WebSys.ts:295](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L295)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | "text" |
"mouse" |
"game"
 | 

**Returns:** `string`[]

___
<a id="list"></a>

###  list

▸ **list**(path: *`string`*): `Promise`<`string`>

*Implementation of [Sys](../interfaces/__lib_sys_.sys.md).[list](../interfaces/__lib_sys_.sys.md#list)*

*Defined in [_lib/WebSys.ts:267](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L267)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| path | `string` | 

**Returns:** `Promise`<`string`>

___
<a id="openweb"></a>

###  openWeb

▸ **openWeb**(url: *`string`*): `void`

*Implementation of [Sys](../interfaces/__lib_sys_.sys.md).[openWeb](../interfaces/__lib_sys_.sys.md#openweb)*

*Defined in [_lib/WebSys.ts:340](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L340)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| url | `string` | 

**Returns:** `void`

___
<a id="print"></a>

###  print

▸ **print**(str: *`string`*): `void`

*Implementation of [Sys](../interfaces/__lib_sys_.sys.md).[print](../interfaces/__lib_sys_.sys.md#print)*

*Defined in [_lib/WebSys.ts:83](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L83)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| str | `string` | 

**Returns:** `void`

___
<a id="read"></a>

###  read

▸ **read**(filename: *`string`*, options?: *`any`*): `Promise`<`any`>

*Implementation of [Sys](../interfaces/__lib_sys_.sys.md).[read](../interfaces/__lib_sys_.sys.md#read)*

*Defined in [_lib/WebSys.ts:197](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L197)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| filename | `string` | - | 
| `Default value` options | `any` |  {} | 

**Returns:** `Promise`<`any`>

___
<a id="replacetextinput"></a>

###  replaceTextInput

▸ **replaceTextInput**(search: *`string`*, replace?: *`string`*, fromIndex?: *`number`*): `void`

*Implementation of [Sys](../interfaces/__lib_sys_.sys.md).[replaceTextInput](../interfaces/__lib_sys_.sys.md#replacetextinput)*

*Defined in [_lib/WebSys.ts:322](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L322)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| search | `string` | - | 
| `Default value` replace | `string` | &quot;&quot; | 
| `Default value` fromIndex | `number` | 0 | 

**Returns:** `void`

___
<a id="setdisplaymode"></a>

###  setDisplayMode

▸ **setDisplayMode**(mode: *"none" |"text" |"pixel"*, width: *`number`*, height: *`number`*, visibleWidth?: *`number`*, visibleHeight?: *`number`*): `void`

*Defined in [_lib/WebSys.ts:38](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L38)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| mode | "none" |
"text" |
"pixel"
 | - | 
| width | `number` | - | 
| height | `number` | - | 
| `Default value` visibleWidth | `number` |  width | 
| `Default value` visibleHeight | `number` |  height | 

**Returns:** `void`

___
<a id="settextinput"></a>

###  setTextInput

▸ **setTextInput**(text: *`string`*, pos: *`number`*, len: *`number`*, type?: *`undefined` |`string`*): `void`

*Defined in [_lib/WebSys.ts:313](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L313)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| text | `string` | 
| pos | `number` | 
| len | `number` | 
| `Optional` type | `undefined` |
`string`
 | 

**Returns:** `void`

___
<a id="settitle"></a>

###  setTitle

▸ **setTitle**(title: *`string`*): `void`

*Implementation of [Sys](../interfaces/__lib_sys_.sys.md).[setTitle](../interfaces/__lib_sys_.sys.md#settitle)*

*Defined in [_lib/WebSys.ts:35](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L35)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| title | `string` | 

**Returns:** `void`

___
<a id="starttone"></a>

###  startTone

▸ **startTone**(): `void`

*Defined in [_lib/WebSys.ts:288](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L288)*

**Returns:** `void`

___
<a id="stoptone"></a>

###  stopTone

▸ **stopTone**(): `void`

*Defined in [_lib/WebSys.ts:291](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L291)*

**Returns:** `void`

___
<a id="waitforvsync"></a>

###  waitForVsync

▸ **waitForVsync**(): `Promise`<`Object`>

*Defined in [_lib/WebSys.ts:187](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L187)*

**Returns:** `Promise`<`Object`>

___
<a id="write"></a>

###  write

▸ **write**(filename: *`string`*, data: *`string` |`ArrayBuffer`*): `Promise`<`boolean`>

*Implementation of [Sys](../interfaces/__lib_sys_.sys.md).[write](../interfaces/__lib_sys_.sys.md#write)*

*Defined in [_lib/WebSys.ts:248](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/WebSys.ts#L248)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| filename | `string` | 
| data | `string` |
`ArrayBuffer`
 | 

**Returns:** `Promise`<`boolean`>

___

