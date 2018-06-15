import Sys from "./Sys"

/**
 * Class for taking care of break input
 */
export default class Breaker {
  state = {
    level: 0
  }

  constructor(public sys: Sys) {
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.code === "Escape" && this.state.level === 0) {
        this.state.level = 1
        this._sendState()
        setTimeout(() => {
          if (this.state.level === 1) {
            this.state.level = 2
            this._sendState()
          }
        }, 1024)
      }
    })
    document.addEventListener("keyup", (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        this.state.level = 0
        this._sendState()
      }
    })
  }


  addEventListener(fn: Function) {
    let i = this._listeners.indexOf(fn)
    if (i < 0) {
      this._listeners.push(fn)
    }
  }

  removeEventListener(fn: Function) {
    let i = this._listeners.indexOf(fn)
    if (i >= 0) {
      this._listeners.splice(i, 1)
    }
  }

  /** _privates */
  private _listeners: Function[] = []
  private _lastState?: string

  private _sendState() {
    let newState = JSON.stringify(this.state)
    if (this._lastState !== newState) {
      this._lastState = newState
      this._listeners.forEach((fn: Function) => {
        fn(this.state)
      })
    }
  }

}
