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

* [callbackProcess](_script__lib_machine_.machine.md#callbackprocess)
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
* [killProcess](_script__lib_machine_.machine.md#killprocess)
* [loadProcess](_script__lib_machine_.machine.md#loadprocess)
* [log](_script__lib_machine_.machine.md#log)
* [popToMemory](_script__lib_machine_.machine.md#poptomemory)
* [pushFromMemory](_script__lib_machine_.machine.md#pushfrommemory)
* [read](_script__lib_machine_.machine.md#read)
* [readImage](_script__lib_machine_.machine.md#readimage)
* [setBaseUrl](_script__lib_machine_.machine.md#setbaseurl)
* [setDisplayMode](_script__lib_machine_.machine.md#setdisplaymode)
* [setInputPosition](_script__lib_machine_.machine.md#setinputposition)
* [setInputText](_script__lib_machine_.machine.md#setinputtext)
* [setUpdateInterval](_script__lib_machine_.machine.md#setupdateinterval)
* [shutdown](_script__lib_machine_.machine.md#shutdown)
* [startTone](_script__lib_machine_.machine.md#starttone)
* [stopTone](_script__lib_machine_.machine.md#stoptone)
* [transferMemory](_script__lib_machine_.machine.md#transfermemory)
* [updateProcess](_script__lib_machine_.machine.md#updateprocess)
* [wabt](_script__lib_machine_.machine.md#wabt)
* [wait](_script__lib_machine_.machine.md#wait)
* [waitForVsync](_script__lib_machine_.machine.md#waitforvsync)
* [write](_script__lib_machine_.machine.md#write)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Machine**(): [Machine](_script__lib_machine_.machine.md)

*Defined in [script/_lib/Machine.ts:11](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L11)*

**Returns:** [Machine](_script__lib_machine_.machine.md)

___

## Accessors

<a id="displaybitmap"></a>

###  displayBitmap

getdisplayBitmap(): `undefined` |`ImageData`

*Defined in [script/_lib/Machine.ts:11](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L11)*

**Returns:** `undefined` |
`ImageData`

___
<a id="displayheight"></a>

###  displayHeight

getdisplayHeight(): `number`

*Defined in [script/_lib/Machine.ts:10](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L10)*

**Returns:** `number`

___
<a id="displaymode"></a>

###  displayMode

getdisplayMode(): `number`

*Defined in [script/_lib/Machine.ts:8](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L8)*

**Returns:** `number`

___
<a id="displaywidth"></a>

###  displayWidth

getdisplayWidth(): `number`

*Defined in [script/_lib/Machine.ts:9](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L9)*

**Returns:** `number`

___

## Methods

<a id="callbackprocess"></a>

###  callbackProcess

▸ **callbackProcess**(pid: *`number`*, tableIndex: *`number`*, ...a: *`any`[]*): `void`

*Defined in [script/_lib/Machine.ts:233](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L233)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| pid | `number` | 
| tableIndex | `number` | 
| `Rest` a | `any`[] | 

**Returns:** `void`

___
<a id="commitdisplay"></a>

###  commitDisplay

▸ **commitDisplay**(callback: *`number` |`Function`*): `number`

*Defined in [script/_lib/Machine.ts:100](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L100)*

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

*Defined in [script/_lib/Machine.ts:119](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L119)*

**Returns:** `void`

___
<a id="delete"></a>

###  delete

▸ **delete**(callback: *`number` |`Function`*): `number`

*Defined in [script/_lib/Machine.ts:191](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L191)*

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

*Defined in [script/_lib/Machine.ts:48](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L48)*

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

*Defined in [script/_lib/Machine.ts:254](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L254)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `number` | 

**Returns:** `void`

___
<a id="getbaseurl"></a>

###  getBaseUrl

▸ **getBaseUrl**(): `any`

*Defined in [script/_lib/Machine.ts:128](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L128)*

**Returns:** `any`

___
<a id="getgameaxisx"></a>

###  getGameAxisX

▸ **getGameAxisX**(): `any`

*Defined in [script/_lib/Machine.ts:285](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L285)*

**Returns:** `any`

___
<a id="getgameaxisy"></a>

###  getGameAxisY

▸ **getGameAxisY**(): `any`

*Defined in [script/_lib/Machine.ts:286](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L286)*

**Returns:** `any`

___
<a id="getgamebuttona"></a>

###  getGameButtonA

▸ **getGameButtonA**(): `any`

*Defined in [script/_lib/Machine.ts:287](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L287)*

**Returns:** `any`

___
<a id="getgamebuttonb"></a>

###  getGameButtonB

▸ **getGameButtonB**(): `any`

*Defined in [script/_lib/Machine.ts:288](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L288)*

**Returns:** `any`

___
<a id="getgamebuttonx"></a>

###  getGameButtonX

▸ **getGameButtonX**(): `any`

*Defined in [script/_lib/Machine.ts:289](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L289)*

**Returns:** `any`

___
<a id="getgamebuttony"></a>

###  getGameButtonY

▸ **getGameButtonY**(): `any`

*Defined in [script/_lib/Machine.ts:290](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L290)*

**Returns:** `any`

___
<a id="getinputposition"></a>

###  getInputPosition

▸ **getInputPosition**(): `any`

*Defined in [script/_lib/Machine.ts:270](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L270)*

**Returns:** `any`

___
<a id="getinputselected"></a>

###  getInputSelected

▸ **getInputSelected**(): `any`

*Defined in [script/_lib/Machine.ts:271](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L271)*

**Returns:** `any`

___
<a id="getinputtext"></a>

###  getInputText

▸ **getInputText**(): `any`

*Defined in [script/_lib/Machine.ts:269](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L269)*

**Returns:** `any`

___
<a id="getmousepressed"></a>

###  getMousePressed

▸ **getMousePressed**(): `any`

*Defined in [script/_lib/Machine.ts:284](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L284)*

**Returns:** `any`

___
<a id="getmousex"></a>

###  getMouseX

▸ **getMouseX**(): `any`

*Defined in [script/_lib/Machine.ts:282](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L282)*

**Returns:** `any`

___
<a id="getmousey"></a>

###  getMouseY

▸ **getMouseY**(): `any`

*Defined in [script/_lib/Machine.ts:283](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L283)*

**Returns:** `any`

___
<a id="killprocess"></a>

###  killProcess

▸ **killProcess**(pid: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:240](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L240)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| pid | `number` | 

**Returns:** `void`

___
<a id="loadprocess"></a>

###  loadProcess

▸ **loadProcess**(): `number`

*Defined in [script/_lib/Machine.ts:210](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L210)*

**Returns:** `number`

___
<a id="log"></a>

###  log

▸ **log**(): `void`

*Defined in [script/_lib/Machine.ts:19](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L19)*

**Returns:** `void`

___
<a id="poptomemory"></a>

###  popToMemory

▸ **popToMemory**(offset: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:61](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L61)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| offset | `number` | 

**Returns:** `void`

___
<a id="pushfrommemory"></a>

###  pushFromMemory

▸ **pushFromMemory**(offset: *`number`*, length: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:54](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L54)*

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

*Defined in [script/_lib/Machine.ts:143](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L143)*

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

*Defined in [script/_lib/Machine.ts:159](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L159)*

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

*Defined in [script/_lib/Machine.ts:131](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L131)*

**Returns:** `void`

___
<a id="setdisplaymode"></a>

###  setDisplayMode

▸ **setDisplayMode**(mode: *`number`*, width: *`number`*, height: *`number`*, displayWidth?: *`number`*, displayHeight?: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:23](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L23)*

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
<a id="setinputposition"></a>

###  setInputPosition

▸ **setInputPosition**(position?: *`number`*, selection?: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:277](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L277)*

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

*Defined in [script/_lib/Machine.ts:272](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L272)*

**Returns:** `void`

___
<a id="setupdateinterval"></a>

###  setUpdateInterval

▸ **setUpdateInterval**(milliseconds: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:207](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L207)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| milliseconds | `number` | 

**Returns:** `void`

___
<a id="shutdown"></a>

###  shutdown

▸ **shutdown**(): `void`

*Defined in [script/_lib/Machine.ts:124](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L124)*

**Returns:** `void`

___
<a id="starttone"></a>

###  startTone

▸ **startTone**(): `void`

*Defined in [script/_lib/Machine.ts:292](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L292)*

**Returns:** `void`

___
<a id="stoptone"></a>

###  stopTone

▸ **stopTone**(): `void`

*Defined in [script/_lib/Machine.ts:293](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L293)*

**Returns:** `void`

___
<a id="transfermemory"></a>

###  transferMemory

▸ **transferMemory**(srcPid: *`number`*, srcOffset: *`number`*, length: *`number`*, destPid: *`number`*, destOffset: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:244](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L244)*

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
<a id="updateprocess"></a>

###  updateProcess

▸ **updateProcess**(pid: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:226](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L226)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| pid | `number` | 

**Returns:** `void`

___
<a id="wabt"></a>

###  wabt

▸ **wabt**(): `number`

*Defined in [script/_lib/Machine.ts:295](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L295)*

**Returns:** `number`

___
<a id="wait"></a>

###  wait

▸ **wait**(milliseconds: *`number`*, callback: *`number` |`Function`*): `number`

*Defined in [script/_lib/Machine.ts:71](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L71)*

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

*Defined in [script/_lib/Machine.ts:85](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L85)*

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

*Defined in [script/_lib/Machine.ts:175](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L175)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback | `number` |
`Function`
 | 

**Returns:** `number`

___

