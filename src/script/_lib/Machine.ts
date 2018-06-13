var wabt = require("./wabt")

/**
 * Central processing unit for browsers
 * See [Sys](../interfaces/__classes_sys_.sys.md) for documentation
 */
export default class Machine {

  constructor() {
    this._initCom()
  }

  /* ROM API  */

  log() {
    console.log("📟", this._popString())
  }
  logNumber() {
    console.log("💡", ...arguments)
  }

  setDisplayMode(mode: number, width: number, height: number, visibleWidth = width, visibleHeight = height) {
    this._sysCall("setDisplayMode", this._displayModes[mode], width, height, visibleWidth, visibleHeight)
    this._displayMode = mode
    this._displayWidth = width
    this._displayHeight = height
    this._visibleWidth = visibleWidth
    this._visibleHeight = visibleHeight
    switch (this._displayModes[this._displayMode]) {
      case "text":
        break

      case "pixel":
        break

      default:
        this._displayMode = -1
        this._visibleWidth = -1
        this._visibleHeight = -1
        throw "DisplayMode not supported!"
    }
    return
  }

  print() {
    this._sysCall("print", this._popString())
  }

  displayMemory(offset: number, length: number, destination: number = 0) {
    let process = this._processes[this._activePID]
    if (!process) throw "No active process!"
    let buffer: ArrayBuffer
    if (this._transferBuffer && this._transferBuffer.byteLength === (this._displayWidth * this._displayHeight * 4)) {
      buffer = this._transferBuffer
      delete this._transferBuffer
    } else {
      console.warn("Creating new _transferBuffer")
      buffer = new ArrayBuffer(this._displayWidth * this._displayHeight * 4)
    }
    let data = new Uint8ClampedArray(buffer)
    data.set(new Uint8Array(process.instance.exports.memory.buffer.slice(offset, offset + length)), destination)
      ; (<Function>postMessage)({
        cmd: "imagedata",
        width: this._displayWidth,
        height: this._displayHeight,
        buffer: buffer
      }, [buffer])
    this._lastCommit = performance.now()
  }
  pushFromMemory(offset: number, length: number) {
    let process = this._processes[this._activePID]
    if (!process) throw "No active process!"
    let ar = new Uint8Array(length)
    ar.set(new Uint8Array(process.instance.exports.memory.buffer.slice(offset, offset + length)))
    return this._pushArrayBuffer(ar.buffer)
  }
  popToMemory(offset: number) {
    let process = this._processes[this._activePID]
    if (!process) throw "No active process!"
    if (!this._bufferStackLengths.length) throw "Buffer stack is empty!"
    let ar = new Uint8Array(process.instance.exports.memory.buffer)
    //@ts-ignore
    ar.set(new Uint8Array(this._popArrayBuffer()), offset)
  }
  getBufferSize(indexFromEnd: number = 0) {
    indexFromEnd++
    return this._bufferStackLengths[this._bufferStackLengths.length - indexFromEnd] || 0
  }
  getApiFunctionIndex() {
    let name = this._popString()
    return Math.max(0, this._romApiNames.indexOf(name))
  }
  callApiFunction(index: number, ...params: number[]) {
    //@ts-ignore
    return this[this._romApiNames[index]].apply(this, params)
  }

