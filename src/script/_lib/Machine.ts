import wabt from "./wabt"

/**
 * Central processing unit for browsers
 * See [Sys](../interfaces/__classes_sys_.sys.md) for documentation
 */
export default class Machine {
  get displayMode() { return this._displayMode }
  get displayWidth() { return this._displayWidth }
  get displayHeight() { return this._displayHeight }
  get displayBitmap() { return this._displayBitmap }

  constructor() {
    this._initCom()
  }

  /* ROM API  */

  log() {
    console.log("📟", this._popString())
  }

  setDisplayMode(mode: number, width: number, height: number, displayWidth = width, displayHeight = height) {
    this._sysCall("setDisplayMode", this._displayModes[mode], width, height, displayWidth, displayHeight)
    this._displayMode = mode
    this._displayWidth = displayWidth
    this._displayHeight = displayHeight
    delete this._displayBitmap
    switch (this._displayModes[this.displayMode]) {
      case "text":
        console.error(`${this.displayMode} not yet implemented!`)
        break

      case "pixel":
        this._displayBitmap = new ImageData(width, height)
        break

      default:
        this._displayMode = -1
        this._displayWidth = 0
        this._displayHeight = 0
        throw "DisplayMode not supported!"
    }
    this.commitDisplay(() => { })
    return
  }

  displayMemory(offset: number, length: number, destination: number = 0) {
    let process = this._processes[this._activePID]
    if (!process) throw "No active process!"
    if (!this._displayBitmap) throw "No bitmap to commit!"
    this._displayBitmap.data.set(new Uint8Array(process.instance.exports.memory.buffer.slice(offset, offset + length)), destination)
  }
  pushFromMemory(offset: number, length: number) {
    let process = this._processes[this._activePID]
    if (!process) throw "No active process!"
    let ar = new Uint8Array(length)
    ar.set(new Uint8Array(process.instance.exports.memory.buffer.slice(offset, offset + length)))
    this._bufferStack.push(ar.buffer)
  }
  popToMemory(offset: number) {
    let process = this._processes[this._activePID]
    if (!process) throw "No active process!"
    if (!this._bufferStack.length) throw "Buffer stack is empty!"
    let ar = new Uint8Array(process.instance.exports.memory.buffer)
    //@ts-ignore
    ar.set(new Uint8Array(this._bufferStack.pop()), offset)
  }


  wait(milliseconds: number, callback: number | Function) {
    if (typeof callback === "number") {
      let process = this._processes[this._activePID]
      if (!process) throw "No active process!"
      callback = process.instance.exports.table.get(callback)
    }
    let id = this._asyncCalls++
    setTimeout(() => {
      //@ts-ignore
      callback(id)
    }, milliseconds)
    return id
  }

  waitForVsync(callback: number | Function) {
    if (typeof callback === "number") {
      let process = this._processes[this._activePID]
      if (!process) throw "No active process!"
      callback = process.instance.exports.table.get(callback)
    }
    let id = this._asyncCalls++
    this.commitDisplay(-1)
    this._sysRequest("waitForVsync").then((t: number) => {
      //@ts-ignore
      callback(t, id)
    })
    return id
  }

  commitDisplay(callback: number | Function) {
    if (typeof callback === "number") {
      let process = this._processes[this._activePID]
      if (!process) throw "No active process!"
      callback = process.instance.exports.table.get(callback)
    }
    let id = this._asyncCalls++
    switch (this._displayModes[this.displayMode]) {
      case "pixel":
        this._commitBitmap(true)
        break
    }
    this._pendingCommits.push((t: number) => {
      //@ts-ignore
      callback(t, id)
    })
    return id
  }

