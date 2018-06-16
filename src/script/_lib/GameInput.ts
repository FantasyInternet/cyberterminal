import Sys from "./Sys"

/**
 * Class for taking care of game input
 */
export default class GameInput {
  state = {
    axis: { x: 0, y: 0 },
    buttons: { a: false, b: false, x: false, y: false }
  }

  constructor(public sys: Sys, private _element: HTMLElement) {
    if (!this._element.innerHTML.trim()) {
      let html = ""
      html += '<div class="left">'
      html += '<div class="slider">'
      html += '<div class="knob">'
      html += '</div>'
      html += '</div>'
      html += '</div>'
      html += '<div class="right">'
      html += '<div class="slider">'
      html += '<div class="knob">'
      html += '</div>'
      html += '</div>'
      html += '</div>'
      this._element.innerHTML = html
    }
    document.addEventListener("keydown", this._onKeyDown.bind(this))
    document.addEventListener("keyup", this._onKeyUp.bind(this))
    document.addEventListener("touchstart", this._onTouchOn.bind(this))
    this._element.addEventListener("touchstart", this._onTouchOff.bind(this))
    let left = <HTMLElement>this._element.querySelector(".left")
    left.addEventListener("touchstart", this._onLeftTouchStart.bind(this))
    left.addEventListener("touchmove", this._onLeftTouchMove.bind(this))
    left.addEventListener("touchend", this._onLeftTouchEnd.bind(this))
    let right = <HTMLElement>this._element.querySelector(".right")
    right.addEventListener("touchstart", this._onRightTouchStart.bind(this))
    right.addEventListener("touchmove", this._onRightTouchMove.bind(this))
    right.addEventListener("touchend", this._onRightTouchEnd.bind(this))
  }

  focus() {
    if (this._device === "touch") {
      this._element.classList.add("active")
    }
  }
  blur() {
    this.state.axis.x =
      this.state.axis.y = 0
    this.state.buttons.a =
      this.state.buttons.b =
      this.state.buttons.x =
      this.state.buttons.y = false
    this._element.classList.remove("active")
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
  private _device: string = ""

  private _sendState() {
    let newState = JSON.stringify(this.state)
    if (this._lastState !== newState) {
      this._lastState = newState
      this._listeners.forEach((fn: Function) => {
        fn(this.state)
      })
      this._updateGui()
    }
  }



  /** keyboard */
  private _keyMap: { [index: string]: string } = this._getKeyMap()
  private _keysDown: any = {}

  private _onKeyDown(e: KeyboardEvent) {
    if (this.sys.inputPriority.indexOf("game") > this.sys.inputPriority.indexOf("text")) return this.sys.focusInput("text")
    if (e.altKey && e.code === "KeyT") return this.sys.focusInput("text")
    this._device = "keyboard"
    let ctrl = this._keyMap[e.code]
    if (ctrl) {
      this._keysDown[ctrl] = true
      e.preventDefault()
    }
    switch (ctrl) {
      case "left":
        this._keysDown["right"] = false
        break
      case "right":
        this._keysDown["left"] = false
        break
      case "up":
        this._keysDown["down"] = false
        break
      case "down":
        this._keysDown["up"] = false
        break
    }
    this._scanKeys()
    this._sendState()
  }

  private _onKeyUp(e: KeyboardEvent) {
    let ctrl = this._keyMap[e.code]
    if (ctrl) {
      this._keysDown[ctrl] = false
      e.preventDefault()
    }
    this._scanKeys()
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
  }

  private _scanKeys() {
    this.state.axis.x =
      this.state.axis.y = 0
    this.state.buttons.a =
      this.state.buttons.b =
      this.state.buttons.x =
      this.state.buttons.y = false
    if (this._keysDown["left"]) this.state.axis.x = -1
    if (this._keysDown["right"]) this.state.axis.x = 1
    if (this._keysDown["up"]) this.state.axis.y = -1
    if (this._keysDown["down"]) this.state.axis.y = 1
    if (this._keysDown["a"]) this.state.buttons.a = true
    if (this._keysDown["b"]) this.state.buttons.b = true
    if (this._keysDown["x"]) this.state.buttons.x = true
    if (this._keysDown["y"]) this.state.buttons.y = true

    let mag = Math.sqrt(Math.pow(this.state.axis.x, 2) + Math.pow(this.state.axis.y, 2))
    if (mag > 1) {
      this.state.axis.x /= mag
      this.state.axis.y /= mag
    }
  }

  private _getKeyMap() {
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

  /** touch */
  private _leftTouchCenter: any = { x: 0, y: 0 }
  private _rightTouchCenter: any = { x: 0, y: 0 }
  private _touchRadius: number = 36

  private _onTouchOn() {
    if (this.sys.inputPriority[0] === "game") {
      this._element.classList.add("active")
    }
  }
  private _onTouchOff(e: TouchEvent) {
    if (e.changedTouches[0].target === this._element) {
      this.state.axis.x =
        this.state.axis.y = 0
      this.state.buttons.a =
        this.state.buttons.b =
        this.state.buttons.x =
        this.state.buttons.y = false
      setTimeout(() => {
        this._element.classList.remove("active")
      }, 32)
    }
  }

  private _onLeftTouchStart(e: TouchEvent) {
    this._device = "touch"
    this._leftTouchCenter.x = e.changedTouches[0].clientX
    this._leftTouchCenter.y = e.changedTouches[0].clientY
    let left = <HTMLElement>this._element.querySelector(".left")
    let slider = <HTMLElement>this._element.querySelector(".slider")
    slider.style.left = (e.changedTouches[0].clientX - left.offsetLeft - this._touchRadius) + "px"
    slider.style.top = (e.changedTouches[0].clientY - left.offsetTop - this._touchRadius) + "px"
  }
  private _onLeftTouchMove(e: TouchEvent) {
    let deltaX = e.changedTouches[0].clientX - this._leftTouchCenter.x
    let deltaY = e.changedTouches[0].clientY - this._leftTouchCenter.y
    let mag = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2))
    if (mag > this._touchRadius) {
      deltaX /= mag / this._touchRadius
      deltaY /= mag / this._touchRadius
      this._leftTouchCenter.x = e.changedTouches[0].clientX - deltaX
      this._leftTouchCenter.y = e.changedTouches[0].clientY - deltaY
    }
    this.state.axis.x = deltaX / this._touchRadius
    this.state.axis.y = deltaY / this._touchRadius
    this._sendState()
  }
  private _onLeftTouchEnd(e: TouchEvent) {
    this.state.axis.x = 0
    this.state.axis.y = 0
    this._sendState()
  }

