/// <reference path="./_classes/Sys" />
import css from "./_style"

/**
 * Sys implementation for web browsers.
 */
class WebSys {
  get displayMode() { return this._displayMode }
  get displayWidth() { return this._displayWidth }
  get displayHeight() { return this._displayHeight }
  get displayBitmap() { return this._displayBitmap }

  constructor(private _container: HTMLElement) {
    this._initContainer()
    this._initWorker()
    this._vsync()
  }

  setDisplayMode(mode: "text" | "bitmap", width: number, height: number, displayWidth = width, displayHeight = height) {
    if (!this._worker) return
    this._displayMode = mode
    this._displayWidth = displayWidth
    this._displayHeight = displayHeight
    delete this._displayBitmap
    delete this._displayCanvas
    delete this._displayContext
    switch (this.displayMode) {
      case "text":
        console.error(`${this.displayMode} not yet implemented!`)
        break

      case "bitmap":
        this._displayBitmap = new ImageData(width, height)
        this._initCanvas()
        break

      default:
        this._displayMode = ""
        this._displayWidth = 0
        this._displayHeight = 0
        throw `DisplayMode ${mode} not supported!`
    }
    return
  }

  async waitForVsync() {
    return new Promise((resolve, reject) => {
      this._vsyncCallbacks.push(resolve)
    })
  }

  /** _privates */
  private _displayMode: string = ""
  private _displayWidth: number = 0
  private _displayHeight: number = 0
  private _displayBitmap?: ImageData
  private _displayContainer?: HTMLElement
  private _displayCanvas?: HTMLCanvasElement
  private _displayContext?: CanvasRenderingContext2D
  private _displayScale: number = 8
  private _worker?: Worker
  private _vsyncCallbacks: Function[] = []

  private _initContainer() {
    let style = document.createElement("style")
    style.textContent = css
      ; (<HTMLElement>document.querySelector("head")).insertBefore(style, document.querySelector("head *"))
    this._container.innerHTML = '<div class="display"></div><div class="input"></div>'
    this._displayContainer = <HTMLElement>this._container.querySelector(".display")
    addEventListener("resize", () => { this._resizeCanvas(false) })
  }

  private _initCanvas() {
    if (!this._displayContainer) throw "No display container!"
    if (!this.displayBitmap) throw "No display bitmap!"
    this._displayContainer.innerHTML = '<canvas></canvas>'
    this._displayCanvas = <HTMLCanvasElement>this._displayContainer.querySelector("canvas")
    this._displayCanvas.width = this.displayBitmap.width
    this._displayCanvas.height = this.displayBitmap.height
    this._displayContext = <CanvasRenderingContext2D>this._displayCanvas.getContext("2d")
    this._resizeCanvas(false)
  }

  private _resizeCanvas(checkHeight = true) {
    if (!this._displayCanvas) return
    if (!checkHeight) {
      ; (<any>this._displayCanvas.style)["imageRendering"] = "-moz-crisp-edges"
        ; (<any>this._displayCanvas.style)["imageRendering"] = "pixelated"
      this._displayCanvas.style.display = "none"
      this._displayScale = 1
    }
    let terminalWidth = this._container.offsetWidth * devicePixelRatio
    let terminalHeight = this._container.offsetHeight * devicePixelRatio
    while (this.displayWidth * this._displayScale < terminalWidth) this._displayScale++
    while (this.displayWidth * this._displayScale > terminalWidth) this._displayScale--
    if (checkHeight) while (this.displayHeight * this._displayScale > terminalHeight) this._displayScale--
    if (this._displayScale < 1) {
      ; (<any>this._displayCanvas.style)["imageRendering"] = ""
      this._displayScale = 1
      let divide = 1
      while (this.displayWidth * this._displayScale > terminalWidth) this._displayScale = (1 / ++divide)
      if (checkHeight) while (this.displayHeight * this._displayScale > terminalHeight) this._displayScale = (1 / ++divide)
    }
    this._displayCanvas.style.width = (this._displayCanvas.width * this._displayScale) / devicePixelRatio + "px"
    this._displayCanvas.style.height = (this._displayCanvas.height * this._displayScale) / devicePixelRatio + "px"
    this._displayCanvas.style.marginLeft = this._displayCanvas.style.marginRight =
      (this.displayWidth - this._displayCanvas.width) / 2 * this._displayScale / devicePixelRatio + "px"
    this._displayCanvas.style.marginTop = this._displayCanvas.style.marginBottom =
      (this.displayHeight - this._displayCanvas.height) / 2 * this._displayScale / devicePixelRatio + "px"
    this._displayCanvas.style.display = "inline-block"
    if (!checkHeight)
      requestAnimationFrame(this._resizeCanvas.bind(this))
  }

  private _initWorker() {
    this._worker = new Worker("./script/web-cpu.js")
    this._worker.addEventListener("message", this._onMessage.bind(this))
  }

  private _onMessage(e: MessageEvent) {
    if (!this._worker) return
    //console.log("worker:", e)
    switch (e.data.cmd) {
      case "call":
        let value
        try {
          e.data.success = true
          value = (<any>this)[e.data.method].apply(this, e.data.arguments)
        } catch (error) {
          e.data.success = false
          value = error
        }
        if (e.data.reqId != null) {
          e.data.cmd = "response"
          if (value instanceof Promise) {
            value.then((value) => {
              if (!this._worker) return
              e.data.value = value
              this._worker.postMessage(e.data)
            }, (value) => {
              if (!this._worker) return
              e.data.success = false
              e.data.value = value
              this._worker.postMessage(e.data)
            })
          } else {
            e.data.value = value
            this._worker.postMessage(e.data)
          }
        }
        break

      case "imagedata":
        if (this._displayBitmap) {
          let buffer = e.data.buffer
          if (!buffer) throw "No buffer received!"
          let data = new Uint8ClampedArray(buffer)
          this._displayBitmap.data.set(data, 0)
          this._worker.postMessage({
            cmd: "imagedata",
            width: this._displayBitmap.width,
            height: this._displayBitmap.height,
            buffer: buffer
          }, [buffer])
        }
        break

      default:
        break
    }
  }

  private _vsync(t: number = 0) {
    if (this._displayContext && this.displayBitmap) {
      this._displayContext.putImageData(this.displayBitmap, 0, 0)
    }
    requestAnimationFrame(this._vsync.bind(this))
    let cb
    while (cb = this._vsyncCallbacks.pop()) cb(t)
  }
}
(<any>window)["Sys"] = new WebSys(<HTMLElement>document.querySelector("fantasy-terminal"))