  connectTo() {
    let url = (new URL(this._popString(), this._baseUrl)).toString()
    this._sysRequest("connectTo", url)
    this._active = false
  }
  shutdown() {
    this._sysRequest("removeMachine")
    this._active = false
  }
  getBaseUrl() {
    return this._pushString(this._baseUrl)
  }
  setBaseUrl() {
    let relurl = this._popString()
    if (this._originUrl) {
      let url = new URL(relurl, this._baseUrl)
      if (url.toString().substr(0, this._originUrl.length) !== this._originUrl) throw "cross origin not allowed!"
      this._baseUrl = url.toString()
    } else {
      let url = new URL(relurl)
      this._baseUrl = url.toString()
      this._originUrl = this._baseUrl.substr(0, this._baseUrl.indexOf(url.pathname) + 1)
    }
  }
  read(callback: number | Function) {
    if (typeof callback === "number") {
      let process = this._processes[this._activePID]
      if (!process) throw "No active process!"
      callback = process.instance.exports.table.get(callback)
    }
    let id = this._asyncCalls++
    let filename = (new URL(this._popString(), this._baseUrl)).toString()
    if (filename.substr(0, this._originUrl.length) !== this._originUrl) throw "cross origin not allowed!"
    this._sysRequest("read", filename, { type: "binary" }).then((data: ArrayBuffer) => {
      this._pushArrayBuffer(data)
      //@ts-ignore
      callback(data.byteLength, id)
    })
    return id
  }
  readImage(callback: number | Function) {
    if (typeof callback === "number") {
      let process = this._processes[this._activePID]
      if (!process) throw "No active process!"
      callback = process.instance.exports.table.get(callback)
    }
    let id = this._asyncCalls++
    let filename = (new URL(this._popString(), this._baseUrl)).toString()
    if (filename.substr(0, this._originUrl.length) !== this._originUrl) throw "cross origin not allowed!"
    this._sysRequest("read", filename, { type: "image" }).then((data: ImageData) => {
      this._pushArrayBuffer(data.data.buffer)
      //@ts-ignore
      callback(data.width, data.height, id)
    })
    return id
  }
  write(callback: number | Function) {
    if (typeof callback === "number") {
      let process = this._processes[this._activePID]
      if (!process) throw "No active process!"
      callback = process.instance.exports.table.get(callback)
    }
    let id = this._asyncCalls++
    let data = this._popArrayBuffer()
    let filename = (new URL(this._popString(), this._baseUrl)).toString()
    if (filename.substr(0, this._originUrl.length) !== this._originUrl) throw "cross origin not allowed!"
    this._sysRequest("write", filename, data).then((success: boolean) => {
      //@ts-ignore
      callback(success, id)
    })
    return id
  }
  delete(callback: number | Function) {
    if (typeof callback === "number") {
      let process = this._processes[this._activePID]
      if (!process) throw "No active process!"
      callback = process.instance.exports.table.get(callback)
    }
    let id = this._asyncCalls++
    let filename = (new URL(this._popString(), this._baseUrl)).toString()
    if (filename.substr(0, this._originUrl.length) !== this._originUrl) throw "cross origin not allowed!"
    this._sysRequest("delete", filename).then((success: boolean) => {
      //@ts-ignore
      callback(success, id)
    })
    return id
  }

  setUpdateInterval(milliseconds: number) {
    this._updateInterval = milliseconds
  }
  loadProcess() {
    let wasm = this._popArrayBuffer()
    let api = this._processes.length ? this._generateProcessApi() : this._generateRomApi()
    let pid = this._processes.length
    this._processes.push(null)
    //@ts-ignore
    WebAssembly.instantiate(wasm, { api, Math }).then((process) => {
      this._activePID = pid
      this._processes[pid] = process
      if (process.instance.exports.setup)
        process.instance.exports.setup()
      this._nextFrame = this._nextUpdate = performance.now()
      if (this._activePID === 0) this._tick()
      this._activePID = 0
    })
    return pid
  }
  updateProcess(pid: number) {
    let oldpid = this._activePID
    this._activePID = pid
    let process = this._processes[this._activePID]
    if (process) process.instance.export.update(performance.now())
    this._activePID = oldpid
  }
  callbackProcess(pid: number, tableIndex: number, ...a: any[]) {
    let oldpid = this._activePID
    this._activePID = pid
    let process = this._processes[this._activePID]
    if (process) process.instance.export.table.get(tableIndex)(...a)
    this._activePID = oldpid
  }
  killProcess(pid: number) {
    this._processes[pid] = null
    this._activePID = 0
  }
  transferMemory(srcPid: number, srcOffset: number, length: number, destPid: number, destOffset: number) {
    let srcProcess = this._processes[srcPid]
    let destProcess = this._processes[destPid]

    if (!srcProcess) throw "No active process!"
    let ar = new Uint8Array(destProcess.instance.exports.memory.buffer)
    ar.set(new Uint8Array(srcProcess.instance.exports.memory.buffer.slice(srcOffset, srcOffset + length)), destOffset)
    this._bufferStack.push(ar.buffer)
  }

