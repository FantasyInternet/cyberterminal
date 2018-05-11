[cyberterminal](../README.md) > ["script/_lib/Machine"](../modules/_script__lib_machine_.md) > [Machine](../classes/_script__lib_machine_.machine.md)

# Class: Machine

Central processing unit for browsers See [Sys](../interfaces/__classes_sys_.sys.md) for documentation

## Hierarchy

**Machine**

## Index

### Constructors

* [constructor](_script__lib_machine_.machine.md#constructor)

### Accessors

* [displayBitmap](_script__lib_machine_.machine.md#displaybitmap)
* [displayHeight](_script__lib_machine_.machine.md#displayheight)
* [displayMode](_script__lib_machine_.machine.md#displaymode)
* [displayWidth](_script__lib_machine_.machine.md#displaywidth)

### Methods

* [_run](_script__lib_machine_.machine.md#_run)
* [commitDisplay](_script__lib_machine_.machine.md#commitdisplay)
* [connectTo](_script__lib_machine_.machine.md#connectto)
* [delete](_script__lib_machine_.machine.md#delete)
* [displayMemory](_script__lib_machine_.machine.md#displaymemory)
* [focusInput](_script__lib_machine_.machine.md#focusinput)
* [getBaseUrl](_script__lib_machine_.machine.md#getbaseurl)
* [getGameAxisX](_script__lib_machine_.machine.md#getgameaxisx)
* [getGameAxisY](_script__lib_machine_.machine.md#getgameaxisy)
* [getGameButtonA](_script__lib_machine_.machine.md#getgamebuttona)
* [getGameButtonB](_script__lib_machine_.machine.md#getgamebuttonb)
* [getGameButtonX](_script__lib_machine_.machine.md#getgamebuttonx)
* [getGameButtonY](_script__lib_machine_.machine.md#getgamebuttony)
* [getInputPosition](_script__lib_machine_.machine.md#getinputposition)
* [getInputSelected](_script__lib_machine_.machine.md#getinputselected)
* [getInputText](_script__lib_machine_.machine.md#getinputtext)
* [getMousePressed](_script__lib_machine_.machine.md#getmousepressed)
* [getMouseX](_script__lib_machine_.machine.md#getmousex)
* [getMouseY](_script__lib_machine_.machine.md#getmousey)
* [log](_script__lib_machine_.machine.md#log)
* [popToMemory](_script__lib_machine_.machine.md#poptomemory)
* [pushFromMemory](_script__lib_machine_.machine.md#pushfrommemory)
* [read](_script__lib_machine_.machine.md#read)
* [readImage](_script__lib_machine_.machine.md#readimage)
* [setBaseUrl](_script__lib_machine_.machine.md#setbaseurl)
* [setDisplayMode](_script__lib_machine_.machine.md#setdisplaymode)
* [setTextInput](_script__lib_machine_.machine.md#settextinput)
* [startTone](_script__lib_machine_.machine.md#starttone)
* [stopTone](_script__lib_machine_.machine.md#stoptone)
* [wait](_script__lib_machine_.machine.md#wait)
* [waitForVsync](_script__lib_machine_.machine.md#waitforvsync)
* [write](_script__lib_machine_.machine.md#write)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Machine**(): [Machine](_script__lib_machine_.machine.md)

*Defined in [script/_lib/Machine.ts:9](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L9)*

**Returns:** [Machine](_script__lib_machine_.machine.md)

___

## Accessors

<a id="displaybitmap"></a>

###  displayBitmap

getdisplayBitmap(): `undefined` |`ImageData`

*Defined in [script/_lib/Machine.ts:9](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L9)*

**Returns:** `undefined` |
`ImageData`

___
<a id="displayheight"></a>

###  displayHeight

getdisplayHeight(): `number`

*Defined in [script/_lib/Machine.ts:8](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L8)*

**Returns:** `number`

___
<a id="displaymode"></a>

###  displayMode

getdisplayMode(): `number`

*Defined in [script/_lib/Machine.ts:6](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L6)*

**Returns:** `number`

___
<a id="displaywidth"></a>

###  displayWidth

getdisplayWidth(): `number`

*Defined in [script/_lib/Machine.ts:7](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L7)*

**Returns:** `number`

___

## Methods

<a id="_run"></a>

###  _run

▸ **_run**(): `Promise`<`void`>

*Defined in [script/_lib/Machine.ts:200](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L200)*

**Returns:** `Promise`<`void`>

___
<a id="commitdisplay"></a>

###  commitDisplay

▸ **commitDisplay**(callback: *`number` |`Function`*): `number`

*Defined in [script/_lib/Machine.ts:98](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L98)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback | `number` |
`Function`
 | 

**Returns:** `number`

___
<a id="connectto"></a>

###  connectTo

▸ **connectTo**(): `void`

*Defined in [script/_lib/Machine.ts:117](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L117)*

**Returns:** `void`

___
<a id="delete"></a>

###  delete

▸ **delete**(callback: *`number` |`Function`*): `number`

*Defined in [script/_lib/Machine.ts:184](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L184)*

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

*Defined in [script/_lib/Machine.ts:46](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L46)*

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

*Defined in [script/_lib/Machine.ts:213](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L213)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `number` | 

**Returns:** `void`

___
<a id="getbaseurl"></a>

###  getBaseUrl

▸ **getBaseUrl**(): `any`

*Defined in [script/_lib/Machine.ts:121](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L121)*

**Returns:** `any`

___
<a id="getgameaxisx"></a>

###  getGameAxisX

▸ **getGameAxisX**(): `any`

*Defined in [script/_lib/Machine.ts:241](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L241)*

**Returns:** `any`

___
<a id="getgameaxisy"></a>

###  getGameAxisY

▸ **getGameAxisY**(): `any`

*Defined in [script/_lib/Machine.ts:242](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L242)*

**Returns:** `any`

___
<a id="getgamebuttona"></a>

###  getGameButtonA

▸ **getGameButtonA**(): `any`

*Defined in [script/_lib/Machine.ts:243](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L243)*

**Returns:** `any`

___
<a id="getgamebuttonb"></a>

###  getGameButtonB

▸ **getGameButtonB**(): `any`

*Defined in [script/_lib/Machine.ts:244](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L244)*

**Returns:** `any`

___
<a id="getgamebuttonx"></a>

###  getGameButtonX

▸ **getGameButtonX**(): `any`

*Defined in [script/_lib/Machine.ts:245](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L245)*

**Returns:** `any`

___
<a id="getgamebuttony"></a>

###  getGameButtonY

▸ **getGameButtonY**(): `any`

*Defined in [script/_lib/Machine.ts:246](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L246)*

**Returns:** `any`

___
<a id="getinputposition"></a>

###  getInputPosition

▸ **getInputPosition**(): `any`

*Defined in [script/_lib/Machine.ts:229](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L229)*

**Returns:** `any`

___
<a id="getinputselected"></a>

###  getInputSelected

▸ **getInputSelected**(): `any`

*Defined in [script/_lib/Machine.ts:230](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L230)*

**Returns:** `any`

___
<a id="getinputtext"></a>

###  getInputText

▸ **getInputText**(): `any`

*Defined in [script/_lib/Machine.ts:228](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L228)*

**Returns:** `any`

___
<a id="getmousepressed"></a>

###  getMousePressed

▸ **getMousePressed**(): `any`

*Defined in [script/_lib/Machine.ts:240](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L240)*

**Returns:** `any`

___
<a id="getmousex"></a>

###  getMouseX

▸ **getMouseX**(): `any`

*Defined in [script/_lib/Machine.ts:238](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L238)*

**Returns:** `any`

___
<a id="getmousey"></a>

###  getMouseY

▸ **getMouseY**(): `any`

*Defined in [script/_lib/Machine.ts:239](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L239)*

**Returns:** `any`

___
<a id="log"></a>

###  log

▸ **log**(): `void`

*Defined in [script/_lib/Machine.ts:17](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L17)*

**Returns:** `void`

___
<a id="poptomemory"></a>

###  popToMemory

▸ **popToMemory**(offset: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:59](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L59)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| offset | `number` | 

**Returns:** `void`

___
<a id="pushfrommemory"></a>

###  pushFromMemory

▸ **pushFromMemory**(offset: *`number`*, length: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:52](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L52)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| offset | `number` | 
| length | `number` | 

**Returns:** `void`

___
<a id="read"></a>

###  read

▸ **read**(callback: *`number` |`Function`*): `number`

*Defined in [script/_lib/Machine.ts:136](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L136)*

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

*Defined in [script/_lib/Machine.ts:152](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L152)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback | `number` |
`Function`
 | 

**Returns:** `number`

___
<a id="setbaseurl"></a>

###  setBaseUrl

▸ **setBaseUrl**(): `void`

*Defined in [script/_lib/Machine.ts:124](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L124)*

**Returns:** `void`

___
<a id="setdisplaymode"></a>

###  setDisplayMode

▸ **setDisplayMode**(mode: *`number`*, width: *`number`*, height: *`number`*, displayWidth?: *`number`*, displayHeight?: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:21](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L21)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| mode | `number` | - | 
| width | `number` | - | 
| height | `number` | - | 
| `Default value` displayWidth | `number` |  width | 
| `Default value` displayHeight | `number` |  height | 

**Returns:** `void`

___
<a id="settextinput"></a>

###  setTextInput

▸ **setTextInput**(position: *`number`*, selection: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:231](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L231)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| position | `number` | 
| selection | `number` | 

**Returns:** `void`

___
<a id="starttone"></a>

###  startTone

▸ **startTone**(): `void`

*Defined in [script/_lib/Machine.ts:248](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L248)*

**Returns:** `void`

___
<a id="stoptone"></a>

###  stopTone

▸ **stopTone**(): `void`

*Defined in [script/_lib/Machine.ts:249](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L249)*

**Returns:** `void`

___
<a id="wait"></a>

###  wait

▸ **wait**(milliseconds: *`number`*, callback: *`number` |`Function`*): `number`

*Defined in [script/_lib/Machine.ts:69](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L69)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| milliseconds | `number` | 
| callback | `number` |
`Function`
 | 

**Returns:** `number`

___
<a id="waitforvsync"></a>

###  waitForVsync

▸ **waitForVsync**(callback: *`number` |`Function`*): `number`

*Defined in [script/_lib/Machine.ts:83](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L83)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback | `number` |
`Function`
 | 

**Returns:** `number`

___
<a id="write"></a>

###  write

▸ **write**(callback: *`number` |`Function`*): `number`

*Defined in [script/_lib/Machine.ts:168](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L168)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback | `number` |
`Function`
 | 

**Returns:** `number`

___

