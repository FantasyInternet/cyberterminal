import css from "./css"
import GameInput from "./GameInput"
import Sys from "./Sys"
import ChipSound from "./ChipSound"
import MouseInput from "./MouseInput"
import TextInput from "./TextInput"
import Breaker from "./Breaker"

let scriptSrc: string
let dirCache: any = {}

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

  setTitle(title: string) {
  }

  setDisplayMode(mode: "none" | "text" | "pixel", width: number, height: number, visibleWidth = width, visibleHeight = height) {
    if (this._displayMode === mode &&
      this._displayWidth === width &&
      this._displayHeight === height &&
      this._visibleWidth === visibleWidth &&
      this._visibleHeight === visibleHeight) return
    this._displayMode = mode
    this._displayWidth = width
    this._displayHeight = height
    this._visibleWidth = visibleWidth
    this._visibleHeight = visibleHeight
    delete this._displayTextGrid
    delete this._displayBitmap
    delete this._displayCanvas
    delete this._displayContext
    switch (this._displayMode) {
      case "none":
        break

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
    if (!this._displayTextGrid) return
    for (let char of str) {
      if (this._displayTextEscape) {
        this._displayTextEscape += char
        if (char === "\x1b") this._displayTextEscape = "e"
        if (this._displayTextEscape.length > 16) this._displayTextEscape = ""
        let match: any
        if (match = this._displayTextEscape.match(/e\[([0-9]*)A/)) {
          let count = Number.parseInt(match[1]) || 1
          this._displayCursorRow = Math.max(this._displayCursorRow - count, 0)
          this._displayTextEscape = ""
        } else if (match = this._displayTextEscape.match(/e\[([0-9]*)B/)) {
          let count = Number.parseInt(match[1]) || 1
          this._displayCursorRow = Math.min(this._displayCursorRow + count, this._displayHeight - 1)
          this._displayTextEscape = ""
        } else if (match = this._displayTextEscape.match(/e\[([0-9]*)C/)) {
          let count = Number.parseInt(match[1]) || 1
          this._displayCursorCol = Math.min(this._displayCursorCol + count, this._displayWidth - 1)
          this._displayTextEscape = ""
        } else if (match = this._displayTextEscape.match(/e\[([0-9]*)D/)) {
          let count = Number.parseInt(match[1]) || 1
          this._displayCursorCol = Math.max(this._displayCursorCol - count, 0)
          this._displayTextEscape = ""
        } else if (match = this._displayTextEscape.match(/e\[([0-9]*);*([0-9]*)[Hf]/)) {
          let row = Number.parseInt(match[1]) || 1
          let col = Number.parseInt(match[2]) || 1
          this._displayCursorRow = Math.min(Math.max(0, row - 1), this._displayHeight - 1)
          this._displayCursorCol = Math.min(Math.max(0, col - 1), this._displayWidth - 1)
          this._displayTextEscape = ""
        } else if (match = this._displayTextEscape.match(/e\[([0-9]*)J/)) {
          let n = Number.parseInt(match[1]) || 0
          switch (n) {
            case 0:
              this._clearTextRect(this._displayCursorCol, this._displayCursorRow, this._displayWidth, 1)
              this._clearTextRect(0, this._displayCursorRow + 1, this._displayWidth, this._displayHeight)
              break
            case 1:
              this._clearTextRect(0, this._displayCursorRow, this._displayCursorCol, 1)
              this._clearTextRect(0, 0, this._displayWidth, this._displayCursorRow)
              break
            default:
              this._clearTextRect(0, 0, this._displayWidth, this._displayHeight)
              this._displayCursorRow = this._displayCursorCol = 0
          }
          this._displayTextEscape = ""
        } else if (match = this._displayTextEscape.match(/e\[([0-9]*)K/)) {
          let n = Number.parseInt(match[1]) || 0
          switch (n) {
            case 0:
              this._clearTextRect(this._displayCursorCol, this._displayCursorRow, this._displayWidth, 1)
              break
            case 1:
              this._clearTextRect(0, this._displayCursorRow, this._displayCursorCol, 1)
              break
            default:
              this._clearTextRect(0, this._displayCursorRow, this._displayWidth, 1)
          }
          this._displayTextEscape = ""
        } else if (match = this._displayTextEscape.match(/e\[([0-9]*)m/)) {
          let n = Number.parseInt(match[1]) || 0
          switch (n) {
            case 0:
              this._displayTextStyle = ""
              break
            case 1:
              this._displayTextStyle += "font-weight:bold;"
              break
            case 3:
              this._displayTextStyle += "font-style:italic;"
              break
            case 4:
              this._displayTextStyle += "text-decoration:underline;"
              break
            case 9:
              this._displayTextStyle += "text-decoration:line-through;"
              break
          }
          if (n >= 30 && n < 40) {
            this._displayTextStyle += "color:" + this._displayTextColors[n - 30] + ";"
          }
          if (n >= 40 && n < 50) {
            this._displayTextStyle += "background-color:" + this._displayTextColors[n - 40] + ";"
          }
          this._displayTextEscape = ""
        } else if (match = this._displayTextEscape.match(/e\[s/)) {
          this._displayCursorHistory.push({ col: this._displayCursorCol, row: this._displayCursorRow })
          this._displayTextEscape = ""
        } else if (match = this._displayTextEscape.match(/e\[u/)) {
          let pos = this._displayCursorHistory.pop()
          if (pos) {
            this._displayCursorCol = pos.col
            this._displayCursorRow = pos.row
          }
          this._displayTextEscape = ""
        }
      } else {
        let selector = `div:nth-child(${this._displayCursorRow + 1})\nspan:nth-child(${this._displayCursorCol + 1})`
        let cell = <HTMLElement>this._displayTextGrid.querySelector(selector)
        cell.classList.remove("current")
        if (this._displayTextStyle) {
          cell.setAttribute("style", this._displayTextStyle)
        } else {
          cell.removeAttribute("style")
        }
        if ((char.codePointAt(0) || 0) >= 32) {
          cell.textContent = char
        }
        this._displayCursorCol++
        if (char === "\b") {
          this._displayCursorCol -= 2
        }
        if (char === "\t") {
          this._displayCursorCol = Math.ceil(this._displayCursorCol / 8) * 8
        }
        if (char === "\n") {
          this._displayCursorCol = 0
          this._displayCursorRow++
        }
        if (char === "\x1b") {
          this._displayCursorCol--
          this._displayTextEscape = "e"
        }
      }
      while (this._displayCursorCol < 0) {
        this._displayCursorCol += this._displayWidth
        this._displayCursorRow--
      }
      while (this._displayCursorCol >= this._displayWidth) {
        this._displayCursorCol -= this._displayWidth
        this._displayCursorRow++
      }
      while (this._displayCursorRow < 0) {
        this._displayCursorRow = 0
      }
      while (this._displayCursorRow >= this._displayHeight) {
        this._scrollText()
      }
    }
    let selector = `div:nth-child(${this._displayCursorRow + 1})\nspan:nth-child(${this._displayCursorCol + 1})`
    let cell = <HTMLElement>this._displayTextGrid.querySelector(selector)
    cell.classList.add("current")
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
    if (res.ok) {
      this._dirCache(filename, true)
    } else {
      this._dirCache(filename, false)
      throw "read error!"
    }
    let buf = await res.arrayBuffer()
    //@ts-ignore
    let dec = new TextDecoder("utf-8")
    let txt = dec.decode(buf)

    try {
      let parser = new DOMParser()
      let url = new URL(filename)
      let doc = parser.parseFromString(txt, "text/html")
      let links = doc.querySelectorAll("[href],[src]")
      for (let link of links) {
        this._dirCache("" + new URL(link.getAttribute("href") || link.getAttribute("src") || ".", url))
      }
    } catch (error) { }
    switch (options.type) {
      case "binary":
        return buf

      case "text":
        return txt

      case "image":
        return new Promise((resolve) => {
          let blob = new Blob([buf])
          let img = new Image()
          img.src = URL.createObjectURL(blob)
          img.addEventListener("load", () => {
            let canvas = document.createElement("canvas")
            let g = <CanvasRenderingContext2D>canvas.getContext("2d")
            canvas.width = img.width
            canvas.height = img.height
            g.drawImage(img, 0, 0)
            resolve(g.getImageData(0, 0, img.width, img.height))
            URL.revokeObjectURL(img.src)
          })
        })

      default:
        throw "Unknown type!"
    }
  }

  async write(filename: string, data: string | ArrayBuffer) {
    let res = await fetch(filename, {
      method: "PUT",
      body: new Blob([data])
    })
    if (!res.ok) throw "write error!"
    this._dirCache(filename, true)
    return res.ok
  }

  async delete(filename: string) {
    let res = await fetch(filename, {
      method: "DELETE"
    })
    if (!res.ok) throw "delete error!"
    this._dirCache(filename, false)
    return res.ok
  }

  async head(filename: string) {
    let res = await fetch(filename, {
      method: "HEAD"
    })
    if (!res.ok) throw "head error!"
    this._dirCache(filename, false)
    let txt = ""
    res.headers.forEach((val: string, key: string) => { txt += key + ": " + val + "\n" })
    return txt
  }

  async list(path: string) {
    if (path.substr(-1) === "/") path = path.substr(0, path.length - 1)
    try {
      await this.read(path + "/", { type: "text" })
    } catch (error) { }
    let dir = this._dirCache(path)
    let list = ""
    for (let name in dir) {
      if (name && name !== "." && name !== "..") {
        if (dir[name]) {
          if (typeof dir[name] === "object") {
            list += name + "/\n"
          } else {
            list += name + "\n"
          }
        } else if (dir[name] == null) {
          list += name + "\n"
        }
      }
    }
    return list
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

  setTextInput(text: string, pos: number, len: number, type?: string) {
    this.textInput.setState({
      type: type,
      text: text,
      pos: pos,
      len: len
    })
  }

  replaceTextInput(search: string, replace: string = "", fromIndex: number = 0) {
    let text = this.textInput.state.text
    let pos = this.textInput.state.pos
    let len = this.textInput.state.len
    let i = text.indexOf(search, fromIndex)
    if (i >= 0) {
      text = text.substr(0, i) + replace + text.substr(i + search.length)
      if (pos > i) {
        pos += replace.length - search.length
      }
      this.textInput.setState({
        text: text,
        pos: pos,
        len: len
      })
    }
  }

  openWeb(url: string) {
    location.assign(url)
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
  private _displayTextGrid?: HTMLPreElement
  private _displayCursorCol: number = -1
  private _displayCursorRow: number = -1
  private _displayTextSize: number = 10
  private _displayTextSizeDelta: number = 0
  private _displayTextEscape: string = ""
  private _displayTextStyle: string = ""
  private _displayTextColors: string[] = ["#000", "#f00", "#0f0", "#ff0", "#00f", "#f0f", "#0ff", "#fff"]
  private _displayCursorHistory: any[] = []
  private _displayCanvas?: HTMLCanvasElement
  private _displayContext?: CanvasRenderingContext2D
  private _displayScale: number = 8

  private _initContainer() {
    let style = document.createElement("style")
    style.textContent = css
      ; (<HTMLElement>document.querySelector("head")).insertBefore(style, document.querySelector("head *"))
    this._container.innerHTML = '<div class="display"></div><div class="input"><div class="text"></div><div class="mouse"></div><div class="game"></div></div>'
    this._displayContainer = <HTMLElement>this._container.querySelector(".display")
    addEventListener("resize", () => { this._resize() })
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
    this._resize()
  }

  private _initTextGrid(width: number, height: number) {
    if (!this._displayContainer) throw "No display container!"

    let html = '<pre>'
    for (let row = 0; row < height; row++) {
      html += '<div>'
      for (let col = 0; col < width; col++) {
        html += '<span>&nbsp;</span>'
      }
      html += '</div>'
    }
    html += '</pre>'

    this._displayContainer.innerHTML = html
    this._displayTextGrid = <HTMLPreElement>this._displayContainer.querySelector("pre")
    this._displayCursorCol = this._displayCursorRow = 0
    this.mouseInput.element = this._displayTextGrid
    this._resize()
  }

  private _scrollText() {
    if (this._displayTextGrid) {
      let row = <HTMLDivElement>this._displayTextGrid.querySelector("div")
      let parent = (<HTMLElement>row.parentElement)
      parent.removeChild(row)
      let cols = row.querySelectorAll("span")
      for (let col of cols) {
        col.classList.remove("current")
        if (this._displayTextStyle) {
          col.setAttribute("style", this._displayTextStyle)
        } else {
          col.removeAttribute("style")
        }
        col.textContent = " "
      }
      parent.appendChild(row)
      this._displayCursorRow--
    }
  }

  private _clearTextRect(col: number, row: number, w: number, h: number) {
    if (!this._displayTextGrid) return
    for (let down = 0; down < h; down++) {
      for (let right = 0; right < w; right++) {
        let selector = `div:nth-child(${row + down + 1})\nspan:nth-child(${col + right + 1})`
        let cell = <HTMLElement>this._displayTextGrid.querySelector(selector)
        cell.classList.remove("current")
        if (this._displayTextStyle) {
          cell.setAttribute("style", this._displayTextStyle)
        } else {
          cell.removeAttribute("style")
        }
        if (cell) cell.textContent = " "
      }
    }
  }

  private _resize() {
    switch (this._displayMode) {
      case "text":
        this._displayTextSizeDelta = 1
        this._displayTextSize += 8
        this._resizeTextGrid()
        break

      case "pixel":
        this._resizeCanvas(false)
        break
    }
  }

  private _resizeTextGrid() {
    if (!this._displayTextGrid) return
    while (this._displayTextSizeDelta) {
      let terminalWidth = this._container.offsetWidth
      let terminalHeight = this._container.offsetHeight
      if (this._displayTextGrid.offsetWidth > terminalWidth || this._displayTextGrid.offsetHeight > terminalHeight) {
        if (this._displayTextSize <= 0) {
          this._displayTextSizeDelta = 0
        } else {
          this._displayTextSizeDelta = -1
        }
      } else if (this._displayTextSizeDelta < 0) {
        this._displayTextSizeDelta = 0
      }
      this._displayTextSize += this._displayTextSizeDelta
      this._displayTextGrid.style.fontSize = this._displayTextSize + "px"
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

  private _dirCache(path: string, exists?: boolean, cache = dirCache): any {
    while (path.substr(0, 1) === "/") path = path.substr(1)
    let parts = path.split("/")
    let name = parts.shift() || "."
    if (parts.length) {
      if (typeof cache !== "object") cache = {}
      if (typeof cache[name] !== "object") cache[name] = {}
      return this._dirCache(parts.join("/"), exists, cache[name])
    } else {
      if (cache[name] == null) cache[name] = null
      if (typeof exists === "boolean") cache[name] = exists
      return cache[name]
    }
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