  focusInput(input: number) {
    switch (input) {
      case 1:
        this._sysRequest("focusInput", "text")
        break

      case 2:
        this._sysRequest("focusInput", "mouse")
        break

      case 3:
        this._sysRequest("focusInput", "game")
        break
    }
  }
  getInputText() { return this._pushString(this._textInputState.text) }
  getInputPosition() { return this._textInputState.pos }
  getInputSelected() { return this._textInputState.len }
  setInputText() {
    let text = this._popString()
    this._sysRequest("setTextInput", text, this._textInputState.pos || 0, this._textInputState.len || 0)
    this._textInputState.text = text
  }
  setInputPosition(position: number = 0, selection: number = 0) {
    this._sysRequest("setTextInput", this._textInputState.text, position || 0, selection || 0)
    this._textInputState.pos = position || 0
    this._textInputState.len = selection || 0
  }
  getMouseX() { return this._mouseInputState.x }
  getMouseY() { return this._mouseInputState.y }
  getMousePressed() { return this._mouseInputState.pressed }
  getGameAxisX() { return this._gameInputState.axis.x }
  getGameAxisY() { return this._gameInputState.axis.y }
  getGameButtonA() { return this._gameInputState.buttons.a }
  getGameButtonB() { return this._gameInputState.buttons.b }
  getGameButtonX() { return this._gameInputState.buttons.x }
  getGameButtonY() { return this._gameInputState.buttons.y }

  startTone() { this._sysRequest("startTone", ...arguments) }
  stopTone() { this._sysRequest("stopTone", ...arguments) }

  wabt() {
    let wast = this._popString()
    let module = wabt.parseWat("idunno.wast", wast)
    return this._pushArrayBuffer(module.toBinary({}).buffer)
  }

  /* _privates */
  private _active: boolean = false
  private _nextFrame: number = performance.now()
  private _frameInterval: number = 1000 / 60
  private _nextUpdate: number = performance.now()
  private _updateInterval: number = 1000 / 60
  private _displayModes: string[] = ["text", "pixel"]
  private _displayMode: number = -1
  private _displayWidth: number = 0
  private _displayHeight: number = 0
  private _displayBitmap?: ImageData
  private _transferBuffer?: ArrayBuffer
  private _lastCommit: number = performance.now()
  private _pendingCommits: Function[] = []
  private _pendingRequests: any[] = []
  private _baseUrl: string = ""
  private _originUrl: string = ""
  private _processes: any[] = []
  private _activePID: number = -1
  //@ts-ignore
  private _bufferStack: ArrayBuffer[] = []
  private _asyncCalls: number = 0
  private _textInputState: any = {
    text: "", pos: 0, len: 0
  }
  private _mouseInputState: any = {
    x: 0, y: 0, pressed: false
  }
  private _gameInputState: any = {
    axis: { x: 0, y: 0 },
    buttons: { a: false, b: false, x: false, y: false }
  }

  private _tick() {
    if (!this._active) return
    let t = performance.now()
    let process = this._processes[0]
    setTimeout(this._tick.bind(this), this._nextUpdate - t)
    let updated = !(process.instance.exports.update)
    if (t >= this._nextUpdate && process.instance.exports.update) {
      if (this._updateInterval <= 0) this._updateInterval = 1
      while (t >= this._nextUpdate) {

        process.instance.exports.update(this._nextUpdate)
        updated = true
        this._nextUpdate += this._updateInterval
      }
    }
    if (this._transferBuffer && updated && process.instance.exports.draw) {
      process.instance.exports.draw(t)
      this.commitDisplay(() => { })
    }
    /*while (performance.now() < this._nextFrame) {
      if (performance.now() >= this._nextUpdate) {
        process.instance.exports.update(this._nextUpdate)
        this._nextUpdate += this._updateInterval
      }
    }*/
    this._nextFrame += this._frameInterval
  }

  private _initCom() {
    self.addEventListener("message", this._onMessage.bind(this))
  }

