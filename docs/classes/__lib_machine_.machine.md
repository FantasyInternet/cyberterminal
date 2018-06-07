[cyberterminal](../README.md) > ["_lib/Machine"](../modules/__lib_machine_.md) > [Machine](../classes/__lib_machine_.machine.md)

# Class: Machine

Central processing unit for browsers See [Sys](../interfaces/__classes_sys_.sys.md) for documentation

## Hierarchy

**Machine**

## Index

### Constructors

* [constructor](__lib_machine_.machine.md#constructor)

### Methods

* [callbackProcess](__lib_machine_.machine.md#callbackprocess)
* [connectTo](__lib_machine_.machine.md#connectto)
* [delete](__lib_machine_.machine.md#delete)
* [displayMemory](__lib_machine_.machine.md#displaymemory)
* [focusInput](__lib_machine_.machine.md#focusinput)
* [getBaseUrl](__lib_machine_.machine.md#getbaseurl)
* [getGameAxisX](__lib_machine_.machine.md#getgameaxisx)
* [getGameAxisY](__lib_machine_.machine.md#getgameaxisy)
* [getGameButtonA](__lib_machine_.machine.md#getgamebuttona)
* [getGameButtonB](__lib_machine_.machine.md#getgamebuttonb)
* [getGameButtonX](__lib_machine_.machine.md#getgamebuttonx)
* [getGameButtonY](__lib_machine_.machine.md#getgamebuttony)
* [getInputKey](__lib_machine_.machine.md#getinputkey)
* [getInputPosition](__lib_machine_.machine.md#getinputposition)
* [getInputSelected](__lib_machine_.machine.md#getinputselected)
* [getInputText](__lib_machine_.machine.md#getinputtext)
* [getMousePressed](__lib_machine_.machine.md#getmousepressed)
* [getMouseX](__lib_machine_.machine.md#getmousex)
* [getMouseY](__lib_machine_.machine.md#getmousey)
* [killProcess](__lib_machine_.machine.md#killprocess)
* [list](__lib_machine_.machine.md#list)
* [loadProcess](__lib_machine_.machine.md#loadprocess)
* [log](__lib_machine_.machine.md#log)
* [logNumber](__lib_machine_.machine.md#lognumber)
* [popToMemory](__lib_machine_.machine.md#poptomemory)
* [print](__lib_machine_.machine.md#print)
* [pushFromMemory](__lib_machine_.machine.md#pushfrommemory)
* [read](__lib_machine_.machine.md#read)
* [readImage](__lib_machine_.machine.md#readimage)
* [replaceInputText](__lib_machine_.machine.md#replaceinputtext)
* [setBaseUrl](__lib_machine_.machine.md#setbaseurl)
* [setDisplayMode](__lib_machine_.machine.md#setdisplaymode)
* [setInputPosition](__lib_machine_.machine.md#setinputposition)
* [setInputText](__lib_machine_.machine.md#setinputtext)
* [setInputType](__lib_machine_.machine.md#setinputtype)
* [setStepInterval](__lib_machine_.machine.md#setstepinterval)
* [shutdown](__lib_machine_.machine.md#shutdown)
* [startTone](__lib_machine_.machine.md#starttone)
* [stepProcess](__lib_machine_.machine.md#stepprocess)
* [stopTone](__lib_machine_.machine.md#stoptone)
* [transferMemory](__lib_machine_.machine.md#transfermemory)
* [wabt](__lib_machine_.machine.md#wabt)
* [write](__lib_machine_.machine.md#write)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Machine**(): [Machine](__lib_machine_.machine.md)

*Defined in [_lib/Machine.ts:7](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L7)*

**Returns:** [Machine](__lib_machine_.machine.md)

___

## Methods

<a id="callbackprocess"></a>

###  callbackProcess

▸ **callbackProcess**(pid: *`number`*, tableIndex: *`number`*, ...a: *`any`[]*): `void`

*Defined in [_lib/Machine.ts:226](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L226)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| pid | `number` |
| tableIndex | `number` |
| `Rest` a | `any`[] |

**Returns:** `void`

___
<a id="connectto"></a>

###  connectTo

▸ **connectTo**(): `void`

*Defined in [_lib/Machine.ts:86](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L86)*

**Returns:** `void`

___
<a id="delete"></a>

###  delete

▸ **delete**(callback: * `number` &#124; `Function`*): `number`

*Defined in [_lib/Machine.ts:158](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L158)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback |  `number` &#124; `Function`|

**Returns:** `number`

___
<a id="displaymemory"></a>

###  displayMemory

▸ **displayMemory**(offset: *`number`*, length: *`number`*, destination?: *`number`*): `void`

*Defined in [_lib/Machine.ts:49](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L49)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| offset | `number` | - |
| length | `number` | - |
| `Default value` destination | `number` | 0 |

**Returns:** `void`

___
<a id="focusinput"></a>

###  focusInput

▸ **focusInput**(input: *`number`*): `void`

*Defined in [_lib/Machine.ts:247](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L247)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `number` |

**Returns:** `void`

___
<a id="getbaseurl"></a>

###  getBaseUrl

▸ **getBaseUrl**(): `number`

*Defined in [_lib/Machine.ts:95](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L95)*

**Returns:** `number`

___
<a id="getgameaxisx"></a>

###  getGameAxisX

▸ **getGameAxisX**(): `any`

*Defined in [_lib/Machine.ts:308](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L308)*

**Returns:** `any`

___
<a id="getgameaxisy"></a>

###  getGameAxisY

▸ **getGameAxisY**(): `any`

*Defined in [_lib/Machine.ts:309](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L309)*

**Returns:** `any`

___
<a id="getgamebuttona"></a>

###  getGameButtonA

▸ **getGameButtonA**(): `any`

*Defined in [_lib/Machine.ts:310](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L310)*

**Returns:** `any`

___
<a id="getgamebuttonb"></a>

###  getGameButtonB

▸ **getGameButtonB**(): `any`

*Defined in [_lib/Machine.ts:311](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L311)*

**Returns:** `any`

___
<a id="getgamebuttonx"></a>

###  getGameButtonX

▸ **getGameButtonX**(): `any`

*Defined in [_lib/Machine.ts:312](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L312)*

**Returns:** `any`

___
<a id="getgamebuttony"></a>

###  getGameButtonY

▸ **getGameButtonY**(): `any`

*Defined in [_lib/Machine.ts:313](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L313)*

**Returns:** `any`

___
<a id="getinputkey"></a>

###  getInputKey

▸ **getInputKey**(): `any`

*Defined in [_lib/Machine.ts:266](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L266)*

**Returns:** `any`

___
<a id="getinputposition"></a>

###  getInputPosition

▸ **getInputPosition**(): `any`

*Defined in [_lib/Machine.ts:264](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L264)*

**Returns:** `any`

___
<a id="getinputselected"></a>

###  getInputSelected

▸ **getInputSelected**(): `any`

*Defined in [_lib/Machine.ts:265](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L265)*

**Returns:** `any`

___
<a id="getinputtext"></a>

###  getInputText

▸ **getInputText**(): `number`

*Defined in [_lib/Machine.ts:263](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L263)*

**Returns:** `number`

___
<a id="getmousepressed"></a>

###  getMousePressed

▸ **getMousePressed**(): `any`

*Defined in [_lib/Machine.ts:307](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L307)*

**Returns:** `any`

___
<a id="getmousex"></a>

###  getMouseX

▸ **getMouseX**(): `any`

*Defined in [_lib/Machine.ts:305](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L305)*

**Returns:** `any`

___
<a id="getmousey"></a>

###  getMouseY

▸ **getMouseY**(): `any`

*Defined in [_lib/Machine.ts:306](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L306)*

**Returns:** `any`

___
<a id="killprocess"></a>

###  killProcess

▸ **killProcess**(pid: *`number`*): `void`

*Defined in [_lib/Machine.ts:233](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L233)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| pid | `number` |

**Returns:** `void`

___
<a id="list"></a>

###  list

▸ **list**(callback: * `number` &#124; `Function`*): `number`

*Defined in [_lib/Machine.ts:173](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L173)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback |  `number` &#124; `Function`|

**Returns:** `number`

___
<a id="loadprocess"></a>

###  loadProcess

▸ **loadProcess**(): `number`

*Defined in [_lib/Machine.ts:192](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L192)*

**Returns:** `number`

___
<a id="log"></a>

###  log

▸ **log**(): `void`

*Defined in [_lib/Machine.ts:15](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L15)*

**Returns:** `void`

___
<a id="lognumber"></a>

###  logNumber

▸ **logNumber**(): `void`

*Defined in [_lib/Machine.ts:18](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L18)*

**Returns:** `void`

___
<a id="poptomemory"></a>

###  popToMemory

▸ **popToMemory**(offset: *`number`*): `void`

*Defined in [_lib/Machine.ts:77](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L77)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| offset | `number` |

**Returns:** `void`

___
<a id="print"></a>

###  print

▸ **print**(): `void`

*Defined in [_lib/Machine.ts:45](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L45)*

**Returns:** `void`

___
<a id="pushfrommemory"></a>

###  pushFromMemory

▸ **pushFromMemory**(offset: *`number`*, length: *`number`*): `number`

*Defined in [_lib/Machine.ts:70](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L70)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| offset | `number` |
| length | `number` |

**Returns:** `number`

___
<a id="read"></a>

###  read

▸ **read**(callback: * `number` &#124; `Function`*): `number`

*Defined in [_lib/Machine.ts:110](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L110)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback |  `number` &#124; `Function`|

**Returns:** `number`

___
<a id="readimage"></a>

###  readImage

▸ **readImage**(callback: * `number` &#124; `Function`*): `number`

*Defined in [_lib/Machine.ts:126](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L126)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback |  `number` &#124; `Function`|

**Returns:** `number`

___
<a id="replaceinputtext"></a>

###  replaceInputText

▸ **replaceInputText**(fromIndex?: *`number`*): `void`

*Defined in [_lib/Machine.ts:290](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L290)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` fromIndex | `number` | 0 |

**Returns:** `void`

___
<a id="setbaseurl"></a>

###  setBaseUrl

▸ **setBaseUrl**(): `void`

*Defined in [_lib/Machine.ts:98](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L98)*

**Returns:** `void`

___
<a id="setdisplaymode"></a>

###  setDisplayMode

▸ **setDisplayMode**(mode: *`number`*, width: *`number`*, height: *`number`*, visibleWidth?: *`number`*, visibleHeight?: *`number`*): `void`

*Defined in [_lib/Machine.ts:22](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L22)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| mode | `number` | - |
| width | `number` | - |
| height | `number` | - |
| `Default value` visibleWidth | `number` |  width |
| `Default value` visibleHeight | `number` |  height |

**Returns:** `void`

___
<a id="setinputposition"></a>

###  setInputPosition

▸ **setInputPosition**(position?: *`number`*, selection?: *`number`*): `void`

*Defined in [_lib/Machine.ts:283](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L283)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` position | `number` | 0 |
| `Default value` selection | `number` | 0 |

**Returns:** `void`

___
<a id="setinputtext"></a>

###  setInputText

▸ **setInputText**(): `void`

*Defined in [_lib/Machine.ts:276](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L276)*

**Returns:** `void`

___
<a id="setinputtype"></a>

###  setInputType

▸ **setInputType**(type: *`number`*): `void`

*Defined in [_lib/Machine.ts:267](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L267)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `number` |

**Returns:** `void`

___
<a id="setstepinterval"></a>

###  setStepInterval

▸ **setStepInterval**(milliseconds: *`number`*): `void`

*Defined in [_lib/Machine.ts:189](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L189)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| milliseconds | `number` |

**Returns:** `void`

___
<a id="shutdown"></a>

###  shutdown

▸ **shutdown**(): `void`

*Defined in [_lib/Machine.ts:91](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L91)*

**Returns:** `void`

___
<a id="starttone"></a>

###  startTone

▸ **startTone**(channel: *`number`*, frequency: *`number`*, volume?: *`number`*, type?: *`number`*): `void`

*Defined in [_lib/Machine.ts:315](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L315)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| channel | `number` | - |
| frequency | `number` | - |
| `Default value` volume | `number` | 1 |
| `Default value` type | `number` | 0 |

**Returns:** `void`

___
<a id="stepprocess"></a>

###  stepProcess

▸ **stepProcess**(pid: *`number`*): `void`

*Defined in [_lib/Machine.ts:219](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L219)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| pid | `number` |

**Returns:** `void`

___
<a id="stoptone"></a>

###  stopTone

▸ **stopTone**(channel: *`number`*): `void`

*Defined in [_lib/Machine.ts:316](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L316)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| channel | `number` |

**Returns:** `void`

___
<a id="transfermemory"></a>

###  transferMemory

▸ **transferMemory**(srcPid: *`number`*, srcOffset: *`number`*, length: *`number`*, destPid: *`number`*, destOffset: *`number`*): `void`

*Defined in [_lib/Machine.ts:237](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L237)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| srcPid | `number` |
| srcOffset | `number` |
| length | `number` |
| destPid | `number` |
| destOffset | `number` |

**Returns:** `void`

___
<a id="wabt"></a>

###  wabt

▸ **wabt**(): `number`

*Defined in [_lib/Machine.ts:318](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L318)*

**Returns:** `number`

___
<a id="write"></a>

###  write

▸ **write**(callback: * `number` &#124; `Function`*): `number`

*Defined in [_lib/Machine.ts:142](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L142)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback |  `number` &#124; `Function`|

**Returns:** `number`

___

