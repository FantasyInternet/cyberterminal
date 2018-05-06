/**
 * Central processing unit for browsers
 * See [Sys](../interfaces/__classes_sys_.sys.md) for documentation
 */
export default class Machine {
  get displayMode() { return this._displayMode }
  get displayWidth() { return this._displayWidth }
  get displayHeight() { return this._displayHeight }
  get displayBitmap() { return this._displayBitmap }

  constructor(public url: string) {
    this._initCom()
    /*this._pushString("./script/pong.wasm")
    this.read(() => {
      this.run()
    })*/
  }

  /* ROM API  */

  log() {
    console.log("📟", this._popString())
  }

  setDisplayMode(/*mode: "text" | "rgb",*/ width: number, height: number, displayWidth = width, displayHeight = height) {
    this._sysCall("setDisplayMode", "rgb", width, height, displayWidth, displayHeight)
    this._displayMode = "rgb"
    this._displayWidth = displayWidth
    this._displayHeight = displayHeight
    delete this._displayBitmap
    switch (this.displayMode) {
      case "text":
        console.error(`${this.displayMode} not yet implemented!`)
        break

      case "rgb":
        this._displayBitmap = new ImageData(width, height)
        break

      default:
        this._displayMode = ""
        this._displayWidth = 0
        this._displayHeight = 0
        throw "DisplayMode not supported!"
    }
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
    switch (this.displayMode) {
      case "indexed":
      case "rgb":
        this._commitBitmap(true)
        break
    }
    this._pendingCommits.push((t: number) => {
      //@ts-ignore
      callback(t, id)
    })
    return id
  }

  read(callback: number | Function) {
    if (typeof callback === "number") {
      let process = this._processes[this._activePID]
      if (!process) throw "No active process!"
      callback = process.instance.exports.table.get(callback)
    }
    let id = this._asyncCalls++
    let filename = this._popString()
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
    let filename = this._popString()
    this._sysRequest("read", filename, { type: "image" }).then((data: ImageData) => {
      this._pushArrayBuffer(data.data.buffer)
      //@ts-ignore
      callback(data.width, data.height, id)
    })
    return id
  }

  async run() {
    this._activePID = this._processes.length
    let wasm = this._popArrayBuffer()
    let api = this._generateRomApi()
    //@ts-ignore
    this._processes.push(await WebAssembly.instantiate(wasm, { api }))
    let process = this._processes[this._activePID]
    process.instance.exports.setup()
    let nextFrame = 0
    let frameInterval = 1000 / 60
    while (true) {
      this.commitDisplay(() => { })
      let t = await this._sysRequest("waitForVsync")
      if (t > nextFrame + 1024) nextFrame = t
      if (t > nextFrame) {
        while (t > nextFrame) {
          process.instance.exports.update(nextFrame)
          nextFrame += frameInterval
        }
        process.instance.exports.draw(t)
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

  startTone() { this._sysRequest("startTone", ...arguments) }
  stopTone() { this._sysRequest("stopTone", ...arguments) }

  /* _privates */
  private _displayMode: string = ""
  private _displayWidth: number = 0
  private _displayHeight: number = 0
  private _displayBitmap?: ImageData
  private _transferBuffer?: ArrayBuffer
  private _lastCommit: number = performance.now()
  private _pendingCommits: Function[] = []
  private _pendingRequests: any[] = []
  private _processes: any[] = []
  private _activePID: number = -1
  //@ts-ignore
  private _bufferStack: ArrayBuffer[] = []
  private _asyncCalls: number = 0
  private _mouseInputState: any = {
    x: 0, y: 0, pressed: false
  }
  private _gameInputState: any = {
    axis: { x: 0, y: 0 },
    buttons: { a: false, b: false, x: false, y: false }
  }

  private _initCom() {
    self.addEventListener("message", this._onMessage.bind(this))
  }

  private _onMessage(e: MessageEvent) {
    //console.log("main:", e)
    switch (e.data.cmd) {
      case "boot":
        this._pushArrayBuffer(e.data.wasm)
        this.run()
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
      if (name.substr(0, 1) !== "_" && typeof val === "function") {
        api[name] = this._copyFunction(val.bind(this))
      }
    }
    for (let name of ["Promise"]) {
      api[name] = this._copyClass(eval(`(${name})`))
    }
    for (let name of ["Math"]) {
      api[name] = this._copyObject(eval(`(${name})`))
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
