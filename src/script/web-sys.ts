class WebSys {
  static log(msg: any) {
    console.log(msg)
  }
}
(<any>window)["Sys"] = WebSys
