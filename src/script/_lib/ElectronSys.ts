import WebSys from "./WebSys"
import css from "./css"
//@ts-ignore
let fs: any, path: any, shell: any, win: any, process: any, app: any; if (typeof window !== "undefined") {
  //@ts-ignore
  fs = window.require("fs")
  //@ts-ignore
  path = window.require("path")
  //@ts-ignore
  shell = window.require('electron').shell
  //@ts-ignore
  win = window.require("electron").remote.getCurrentWindow()
  //@ts-ignore
  process = window.require("electron").remote.process
  //@ts-ignore
  app = window.require("electron").remote.app
}
let winState: any = {}

/**
 * Sys implementation for electron app.
 * See [Sys](../interfaces/__lib_sys_.sys.md) for documentation
 */
export default class ElectronSys extends WebSys {

  constructor() {
    super()
    win.restore()
    if (localStorage.getItem("winState")) {
      winState = JSON.parse(<string>localStorage.getItem("winState"))
      win.setPosition(winState.x || 0, winState.y || 0)
      win.setSize(winState.width || 0, winState.height || 0)
      winState.maximized && win.maximize()
      win.setFullScreen(winState.fullscreen || false)
    } else this._saveWindow()
    win.show()
    win.on("resize", this._saveWindow)
    win.on("move", this._saveWindow)
    //@ts-ignore
    document.querySelector("style").textContent = css
    this._initHotkeys()
    this.startupUrl = path.join(app.getPath("userData"), "startup") + "/"
    for (let i = 1; i < process.argv.length; i++) {
      if (process.argv[i].trim().substr(0, 1) !== "-") {
        this.startupUrl = process.argv[i].trim()
      }
    }
    try {
      let file = path.resolve(process.cwd(), this.startupUrl).replace(/\\/g, '/')
      if (file.substr(-1) !== "/" && fs.statSync(file).isDirectory()) file += "/"
      if (file[0] !== "/") file = "/" + file
      this.startupUrl = encodeURI('file://' + file)
    } catch (error) { }

    this._createUserFolder()
  }

  setAddress(url: string) {
    document.title = url + " - " + this._title
  }

  read(filename: string, options: any = {}): Promise<any> {
    let url = new URL(filename)
    if (url.protocol !== "file:") {
      return super.read(filename, options)
    }
    filename = decodeURI(url.pathname)
    if (process.platform === "win32") filename = filename.substr(1)
    return new Promise((resolve, reject) => {
      //@ts-ignore
      fs.readFile(filename, (err, res) => {
        if (err) return reject("read error!")
        switch (options.type) {
          case "binary":
            resolve(res.buffer)
            break

          case "text":
            resolve("" + res)
            break

          case "image":
            let dataurl = res.toString("base64")
            let img = new Image()
            img.src = "data:image/png;base64," + dataurl
            img.addEventListener("load", () => {
              let canvas = document.createElement("canvas")
              let g = <CanvasRenderingContext2D>canvas.getContext("2d")
              canvas.width = img.width
              canvas.height = img.height
              g.drawImage(img, 0, 0)
              resolve(g.getImageData(0, 0, img.width, img.height))
            })
            break

          default:
            throw "Unknown type!"
        }
      })
    })
  }
  write(filename: string, data: string | ArrayBuffer) {
    let url = new URL(filename)
    if (url.protocol !== "file:") {
      return super.write(filename, data)
    }
    filename = decodeURI(url.pathname)
    if (process.platform === "win32") filename = filename.substr(1)
    return new Promise<boolean>((resolve, reject) => {
      let parts = filename.split("/")
      let path = parts.shift()
      while (parts.length) {
        try {
          //@ts-ignore
          fs.mkdirSync(path)
        } catch (error) { }
        path += "/" + parts.shift()
      }
      let rnd = Math.random().toString()
      //@ts-ignore
      fs.writeFile(filename + rnd, data, (err, res) => {
        if (err) {
          reject("write error!")
          fs.unlink(filename + rnd)
        } else {
          fs.renameSync(filename + rnd, filename)
          resolve(true)
        }
      })
    })
  }
  delete(filename: string) {
    let url = new URL(filename)
    if (url.protocol !== "file:") {
      return super.delete(filename)
    }
    filename = decodeURI(url.pathname)
    if (process.platform === "win32") filename = filename.substr(1)
    return new Promise<boolean>((resolve, reject) => {
      //@ts-ignore
      fs.unlink(filename, (err) => {
        if (err) reject("delete error!")
        else resolve(true)
      })
    })
  }
  list(path: string) {
    let url = new URL(path)
    if (url.protocol !== "file:") {
      return super.list(path)
    }
    path = decodeURI(url.pathname)
    if (process.platform === "win32") path = path.substr(1)
    if (path.substr(-1) === "/") path = path.substr(0, path.length - 1)
    return new Promise<any>((resolve, reject) => {
      //@ts-ignore
      fs.readdir(path, (err, files) => {
        if (err) reject("list error!")
        else {
          let list = ""
          for (let file of files) {
            if (fs.statSync(path + "/" + file).isDirectory()) {
              list += file + "/\n"
            } else {
              list += file + "\n"
            }
          }
          resolve(list)
        }
      })
    })
  }

