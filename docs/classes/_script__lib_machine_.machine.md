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
* [displayProcess](_script__lib_machine_.machine.md#displayprocess)
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

*Defined in [script/_lib/Machine.ts:105](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L105)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |
| `Rest` params | `number`[] |

**Returns:** `any`

___
<a id="callbackprocess"></a>

###  callbackProcess

▸ **callbackProcess**(pid: *`number`*, tableIndex: *`number`*, ...a: *`any`[]*): `void`

*Defined in [script/_lib/Machine.ts:312](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L312)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| pid | `number` |
| tableIndex | `number` |
| `Rest` a | `any`[] |

**Returns:** `void`

___
<a id="connectto"></a>

###  connectTo

▸ **connectTo**(): `void`

*Defined in [script/_lib/Machine.ts:110](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L110)*

**Returns:** `void`

___
<a id="delete"></a>

###  delete

▸ **delete**(callback: *`number` | `Function`*, pid?: *`number`*): `number`

*Defined in [script/_lib/Machine.ts:186](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L186)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| callback | `number` | `Function` | - |
| `Default value` pid | `number` | 0 |

**Returns:** `number`

___
<a id="displaymemory"></a>

###  displayMemory

▸ **displayMemory**(offset: *`number`*, length: *`number`*, destination?: *`number`*, pid?: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:50](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L50)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| offset | `number` | - |
| length | `number` | - |
| `Default value` destination | `number` | 0 |
| `Default value` pid | `number` | 0 |

**Returns:** `void`

___
<a id="displayprocess"></a>

###  displayProcess

▸ **displayProcess**(pid: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:301](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L301)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| pid | `number` |

**Returns:** `void`

___
<a id="focusinput"></a>

###  focusInput

▸ **focusInput**(input: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:336](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L336)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| input | `number` |

**Returns:** `void`

___
<a id="getapifunctionindex"></a>

###  getApiFunctionIndex

▸ **getApiFunctionIndex**(): `number`

*Defined in [script/_lib/Machine.ts:101](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L101)*

**Returns:** `number`

___
<a id="getbaseurl"></a>

###  getBaseUrl

▸ **getBaseUrl**(): `number`

*Defined in [script/_lib/Machine.ts:122](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L122)*

**Returns:** `number`

___
<a id="getbuffersize"></a>

###  getBufferSize

▸ **getBufferSize**(indexFromEnd?: *`number`*): `number`

*Defined in [script/_lib/Machine.ts:97](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L97)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` indexFromEnd | `number` | 0 |

**Returns:** `number`

___
<a id="getgameaxisx"></a>

###  getGameAxisX

▸ **getGameAxisX**(): `any`

*Defined in [script/_lib/Machine.ts:398](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L398)*

**Returns:** `any`

___
<a id="getgameaxisy"></a>

###  getGameAxisY

▸ **getGameAxisY**(): `any`

*Defined in [script/_lib/Machine.ts:399](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L399)*

**Returns:** `any`

___
<a id="getgamebuttona"></a>

###  getGameButtonA

▸ **getGameButtonA**(): `any`

*Defined in [script/_lib/Machine.ts:400](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L400)*

**Returns:** `any`

___
<a id="getgamebuttonb"></a>

###  getGameButtonB

▸ **getGameButtonB**(): `any`

*Defined in [script/_lib/Machine.ts:401](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L401)*

**Returns:** `any`

___
<a id="getgamebuttonx"></a>

###  getGameButtonX

▸ **getGameButtonX**(): `any`

*Defined in [script/_lib/Machine.ts:402](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L402)*

**Returns:** `any`

___
<a id="getgamebuttony"></a>

###  getGameButtonY

▸ **getGameButtonY**(): `any`

*Defined in [script/_lib/Machine.ts:403](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L403)*

**Returns:** `any`

___
<a id="getinputkey"></a>

###  getInputKey

▸ **getInputKey**(): `any`

*Defined in [script/_lib/Machine.ts:355](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L355)*

**Returns:** `any`

___
<a id="getinputposition"></a>

###  getInputPosition

▸ **getInputPosition**(): `any`

*Defined in [script/_lib/Machine.ts:353](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L353)*

**Returns:** `any`

___
<a id="getinputselected"></a>

###  getInputSelected

▸ **getInputSelected**(): `any`

*Defined in [script/_lib/Machine.ts:354](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L354)*

**Returns:** `any`

___
<a id="getinputtext"></a>

###  getInputText

▸ **getInputText**(): `number`

*Defined in [script/_lib/Machine.ts:352](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L352)*

**Returns:** `number`

___
<a id="getmousepressed"></a>

###  getMousePressed

▸ **getMousePressed**(): `any`

*Defined in [script/_lib/Machine.ts:397](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L397)*

**Returns:** `any`

___
<a id="getmousex"></a>

###  getMouseX

▸ **getMouseX**(): `any`

*Defined in [script/_lib/Machine.ts:394](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L394)*

**Returns:** `any`

___
<a id="getmousey"></a>

###  getMouseY

▸ **getMouseY**(): `any`

*Defined in [script/_lib/Machine.ts:395](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L395)*

**Returns:** `any`

___
<a id="getnativedisplayheight"></a>

###  getNativeDisplayHeight

▸ **getNativeDisplayHeight**(): `any`

*Defined in [script/_lib/Machine.ts:74](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L74)*

**Returns:** `any`

___
<a id="getnativedisplaywidth"></a>

###  getNativeDisplayWidth

▸ **getNativeDisplayWidth**(): `any`

*Defined in [script/_lib/Machine.ts:71](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L71)*

**Returns:** `any`

___
<a id="getoriginurl"></a>

###  getOriginUrl

▸ **getOriginUrl**(): `number`

*Defined in [script/_lib/Machine.ts:119](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L119)*

**Returns:** `number`

___
<a id="head"></a>

###  head

▸ **head**(callback: *`number` | `Function`*, pid?: *`number`*): `number`

*Defined in [script/_lib/Machine.ts:216](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L216)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| callback | `number` | `Function` | - |
| `Default value` pid | `number` | 0 |

**Returns:** `number`

___
<a id="killprocess"></a>

###  killProcess

▸ **killProcess**(pid: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:323](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L323)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| pid | `number` |

**Returns:** `void`

___
<a id="list"></a>

###  list

▸ **list**(callback: *`number` | `Function`*, pid?: *`number`*): `number`

*Defined in [script/_lib/Machine.ts:201](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L201)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| callback | `number` | `Function` | - |
| `Default value` pid | `number` | 0 |

**Returns:** `number`

___
<a id="loadprocess"></a>

###  loadProcess

▸ **loadProcess**(): `number`

*Defined in [script/_lib/Machine.ts:253](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L253)*

**Returns:** `number`

___
<a id="log"></a>

###  log

▸ **log**(): `void`

*Defined in [script/_lib/Machine.ts:16](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L16)*

**Returns:** `void`

___
<a id="lognumber"></a>

###  logNumber

▸ **logNumber**(): `void`

*Defined in [script/_lib/Machine.ts:19](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L19)*

**Returns:** `void`

___
<a id="poptomemory"></a>

###  popToMemory

▸ **popToMemory**(offset: *`number`*, pid?: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:84](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L84)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| offset | `number` | - |
| `Default value` pid | `number` | 0 |

**Returns:** `void`

___
<a id="post"></a>

###  post

▸ **post**(callback: *`number` | `Function`*, pid?: *`number`*): `number`

*Defined in [script/_lib/Machine.ts:231](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L231)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| callback | `number` | `Function` | - |
| `Default value` pid | `number` | 0 |

**Returns:** `number`

___
<a id="print"></a>

###  print

▸ **print**(): `void`

*Defined in [script/_lib/Machine.ts:46](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L46)*

**Returns:** `void`

___
<a id="processstatus"></a>

###  processStatus

▸ **processStatus**(pid: *`number`*): `undefined` | `0` | `1` | `-1` | `2`

*Defined in [script/_lib/Machine.ts:284](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L284)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| pid | `number` |

**Returns:** `undefined` | `0` | `1` | `-1` | `2`

___
<a id="pushfrommemory"></a>

###  pushFromMemory

▸ **pushFromMemory**(offset: *`number`*, length: *`number`*, pid?: *`number`*): `number`

*Defined in [script/_lib/Machine.ts:77](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L77)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| offset | `number` | - |
| length | `number` | - |
| `Default value` pid | `number` | 0 |

**Returns:** `number`

___
<a id="rampfrequency"></a>

###  rampFrequency

▸ **rampFrequency**(channel: *`number`*, frequency: *`number`*, duration: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:406](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L406)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| channel | `number` |
| frequency | `number` |
| duration | `number` |

**Returns:** `void`

___
<a id="rampvolume"></a>

###  rampVolume

▸ **rampVolume**(channel: *`number`*, volume: *`number`*, duration: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:407](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L407)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| channel | `number` |
| volume | `number` |
| duration | `number` |

**Returns:** `void`

___
<a id="read"></a>

###  read

▸ **read**(callback: *`number` | `Function`*, pid?: *`number`*): `number`

*Defined in [script/_lib/Machine.ts:138](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L138)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| callback | `number` | `Function` | - |
| `Default value` pid | `number` | 0 |

**Returns:** `number`

___
<a id="readimage"></a>

###  readImage

▸ **readImage**(callback: *`number` | `Function`*, pid?: *`number`*): `number`

*Defined in [script/_lib/Machine.ts:154](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L154)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| callback | `number` | `Function` | - |
| `Default value` pid | `number` | 0 |

**Returns:** `number`

___
<a id="replaceinputtext"></a>

###  replaceInputText

▸ **replaceInputText**(fromIndex?: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:379](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L379)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` fromIndex | `number` | 0 |

**Returns:** `void`

___
<a id="setbaseurl"></a>

###  setBaseUrl

▸ **setBaseUrl**(): `void`

*Defined in [script/_lib/Machine.ts:125](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L125)*

**Returns:** `void`

___
<a id="setdisplaymode"></a>

###  setDisplayMode

▸ **setDisplayMode**(mode: *`number`*, width: *`number`*, height: *`number`*, visibleWidth?: *`number`*, visibleHeight?: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:23](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L23)*

**Parameters:**

| Name | Type | Default value |
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

*Defined in [script/_lib/Machine.ts:372](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L372)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` position | `number` | 0 |
| `Default value` selection | `number` | 0 |

**Returns:** `void`

___
<a id="setinputtext"></a>

###  setInputText

▸ **setInputText**(): `void`

*Defined in [script/_lib/Machine.ts:365](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L365)*

**Returns:** `void`

___
<a id="setinputtype"></a>

###  setInputType

▸ **setInputType**(type: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:356](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L356)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `number` |

**Returns:** `void`

___
<a id="setnativemouse"></a>

###  setNativeMouse

▸ **setNativeMouse**(type: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:396](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L396)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `number` |

**Returns:** `void`

___
<a id="setstepinterval"></a>

###  setStepInterval

▸ **setStepInterval**(milliseconds: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:248](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L248)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| milliseconds | `number` |

**Returns:** `void`

___
<a id="shutdown"></a>

###  shutdown

▸ **shutdown**(): `void`

*Defined in [script/_lib/Machine.ts:115](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L115)*

**Returns:** `void`

___
<a id="starttone"></a>

###  startTone

▸ **startTone**(channel: *`number`*, frequency: *`number`*, volume?: *`number`*, type?: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:405](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L405)*

**Parameters:**

| Name | Type | Default value |
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

*Defined in [script/_lib/Machine.ts:290](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L290)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| pid | `number` |

**Returns:** `void`

___
<a id="stoptone"></a>

###  stopTone

▸ **stopTone**(channel: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:408](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L408)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| channel | `number` |

**Returns:** `void`

___
<a id="teetomemory"></a>

###  teeToMemory

▸ **teeToMemory**(offset: *`number`*, pid?: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:92](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L92)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| offset | `number` | - |
| `Default value` pid | `number` | 0 |

**Returns:** `void`

___
<a id="transfermemory"></a>

###  transferMemory

▸ **transferMemory**(srcPid: *`number`*, srcOffset: *`number`*, length: *`number`*, destPid: *`number`*, destOffset: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:327](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L327)*

**Parameters:**

| Name | Type |
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

*Defined in [script/_lib/Machine.ts:410](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L410)*

**Returns:** `number`

___
<a id="write"></a>

###  write

▸ **write**(callback: *`number` | `Function`*, pid?: *`number`*): `number`

*Defined in [script/_lib/Machine.ts:170](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L170)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| callback | `number` | `Function` | - |
| `Default value` pid | `number` | 0 |

**Returns:** `number`

___