  connectTo() {
    let url = (new URL(this._popString(), this._baseUrl)).toString()
    this._sysCall("connectTo", url)
    this._active = false
  }
  shutdown() {
    this._sysCall("removeMachine")
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
    callback = this._getCallback(callback)
    let id = this._asyncCalls++
    let filename = (new URL(this._popString(), this._baseUrl)).toString()
    if (filename.substr(0, this._originUrl.length) !== this._originUrl) throw "cross origin not allowed!"
    this._sysRequest("read", filename, { type: "binary" }).then((data: ArrayBuffer) => {
      this._pushArrayBuffer(data)
      //@ts-ignore
      callback(true, data.byteLength, id)
    }).catch((err) => {
      console.error(err)
      //@ts-ignore
      callback(false, 0, id)
    })
    return id
  }
  readImage(callback: number | Function) {
    callback = this._getCallback(callback)
    let id = this._asyncCalls++
    let filename = (new URL(this._popString(), this._baseUrl)).toString()
    if (filename.substr(0, this._originUrl.length) !== this._originUrl) throw "cross origin not allowed!"
    this._sysRequest("read", filename, { type: "image" }).then((data: ImageData) => {
      this._pushArrayBuffer(data.data.buffer)
      //@ts-ignore
      callback(true, data.width, data.height, id)
    }).catch((err) => {
      console.error(err)
      //@ts-ignore
      callback(false, 0, 0, id)
    })
    return id
  }
  write(callback: number | Function) {
    callback = this._getCallback(callback)
    let id = this._asyncCalls++
    let data = this._popArrayBuffer()
    let filename = (new URL(this._popString(), this._baseUrl)).toString()
    if (filename.substr(0, this._originUrl.length) !== this._originUrl) throw "cross origin not allowed!"
    this._sysRequest("write", filename, data).then((success: boolean) => {
      //@ts-ignore
      callback(success, id)
    }).catch((err) => {
      console.error(err)
      //@ts-ignore
      callback(false, id)
    })
    return id
  }
  delete(callback: number | Function) {
    callback = this._getCallback(callback)
    let id = this._asyncCalls++
    let filename = (new URL(this._popString(), this._baseUrl)).toString()
    if (filename.substr(0, this._originUrl.length) !== this._originUrl) throw "cross origin not allowed!"
    this._sysRequest("delete", filename).then((success: boolean) => {
      //@ts-ignore
      callback(success, id)
    }).catch((err) => {
      console.error(err)
      //@ts-ignore
      callback(false, id)
    })
    return id
  }
  list(callback: number | Function) {
    callback = this._getCallback(callback)
    let id = this._asyncCalls++
    let filename = (new URL(this._popString(), this._baseUrl)).toString()
    if (filename.substr(0, this._originUrl.length) !== this._originUrl) throw "cross origin not allowed!"
    this._sysRequest("list", filename).then((list: string) => {
      //@ts-ignore
      callback(true, this._pushString(list), id)
    }).catch((err) => {
      console.error(err)
      //@ts-ignore
      callback(false, 0, id)
    })
    return id
  }

  setStepInterval(milliseconds: number) {
    this._stepInterval = milliseconds
  }
  loadProcess() {
    let wasm = this._popArrayBuffer()
    let env = this._processes.length ? this._generateProcessApi() : this._generateRomApi()
    let pid = this._processes.length
    this._processes.push(null)
    //@ts-ignore
    WebAssembly.instantiate(wasm, { env, Math }).then((process) => {
      this._activePID = pid
      this._processes[pid] = process
      if (process.instance.exports.init) {
        try {
          process.instance.exports.init()
          this._active = true
        } catch (error) {
          this._die(error)
        }
      }
      this._nextStep = performance.now()
      if (this._activePID === 0) this._tick()
      this._activePID = 0
    }).catch((err: any) => {
      this._processes[pid] = false
      if (!pid) {
        this._die(err)
      }
    })
    return pid
  }
  stepProcess(pid: number) {
    let oldpid = this._activePID
    this._activePID = pid
    let process = this._processes[this._activePID]
    if (process) process.instance.export.step(performance.now())
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
    this._processes[pid] = false
    this._activePID = 0
  }
  transferMemory(srcPid: number, srcOffset: number, length: number, destPid: number, destOffset: number) {
    let srcProcess = this._processes[srcPid]
    let destProcess = this._processes[destPid]

    if (!srcProcess) throw "No active process!"
    let ar = new Uint8Array(destProcess.instance.exports.memory.buffer)
    ar.set(new Uint8Array(srcProcess.instance.exports.memory.buffer.slice(srcOffset, srcOffset + length)), destOffset)
    // this._bufferStack.push(ar.buffer)
  }

