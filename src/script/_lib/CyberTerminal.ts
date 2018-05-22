import Sys from "./Sys"

/**
 * Terminal app
 */
export default class CyberTerminal {
  machineWorkers: MachineWorker[] = []

  constructor(public sys: Sys) {
    this.sys.textInput.addEventListener(this._onTextInput.bind(this))
    this.sys.mouseInput.addEventListener(this._onMouseInput.bind(this))
    this.sys.gameInput.addEventListener(this._onGameInput.bind(this))
    this.sys.breaker.addEventListener(this._onBreak.bind(this))
    this.connectTo(location.toString())
    document.addEventListener("visibilitychange", () => {
      if (this.machineWorkers.length) {
        if (document.visibilityState === "visible") {
          this.machineWorkers[this.machineWorkers.length - 1].send({ cmd: "resume" })
        } else {
          this.machineWorkers[this.machineWorkers.length - 1].send({ cmd: "suspend" })
          this.sys.chipSound.stopAll()
        }
      }
    })
  }

  async connectTo(url: string) {
    if (this._connecting) return
    this._connecting = true
    let machine = this.addMachine()
    let msg = await this._findBoot(url)
    if (msg.wasm) {
      machine.send(msg)
      this._connecting = setTimeout(() => {
        this._connecting = null
      }, 1024)
    } else if (typeof process !== "undefined") {
      this._connecting = setTimeout(() => {
        this.removeMachine()
        this._connecting = null
      }, 1024)
      this.sys.openWeb(url)
    } else if (location.toString() !== url) {
      this.sys.openWeb(url)
    } else {
      console.error("could not load boot.wasm!")
    }
  }

  addMachine() {
    if (this.machineWorkers.length)
      this.machineWorkers[this.machineWorkers.length - 1].send({ cmd: "suspend" })
    let machine = this.sys.createMachine()
    this.machineWorkers.push(machine)
    machine.onMessage(this._onMessage.bind(this))
    this.sys.textInput.setState({ text: "", pos: 0, len: 0 })
    this.sys.chipSound.stopAll()
    return machine
  }

  removeMachine() {
    let machine = this.machineWorkers.pop()
    if (machine) machine.terminate()
    setTimeout(() => {
      if (this.machineWorkers.length) {
        this.machineWorkers[this.machineWorkers.length - 1].send({ cmd: "resume" })
      } else {
        if (history.length > 1) {
          history.back()
        } else {
          location.reload(true)
        }
      }
    }, 128)
    this.sys.textInput.setState({ text: "", pos: 0, len: 0 })
    this.sys.chipSound.stopAll()
  }


  /* _privates */
  private _connecting: any
  private _disconnecting: boolean = false

  private _onMessage(message: any, machineWorker: MachineWorker) {
    switch (message.cmd) {
      case "call":
        let value
        try {
          message.success = true
          if ((<any>this)[message.method]) {
            value = (<any>this)[message.method].apply(this, message.arguments)
          } else {
            value = (<any>this.sys)[message.method].apply(this.sys, message.arguments)
          }
        } catch (error) {
          message.success = false
          value = error
        }
        if (message.reqId != null) {
          message.cmd = "response"
          if (value instanceof Promise) {
            value.then((value) => {
              message.value = value
              machineWorker.send(message)
            }, (value) => {
              message.success = false
              message.value = value
              machineWorker.send(message)
            })
          } else {
            message.value = value
            machineWorker.send(message)
          }
        }
        break

      case "imagedata":
        let buffer = message.buffer
        if (!buffer) throw "No buffer received!"
        this.sys.drawBitmap(buffer)
        machineWorker.send({
          cmd: "imagedata",
          width: message.width,
          height: message.height,
          buffer: buffer
        }, [buffer])
        break

      default:
        break
    }
  }

  private _onTextInput(state: any) {
    let msg = {
      cmd: "textInput",
      state: state
    }
    if (!this.machineWorkers.length) return
    this.machineWorkers[this.machineWorkers.length - 1].send(msg)
  }
  private _onMouseInput(state: any) {
    let msg = {
      cmd: "mouseInput",
      state: state
    }
    if (!this.machineWorkers.length) return
    this.machineWorkers[this.machineWorkers.length - 1].send(msg)
  }
  private _onGameInput(state: any) {
    let msg = {
      cmd: "gameInput",
      state: state
    }
    if (!this.machineWorkers.length) return
    this.machineWorkers[this.machineWorkers.length - 1].send(msg)
  }
  private _onBreak(state: any) {
    if (state.level === 0 && this._disconnecting) {
      this.sys.stopTone(0)
      this.removeMachine()
      this._disconnecting = false
    } else if (state.level === 1) {
      let msg = {
        cmd: "break",
        state: state
      }
      if (!this.machineWorkers.length) return
      this.machineWorkers[this.machineWorkers.length - 1].send(msg)
    } else if (state.level === 2) {
      if (!this.machineWorkers.length) return
      this.machineWorkers[this.machineWorkers.length - 1].terminate()
      this.sys.startTone(0, 256, 1, "square")
      setTimeout(() => {
        this.sys.stopTone(0)
      }, 128)
      this._disconnecting = true
    }
  }

  private async _findBoot(url: string) {
    if (url.substr(0, 5) !== "file:") {
      try {
        url = (await fetch(url)).url
      } catch (error) {
        return {}
      }
    }
    let parts = url.split("/")
    let candidate = parts.shift() + "/" + parts.shift() + "/"
    let wasm: ArrayBuffer | null = null
    while (parts.length && !wasm) {
      candidate += parts.shift() + "/"
      try {
        wasm = await this.sys.read(candidate + "boot.wasm", { type: "binary" })
      } catch (error) {
        wasm = null
      }
    }
    return {
      cmd: "boot",
      wasm: wasm,
      url: url,
      origin: candidate
    }
  }
}
