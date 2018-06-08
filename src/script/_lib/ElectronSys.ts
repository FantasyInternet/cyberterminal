import WebSys from "./WebSys"
//@ts-ignore
let fs: any, shell: any, win: any; if (typeof window !== "undefined") {
  //@ts-ignore
  fs = window.require("fs")
  //@ts-ignore
  shell = window.require('electron').shell
  //@ts-ignore
  win = window.require("electron").remote.getCurrentWindow()
}

/**
 * Sys implementation for electron app.
 * See [Sys](../interfaces/__lib_sys_.sys.md) for documentation
 */
export default class ElectronSys extends WebSys {

  constructor() {
    super()
    this._initHotkeys()
  }

  setTitle(title: string) {
    document.title = title + " - " + this._title
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
      //@ts-ignore
      fs.writeFile(filename, data, (err, res) => {
        if (err) reject("write error!")
        else resolve(true)
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
    if (path.substr(-1) === "/") path = path.substr(0, path.length - 1)
    let url = new URL(path)
    if (url.protocol !== "file:") {
      return super.list(path)
    }
    path = decodeURI(url.pathname)
    if (process.platform === "win32") path = path.substr(1)
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

  openWeb(url: string) {
    shell.openExternal(url)
  }

  /** _privates */
  private _title: string = document.title

  private _initHotkeys() {
    document.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "F11":
          win.setFullScreen(!win.isFullScreen())
          e.preventDefault()
          break
        case "F12":
          win.webContents.openDevTools()
          e.preventDefault()
          break
      }
    })
  }

}