  focusInput(input: number) {
    this._inputFocus = input
    switch (input) {
      case 1:
        this._sysCall("focusInput", "text")
        break

      case 2:
        this._sysCall("focusInput", "mouse")
        break

      case 3:
        this._sysCall("focusInput", "game")
        break
    }
  }
  getInputText() { return this._pushString(this._textInputState.text) }
  getInputPosition() { return this._textInputState.pos }
  getInputSelected() { return this._textInputState.len }
  getInputKey() { return this._textInputState.key }
  setInputType(type: number) {
    this._textInputState.type = type
    this._textInputState.text = ""
    this._textInputState.pos = 0
    this._textInputState.len = 0
    this._sysCall("setTextInput", this._textInputState.text,
      this._textInputState.pos || 0, this._textInputState.len || 0,
      this._inputTypes[this._textInputState.type])
  }
  setInputText() {
    this._textInputState.text = this._popString()
    this._textInputState.pos = Math.min(this._textInputState.text.length, this._textInputState.pos)
    this._textInputState.len = Math.min(this._textInputState.text.length - this._textInputState.pos, this._textInputState.len)
    this._sysCall("setTextInput", this._textInputState.text,
      this._textInputState.pos || 0, this._textInputState.len || 0)
  }
  setInputPosition(position: number = 0, selection: number = 0) {
    this._textInputState.pos = position || 0
    this._textInputState.len = selection || 0
    this._textInputState.pos = Math.min(this._textInputState.text.length, this._textInputState.pos)
    this._textInputState.len = Math.min(this._textInputState.text.length - this._textInputState.pos, this._textInputState.len)
    this._sysCall("setTextInput", this._textInputState.text, this._textInputState.pos || 0, this._textInputState.len || 0)
  }
  replaceInputText(fromIndex: number = 0) {
    let replace = this._popString()
    let search = this._popString()
    this._sysCall("replaceTextInput", search, replace, fromIndex)

    let text = this._textInputState.text
    let i = text.indexOf(search, fromIndex)
    if (i >= 0) {
      text = text.substr(0, i) + replace + text.substr(i + search.length)
      this._textInputState.text = text
      if (this._textInputState.pos > i) {
        this._textInputState.pos += replace.length - search.length
      }
    }
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

  startTone(channel: number, frequency: number, volume: number = 1, type: number = 0) { this._sysCall("startTone", channel, frequency, volume, this._toneTypes[type]) }
  stopTone(channel: number) { this._sysCall("stopTone", channel) }

  wabt() {
    let wast = this._popString()
    //@ts-ignore
    let module = wabt.parseWat("idunno.wast", wast)
    return this._pushArrayBuffer(module.toBinary({}).buffer)
  }

  /* _privates */
  private _active: boolean = false
  private _nextStep: number = performance.now()
  private _stepInterval: number = -1
  private _stepCount: number = 0
  private _stepSecond: number = 0
  private _frameCount: number = 0
  private _frameSecond: number = 0
  private _toneTypes: string[] = ["square", "sawtooth", "triangle", "sine"]
  private _displayModes: string[] = ["text", "pixel"]
  private _displayMode: number = -1
  private _displayWidth: number = -1
  private _displayHeight: number = -1
  private _visibleWidth: number = -1
  private _visibleHeight: number = -1
  private _transferBuffer: ArrayBuffer = new ArrayBuffer(8)
  private _lastCommit: number = performance.now()
  private _pendingCommits: Function[] = []
  private _pendingRequests: any[] = []
  private _baseUrl: string = ""
  private _originUrl: string = ""
  private _romApiNames: string[] = []
  private _processes: any[] = []
  private _activePID: number = -1
  //@ts-ignore
  private _bufferStack: Uint8Array = new Uint8Array(1024)
  private _bufferStackLengths: number[] = []
  private _asyncCalls: number = 0
  private _inputFocus: number = -1
  private _textInputState: any = {
    type: 0, text: "", pos: 0, len: 0, key: 0
  }
  private _keyBuffer: number[] = [0]
  private _inputTypes: string[] = ["multiline", "text", "password", "number", "url", "email", "tel"]
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
    if (!process) {
      return this._active = false
    }
    if (this._stepInterval < 0) {
      this._nextStep = t
    } else {
      if (t > this._nextStep) {
        setTimeout(this._tick.bind(this), this._nextStep + this._stepInterval - t)
      } else {
        setTimeout(this._tick.bind(this), this._nextStep - t)
      }
    }
    try {
      let stepped = !(process.instance.exports.step)
      let tard = Infinity
      if (process.instance.exports.step) {
        while (t >= this._nextStep) {
          this._textInputState.key = this._keyBuffer.shift() || 0
          process.instance.exports.step(this._nextStep)
          this._stepCount++
          stepped = true
          this._nextStep += this._stepInterval

          if (performance.now() - t > 16) {
            t = performance.now()
            if (t - this._nextStep > tard) this._nextStep = t + 1
            tard = t - this._nextStep
          }
          if (this._stepInterval < 0) this._nextStep = t + 1
        }
        if (this._stepSecond !== Math.floor(performance.now() / 1000)) {
          if (this._baseUrl.includes("?debug")) console.log("Steps Per Second", this._stepCount)
          this._stepCount = 0
          this._stepSecond = Math.floor(performance.now() / 1000)
        }
      } else {
        this._textInputState.key = this._keyBuffer.shift() || 0
        this._nextStep += this._stepInterval
      }
      if (this._transferBuffer && stepped && process.instance.exports.display) {
        process.instance.exports.display(t)
        this._frameCount++
        if (this._frameSecond !== Math.floor(performance.now() / 1000)) {
          if (this._baseUrl.includes("?debug")) console.log("Frames Per Second", this._frameCount)
          this._frameCount = 0
          this._frameSecond = Math.floor(performance.now() / 1000)
        }
      }
    } catch (error) {
      this._die(error)
    }
  }

