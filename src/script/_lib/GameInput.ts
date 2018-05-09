import Sys from "./Sys"

/**
 * Class for taking care of game input
 */
export default class GameInput {
  state = {
    axis: { x: 0, y: 0 },
    buttons: { a: false, b: false, x: false, y: false }
  }

  constructor(public sys: Sys) {
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      if (this.sys.inputPriority.indexOf("game") > this.sys.inputPriority.indexOf("text")) return this.sys.focusInput("text")
      if (e.altKey && e.code === "KeyT") return this.sys.focusInput("text")
      let ctrl = this._keyMap[e.code]
      switch (ctrl) {
        case "left":
          this.state.axis.x = -1
          e.preventDefault()
          break
        case "right":
          this.state.axis.x = 1
          e.preventDefault()
          break
        case "up":
          this.state.axis.y = -1
          e.preventDefault()
          break
        case "down":
          this.state.axis.y = 1
          e.preventDefault()
          break

        case "a":
          this.state.buttons.a = true
          e.preventDefault()
          break
        case "b":
          this.state.buttons.b = true
          e.preventDefault()
          break
        case "x":
          this.state.buttons.x = true
          e.preventDefault()
          break
        case "y":
          e.preventDefault()
          this.state.buttons.y = true
          break
      }
      this._sendState()
    })
    document.addEventListener("keyup", (e: KeyboardEvent) => {
      let ctrl = this._keyMap[e.code]
      switch (ctrl) {
        case "left":
          this.state.axis.x = Math.max(this.state.axis.x, 0)
          break
        case "right":
          this.state.axis.x = Math.min(this.state.axis.x, 0)
          break
        case "up":
          this.state.axis.y = Math.max(this.state.axis.y, 0)
          break
        case "down":
          this.state.axis.y = Math.min(this.state.axis.y, 0)
          break

        case "a":
          this.state.buttons.a = false
          break
        case "b":
          this.state.buttons.b = false
          break
        case "x":
          this.state.buttons.x = false
          break
        case "y":
          this.state.buttons.y = false
          break
      }
      this._sendState()
      switch (e.code) {
        case "KeyD":
          this._keyMap["KeyA"] = "left"
          this._keyMap["KeyS"] = "down"
          break
        case "KeyL":
          this._keyMap["KeyA"] = "left"
          this._keyMap["KeyS"] = "right"
          break
        case "ArrowLeft":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowDown":
          this._keyMap["KeyA"] = "a"
          this._keyMap["KeyS"] = "b"
          break

        default:
          break
      }
    })
  }

  focus() { }
  blur() {
    this.state.axis.x =
      this.state.axis.y = 0
    this.state.buttons.a =
      this.state.buttons.b =
      this.state.buttons.x =
      this.state.buttons.y = false
    this._sendState()
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
  private _keyMap: { [index: string]: string } = this._getKeyMap()

  private _sendState() {
    let newState = JSON.stringify(this.state)
    if (this._lastState !== newState) {
      this._lastState = newState
      this._listeners.forEach((fn: Function) => {
        fn(this.state)
      })
    }
  }

  _getKeyMap() {
    let map: { [index: string]: string } = {},
      ctrls: { [index: string]: string[] } = {
        "left": ["ArrowLeft", "KeyA"],
        "right": ["ArrowRight", "KeyD"],
        "up": ["ArrowUp", "KeyW", "KeyP"],
        "down": ["ArrowDown", "KeyS", "KeyL"],
        "a": ["KeyA", "KeyK", "KeyV", "Enter"],
        "b": ["KeyB", "KeyS", "KeyO", "Space"],
        "x": ["KeyX", "KeyE", "Backspace"],
        "y": ["KeyY", "KeyZ", "KeyC"]
      }
    for (let ctrl in ctrls) {
      let codes = ctrls[ctrl]
      for (let code of codes) {
        map[code] = ctrl
      }
    }
    return map
  }
}
