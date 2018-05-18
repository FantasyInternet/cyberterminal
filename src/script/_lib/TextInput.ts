import Sys from "./Sys"

/**
 * Class for taking care of text input
 */
export default class TextInput {
  state = {
    text: "",
    pos: 0,
    len: 0
  }

  constructor(public sys: Sys, private _element: HTMLElement) {
    _element.innerHTML = '<textarea cols="80"></textarea>'
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
    this._input = this._multiline
  }

  focus() {
    this._input.focus()
  }
  blur() {
    this._input.blur()
  }

  setState(state: any) {
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
    requestAnimationFrame(() => {
      this.state.text = (<HTMLInputElement>this._input).value
      this.state.pos = (<HTMLInputElement>this._input).selectionStart || 0
      this.state.len = ((<HTMLInputElement>this._input).selectionEnd || 0) - this.state.pos
      if (!this.state.text && e && e.type === "keydown") {
        switch (e.code) {
          case "Backspace":
            this.state.text = "\b \b"
            break
          case "ArrowUp":
            this.state.text = "\x1b[A"
            break
          case "ArrowDown":
            this.state.text = "\x1b[B"
            break
          case "ArrowRight":
            this.state.text = "\x1b[C"
            break
          case "ArrowLeft":
            this.state.text = "\x1b[D"
            break
        }
      }
      this._sendState()
    })
  }

}
