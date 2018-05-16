import css from "./css"
import GameInput from "./GameInput"
import Sys from "./Sys"
import ChipSound from "./ChipSound"
import MouseInput from "./MouseInput"
import TextInput from "./TextInput"
import Breaker from "./Breaker"

let scriptSrc: string

/**
 * Sys implementation for web browsers.
 * See [Sys](../interfaces/__lib_sys_.sys.md) for documentation
 */
export default class WebSys implements Sys {
  chipSound: ChipSound
  textInput: TextInput
  mouseInput: MouseInput
  gameInput: GameInput
  inputPriority: string[] = ["text", "mouse", "game"]
  breaker: Breaker

  constructor() {
    let scripts = document.querySelectorAll("script")
    scriptSrc = (<HTMLScriptElement>scripts[scripts.length - 1]).src
    this._initContainer()
    this.chipSound = new ChipSound()
    this.textInput = new TextInput(this, <HTMLInputElement>this._container.querySelector(".input .text"))
    this.mouseInput = new MouseInput(this)
    this.gameInput = new GameInput(this)
    this.breaker = new Breaker(this)
  }

  setDisplayMode(mode: "text" | "pixel", width: number, height: number, visibleWidth = width, visibleHeight = height) {
    this._displayMode = mode
    this._displayWidth = width
    this._displayHeight = height
    this._visibleWidth = visibleWidth
    this._visibleHeight = visibleHeight
    delete this._displayBitmap
    delete this._displayCanvas
    delete this._displayContext
    switch (this._displayMode) {
      case "text":
        this._initTextGrid(width, height)
        break

      case "pixel":
        this._displayBitmap = new ImageData(width, height)
        this._initCanvas()
        break

      default:
        this._displayMode = ""
        this._visibleWidth = -1
        this._visibleHeight = -1
        throw `DisplayMode ${mode} not supported!`
    }
    return
  }

  drawBitmap(buffer: ArrayBuffer) {
    if (this._displayContext && this._displayBitmap) {
      let data = new Uint8ClampedArray(buffer)
      this._displayBitmap.data.set(data, 0)
      this._displayContext.putImageData(this._displayBitmap, 0, 0)
    }
  }

  print(str: string) {
    if (this._displayTextGrid) {
      for (let char of str) {
        let cell = <HTMLTableCellElement>this._displayTextGrid.querySelector(`tr:nth-child(${this._displayCursorRow + 1}) td:nth-child(${this._displayCursorCol + 1})`)
        cell.classList.remove("current")
        cell.textContent = char
        this._displayCursorCol++
        if (this._displayCursorCol >= this._displayWidth || char === "\n") {
          this._displayCursorCol = 0
          this._displayCursorRow++
        }
        if (this._displayCursorRow >= this._displayHeight) {
          this._scrollText()
        }
      }
      let cell = <HTMLTableCellElement>this._displayTextGrid.querySelector(`tr:nth-child(${this._displayCursorRow + 1}) td:nth-child(${this._displayCursorCol + 1})`)
      cell.classList.add("current")
    }
  }

  async waitForVsync() {
    return new Promise((resolve, reject) => {
      requestAnimationFrame(resolve)
    })
  }

  createMachine() {
    return new WebMachineWorker()
  }

  async read(filename: string, options: any = {}) {
    //@ts-ignore
    let res = await fetch(filename)
    if (!res.ok) throw "read error!"
    switch (options.type) {
      case "binary":
        return res.arrayBuffer()

      case "text":
        return res.text()

      case "image":
        return new Promise((resolve) => {
          let blob = res.blob().then((blob) => {
            let img = new Image()
            img.src = URL.createObjectURL(blob)
            img.addEventListener("load", () => {
              let canvas = document.createElement("canvas")
              let g = <CanvasRenderingContext2D>canvas.getContext("2d")
              canvas.width = img.width
              canvas.height = img.height
              g.drawImage(img, 0, 0)
              resolve(g.getImageData(0, 0, img.width, img.height))
            })
          })
        })

      default:
        throw "Unknown type!"
    }
  }

  async write(filename: string, data: string | ArrayBuffer) {
    //@ts-ignore
    let res = await fetch(filename, {
      method: "PUT",
      body: new Blob([data])
    })
    if (!res.ok) throw "write error!"
    return res.ok
  }

  async delete(filename: string) {
    //@ts-ignore
    let res = await fetch(filename, {
      method: "DELETE"
    })
    if (!res.ok) throw "delete error!"
    return res.ok
  }

  startTone() {
    this.chipSound.startTone.apply(this.chipSound, arguments)
  }
  stopTone() {
    this.chipSound.stopTone.apply(this.chipSound, arguments)
  }

