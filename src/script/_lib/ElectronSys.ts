import WebSys from "./WebSys"
//@ts-ignore
let fs: any, shell: any; if (typeof window !== "undefined") {
  //@ts-ignore
  fs = window.require("fs")
  //@ts-ignore
  shell = window.require('electron').shell
}
/**
 * Sys implementation for electron app.
 * See [Sys](../interfaces/__lib_sys_.sys.md) for documentation
 */
export default class ElectronSys extends WebSys {

  setTitle(title: string) {
    document.title = title + " - " + this._title
  }

  read(filename: string, options: any = {}) {
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

  openWeb(url: string) {
    shell.openExternal(url)
  }

  /** _privates */
  private _title: string = document.title

}
