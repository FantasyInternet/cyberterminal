[cyberterminal](../README.md) > ["script/_lib/Machine"](../modules/_script__lib_machine_.md) > [Machine](../classes/_script__lib_machine_.machine.md)

# Class: Machine

Central processing unit for browsers See [Sys](../interfaces/__classes_sys_.sys.md) for documentation

## Hierarchy

**Machine**

## Index

### Constructors

* [constructor](_script__lib_machine_.machine.md#constructor)

### Methods

* [callApiFunction](_script__lib_machine_.machine.md#callapifunction)
* [callbackProcess](_script__lib_machine_.machine.md#callbackprocess)
* [connectTo](_script__lib_machine_.machine.md#connectto)
* [delete](_script__lib_machine_.machine.md#delete)
* [displayMemory](_script__lib_machine_.machine.md#displaymemory)
* [focusInput](_script__lib_machine_.machine.md#focusinput)
* [getApiFunctionIndex](_script__lib_machine_.machine.md#getapifunctionindex)
* [getBaseUrl](_script__lib_machine_.machine.md#getbaseurl)
* [getBufferSize](_script__lib_machine_.machine.md#getbuffersize)
* [getGameAxisX](_script__lib_machine_.machine.md#getgameaxisx)
* [getGameAxisY](_script__lib_machine_.machine.md#getgameaxisy)
* [getGameButtonA](_script__lib_machine_.machine.md#getgamebuttona)
* [getGameButtonB](_script__lib_machine_.machine.md#getgamebuttonb)
* [getGameButtonX](_script__lib_machine_.machine.md#getgamebuttonx)
* [getGameButtonY](_script__lib_machine_.machine.md#getgamebuttony)
* [getInputKey](_script__lib_machine_.machine.md#getinputkey)
* [getInputPosition](_script__lib_machine_.machine.md#getinputposition)
* [getInputSelected](_script__lib_machine_.machine.md#getinputselected)
* [getInputText](_script__lib_machine_.machine.md#getinputtext)
* [getMousePressed](_script__lib_machine_.machine.md#getmousepressed)
* [getMouseX](_script__lib_machine_.machine.md#getmousex)
* [getMouseY](_script__lib_machine_.machine.md#getmousey)
* [getNativeDisplayHeight](_script__lib_machine_.machine.md#getnativedisplayheight)
* [getNativeDisplayWidth](_script__lib_machine_.machine.md#getnativedisplaywidth)
* [head](_script__lib_machine_.machine.md#head)
* [killProcess](_script__lib_machine_.machine.md#killprocess)
* [list](_script__lib_machine_.machine.md#list)
* [loadProcess](_script__lib_machine_.machine.md#loadprocess)
* [log](_script__lib_machine_.machine.md#log)
* [logNumber](_script__lib_machine_.machine.md#lognumber)
* [popToMemory](_script__lib_machine_.machine.md#poptomemory)
* [post](_script__lib_machine_.machine.md#post)
* [print](_script__lib_machine_.machine.md#print)
* [pushFromMemory](_script__lib_machine_.machine.md#pushfrommemory)
* [read](_script__lib_machine_.machine.md#read)
* [readImage](_script__lib_machine_.machine.md#readimage)
* [replaceInputText](_script__lib_machine_.machine.md#replaceinputtext)
* [setBaseUrl](_script__lib_machine_.machine.md#setbaseurl)
* [setDisplayMode](_script__lib_machine_.machine.md#setdisplaymode)
* [setInputPosition](_script__lib_machine_.machine.md#setinputposition)
* [setInputText](_script__lib_machine_.machine.md#setinputtext)
* [setInputType](_script__lib_machine_.machine.md#setinputtype)
* [setNativeMouse](_script__lib_machine_.machine.md#setnativemouse)
* [setStepInterval](_script__lib_machine_.machine.md#setstepinterval)
* [shutdown](_script__lib_machine_.machine.md#shutdown)
* [startTone](_script__lib_machine_.machine.md#starttone)
* [stepProcess](_script__lib_machine_.machine.md#stepprocess)
* [stopTone](_script__lib_machine_.machine.md#stoptone)
* [transferMemory](_script__lib_machine_.machine.md#transfermemory)
* [wabt](_script__lib_machine_.machine.md#wabt)
* [write](_script__lib_machine_.machine.md#write)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Machine**(): [Machine](_script__lib_machine_.machine.md)

*Defined in [script/_lib/Machine.ts:9](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L9)*

**Returns:** [Machine](_script__lib_machine_.machine.md)

___

## Methods

<a id="callapifunction"></a>

###  callApiFunction

▸ **callApiFunction**(index: *`number`*, ...params: *`number`[]*): `any`

*Defined in [script/_lib/Machine.ts:101](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L101)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index | `number` |
| `Rest` params | `number`[] |

**Returns:** `any`

___
<a id="callbackprocess"></a>

###  callbackProcess

▸ **callbackProcess**(pid: *`number`*, tableIndex: *`number`*, ...a: *`any`[]*): `void`

*Defined in [script/_lib/Machine.ts:279](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L279)*

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

*Defined in [script/_lib/Machine.ts:106](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L106)*

**Returns:** `void`

___
<a id="delete"></a>

###  delete

▸ **delete**(callback: * `number` &#124; `Function`*): `number`

*Defined in [script/_lib/Machine.ts:179](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L179)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback |  `number` &#124; `Function`|

**Returns:** `number`

___
<a id="displaymemory"></a>

###  displayMemory

▸ **displayMemory**(offset: *`number`*, length: *`number`*, destination?: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:51](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L51)*

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

*Defined in [script/_lib/Machine.ts:300](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L300)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `number` |

**Returns:** `void`

___
<a id="getapifunctionindex"></a>

###  getApiFunctionIndex

▸ **getApiFunctionIndex**(): `number`

*Defined in [script/_lib/Machine.ts:97](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L97)*

**Returns:** `number`

___
<a id="getbaseurl"></a>

###  getBaseUrl

▸ **getBaseUrl**(): `number`

*Defined in [script/_lib/Machine.ts:115](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L115)*

**Returns:** `number`

___
<a id="getbuffersize"></a>

###  getBufferSize

▸ **getBufferSize**(indexFromEnd?: *`number`*): `number`

*Defined in [script/_lib/Machine.ts:93](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L93)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` indexFromEnd | `number` | 0 |

**Returns:** `number`

___
<a id="getgameaxisx"></a>

###  getGameAxisX

▸ **getGameAxisX**(): `any`

*Defined in [script/_lib/Machine.ts:362](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L362)*

**Returns:** `any`

___
<a id="getgameaxisy"></a>

###  getGameAxisY

▸ **getGameAxisY**(): `any`

*Defined in [script/_lib/Machine.ts:363](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L363)*

**Returns:** `any`

___
<a id="getgamebuttona"></a>

###  getGameButtonA

▸ **getGameButtonA**(): `any`

*Defined in [script/_lib/Machine.ts:364](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L364)*

**Returns:** `any`

___
<a id="getgamebuttonb"></a>

###  getGameButtonB

▸ **getGameButtonB**(): `any`

*Defined in [script/_lib/Machine.ts:365](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L365)*

**Returns:** `any`

___
<a id="getgamebuttonx"></a>

###  getGameButtonX

▸ **getGameButtonX**(): `any`

*Defined in [script/_lib/Machine.ts:366](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L366)*

**Returns:** `any`

___
<a id="getgamebuttony"></a>

###  getGameButtonY

▸ **getGameButtonY**(): `any`

*Defined in [script/_lib/Machine.ts:367](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L367)*

**Returns:** `any`

___
<a id="getinputkey"></a>

###  getInputKey

▸ **getInputKey**(): `any`

*Defined in [script/_lib/Machine.ts:319](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L319)*

**Returns:** `any`

___
<a id="getinputposition"></a>

###  getInputPosition

▸ **getInputPosition**(): `any`

*Defined in [script/_lib/Machine.ts:317](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L317)*

**Returns:** `any`

___
<a id="getinputselected"></a>

###  getInputSelected

▸ **getInputSelected**(): `any`

*Defined in [script/_lib/Machine.ts:318](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L318)*

**Returns:** `any`

___
<a id="getinputtext"></a>

###  getInputText

▸ **getInputText**(): `number`

*Defined in [script/_lib/Machine.ts:316](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L316)*

**Returns:** `number`

___
<a id="getmousepressed"></a>

###  getMousePressed

▸ **getMousePressed**(): `any`

*Defined in [script/_lib/Machine.ts:361](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L361)*

**Returns:** `any`

___
<a id="getmousex"></a>

###  getMouseX

▸ **getMouseX**(): `any`

*Defined in [script/_lib/Machine.ts:358](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L358)*

**Returns:** `any`

___
<a id="getmousey"></a>

###  getMouseY

▸ **getMouseY**(): `any`

*Defined in [script/_lib/Machine.ts:359](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L359)*

**Returns:** `any`

___
<a id="getnativedisplayheight"></a>

###  getNativeDisplayHeight

▸ **getNativeDisplayHeight**(): `any`

*Defined in [script/_lib/Machine.ts:75](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L75)*

**Returns:** `any`

___
<a id="getnativedisplaywidth"></a>

###  getNativeDisplayWidth

▸ **getNativeDisplayWidth**(): `any`

*Defined in [script/_lib/Machine.ts:72](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L72)*

**Returns:** `any`

___
<a id="head"></a>

###  head

▸ **head**(callback: * `number` &#124; `Function`*): `number`

*Defined in [script/_lib/Machine.ts:209](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L209)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback |  `number` &#124; `Function`|

**Returns:** `number`

___
<a id="killprocess"></a>

###  killProcess

▸ **killProcess**(pid: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:286](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L286)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| pid | `number` |

**Returns:** `void`

___
<a id="list"></a>

###  list

▸ **list**(callback: * `number` &#124; `Function`*): `number`

*Defined in [script/_lib/Machine.ts:194](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L194)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback |  `number` &#124; `Function`|

**Returns:** `number`

___
<a id="loadprocess"></a>

###  loadProcess

▸ **loadProcess**(): `number`

*Defined in [script/_lib/Machine.ts:244](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L244)*

**Returns:** `number`

___
<a id="log"></a>

###  log

▸ **log**(): `void`

*Defined in [script/_lib/Machine.ts:17](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L17)*

**Returns:** `void`

___
<a id="lognumber"></a>

###  logNumber

▸ **logNumber**(): `void`

*Defined in [script/_lib/Machine.ts:20](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L20)*

**Returns:** `void`

___
<a id="poptomemory"></a>

###  popToMemory

▸ **popToMemory**(offset: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:85](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L85)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| offset | `number` |

**Returns:** `void`

___
<a id="post"></a>

###  post

▸ **post**(callback: * `number` &#124; `Function`*): `number`

*Defined in [script/_lib/Machine.ts:224](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L224)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback |  `number` &#124; `Function`|

**Returns:** `number`

___
<a id="print"></a>

###  print

▸ **print**(): `void`

*Defined in [script/_lib/Machine.ts:47](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L47)*

**Returns:** `void`

___
<a id="pushfrommemory"></a>

###  pushFromMemory

▸ **pushFromMemory**(offset: *`number`*, length: *`number`*): `number`

*Defined in [script/_lib/Machine.ts:78](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L78)*

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

*Defined in [script/_lib/Machine.ts:131](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L131)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback |  `number` &#124; `Function`|

**Returns:** `number`

___
<a id="readimage"></a>

###  readImage

▸ **readImage**(callback: * `number` &#124; `Function`*): `number`

*Defined in [script/_lib/Machine.ts:147](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L147)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback |  `number` &#124; `Function`|

**Returns:** `number`

___
<a id="replaceinputtext"></a>

###  replaceInputText

▸ **replaceInputText**(fromIndex?: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:343](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L343)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` fromIndex | `number` | 0 |

**Returns:** `void`

___
<a id="setbaseurl"></a>

###  setBaseUrl

▸ **setBaseUrl**(): `void`

*Defined in [script/_lib/Machine.ts:118](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L118)*

**Returns:** `void`

___
<a id="setdisplaymode"></a>

###  setDisplayMode

▸ **setDisplayMode**(mode: *`number`*, width: *`number`*, height: *`number`*, visibleWidth?: *`number`*, visibleHeight?: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:24](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L24)*

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

*Defined in [script/_lib/Machine.ts:336](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L336)*

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

*Defined in [script/_lib/Machine.ts:329](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L329)*

**Returns:** `void`

___
<a id="setinputtype"></a>

###  setInputType

▸ **setInputType**(type: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:320](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L320)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `number` |

**Returns:** `void`

___
<a id="setnativemouse"></a>

###  setNativeMouse

▸ **setNativeMouse**(type: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:360](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L360)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `number` |

**Returns:** `void`

___
<a id="setstepinterval"></a>

###  setStepInterval

▸ **setStepInterval**(milliseconds: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:241](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L241)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| milliseconds | `number` |

**Returns:** `void`

___
<a id="shutdown"></a>

###  shutdown

▸ **shutdown**(): `void`

*Defined in [script/_lib/Machine.ts:111](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L111)*

**Returns:** `void`

___
<a id="starttone"></a>

###  startTone

▸ **startTone**(channel: *`number`*, frequency: *`number`*, volume?: *`number`*, type?: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:369](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L369)*

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

*Defined in [script/_lib/Machine.ts:272](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L272)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| pid | `number` |

**Returns:** `void`

___
<a id="stoptone"></a>

###  stopTone

▸ **stopTone**(channel: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:370](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L370)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| channel | `number` |

**Returns:** `void`

___
<a id="transfermemory"></a>

###  transferMemory

▸ **transferMemory**(srcPid: *`number`*, srcOffset: *`number`*, length: *`number`*, destPid: *`number`*, destOffset: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:290](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L290)*

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

*Defined in [script/_lib/Machine.ts:372](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L372)*

**Returns:** `number`

___
<a id="write"></a>

###  write

▸ **write**(callback: * `number` &#124; `Function`*): `number`

*Defined in [script/_lib/Machine.ts:163](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L163)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback |  `number` &#124; `Function`|

**Returns:** `number`

___

