[cyberterminal](../README.md) > ["script/_lib/Machine"](../modules/_script__lib_machine_.md) > [Machine](../classes/_script__lib_machine_.machine.md)

# Class: Machine

Central processing unit for browsers See [Sys](../interfaces/__classes_sys_.sys.md) for documentation

## Hierarchy

**Machine**

## Index

### Constructors

* [constructor](_script__lib_machine_.machine.md#constructor)

### Properties

* [url](_script__lib_machine_.machine.md#url)

### Accessors

* [displayBitmap](_script__lib_machine_.machine.md#displaybitmap)
* [displayHeight](_script__lib_machine_.machine.md#displayheight)
* [displayMode](_script__lib_machine_.machine.md#displaymode)
* [displayWidth](_script__lib_machine_.machine.md#displaywidth)

### Methods

* [commitDisplay](_script__lib_machine_.machine.md#commitdisplay)
* [displayMemory](_script__lib_machine_.machine.md#displaymemory)
* [getBaseUrl](_script__lib_machine_.machine.md#getbaseurl)
* [getGameAxisX](_script__lib_machine_.machine.md#getgameaxisx)
* [getGameAxisY](_script__lib_machine_.machine.md#getgameaxisy)
* [getGameButtonA](_script__lib_machine_.machine.md#getgamebuttona)
* [getGameButtonB](_script__lib_machine_.machine.md#getgamebuttonb)
* [getGameButtonX](_script__lib_machine_.machine.md#getgamebuttonx)
* [getGameButtonY](_script__lib_machine_.machine.md#getgamebuttony)
* [getMousePressed](_script__lib_machine_.machine.md#getmousepressed)
* [getMouseX](_script__lib_machine_.machine.md#getmousex)
* [getMouseY](_script__lib_machine_.machine.md#getmousey)
* [log](_script__lib_machine_.machine.md#log)
* [popToMemory](_script__lib_machine_.machine.md#poptomemory)
* [pushFromMemory](_script__lib_machine_.machine.md#pushfrommemory)
* [read](_script__lib_machine_.machine.md#read)
* [readImage](_script__lib_machine_.machine.md#readimage)
* [run](_script__lib_machine_.machine.md#run)
* [setBaseUrl](_script__lib_machine_.machine.md#setbaseurl)
* [setDisplayMode](_script__lib_machine_.machine.md#setdisplaymode)
* [startTone](_script__lib_machine_.machine.md#starttone)
* [stopTone](_script__lib_machine_.machine.md#stoptone)
* [wait](_script__lib_machine_.machine.md#wait)
* [waitForVsync](_script__lib_machine_.machine.md#waitforvsync)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Machine**(url: *`string`*): [Machine](_script__lib_machine_.machine.md)

*Defined in [script/_lib/Machine.ts:9](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L9)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| url | `string` | 

**Returns:** [Machine](_script__lib_machine_.machine.md)

___

## Properties

<a id="url"></a>

###  url

**● url**: *`string`*

*Defined in [script/_lib/Machine.ts:11](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L11)*

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

getdisplayMode(): `string`

*Defined in [script/_lib/Machine.ts:6](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L6)*

**Returns:** `string`

___
<a id="displaywidth"></a>

###  displayWidth

getdisplayWidth(): `number`

*Defined in [script/_lib/Machine.ts:7](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L7)*

**Returns:** `number`

___

## Methods

<a id="commitdisplay"></a>

###  commitDisplay

▸ **commitDisplay**(callback: *`number` |`Function`*): `number`

*Defined in [script/_lib/Machine.ts:101](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L101)*

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

*Defined in [script/_lib/Machine.ts:49](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L49)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| offset | `number` | - | 
| length | `number` | - | 
| `Default value` destination | `number` | 0 | 

**Returns:** `void`

___
<a id="getbaseurl"></a>

###  getBaseUrl

▸ **getBaseUrl**(): `number`

*Defined in [script/_lib/Machine.ts:121](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L121)*

**Returns:** `number`

___
<a id="getgameaxisx"></a>

###  getGameAxisX

▸ **getGameAxisX**(): `any`

*Defined in [script/_lib/Machine.ts:197](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L197)*

**Returns:** `any`

___
<a id="getgameaxisy"></a>

###  getGameAxisY

▸ **getGameAxisY**(): `any`

*Defined in [script/_lib/Machine.ts:198](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L198)*

**Returns:** `any`

___
<a id="getgamebuttona"></a>

###  getGameButtonA

▸ **getGameButtonA**(): `any`

*Defined in [script/_lib/Machine.ts:199](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L199)*

**Returns:** `any`

___
<a id="getgamebuttonb"></a>

###  getGameButtonB

▸ **getGameButtonB**(): `any`

*Defined in [script/_lib/Machine.ts:200](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L200)*

**Returns:** `any`

___
<a id="getgamebuttonx"></a>

###  getGameButtonX

▸ **getGameButtonX**(): `any`

*Defined in [script/_lib/Machine.ts:201](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L201)*

**Returns:** `any`

___
<a id="getgamebuttony"></a>

###  getGameButtonY

▸ **getGameButtonY**(): `any`

*Defined in [script/_lib/Machine.ts:202](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L202)*

**Returns:** `any`

___
<a id="getmousepressed"></a>

###  getMousePressed

▸ **getMousePressed**(): `any`

*Defined in [script/_lib/Machine.ts:196](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L196)*

**Returns:** `any`

___
<a id="getmousex"></a>

###  getMouseX

▸ **getMouseX**(): `any`

*Defined in [script/_lib/Machine.ts:194](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L194)*

**Returns:** `any`

___
<a id="getmousey"></a>

###  getMouseY

▸ **getMouseY**(): `any`

*Defined in [script/_lib/Machine.ts:195](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L195)*

**Returns:** `any`

___
<a id="log"></a>

###  log

▸ **log**(): `void`

*Defined in [script/_lib/Machine.ts:21](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L21)*

**Returns:** `void`

___
<a id="poptomemory"></a>

###  popToMemory

▸ **popToMemory**(offset: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:62](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L62)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| offset | `number` | 

**Returns:** `void`

___
<a id="pushfrommemory"></a>

###  pushFromMemory

▸ **pushFromMemory**(offset: *`number`*, length: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:55](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L55)*

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

*Defined in [script/_lib/Machine.ts:137](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L137)*

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

*Defined in [script/_lib/Machine.ts:153](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L153)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback | `number` |
`Function`
 | 

**Returns:** `number`

___
<a id="run"></a>

###  run

▸ **run**(): `Promise`<`void`>

*Defined in [script/_lib/Machine.ts:170](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L170)*

**Returns:** `Promise`<`void`>

___
<a id="setbaseurl"></a>

###  setBaseUrl

▸ **setBaseUrl**(): `void`

*Defined in [script/_lib/Machine.ts:125](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L125)*

**Returns:** `void`

___
<a id="setdisplaymode"></a>

###  setDisplayMode

▸ **setDisplayMode**(width: *`number`*, height: *`number`*, displayWidth?: *`number`*, displayHeight?: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:25](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L25)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| width | `number` | - | 
| height | `number` | - | 
| `Default value` displayWidth | `number` |  width | 
| `Default value` displayHeight | `number` |  height | 

**Returns:** `void`

___
<a id="starttone"></a>

###  startTone

▸ **startTone**(): `void`

*Defined in [script/_lib/Machine.ts:204](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L204)*

**Returns:** `void`

___
<a id="stoptone"></a>

###  stopTone

▸ **stopTone**(): `void`

*Defined in [script/_lib/Machine.ts:205](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L205)*

**Returns:** `void`

___
<a id="wait"></a>

###  wait

▸ **wait**(milliseconds: *`number`*, callback: *`number` |`Function`*): `number`

*Defined in [script/_lib/Machine.ts:72](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L72)*

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

*Defined in [script/_lib/Machine.ts:86](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L86)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback | `number` |
`Function`
 | 

**Returns:** `number`

___