  private _onRightTouchStart(e: TouchEvent) {
    this._device = "touch"
    this.state.buttons.a = false
    this._rightTouchCenter.x = e.changedTouches[0].clientX
    this._rightTouchCenter.y = e.changedTouches[0].clientY
    let right = <HTMLElement>this._element.querySelector(".right")
    let slider = <HTMLElement>right.querySelector(".slider")
    slider.style.left = (e.changedTouches[0].clientX - right.offsetLeft - this._touchRadius) + "px"
    slider.style.top = (e.changedTouches[0].clientY - right.offsetTop - this._touchRadius) + "px"
  }
  private _onRightTouchMove(e: TouchEvent) {
    let deltaX = e.changedTouches[0].clientX - this._rightTouchCenter.x
    let deltaY = e.changedTouches[0].clientY - this._rightTouchCenter.y
    let mag = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2))
    if (mag > this._touchRadius) {
      deltaX /= mag / this._touchRadius
      deltaY /= mag / this._touchRadius
      this._rightTouchCenter.x = e.changedTouches[0].clientX - deltaX
      this._rightTouchCenter.y = e.changedTouches[0].clientY - deltaY
    }
    let x = Math.round(deltaX / this._touchRadius)
    let y = Math.round(deltaY / this._touchRadius)
    this.state.buttons.a =
      this.state.buttons.b =
      this.state.buttons.x =
      this.state.buttons.y = false
    if (x > 0) this.state.buttons.a = true
    if (x < 0) this.state.buttons.x = true
    if (y > 0) this.state.buttons.y = true
    if (y < 0) this.state.buttons.b = true
    this._sendState()
  }
  private _onRightTouchEnd(e: TouchEvent) {
    if ((this.state.buttons.a ||
      this.state.buttons.b ||
      this.state.buttons.x ||
      this.state.buttons.y) === false) {
      this.state.buttons.a = true
      setTimeout(() => {
        this.state.buttons.a = false
        this._sendState()
      }, 256)
    } else {
      this.state.buttons.a =
        this.state.buttons.b =
        this.state.buttons.x =
        this.state.buttons.y = false
    }
    this._sendState()
  }

  private _updateGui() {
    let leftKnob = <HTMLElement>this._element.querySelector(".left .knob")
    leftKnob.style.left = this.state.axis.x + "em"
    leftKnob.style.top = this.state.axis.y + "em"
    let rightKnob = <HTMLElement>this._element.querySelector(".right .knob")
    rightKnob.style.left = "0em"
    rightKnob.style.top = "0em"
    if (this.state.buttons.a) rightKnob.style.left = "1em"
    if (this.state.buttons.x) rightKnob.style.left = "-1em"
    if (this.state.buttons.y) rightKnob.style.top = "1em"
    if (this.state.buttons.b) rightKnob.style.top = "-1em"
  }
}
