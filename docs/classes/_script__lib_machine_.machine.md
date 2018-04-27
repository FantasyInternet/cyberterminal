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
* [popArrayBuffer](_script__lib_machine_.machine.md#poparraybuffer)
* [popString](_script__lib_machine_.machine.md#popstring)
* [popToMemory](_script__lib_machine_.machine.md#poptomemory)
* [pushArrayBuffer](_script__lib_machine_.machine.md#pusharraybuffer)
* [pushFromMemory](_script__lib_machine_.machine.md#pushfrommemory)
* [pushString](_script__lib_machine_.machine.md#pushstring)
* [read](_script__lib_machine_.machine.md#read)
* [run](_script__lib_machine_.machine.md#run)
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

▸ **commitDisplay**(): `Promise`<`number`>

*Defined in [script/_lib/Machine.ts:211](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L211)*

**Returns:** `Promise`<`number`>

___
<a id="displaymemory"></a>

###  displayMemory

▸ **displayMemory**(offset: *`number`*, length: *`number`*, destination?: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:160](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L160)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| offset | `number` | - | 
| length | `number` | - | 
| `Default value` destination | `number` | 0 | 

**Returns:** `void`

___
<a id="getgameaxisx"></a>

###  getGameAxisX

▸ **getGameAxisX**(): `any`

*Defined in [script/_lib/Machine.ts:257](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L257)*

**Returns:** `any`

___
<a id="getgameaxisy"></a>

###  getGameAxisY

▸ **getGameAxisY**(): `any`

*Defined in [script/_lib/Machine.ts:258](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L258)*

**Returns:** `any`

___
<a id="getgamebuttona"></a>

###  getGameButtonA

▸ **getGameButtonA**(): `any`

*Defined in [script/_lib/Machine.ts:259](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L259)*

**Returns:** `any`

___
<a id="getgamebuttonb"></a>

###  getGameButtonB

▸ **getGameButtonB**(): `any`

*Defined in [script/_lib/Machine.ts:260](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L260)*

**Returns:** `any`

___
<a id="getgamebuttonx"></a>

###  getGameButtonX

▸ **getGameButtonX**(): `any`

*Defined in [script/_lib/Machine.ts:261](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L261)*

**Returns:** `any`

___
<a id="getgamebuttony"></a>

###  getGameButtonY

▸ **getGameButtonY**(): `any`

*Defined in [script/_lib/Machine.ts:262](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L262)*

**Returns:** `any`

___
<a id="getmousepressed"></a>

###  getMousePressed

▸ **getMousePressed**(): `any`

*Defined in [script/_lib/Machine.ts:256](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L256)*

**Returns:** `any`

___
<a id="getmousex"></a>

###  getMouseX

▸ **getMouseX**(): `any`

*Defined in [script/_lib/Machine.ts:254](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L254)*

**Returns:** `any`

___
<a id="getmousey"></a>

###  getMouseY

▸ **getMouseY**(): `any`

*Defined in [script/_lib/Machine.ts:255](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L255)*

**Returns:** `any`

___
<a id="log"></a>

###  log

▸ **log**(): `void`

*Defined in [script/_lib/Machine.ts:18](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L18)*

**Returns:** `void`

___
<a id="poparraybuffer"></a>

###  popArrayBuffer

▸ **popArrayBuffer**(): `undefined` |`ArrayBuffer`

*Defined in [script/_lib/Machine.ts:183](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L183)*

**Returns:** `undefined` |
`ArrayBuffer`

___
<a id="popstring"></a>

###  popString

▸ **popString**(): `any`

*Defined in [script/_lib/Machine.ts:194](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L194)*

**Returns:** `any`

___
<a id="poptomemory"></a>

###  popToMemory

▸ **popToMemory**(offset: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:171](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L171)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| offset | `number` | 

**Returns:** `void`

___
<a id="pusharraybuffer"></a>

###  pushArrayBuffer

▸ **pushArrayBuffer**(arbuf: *`ArrayBuffer`*): `number`

*Defined in [script/_lib/Machine.ts:179](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L179)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| arbuf | `ArrayBuffer` | 

**Returns:** `number`

___
<a id="pushfrommemory"></a>

###  pushFromMemory

▸ **pushFromMemory**(offset: *`number`*, length: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:165](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L165)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| offset | `number` | 
| length | `number` | 

**Returns:** `void`

___
<a id="pushstring"></a>

###  pushString

▸ **pushString**(str: *`string`*): `any`

*Defined in [script/_lib/Machine.ts:187](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L187)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| str | `string` | 

**Returns:** `any`

___
<a id="read"></a>

###  read

▸ **read**(filename: *`string`*, options?: *`any`*): `Promise`<`any`>

*Defined in [script/_lib/Machine.ts:226](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L226)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| filename | `string` | - | 
| `Default value` options | `any` |  {} | 

**Returns:** `Promise`<`any`>

___
<a id="run"></a>

###  run

▸ **run**(wasm: *`ArrayBuffer`*, api?: *`any`*): `Promise`<`void`>

*Defined in [script/_lib/Machine.ts:230](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L230)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| wasm | `ArrayBuffer` | - | 
| `Default value` api | `any` |  this._generateRomApi() | 

**Returns:** `Promise`<`void`>

___
<a id="setdisplaymode"></a>

###  setDisplayMode

▸ **setDisplayMode**(width: *`number`*, height: *`number`*, displayWidth?: *`number`*, displayHeight?: *`number`*): `void`

*Defined in [script/_lib/Machine.ts:22](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L22)*

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

*Defined in [script/_lib/Machine.ts:264](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L264)*

**Returns:** `void`

___
<a id="stoptone"></a>

###  stopTone

▸ **stopTone**(): `void`

*Defined in [script/_lib/Machine.ts:265](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L265)*

**Returns:** `void`

___
<a id="wait"></a>

###  wait

▸ **wait**(milliseconds?: *`number`*): `Promise`<`Object`>

*Defined in [script/_lib/Machine.ts:200](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L200)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` milliseconds | `number` | 0 | 

**Returns:** `Promise`<`Object`>

___
<a id="waitforvsync"></a>

###  waitForVsync

▸ **waitForVsync**(): `Promise`<`number`>

*Defined in [script/_lib/Machine.ts:206](https://github.com/FantasyInternet/cyberterminal/blob/HEAD/src/script/_lib/Machine.ts#L206)*

**Returns:** `Promise`<`number`>

___

