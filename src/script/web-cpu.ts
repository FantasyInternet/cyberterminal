/// <reference path="./_classes/Sys" />

/**
 * Central processing unit for browsers
 * See [Sys](../interfaces/__classes_sys_.sys.md) for documentation
 */
class WebCpu implements Sys {
  get displayMode() { return this._displayMode }
  get displayWidth() { return this._displayWidth }
  get displayHeight() { return this._displayHeight }
  get displayBitmap() { return this._displayBitmap }

  constructor() {
    console.log("The web worker is working!")
    this._initCom()
    this.setDisplayMode("bitmap", 320, 180)
    for (let i = 0; i < 100; i++) {
      this.pset(i, i / 2, 255, 0, 255)
    }
    this.fillRect(80, 45, 79, 44, 0, 255, 127)
    this._commitBitmap(true)
    setTimeout(this._commitBitmap.bind(this), 3000)
    setTimeout(this._test.bind(this), 5000)
  }

  log(msg: any) {
    console.log(msg)
  }

  setDisplayMode(mode: "text" | "bitmap", width: number, height: number) {
    this._sysCall("setDisplayMode", mode, width, height)
    this._displayMode = mode
    this._displayWidth = width
    this._displayHeight = height
    delete this._displayBitmap
    switch (this.displayMode) {
      case "text":
        console.error(`${this.displayMode} not yet implemented!`)
        break

      case "bitmap":
        this._displayBitmap = new ImageData(this.displayWidth, this.displayHeight)
        //this.fillRect(0, 0, this._displayBitmap.width, this._displayBitmap.height, 0, 0, 0)
        break

      default:
        this._displayMode = ""
        this._displayWidth = 0
        this._displayHeight = 0
        throw "DisplayMode not supported!"
    }
    return
  }

  pset(x: number, y: number, r: number, g: number, b: number) {
    let a = 255
    if (!this.displayBitmap) throw "No bitmap present!"
    let bm = this.displayBitmap
    x = Math.floor(x)
    if (x < 0 || x >= bm.width) throw "Coordinates out of bounds!"
    y = Math.floor(y)
    if (y < 0 || y >= bm.height) throw "Coordinates out of bounds!"
    r = Math.min(Math.max(0, Math.floor(r)), 255)
    g = Math.min(Math.max(0, Math.floor(g)), 255)
    b = Math.min(Math.max(0, Math.floor(b)), 255)
    a = Math.min(Math.max(0, Math.floor(a)), 255)
    let i = (y * bm.width + x) * 4
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
    return bm.data.slice(i, i + 3)
  }

  fillRect(x: number, y: number, width: number, height: number, r: number, g: number, b: number) {
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
    r = Math.min(Math.max(0, Math.floor(r)), 255)
    g = Math.min(Math.max(0, Math.floor(g)), 255)
    b = Math.min(Math.max(0, Math.floor(b)), 255)
    a = Math.min(Math.max(0, Math.floor(a)), 255)
    let i = (y * bm.width + x) * 4
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

  async wait(milliseconds: number = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds)
    })
  }

  async waitForVsync(): Promise<number> {
    this._commitBitmap(true)
    return this._sysRequest("waitForVsync")
  }

  async commitDisplay(): Promise<number> {
    switch (this.displayMode) {
      case "bitmap":
        this._commitBitmap(true)
        break

      default:
        return this._lastCommit
    }
    return new Promise<number>((resolve) => {
      this._pendingCommits.push(resolve)
    })
  }

  /* _privates */
  private _displayMode: string = ""
  private _displayWidth: number = 0
  private _displayHeight: number = 0
  private _displayBitmap?: ImageData
  private _transferBuffer?: ArrayBuffer
  private _lastCommit: number = performance.now()
  private _pendingCommits: Function[] = []
  private _pendingRequests: any[] = []

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



  private async _test() {
    let _x = 0
    let _dx = 1
    let _y = 0
    let _dy = 1
    let _z = 0
    let _dz = 1
    let _fps = 0
    let _nextFps = 0
    let t = 0
    while (true) {
      t = performance.now()
      t = await this.commitDisplay()
      //t = await this.waitForVsync()
      _fps++
      if (t >= _nextFps) {
        console.log(_fps + " FPS")
        _fps = 0
        _nextFps += 1000
      }
      _x += _dx
      _y += _dy
      _z += _dz
      for (let y = 0; y < 64; y++) {
        for (let x = 0; x < 64; x++) {
          this.pset(x + _x, y + _y, x * 4, y * 4, _z)
        }
      }
      if (this.displayBitmap) {
        if (_x >= this.displayBitmap.width - 64) _dx = -1
        if (_x <= 0) _dx = 1
        if (_y >= this.displayBitmap.height - 64) _dy = -1
        if (_y <= 0) _dy = 1
        if (_z >= 255) _dz = -1
        if (_z <= 0) _dz = 1
      }
    }
    //setTimeout(colorCube)
  }

}

new WebCpu()
