import WebSys from "./WebSys"
//@ts-ignore
let fs; if (typeof window !== "undefined") { fs = window.require("fs") }

/**
 * Sys implementation for electron app.
 * See [Sys](../interfaces/__lib_sys_.sys.md) for documentation
 */
export default class ElectronSys extends WebSys {

  async read(filename: string, options: any = {}) {
    //@ts-ignore
    let res = fs.readFileSync("./resources/app.asar/" + filename)
    switch (options.type) {
      case "binary":
        return res.buffer

      case "text":
        return "" + res

      case "image":
        return new Promise((resolve) => {
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
        })

      default:
        throw "Unknown type!"
    }
  }

}
