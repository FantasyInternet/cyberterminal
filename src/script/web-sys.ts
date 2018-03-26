/// <reference path="./_classes/Sys" />

/**
 * Sys implementation for web browsers.
 * See [Sys](../interfaces/__classes_sys_.sys.md) for documentation
 */
class WebSys implements Sys {
  get displayMode() { return this._displayMode }
  get displayWidth() { return this._displayWidth }
  get displayHeight() { return this._displayHeight }

  log(msg: any) {
    console.log(msg)
  }

  setDisplayMode(mode: "text" | "bitmap", width: number, height: number) {
    this._displayMode = mode
    this._displayWidth = width
    this._displayHeight = height
    return
  }

  /** _privates */
  private _displayMode?: string
  private _displayWidth?: number
  private _displayHeight?: number
}
(<any>window)["Sys"] = new WebSys()