  private _onMessage(e: MessageEvent) {
    //console.log("main:", e)
    switch (e.data.cmd) {
      case "boot":
        this._active = true
        this._pushString(e.data.url)
        this.setBaseUrl()
        this._originUrl = e.data.origin
        this._pushArrayBuffer(e.data.wasm)
        this.loadProcess()
        break

      case "suspend":
        this._active = false
        this._mouseInputState = {
          x: 0, y: 0, pressed: false
        }
        this._gameInputState = {
          axis: { x: 0, y: 0 },
          buttons: { a: false, b: false, x: false, y: false }
        }
        break

      case "resume":
        if (this._displayBitmap) {
          this.setDisplayMode(this._displayMode, this._displayBitmap.width, this._displayBitmap.height, this._displayWidth, this._displayHeight)
        }
        this._nextFrame = performance.now()
        this._nextUpdate = performance.now()
        this._active = true
        this._tick()
        break

      case "break":
        if (this._processes.length && this._processes[0].instance.exports.break) {
          this._processes[0].instance.exports.break()
        }
        break

      case "imagedata":
        this._transferBuffer = e.data.buffer
        let cb
        while (cb = this._pendingCommits.pop()) cb(this._lastCommit)
        break

      case "response":
        if (this._pendingRequests[e.data.reqId]) {
          if (e.data.success) {
            this._pendingRequests[e.data.reqId].resolve(e.data.value)
          } else {
            this._pendingRequests[e.data.reqId].reject(e.data.value)
          }
          this._pendingRequests[e.data.reqId] = undefined
        }
        break

      case "textInput":
        this._textInputState = e.data.state
        break
      case "mouseInput":
        this._mouseInputState = e.data.state
        break
      case "gameInput":
        this._gameInputState = e.data.state
        break

      default:
        break
    }
  }

  private _postMessage(msg: any) {
    ; (<Function>postMessage)(msg) // 'cos typescript doesn't work well in Worker contexts
  }

  private _sysCall(method: string, ...args: any[]) {
    this._postMessage({
      cmd: "call",
      method: method,
      arguments: args
    })
  }

  private _sysRequest(method: string, ...args: any[]): Promise<any> {
    let reqId = this._pendingRequests.indexOf(undefined)
    if (reqId < 0) reqId = this._pendingRequests.length
    this._pendingRequests[reqId] = true
    this._postMessage({
      cmd: "call",
      method: method,
      arguments: args,
      reqId: reqId
    })
    return new Promise((resolve, reject) => {
      this._pendingRequests[reqId] = {
        resolve: resolve,
        reject: reject
      }
    })
  }

  private _commitBitmap(force = false) {
    if (!force && performance.now() - this._lastCommit < 1000) return
    if (!this._displayBitmap) throw "No bitmap to commit!"
    let buffer: ArrayBuffer
    if (this._transferBuffer && this._transferBuffer.byteLength === this._displayBitmap.data.buffer.byteLength) {
      buffer = this._transferBuffer
      delete this._transferBuffer
    } else {
      console.warn("Creating new _transferBuffer")
      buffer = new ArrayBuffer(this._displayBitmap.data.buffer.byteLength)
    }
    let data = new Uint8ClampedArray(buffer)
    data.set(this._displayBitmap.data, 0)
      ; (<Function>postMessage)({
        cmd: "imagedata",
        width: this._displayBitmap.width,
        height: this._displayBitmap.height,
        buffer: buffer
      }, [buffer])
    this._lastCommit = performance.now()
  }

  private _generateRomApi() {
    let api: any = {}
    for (let name of Object.getOwnPropertyNames(Machine.prototype)) {
      let val = (<any>this)[name]
      if (name.substr(0, 1) !== "_" && name !== "constructor" && typeof val === "function") {
        api[name] = this._copyFunction(val.bind(this))
      }
    }
    return api
  }

  private _generateProcessApi() {
    let api: any = {}
    let exports = this._processes[0].instance.exports
    for (let name of Object.getOwnPropertyNames(exports)) {
      let val = (<any>exports)[name]
      if (name.substr(0, 4) === "api." && typeof val === "function") {
        api[name] = val
      }
    }
    return api
  }

  private _copyClass(_class: any) {
    return class {
      constructor(...a: any[]) {
        return new _class(...a)
      }
    }
  }

  private _copyObject(_obj: any) {
    let obj: any = {}
    for (let name of Object.getOwnPropertyNames(_obj)) {
      obj[name] = _obj[name]
    }
    return obj
  }

  private _copyFunction(_fn: Function) {
    return (...a: any[]) => _fn(...a)
  }
  private _pushArrayBuffer(arbuf: ArrayBuffer) {
    this._bufferStack.push(arbuf)
    return arbuf.byteLength
  }
  private _popArrayBuffer() {
    return this._bufferStack.pop()
  }

  private _pushString(str: string) {
    //@ts-ignore
    let enc = new TextEncoder()
    let buf = enc.encode(str).buffer
    this._bufferStack.push(buf)
    return buf.byteLength
  }
  private _popString() {
    //@ts-ignore
    let dec = new TextDecoder("utf-8")
    return dec.decode(this._bufferStack.pop())
  }
}
