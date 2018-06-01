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

*Defined in [_lib/Machine.ts:223](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L223)*

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

*Defined in [_lib/Machine.ts:83](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L83)*

**Returns:** `void`

___
<a id="delete"></a>

###  delete

▸ **delete**(callback: *`number` |`Function`*): `number`

*Defined in [_lib/Machine.ts:155](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L155)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback | `number` |
`Function`
 | 

**Returns:** `number`

___
<a id="displaymemory"></a>

###  displayMemory

▸ **displayMemory**(offset: *`number`*, length: *`number`*, destination?: *`number`*): `void`

*Defined in [_lib/Machine.ts:46](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L46)*

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

*Defined in [_lib/Machine.ts:244](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L244)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `number` | 

**Returns:** `void`

___
<a id="getbaseurl"></a>

###  getBaseUrl

▸ **getBaseUrl**(): `number`

*Defined in [_lib/Machine.ts:92](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L92)*

**Returns:** `number`

___
<a id="getgameaxisx"></a>

###  getGameAxisX

▸ **getGameAxisX**(): `any`

*Defined in [_lib/Machine.ts:305](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L305)*

**Returns:** `any`

___
<a id="getgameaxisy"></a>

###  getGameAxisY

▸ **getGameAxisY**(): `any`

*Defined in [_lib/Machine.ts:306](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L306)*

**Returns:** `any`

___
<a id="getgamebuttona"></a>

###  getGameButtonA

▸ **getGameButtonA**(): `any`

*Defined in [_lib/Machine.ts:307](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L307)*

**Returns:** `any`

___
<a id="getgamebuttonb"></a>

###  getGameButtonB

▸ **getGameButtonB**(): `any`

*Defined in [_lib/Machine.ts:308](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L308)*

**Returns:** `any`

___
<a id="getgamebuttonx"></a>

###  getGameButtonX

▸ **getGameButtonX**(): `any`

*Defined in [_lib/Machine.ts:309](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L309)*

**Returns:** `any`

___
<a id="getgamebuttony"></a>

###  getGameButtonY

▸ **getGameButtonY**(): `any`

*Defined in [_lib/Machine.ts:310](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L310)*

**Returns:** `any`

___
<a id="getinputkey"></a>

###  getInputKey

▸ **getInputKey**(): `any`

*Defined in [_lib/Machine.ts:263](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L263)*

**Returns:** `any`

___
<a id="getinputposition"></a>

###  getInputPosition

▸ **getInputPosition**(): `any`

*Defined in [_lib/Machine.ts:261](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L261)*

**Returns:** `any`

___
<a id="getinputselected"></a>

###  getInputSelected

▸ **getInputSelected**(): `any`

*Defined in [_lib/Machine.ts:262](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L262)*

**Returns:** `any`

___
<a id="getinputtext"></a>

###  getInputText

▸ **getInputText**(): `number`

*Defined in [_lib/Machine.ts:260](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L260)*

**Returns:** `number`

___
<a id="getmousepressed"></a>

###  getMousePressed

▸ **getMousePressed**(): `any`

*Defined in [_lib/Machine.ts:304](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L304)*

**Returns:** `any`

___
<a id="getmousex"></a>

###  getMouseX

▸ **getMouseX**(): `any`

*Defined in [_lib/Machine.ts:302](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L302)*

**Returns:** `any`

___
<a id="getmousey"></a>

###  getMouseY

▸ **getMouseY**(): `any`

*Defined in [_lib/Machine.ts:303](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L303)*

**Returns:** `any`

___
<a id="killprocess"></a>

###  killProcess

▸ **killProcess**(pid: *`number`*): `void`

*Defined in [_lib/Machine.ts:230](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L230)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| pid | `number` | 

**Returns:** `void`

___
<a id="list"></a>

###  list

▸ **list**(callback: *`number` |`Function`*): `number`

*Defined in [_lib/Machine.ts:170](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L170)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback | `number` |
`Function`
 | 

**Returns:** `number`

___
<a id="loadprocess"></a>

###  loadProcess

▸ **loadProcess**(): `number`

*Defined in [_lib/Machine.ts:189](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L189)*

