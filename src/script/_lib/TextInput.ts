/**
 * Class for taking care of text input
 */
export default class TextInput {
  state = {
    text: "",
    pos: 0,
    len: 0
  }

  constructor(private _element: HTMLElement) {
    _element.innerHTML = '<textarea></textarea>'
    this._multiline = <HTMLTextAreaElement>_element.querySelector("textarea")
    this._multiline.addEventListener("keydown", this._keyDown.bind(this))
    this._input = this._multiline
  }

  setState(state: any) {
    (<HTMLInputElement>this._input).value = state.text
      (<HTMLInputElement>this._input).selectionStart = state.pos
        (<HTMLInputElement>this._input).selectionEnd = state.pos + state.len
    this._keyDown()
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
    requestAnimationFrame(() => {
      this.state.text = (<HTMLInputElement>this._input).value
      this.state.pos = (<HTMLInputElement>this._input).selectionStart || 0
      this.state.len = ((<HTMLInputElement>this._input).selectionEnd || 0) - this.state.pos
      this._sendState()
    })
  }

}