  focusInput(input: "text" | "mouse" | "game") {
    let i = this.inputPriority.indexOf(input)
    if (i >= 0) {
      this.inputPriority.splice(i, 1)
      this.inputPriority.unshift(input)
    }
    for (let i = 0; i < this.inputPriority.length; i++) {
      if (i) {
        //@ts-ignore
        this[this.inputPriority[i] + "Input"].blur()
      } else {
        //@ts-ignore
        this[this.inputPriority[i] + "Input"].focus()
      }
    }
    return this.inputPriority
  }

  setTextInput(text: string, pos: number, len: number) {
    this.textInput.setState({
      text: text,
      pos: pos,
      len: len
    })
  }


  /** _privates */
  private _container: HTMLElement = <HTMLElement>document.querySelector("fantasy-terminal")
  private _displayMode: string = ""
  private _displayWidth: number = -1
  private _displayHeight: number = -1
  private _visibleWidth: number = -1
  private _visibleHeight: number = -1
  private _displayBitmap?: ImageData
  private _displayContainer?: HTMLElement
  private _displayTextGrid?: HTMLTableElement
  private _displayCursorCol: number = -1
  private _displayCursorRow: number = -1
  private _displayCanvas?: HTMLCanvasElement
  private _displayContext?: CanvasRenderingContext2D
  private _displayScale: number = 8

  private _initContainer() {
    let style = document.createElement("style")
    style.textContent = css
      ; (<HTMLElement>document.querySelector("head")).insertBefore(style, document.querySelector("head *"))
    this._container.innerHTML = '<div class="display"></div><div class="input"><div class="text"></div><div class="mouse"></div><div class="game"></div></div>'
    this._displayContainer = <HTMLElement>this._container.querySelector(".display")
    addEventListener("resize", () => { this._resizeCanvas(false) })
  }

  private _initCanvas() {
    if (!this._displayContainer) throw "No display container!"
    if (!this._displayBitmap) throw "No display bitmap!"
    this._displayContainer.innerHTML = '<canvas></canvas>'
    this._displayCanvas = <HTMLCanvasElement>this._displayContainer.querySelector("canvas")
    this._displayCanvas.width = this._displayBitmap.width
    this._displayCanvas.height = this._displayBitmap.height
    this._displayContext = <CanvasRenderingContext2D>this._displayCanvas.getContext("2d")
    this.mouseInput.element = this._displayCanvas
    this._resizeCanvas(false)
  }

  private _initTextGrid(width: number, height: number) {
    if (!this._displayContainer) throw "No display container!"

    let html = '<table>'
    for (let row = 0; row < height; row++) {
      html += '<tr>'
      for (let col = 0; col < width; col++) {
        html += '<td>&nbsp;</td>'
      }
      html += '</tr>'
    }
    html += '</table>'

    this._displayContainer.innerHTML = html
    this._displayTextGrid = <HTMLTableElement>this._displayContainer.querySelector("table")
    this._displayCursorCol = this._displayCursorRow = 0
    this.mouseInput.element = this._displayTextGrid
    // this._resizeCanvas(false)
  }

  private _scrollText() {
    if (this._displayTextGrid) {
      let row = <HTMLTableRowElement>this._displayTextGrid.querySelector("tr")
      let parent = (<HTMLTableElement>row.parentElement)
      parent.removeChild(row)
      let cols = row.querySelectorAll("td")
      for (let col of cols) {
        col.textContent = " "
      }
      parent.appendChild(row)
      this._displayCursorRow--
    }
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
    while (this._visibleWidth * this._displayScale < terminalWidth) this._displayScale++
    while (this._visibleWidth * this._displayScale > terminalWidth) this._displayScale--
    if (checkHeight) while (this._visibleHeight * this._displayScale > terminalHeight) this._displayScale--
    if (this._displayScale < 1) {
      ; (<any>this._displayCanvas.style)["imageRendering"] = ""
      this._displayScale = 1
      let divide = 1
      while (this._visibleWidth * this._displayScale > terminalWidth) this._displayScale = (1 / ++divide)
      if (checkHeight) while (this._visibleHeight * this._displayScale > terminalHeight) this._displayScale = (1 / ++divide)
    }
    this._displayCanvas.style.width = (this._displayCanvas.width * this._displayScale) / devicePixelRatio + "px"
    this._displayCanvas.style.height = (this._displayCanvas.height * this._displayScale) / devicePixelRatio + "px"
    this._displayCanvas.style.marginLeft = this._displayCanvas.style.marginRight =
      (this._visibleWidth - this._displayCanvas.width) / 2 * this._displayScale / devicePixelRatio + "px"
    this._displayCanvas.style.marginTop = this._displayCanvas.style.marginBottom =
      (this._visibleHeight - this._displayCanvas.height) / 2 * this._displayScale / devicePixelRatio + "px"
    this._displayCanvas.style.display = "inline-block"
    if (!checkHeight)
      requestAnimationFrame(this._resizeCanvas.bind(this))
    else
      this.mouseInput.scale = this._displayScale
  }



}

class WebMachineWorker implements MachineWorker {
  worker: Worker

  constructor() {
    this.worker = new Worker(scriptSrc)
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