**Returns:** `number`

___
<a id="log"></a>

###  log

▸ **log**(): `void`

*Defined in [_lib/Machine.ts:15](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L15)*

**Returns:** `void`

___
<a id="poptomemory"></a>

###  popToMemory

▸ **popToMemory**(offset: *`number`*): `void`

*Defined in [_lib/Machine.ts:74](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L74)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| offset | `number` | 

**Returns:** `void`

___
<a id="print"></a>

###  print

▸ **print**(): `void`

*Defined in [_lib/Machine.ts:42](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L42)*

**Returns:** `void`

___
<a id="pushfrommemory"></a>

###  pushFromMemory

▸ **pushFromMemory**(offset: *`number`*, length: *`number`*): `number`

*Defined in [_lib/Machine.ts:67](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L67)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| offset | `number` | 
| length | `number` | 

**Returns:** `number`

___
<a id="read"></a>

###  read

▸ **read**(callback: *`number` |`Function`*): `number`

*Defined in [_lib/Machine.ts:107](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L107)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback | `number` |
`Function`
 | 

**Returns:** `number`

___
<a id="readimage"></a>

###  readImage

▸ **readImage**(callback: *`number` |`Function`*): `number`

*Defined in [_lib/Machine.ts:123](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L123)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback | `number` |
`Function`
 | 

**Returns:** `number`

___
<a id="replaceinputtext"></a>

###  replaceInputText

▸ **replaceInputText**(fromIndex?: *`number`*): `void`

*Defined in [_lib/Machine.ts:287](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L287)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` fromIndex | `number` | 0 | 

**Returns:** `void`

___
<a id="setbaseurl"></a>

###  setBaseUrl

▸ **setBaseUrl**(): `void`

*Defined in [_lib/Machine.ts:95](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L95)*

**Returns:** `void`

___
<a id="setdisplaymode"></a>

###  setDisplayMode

▸ **setDisplayMode**(mode: *`number`*, width: *`number`*, height: *`number`*, visibleWidth?: *`number`*, visibleHeight?: *`number`*): `void`

*Defined in [_lib/Machine.ts:19](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L19)*

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

*Defined in [_lib/Machine.ts:280](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L280)*

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

*Defined in [_lib/Machine.ts:273](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L273)*

**Returns:** `void`

___
<a id="setinputtype"></a>

###  setInputType

▸ **setInputType**(type: *`number`*): `void`

*Defined in [_lib/Machine.ts:264](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L264)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `number` | 

**Returns:** `void`

___
<a id="setstepinterval"></a>

###  setStepInterval

▸ **setStepInterval**(milliseconds: *`number`*): `void`

*Defined in [_lib/Machine.ts:186](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L186)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| milliseconds | `number` | 

**Returns:** `void`

___
<a id="shutdown"></a>

###  shutdown

▸ **shutdown**(): `void`

*Defined in [_lib/Machine.ts:88](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L88)*

**Returns:** `void`

___
<a id="starttone"></a>

###  startTone

▸ **startTone**(channel: *`number`*, frequency: *`number`*, volume?: *`number`*, type?: *`number`*): `void`

*Defined in [_lib/Machine.ts:312](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L312)*

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

*Defined in [_lib/Machine.ts:216](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L216)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| pid | `number` | 

**Returns:** `void`

___
<a id="stoptone"></a>

###  stopTone

▸ **stopTone**(channel: *`number`*): `void`

*Defined in [_lib/Machine.ts:313](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L313)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| channel | `number` | 

**Returns:** `void`

___
<a id="transfermemory"></a>

###  transferMemory

▸ **transferMemory**(srcPid: *`number`*, srcOffset: *`number`*, length: *`number`*, destPid: *`number`*, destOffset: *`number`*): `void`

*Defined in [_lib/Machine.ts:234](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L234)*

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

*Defined in [_lib/Machine.ts:315](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L315)*

**Returns:** `number`

___
<a id="write"></a>

###  write

▸ **write**(callback: *`number` |`Function`*): `number`

*Defined in [_lib/Machine.ts:139](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L139)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback | `number` |
`Function`
 | 

**Returns:** `number`

___