  private _initCom() {
    self.addEventListener("message", this._onMessage.bind(this))
  }

  private _onMessage(e: MessageEvent) {
    //console.log("main:", e)
    switch (e.data.cmd) {
      case "boot":
        this._pushString(e.data.url)
        this.setBaseUrl()
        this._originUrl = e.data.origin
        this._pushArrayBuffer(e.data.wasm)
        this.loadProcess()
        break

      case "suspend":
        this._active = false
        this._mouseInputState.pressed = false
        this._gameInputState = {
          axis: { x: 0, y: 0 },
          buttons: { a: false, b: false, x: false, y: false }
        }
        this._keyBuffer = []
        break

      case "resume":
        this._active = true
        if (this._displayMode >= 0) {
          this.setDisplayMode(this._displayMode, this._displayWidth, this._displayHeight, this._visibleWidth, this._visibleHeight)
          let txt = this._textInputState
          this._textInputState = {}
          this.setInputType(txt.type)
          this._pushString(txt.text)
          this.setInputText()
          this.setInputPosition(txt.pos, txt.len)
          this.focusInput(this._inputFocus)
          this._keyBuffer.push(16)
        }
        this._nextStep = performance.now()
        this._tick()
        break

      case "break":
        if (this._processes[0] && this._processes[0].instance.exports.break) {
          this._processes[0].instance.exports.break()
        } else {
          this.shutdown()
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
        if (this._stepInterval < 0) this._tick()
        break

      case "textInput":
        if (!this._active) break
        this._textInputState = e.data.state
        this._keyBuffer.push(e.data.state.key)
        if (this._stepInterval < 0) this._tick()
        break
      case "mouseInput":
        if (!this._active) break
        this._mouseInputState = e.data.state
        if (this._stepInterval < 0) this._tick()
        break
      case "gameInput":
        if (!this._active) break
        this._gameInputState = e.data.state
        if (this._stepInterval < 0) this._tick()
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


  private _generateRomApi() {
    let api: any = {}
    this._romApiNames = [""]
    for (let name of Object.getOwnPropertyNames(Machine.prototype)) {
      let val = (<any>this)[name]
      if (name.substr(0, 1) !== "_" && name !== "constructor" && typeof val === "function") {
        api[name] = this._copyFunction(val.bind(this))
        this._romApiNames.push(name)
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

  private _growBufferStack(addition: number) {
    let old = this._bufferStack
    this._bufferStack = new Uint8Array(this._bufferStack.byteLength + addition)
    this._bufferStack.set(old)
  }
  private _pushArrayBuffer(arbuf: ArrayBuffer) {
    let offset = this._bufferStackLengths.reduce((a = 0, b = 0) => a + b, 0)
    if (this._bufferStack.byteLength - offset < arbuf.byteLength) {
      this._growBufferStack(arbuf.byteLength)
    }
    this._bufferStack.set(new Uint8Array(arbuf), offset)
    this._bufferStackLengths.push(arbuf.byteLength)
    return arbuf.byteLength
  }
  private _popArrayBuffer() {
    let len = this._bufferStackLengths.pop() || 0
    let offset = this._bufferStackLengths.reduce((a = 0, b = 0) => a + b, 0)
    return this._bufferStack.slice(offset, offset + len)
  }

  private _pushString(str: string) {
    //@ts-ignore
    let enc = new TextEncoder()
    let buf = enc.encode(str).buffer
    return this._pushArrayBuffer(buf)
  }
  private _popString() {
    //@ts-ignore
    let dec = new TextDecoder("utf-8")
    return dec.decode(this._popArrayBuffer())
  }

  private _die(err: string) {
    console.trace(err)
    this._processes[0] = false
    this.setDisplayMode(0, 80, 20)
    this._pushString("\n\nError!\n" + err)
    this.print()
  }

  private _getCallback(callback: number | Function) {
    if (typeof callback === "number") {
      let process = this._processes[this._activePID]
      if (!process) throw "No active process!"
      callback = process.instance.exports.table.get(callback)
    }
    return callback
  }
}
