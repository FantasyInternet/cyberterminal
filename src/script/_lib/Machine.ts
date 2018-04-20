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
    this.read("./script/pong.wasm", { type: "binary" }).then((code: ArrayBuffer) => {
      this.run(code)
    })
  }

  log() {
    console.log("WASM:", this.popString())
  }

  setDisplayMode(/*mode: "text" | "indexed" | "rgb",*/ width: number, height: number, displayWidth = width, displayHeight = height) {
    this._sysCall("setDisplayMode", "rgb", width, height, displayWidth, displayHeight)
    this._displayMode = "rgb"
    this._displayWidth = displayWidth
    this._displayHeight = displayHeight
    delete this._displayBitmap
    switch (this.displayMode) {
      case "text":
        console.error(`${this.displayMode} not yet implemented!`)
        break

      case "indexed":
        this._displayPixmap = new Uint8Array(width * height)
        this._displayPalette = []
        //@ts-ignore
        this._displayPalette.unshift(this._displayPalette.pop())
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

  /*pset(x: number, y: number, r: number, g: number = r, b: number = r) {
    let a = 255
    if (!this.displayBitmap) throw "No bitmap present!"
    let bm = this.displayBitmap
    x = Math.floor(x)
    if (x < 0 || x >= bm.width) throw "Coordinates out of bounds!"
    y = Math.floor(y)
    if (y < 0 || y >= bm.height) throw "Coordinates out of bounds!"
    let i = (y * bm.width + x) * 4
    if (this.displayMode === "indexed") {
      if (!this._displayPixmap) throw "No pixmap!"
      if (!this._displayPalette) throw "No palette!"
      this._displayPixmap[i / 4] = r
      if (!this._displayPalette[r]) throw "Color not defined!"
        ;[r, g, b, a] = this._displayPalette[r]
    }
    r = Math.min(Math.max(0, Math.floor(r)), 255)
    g = Math.min(Math.max(0, Math.floor(g)), 255)
    b = Math.min(Math.max(0, Math.floor(b)), 255)
    a = Math.min(Math.max(0, Math.floor(a)), 255)
    bm.data[i++] = r
    bm.data[i++] = g
    bm.data[i++] = b
    bm.data[i++] = a
    this._commitBitmap()
  }

  pget(x: number, y: number) {
    if (!this.displayBitmap) throw "No bitmap present!"
    let bm = this.displayBitmap
    x = Math.floor(x)
    if (x < 0 || x >= bm.width) throw "Coordinates out of bounds!"
    y = Math.floor(y)
    if (y < 0 || y >= bm.height) throw "Coordinates out of bounds!"
    let i = (y * bm.width + x) * 4
    if (this.displayMode === "rgb") {
      return bm.data.slice(i, i + 4)
    } else if (this._displayPixmap) {
      return this._displayPixmap[i / 4]
    }
  }

  fillRect(x: number, y: number, width: number, height: number, r: number, g: number = r, b: number = r) {
    let a = 255
    if (!this.displayBitmap) throw "No bitmap present!"
    let bm = this.displayBitmap
    x = Math.floor(x)
    if (x < 0 || x > bm.width) throw "Coordinates out of bounds!"
    y = Math.floor(y)
    if (y < 0 || y > bm.height) throw "Coordinates out of bounds!"
    width = Math.floor(width)
    if (width < 0 || x + width > bm.width) throw "Coordinates out of bounds!"
    height = Math.floor(height)
    if (height < 0 || y + height > bm.height) throw "Coordinates out of bounds!"
    if (width === 0 || height === 0) return
    let i = (y * bm.width + x) * 4
    if (this.displayMode === "indexed") {
      if (!this._displayPixmap) throw "No pixmap!"
      if (!this._displayPalette) throw "No palette!"
      let _i = i / 4
      for (let _y = 0; _y < height; _y++) {
        this._displayPixmap.fill(r, _i, _i + width)
        _i += bm.width
      }
      if (!this._displayPalette[r]) throw "Color not defined!"
        ;[r, g, b, a] = this._displayPalette[r]
    }
    r = Math.min(Math.max(0, Math.floor(r)), 255)
    g = Math.min(Math.max(0, Math.floor(g)), 255)
    b = Math.min(Math.max(0, Math.floor(b)), 255)
    a = Math.min(Math.max(0, Math.floor(a)), 255)
    bm.data[i++] = r
    bm.data[i++] = g
    bm.data[i++] = b
    bm.data[i++] = a
    let bytes = bm.data.slice(i - 4, i)
    for (let _x = 1; _x < width; _x++) {
      bm.data.set(bytes, i)
      i += 4
    }
    bytes = bm.data.slice(i - 4 * width, i)
    i += 4 * (bm.width - width)
    for (let _y = 1; _y < height; _y++) {
      bm.data.set(bytes, i)
      i += 4 * bm.width
    }
    this._commitBitmap()
  }

  palette(id: number, r: number, g: number, b: number) {
    if (!this._displayBitmap) throw "No bitmap!"
    if (!this._displayPixmap) throw "No pixmap!"
    if (!this._displayPalette) throw "No palette!"
    let a = 255
    if (this._displayPalette[id]) {
      let i = 0
      this._displayPalette[id][i++] = r
      this._displayPalette[id][i++] = g
      this._displayPalette[id][i++] = b
      this._displayPalette[id][i++] = a
    } else {
      this._displayPalette[id] = [r, g, b, a]
    }
    let p = -1
    while ((p = this._displayPixmap.indexOf(id, p + 1)) >= 0) {
      this._displayBitmap.data.set(this._displayPalette[id], p * 4)
    }
  }*/

  displayMemory(offset: number, length: number, destination: number = 0) {
    if (!this._vm) throw "No VM!"
    if (!this._displayBitmap) throw "No bitmap to commit!"
    this._displayBitmap.data.set(new Uint8Array(this._vm.instance.exports.memory.buffer.slice(offset, offset + length)), destination)
  }
  pushFromMemory(offset: number, length: number) {
    if (!this._vm) throw "No VM!"
    let ar = new Uint8Array(length)
    ar.set(new Uint8Array(this._vm.instance.exports.memory.buffer.slice(offset, offset + length)))
    this._bufferStack.push(ar.buffer)
  }
  popToMemory(offset: number) {
    if (!this._vm) throw "No VM!"
    if (!this._bufferStack.length) throw "Buffer stack is empty!"
    let ar = new Uint8Array(this._vm.instance.exports.memory.buffer)
    //@ts-ignore
    ar.set(this._bufferStack.pop(), offset)
  }

  pushArrayBuffer(arbuf: ArrayBuffer) {
    this._bufferStack.push(arbuf)
    return arbuf.byteLength
  }
  popArrayBuffer() {
    return this._bufferStack.pop()
  }

  pushString(str: string) {
    //@ts-ignore
    let enc = new TextEncoder()
    let buf = enc.encode(str).buffer
    this._bufferStack.push(buf)
    return buf.byteLength
  }
  popString() {
    //@ts-ignore
    let dec = new TextDecoder("utf-8")
    return dec.decode(this._bufferStack.pop())
  }

  async wait(milliseconds: number = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds)
    })
  }

  async waitForVsync(): Promise<number> {
    this.commitDisplay()
    return this._sysRequest("waitForVsync")
  }

  async commitDisplay(): Promise<number> {
    switch (this.displayMode) {
      case "indexed":
      case "rgb":
        this._commitBitmap(true)
        break

      default:
        return this._lastCommit
    }
    return new Promise<number>((resolve) => {
      this._pendingCommits.push(resolve)
    })
  }

  async read(filename: string, options: any = {}) {
    return this._sysRequest("read", filename, options)
  }

  async run(wasm: ArrayBuffer, api = this._generateRomApi()) {
    console.log("instatiating", wasm)
    //@ts-ignore
    this._vm = await WebAssembly.instantiate(wasm, { api })
    console.log("instatiated", this._vm.instance.exports)
    //this.setDisplayMode( 320, 200)
    //this.fillRect(20, 30, 40, 50, 255, 255, 255)
    this._vm.instance.exports.init()
    console.log("stepping")
    let nextFrame = performance.now()
    let frameInterval = 1000 / 60
    while (true) {
      if (performance.now() > nextFrame) {
        await this.commitDisplay()
        nextFrame += frameInterval
      }
      this._vm.instance.exports.step(performance.now())
    }
  }

  /* _privates */
  private _displayMode: string = ""
  private _displayWidth: number = 0
  private _displayHeight: number = 0
  private _displayBitmap?: ImageData
  private _displayPixmap?: Uint8Array
  private _displayPalette?: number[][]
  private _transferBuffer?: ArrayBuffer
  private _lastCommit: number = performance.now()
  private _pendingCommits: Function[] = []
  private _pendingRequests: any[] = []
  private _vm: any = {}
  private _bufferStack: ArrayBuffer[] = []

  private _initCom() {
    self.addEventListener("message", this._onMessage.bind(this))
  }

  private _onMessage(e: MessageEvent) {
    //console.log("main:", e)
    switch (e.data.cmd) {
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
}