  openWeb(path: string) {
    let a = <HTMLAnchorElement>this.showLink(path).querySelector("a")
    a.href = "javascript:void(0)"
    let url = new URL(path)
    if (url.protocol === "file:") {
      path = decodeURI(url.pathname)
      if (process.platform === "win32") path = path.substr(1)
      a.textContent = path
      a.addEventListener("click", (e) => {
        shell.showItemInFolder(path)
        e.preventDefault()
      })
    } else {
      a.addEventListener("click", (e) => {
        shell.openExternal(path)
        e.preventDefault()
      })
    }
    return true
  }

  /** _privates */
  private _title: string = document.title

  private _initHotkeys() {
    document.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "F6":
          this.openWeb(document.title.substr(0, document.title.lastIndexOf("-")).trim())
          break
        case "F7":
          this._cropToBorders()
          e.preventDefault()
          break
        case "F11":
          win.setFullScreen(!win.isFullScreen())
          e.preventDefault()
          break
        case "F12":
          win.webContents.toggleDevTools()
          e.preventDefault()
          break
      }
    })
  }

  private _saveWindow() {
    winState.maximized = win.isMaximized()
    winState.fullscreen = win.isFullScreen()
    if (winState.maximized === false && winState.fullscreen === false) {
      let bounds = win.getBounds()
      winState.x = bounds.x
      winState.y = bounds.y
      winState.width = bounds.width
      winState.height = bounds.height
    }
    localStorage.setItem("winState", JSON.stringify(winState))
  }

  private _cropToBorders() {
    let display = <HTMLElement>document.querySelector("fantasy-terminal canvas, fantasy-terminal pre")
    let bounds = {
      width: window.innerWidth,
      height: window.innerHeight
    }
    window.resizeBy(display.offsetWidth - bounds.width, display.offsetHeight - bounds.height)
  }

  private async _createUserFolder() {
    let folder = app.getPath("userData")
    if (folder.substr(-1) !== "/") folder += "/"
    try {
      fs.readFileSync(folder + "user.css")
    } catch (error) {
      fs.writeFileSync(folder + "user.css", "/* Place your own custom styles here! :) */\nfantasy-terminal { background-color: black; }\n")
    }
    try {
      fs.renameSync(folder + "os", folder + "startup")
    } catch (error) { }
    folder += "startup/"
    try {
      fs.mkdirSync(folder)
    } catch (error) { }
    try {
      fs.mkdirSync(folder + "updates")
    } catch (error) { }
    let res = await fetch("boot.wasm")
    let bootwasm = await res.arrayBuffer()
    fs.writeFileSync(folder + "updates/cyberterminal.wasm.part", Buffer.from(bootwasm))
    fs.renameSync(folder + "updates/cyberterminal.wasm.part", folder + "updates/cyberterminal.wasm")
    try {
      fs.accessSync(folder + "boot.wasm")
    } catch (error) {
      fs.writeFileSync(folder + "boot.wasm", Buffer.from(bootwasm))
      location.reload(true)
    }
    await this._checkForUpdates()
  }

  private async _checkForUpdates() {
    let res = await fetch("https://api.github.com/repos/FantasyInternet/cyberterminal/releases/latest")
    let release = await res.json()
    if (localStorage.getItem("latestVersion")) {
      if (release.tag_name !== localStorage.getItem("latestVersion")) {
        if (confirm("A new version of CyberTerminal is available!\nWanna check it out? ;)")) {
          localStorage.setItem("latestVersion", release.tag_name)
          shell.openExternal("https://github.com/FantasyInternet/cyberterminal/releases/latest")
        }
      }
    } else {
      localStorage.setItem("latestVersion", release.tag_name)
    }
  }

}
