/// <reference path="./_classes/Sys" />

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

  setDisplayMode(mode: "text" | "bitmap", width: number, height: number) {
    if (!this._worker) return
    this._displayMode = mode
    this._displayWidth = width
    this._displayHeight = height
    delete this._displayBitmap
    delete this._displayCanvas
    delete this._displayContext
    switch (this.displayMode) {
      case "text":
        console.error(`${this.displayMode} not yet implemented!`)
        break

      case "bitmap":
        this._displayBitmap = new ImageData(this.displayWidth, this.displayHeight)
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

  /** _privates */
  private _displayMode: string = ""
  private _displayWidth: number = 0
  private _displayHeight: number = 0
  private _displayBitmap?: ImageData
  private _displayContainer?: HTMLElement
  private _displayCanvas?: HTMLCanvasElement
  private _displayContext?: CanvasRenderingContext2D
  private _worker?: Worker

  private _initContainer() {
    this._container.setAttribute("style", "display:block;")
    this._container.innerHTML = '<div class="display"></div><div class="input"></div>'
    this._displayContainer = <HTMLElement>this._container.querySelector(".display")
  }

  private _initCanvas() {
    if (!this._displayContainer) throw "No display container!"
    this._displayContainer.innerHTML = '<canvas style="image-rendering: -moz-crisp-edges;image-rendering: -webkit-crisp-edges;image-rendering: pixelated;image-rendering: crisp-edges;"></canvas>'
    this._displayCanvas = <HTMLCanvasElement>this._displayContainer.querySelector("canvas")
    this._displayCanvas.width = this.displayWidth
    this._displayCanvas.height = this.displayHeight
    this._displayContext = <CanvasRenderingContext2D>this._displayCanvas.getContext("2d")
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
        (<any>this)[e.data.method].apply(this, e.data.arguments)
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
  }
}
(<any>window)["Sys"] = new WebSys(<HTMLElement>document.querySelector("fantasy-terminal"))
