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
* [getOriginUrl](_script__lib_machine_.machine.md#getoriginurl)
* [head](_script__lib_machine_.machine.md#head)
* [killProcess](_script__lib_machine_.machine.md#killprocess)
* [list](_script__lib_machine_.machine.md#list)
* [loadProcess](_script__lib_machine_.machine.md#loadprocess)
* [log](_script__lib_machine_.machine.md#log)
* [logNumber](_script__lib_machine_.machine.md#lognumber)
* [popToMemory](_script__lib_machine_.machine.md#poptomemory)
* [post](_script__lib_machine_.machine.md#post)
* [print](_script__lib_machine_.machine.md#print)
* [processStatus](_script__lib_machine_.machine.md#processstatus)
* [pushFromMemory](_script__lib_machine_.machine.md#pushfrommemory)
* [rampFrequency](_script__lib_machine_.machine.md#rampfrequency)
* [rampVolume](_script__lib_machine_.machine.md#rampvolume)
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
* [teeToMemory](_script__lib_machine_.machine.md#teetomemory)
* [transferMemory](_script__lib_machine_.machine.md#transfermemory)
* [wabt](_script__lib_machine_.machine.md#wabt)
* [write](_script__lib_machine_.machine.md#write)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Machine**(): [Machine](_script__lib_machine_.machine.md)

*Defined in [script/_lib/Machine.ts:7](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L7)*

**Returns:** [Machine](_script__lib_machine_.machine.md)

___

## Methods

<a id="callapifunction"></a>

###  callApiFunction

▸ **callApiFunction**(index: *`number`*, ...params: *`number`[]*): `any`

*Defined in [script/_lib/Machine.ts:104](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L104)*

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

*Defined in [script/_lib/Machine.ts:299](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L299)*

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

*Defined in [script/_lib/Machine.ts:109](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L109)*

**Returns:** `void`

___
<a id="delete"></a>

###  delete

▸ **delete**(callback: * `number` &#124; `Function`*, pid?: *`number`*): `number`

*Defined in [script/_lib/Machine.ts:185](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L185)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| callback |  `number` &#124; `Function`| - |
| `Default value` pid | `number` | 0 |

**Returns:** `number`

___
<a id="displaymemory"></a>

###  displayMemory

▸ **displayMemory**(offset: *`number`*, length: *`number`*, destination?: *`number`*, pid?: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:49](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L49)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| offset | `number` | - |
| length | `number` | - |
| `Default value` destination | `number` | 0 |
| `Default value` pid | `number` | 0 |

**Returns:** `void`

___
<a id="focusinput"></a>

###  focusInput

▸ **focusInput**(input: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:323](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L323)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `number` |

**Returns:** `void`

___
<a id="getapifunctionindex"></a>

###  getApiFunctionIndex

▸ **getApiFunctionIndex**(): `number`

*Defined in [script/_lib/Machine.ts:100](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L100)*

**Returns:** `number`

___
<a id="getbaseurl"></a>

###  getBaseUrl

▸ **getBaseUrl**(): `number`

*Defined in [script/_lib/Machine.ts:121](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L121)*

**Returns:** `number`

___
<a id="getbuffersize"></a>

###  getBufferSize

▸ **getBufferSize**(indexFromEnd?: *`number`*): `number`

*Defined in [script/_lib/Machine.ts:96](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L96)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` indexFromEnd | `number` | 0 |

**Returns:** `number`

___
<a id="getgameaxisx"></a>

###  getGameAxisX

▸ **getGameAxisX**(): `any`

*Defined in [script/_lib/Machine.ts:385](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L385)*

**Returns:** `any`

___
<a id="getgameaxisy"></a>

###  getGameAxisY

▸ **getGameAxisY**(): `any`

*Defined in [script/_lib/Machine.ts:386](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L386)*

**Returns:** `any`

___
<a id="getgamebuttona"></a>

###  getGameButtonA

▸ **getGameButtonA**(): `any`

*Defined in [script/_lib/Machine.ts:387](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L387)*

**Returns:** `any`

___
<a id="getgamebuttonb"></a>

###  getGameButtonB

▸ **getGameButtonB**(): `any`

*Defined in [script/_lib/Machine.ts:388](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L388)*

**Returns:** `any`

___
<a id="getgamebuttonx"></a>

###  getGameButtonX

▸ **getGameButtonX**(): `any`

*Defined in [script/_lib/Machine.ts:389](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L389)*

**Returns:** `any`

___
<a id="getgamebuttony"></a>

###  getGameButtonY

▸ **getGameButtonY**(): `any`

*Defined in [script/_lib/Machine.ts:390](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L390)*

**Returns:** `any`

___
<a id="getinputkey"></a>

###  getInputKey

▸ **getInputKey**(): `any`

*Defined in [script/_lib/Machine.ts:342](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L342)*

**Returns:** `any`

___
<a id="getinputposition"></a>

###  getInputPosition

▸ **getInputPosition**(): `any`

*Defined in [script/_lib/Machine.ts:340](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L340)*

**Returns:** `any`

___
<a id="getinputselected"></a>

###  getInputSelected

▸ **getInputSelected**(): `any`

*Defined in [script/_lib/Machine.ts:341](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L341)*

**Returns:** `any`

___
<a id="getinputtext"></a>

###  getInputText

▸ **getInputText**(): `number`

*Defined in [script/_lib/Machine.ts:339](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L339)*

**Returns:** `number`

___
<a id="getmousepressed"></a>

###  getMousePressed

▸ **getMousePressed**(): `any`

*Defined in [script/_lib/Machine.ts:384](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L384)*

**Returns:** `any`

___
<a id="getmousex"></a>

###  getMouseX

▸ **getMouseX**(): `any`

*Defined in [script/_lib/Machine.ts:381](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L381)*

**Returns:** `any`

___
<a id="getmousey"></a>

###  getMouseY

▸ **getMouseY**(): `any`

*Defined in [script/_lib/Machine.ts:382](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L382)*

**Returns:** `any`

___
<a id="getnativedisplayheight"></a>

###  getNativeDisplayHeight

▸ **getNativeDisplayHeight**(): `any`

*Defined in [script/_lib/Machine.ts:73](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L73)*

**Returns:** `any`

___
<a id="getnativedisplaywidth"></a>

###  getNativeDisplayWidth

▸ **getNativeDisplayWidth**(): `any`

*Defined in [script/_lib/Machine.ts:70](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L70)*

**Returns:** `any`

___
<a id="getoriginurl"></a>

###  getOriginUrl

▸ **getOriginUrl**(): `number`

*Defined in [script/_lib/Machine.ts:118](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L118)*

**Returns:** `number`

___
<a id="head"></a>

###  head

▸ **head**(callback: * `number` &#124; `Function`*, pid?: *`number`*): `number`

*Defined in [script/_lib/Machine.ts:215](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L215)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| callback |  `number` &#124; `Function`| - |
| `Default value` pid | `number` | 0 |

**Returns:** `number`

___
<a id="killprocess"></a>

###  killProcess

▸ **killProcess**(pid: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:310](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L310)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| pid | `number` |

**Returns:** `void`

___
<a id="list"></a>

###  list

▸ **list**(callback: * `number` &#124; `Function`*, pid?: *`number`*): `number`

*Defined in [script/_lib/Machine.ts:200](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L200)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| callback |  `number` &#124; `Function`| - |
| `Default value` pid | `number` | 0 |

**Returns:** `number`

___
<a id="loadprocess"></a>

###  loadProcess

▸ **loadProcess**(): `number`

*Defined in [script/_lib/Machine.ts:251](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L251)*

**Returns:** `number`

___
<a id="log"></a>

###  log

▸ **log**(): `void`

*Defined in [script/_lib/Machine.ts:15](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L15)*

**Returns:** `void`

___
<a id="lognumber"></a>

###  logNumber

▸ **logNumber**(): `void`

*Defined in [script/_lib/Machine.ts:18](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L18)*

**Returns:** `void`

___
<a id="poptomemory"></a>

###  popToMemory

▸ **popToMemory**(offset: *`number`*, pid?: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:83](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L83)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| offset | `number` | - |
| `Default value` pid | `number` | 0 |

**Returns:** `void`

___
<a id="post"></a>

###  post

▸ **post**(callback: * `number` &#124; `Function`*, pid?: *`number`*): `number`

*Defined in [script/_lib/Machine.ts:230](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L230)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| callback |  `number` &#124; `Function`| - |
| `Default value` pid | `number` | 0 |

**Returns:** `number`

___
<a id="print"></a>

###  print

▸ **print**(): `void`

*Defined in [script/_lib/Machine.ts:45](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L45)*

**Returns:** `void`

___
<a id="processstatus"></a>

###  processStatus

▸ **processStatus**(pid: *`number`*):  `undefined` &#124; `0` &#124; `1` &#124; `-1` &#124; `2`

*Defined in [script/_lib/Machine.ts:282](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L282)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| pid | `number` |

**Returns:**  `undefined` &#124; `0` &#124; `1` &#124; `-1` &#124; `2`

___
<a id="pushfrommemory"></a>

###  pushFromMemory

▸ **pushFromMemory**(offset: *`number`*, length: *`number`*, pid?: *`number`*): `number`

*Defined in [script/_lib/Machine.ts:76](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L76)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| offset | `number` | - |
| length | `number` | - |
| `Default value` pid | `number` | 0 |

**Returns:** `number`

___
<a id="rampfrequency"></a>

###  rampFrequency

▸ **rampFrequency**(channel: *`number`*, frequency: *`number`*, duration: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:393](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L393)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| channel | `number` |
| frequency | `number` |
| duration | `number` |

**Returns:** `void`

___
<a id="rampvolume"></a>

###  rampVolume

▸ **rampVolume**(channel: *`number`*, volume: *`number`*, duration: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:394](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L394)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| channel | `number` |
| volume | `number` |
| duration | `number` |

**Returns:** `void`

___
<a id="read"></a>

###  read

▸ **read**(callback: * `number` &#124; `Function`*, pid?: *`number`*): `number`

*Defined in [script/_lib/Machine.ts:137](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L137)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| callback |  `number` &#124; `Function`| - |
| `Default value` pid | `number` | 0 |

**Returns:** `number`

___
<a id="readimage"></a>

###  readImage

▸ **readImage**(callback: * `number` &#124; `Function`*, pid?: *`number`*): `number`

*Defined in [script/_lib/Machine.ts:153](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L153)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| callback |  `number` &#124; `Function`| - |
| `Default value` pid | `number` | 0 |

**Returns:** `number`

___
<a id="replaceinputtext"></a>

###  replaceInputText

▸ **replaceInputText**(fromIndex?: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:366](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L366)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` fromIndex | `number` | 0 |

**Returns:** `void`

___
<a id="setbaseurl"></a>

###  setBaseUrl

▸ **setBaseUrl**(): `void`

*Defined in [script/_lib/Machine.ts:124](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L124)*

**Returns:** `void`

___
<a id="setdisplaymode"></a>

###  setDisplayMode

▸ **setDisplayMode**(mode: *`number`*, width: *`number`*, height: *`number`*, visibleWidth?: *`number`*, visibleHeight?: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:22](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L22)*

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

*Defined in [script/_lib/Machine.ts:359](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L359)*

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

*Defined in [script/_lib/Machine.ts:352](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L352)*

**Returns:** `void`

___
<a id="setinputtype"></a>

###  setInputType

▸ **setInputType**(type: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:343](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L343)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `number` |

**Returns:** `void`

___
<a id="setnativemouse"></a>

###  setNativeMouse

▸ **setNativeMouse**(type: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:383](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L383)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `number` |

**Returns:** `void`

___
<a id="setstepinterval"></a>

###  setStepInterval

▸ **setStepInterval**(milliseconds: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:247](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L247)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| milliseconds | `number` |

**Returns:** `void`

___
<a id="shutdown"></a>

###  shutdown

▸ **shutdown**(): `void`

*Defined in [script/_lib/Machine.ts:114](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L114)*

**Returns:** `void`

___
<a id="starttone"></a>

###  startTone

▸ **startTone**(channel: *`number`*, frequency: *`number`*, volume?: *`number`*, type?: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:392](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L392)*

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

*Defined in [script/_lib/Machine.ts:288](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L288)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| pid | `number` |

**Returns:** `void`

___
<a id="stoptone"></a>

###  stopTone

▸ **stopTone**(channel: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:395](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L395)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| channel | `number` |

**Returns:** `void`

___
<a id="teetomemory"></a>

###  teeToMemory

▸ **teeToMemory**(offset: *`number`*, pid?: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:91](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L91)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| offset | `number` | - |
| `Default value` pid | `number` | 0 |

**Returns:** `void`

___
<a id="transfermemory"></a>

###  transferMemory

▸ **transferMemory**(srcPid: *`number`*, srcOffset: *`number`*, length: *`number`*, destPid: *`number`*, destOffset: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:314](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L314)*

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

*Defined in [script/_lib/Machine.ts:397](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L397)*

**Returns:** `number`

___
<a id="write"></a>

###  write

▸ **write**(callback: * `number` &#124; `Function`*, pid?: *`number`*): `number`

*Defined in [script/_lib/Machine.ts:169](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L169)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| callback |  `number` &#124; `Function`| - |
| `Default value` pid | `number` | 0 |

**Returns:** `number`

___

