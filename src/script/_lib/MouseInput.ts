import Sys from "./Sys"

/**
 * Class for taking care of mouse input
 */
export default class MouseInput {
  state = {
    x: 0, y: 0,
    pressed: false
  }
  scaleX: number = 1
  scaleY: number = 1

  set element(val: HTMLElement) {
    this._element.removeEventListener("pointermove", this._mouseMove.bind(this))
    this._element.removeEventListener("pointerdown", this._mouseDown.bind(this))
    this._element.removeEventListener("pointerup", this._mouseUp.bind(this))
    this._element = val
    this._element.addEventListener("pointermove", this._mouseMove.bind(this))
    this._element.addEventListener("pointerdown", this._mouseDown.bind(this))
    this._element.addEventListener("pointerup", this._mouseUp.bind(this))
  }

  constructor(public sys: Sys) { }

  focus() { }
  blur() {
    this.state.pressed = false
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
  private _element: HTMLElement = document.body
  private _idleTO: any

  private _sendState() {
    let newState = JSON.stringify(this.state)
    if (this._lastState !== newState) {
      this._lastState = newState
      this._listeners.forEach((fn: Function) => {
        fn(this.state)
      })
    }
  }

  private _mouseMove(e: PointerEvent) {
    this.state.x = (e.pageX - this._element.getBoundingClientRect().left) / this.scaleX * devicePixelRatio
    this.state.y = (e.pageY - this._element.getBoundingClientRect().top) / this.scaleY * devicePixelRatio
    this._sendState()
  }
  private _mouseDown(e: PointerEvent) {
    clearTimeout(this._idleTO)
    this.state.x = (e.pageX - this._element.getBoundingClientRect().left) / this.scaleX * devicePixelRatio
    this.state.y = (e.pageY - this._element.getBoundingClientRect().top) / this.scaleY * devicePixelRatio
    this.state.pressed = true
    this._sendState()
    e.preventDefault()
  }
  private _mouseUp(e: PointerEvent) {
    this.state.pressed = false
    this._sendState()
    this._idleTO = setTimeout(() => {
      this.sys.focusInput(this.sys.inputPriority[0])
    }, 1024)
  }

}
