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

      default:
        throw "Unknown type!"
    }
  }

}
