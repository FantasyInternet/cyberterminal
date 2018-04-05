import css from "./css"

/**
 * Sys implementation for web browsers.
 * See [Sys](../interfaces/__lib_sys_.sys.md) for documentation
 */
export default class WebSys implements Sys {
  get displayMode() { return this._displayMode }
  get displayWidth() { return this._displayWidth }
  get displayHeight() { return this._displayHeight }
  get displayBitmap() { return this._displayBitmap }

  constructor() {
    let scripts = document.querySelectorAll("script")
    this._scriptSrc = (<HTMLScriptElement>scripts[scripts.length - 1]).src
    this._initContainer()
  }

  setDisplayMode(mode: "text" | "indexed" | "rgb", width: number, height: number, displayWidth = width, displayHeight = height) {
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

      case "indexed":
      case "rgb":
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

  drawBitmap() {
    if (this._displayContext && this.displayBitmap) {
      this._displayContext.putImageData(this.displayBitmap, 0, 0)
    }
  }

  async waitForVsync() {
    return new Promise((resolve, reject) => {
      requestAnimationFrame(resolve)
    })
  }

  createMachine() {
    return new WebMachineWorker(this._scriptSrc)
  }

  async read(filename: string, options: any = {}) {
    //@ts-ignore
    let res = await fetch(filename)
    switch (options.type) {
      case "binary":
        return res.arrayBuffer()

      case "text":
        return res.text()

      default:
        throw "Unknown type!"
    }
  }


  /** _privates */
  private _scriptSrc: string = "./cyberterminal.js"
  private _container: HTMLElement = <HTMLElement>document.querySelector("fantasy-terminal")
  private _displayMode: string = ""
  private _displayWidth: number = 0
  private _displayHeight: number = 0
  private _displayBitmap?: ImageData
  private _displayContainer?: HTMLElement
  private _displayCanvas?: HTMLCanvasElement
  private _displayContext?: CanvasRenderingContext2D
  private _displayScale: number = 8

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

}

class WebMachineWorker implements MachineWorker {
  worker: Worker

  constructor(src: string) {
    this.worker = new Worker(src)
  }

  send(msg: any, transferables?: any[] | undefined) {
    this.worker.postMessage(msg, transferables)
  }

  onMessage(listener: Function) {
    this.worker.addEventListener("message", (e) => {
      return listener(e.data, this)
    })
  }

  terminate() {
    return this.worker.terminate()
  }
}
