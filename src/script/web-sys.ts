/// <reference path="./_classes/Sys" />

/**
 * Sys implementation for web browsers.
 * See [Sys](../interfaces/__classes_sys_.sys.md) for documentation
 */
class WebSys implements Sys {
  get displayMode() { return this._displayMode }
  get displayWidth() { return this._displayWidth }
  get displayHeight() { return this._displayHeight }
  get displayBitmap() { return this._displayBitmap }

  constructor(private _container: HTMLElement) {
    this._initContainer()
    this._vsync()
  }

  log(msg: any) {
    console.log(msg)
  }

  setDisplayMode(mode: "text" | "bitmap", width: number, height: number) {
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
        this.fillRect(0, 0, this._displayBitmap.width, this._displayBitmap.height, 0, 0, 0)
        this._initCanvas()
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
    r = Math.min(Math.max(0, Math.floor(r)), 255)
    g = Math.min(Math.max(0, Math.floor(g)), 255)
    b = Math.min(Math.max(0, Math.floor(b)), 255)
    a = Math.min(Math.max(0, Math.floor(a)), 255)
    let i = (y * bm.width + x) * 4
    bm.data[i++] = r
    bm.data[i++] = g
    bm.data[i++] = b
    bm.data[i++] = a
    i += -4
    let bytes = bm.data.slice(i, i + 4)
    for (let _x = 0; _x < width; _x++) {
      bm.data.set(bytes, i)
      i += 4
    }
    i += -4 * width
    bytes = bm.data.slice(i, i + 4 * width)
    for (let _y = 0; _y < height; _y++) {
      bm.data.set(bytes, i)
      i += 4 * bm.width
    }
  }

  /** _privates */
  private _displayMode: string = ""
  private _displayWidth: number = 0
  private _displayHeight: number = 0
  private _displayBitmap?: ImageData
  private _displayContainer?: HTMLElement
  private _displayCanvas?: HTMLCanvasElement
  private _displayContext?: CanvasRenderingContext2D

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

  private _vsync(t: number = 0) {
    if (this._displayContext && this.displayBitmap) {
      this._displayContext.putImageData(this.displayBitmap, 0, 0)
    }
    requestAnimationFrame(this._vsync.bind(this))
  }
}
(<any>window)["Sys"] = new WebSys(<HTMLElement>document.querySelector("fantasy-terminal"))
