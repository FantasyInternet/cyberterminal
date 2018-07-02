import Sys from "./Sys"

/**
 * Class for taking care of text input
 */
export default class TextInput {
  state = {
    type: "multiline",
    text: "",
    pos: 0,
    len: 0,
    key: 0
  }

  constructor(public sys: Sys, private _element: HTMLElement) {
    _element.innerHTML = '<textarea cols="80"></textarea><input/>'
    this._multiline = <HTMLTextAreaElement>_element.querySelector("textarea")
    this._multiline.addEventListener("keydown", this._keyDown.bind(this))
    this._multiline.addEventListener("keyup", this._keyDown.bind(this))
    this._multiline.addEventListener("keydown", function (e) {
      if (e.code === "Tab") {
        let start = this.selectionStart,
          end = this.selectionEnd,
          value = this.value
        this.value = value.substr(0, start) + "\t" + value.substr(end)
        this.selectionStart = this.selectionEnd = start + 1
        e.preventDefault()
      }
    })
    this._singleline = <HTMLInputElement>_element.querySelector("input")
    this._singleline.addEventListener("keydown", this._keyDown.bind(this))
    this._singleline.addEventListener("keyup", this._keyDown.bind(this))
    this._singleline.addEventListener("keydown", function (e) {
      if (e.code === "Tab") {
        e.preventDefault()
      }
    })
    this._input = this._multiline
  }

  focus() {
    this._input.focus()
  }
  blur() {
    this._input.blur()
  }

  setState(state: any) {
    if (state.type) {
      if (state.type === "multiline") {
        this._input = this._multiline
      } else {
        this._input = this._singleline
        this._input.setAttribute("type", state.type)
      }
      this.state.type = state.type
    }
    ; (<HTMLInputElement>this._input).value = state.text
      ; (<HTMLInputElement>this._input).selectionStart = state.pos
      ; (<HTMLInputElement>this._input).selectionEnd = state.pos + state.len
    //this._keyDown()
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
  private _input: HTMLElement
  private _multiline: HTMLTextAreaElement
  private _singleline: HTMLInputElement

  private _sendState() {
    let newState = JSON.stringify(this.state)
    if (this._lastState !== newState) {
      this._lastState = newState
      this._listeners.forEach((fn: Function) => {
        fn(this.state)
      })
    }
  }

  private _keyDown(e?: KeyboardEvent) {
    if (e && e.altKey && e.code === "KeyG") this.sys.focusInput("game")
    if (e && e.code === "Escape") return
    requestAnimationFrame(() => {
      let input = <HTMLInputElement>this._input
      this.state.text = input.value
      this.state.pos = input.selectionStart == null ? input.value.length : input.selectionStart
      this.state.len = (input.selectionEnd || this.state.pos) - this.state.pos
      this.state.key = 0
      if (e && e.type === "keydown") this.state.key = e.keyCode
      this._sendState()
    })
  }

}
