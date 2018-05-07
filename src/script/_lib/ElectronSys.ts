import WebSys from "./WebSys"
//@ts-ignore
let fs; if (typeof window !== "undefined") { fs = window.require("fs") }

/**
 * Sys implementation for electron app.
 * See [Sys](../interfaces/__lib_sys_.sys.md) for documentation
 */
export default class ElectronSys extends WebSys {

  read(filename: string, options: any = {}) {
    let url = new URL(filename)
    filename = url.pathname
    if (process.platform === "win32") filename = filename.substr(1)
    return new Promise((resolve, reject) => {
      //@ts-ignore
      fs.readFile(filename, (err, res) => {
        if (err) reject("read error!")
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

}
