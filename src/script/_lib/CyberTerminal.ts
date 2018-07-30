import Sys from "./Sys"
let pkg = require("../../../package.json")

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
    this.sys.addEventListener("resize", this._onResize.bind(this))
    this.sys.setDisplayMode("text", 80, 20)
    this.sys.print("CyberTerminal v" + pkg.version)
    setTimeout(() => {
      this.sys.startTone(0, 512)
      setTimeout(() => {
        this.connectTo(this.sys.startupUrl)
      }, 256)
    }, 1024)
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
    if (this._connecting) {
      if (this._lastActiveMachine === this._lastConnectingMachine) {
        clearTimeout(this._connecting)
        this._connecting = setTimeout(() => {
          this._connecting = null
        }, 2048)
      }
      /* this.machineWorkers[this.machineWorkers.length - 1].send({
        cmd: "resume"
      }) */
      return
    }
    console.group(url)
    console.log("Connecting to", url)
    this.sys.setDisplayMode("text", 80, 20)
    this.sys.print("\n\nConnecting to " + url)
    this._connecting = setTimeout(null)
    let machine = this.addMachine()
    let msg = await this._findBoot(url)
    if (msg.wasm) {
      this.sys.print(".")
      this.setAddress("" + msg.url)
      this.sys.setDisplayMode("none", 0, 0)
      machine.send({
        cmd: "resize",
        state: this._resizeState
      })
      machine.send(msg)
      // this._connecting = setTimeout(() => {
      this._connecting = null
      // }, 2048)
    } else {
      this.sys.print("!\n")
      this.sys.print("could not load boot.wasm!")
      this.setAddress("" + msg.url)
      this.sys.openWeb(url)
      this._connecting = setTimeout(() => {
        if (this.machineWorkers.length > 1) {
          this.removeMachine()
        }
        this._connecting = null
      }, 2048)
    }
    this._lastConnectingMachine = this._lastActiveMachine
  }

  addMachine() {
    if (this.machineWorkers.length)
      this.machineWorkers[this.machineWorkers.length - 1].send({ cmd: "suspend" })
    let machine = this.sys.createMachine()
    this.machineWorkers.push(machine)
    machine.onMessage(this._onMessage.bind(this))
    this.sys.textInput.setState({ type: "multiline", text: "", pos: 0, len: 0, key: 0 })
    this.sys.chipSound.stopAll()
    console.log("Machines in stack", this.machineWorkers.length)
    return machine
  }

  removeMachine() {
    let machine = this.machineWorkers.pop()
    if (machine) machine.terminate()
    console.log("Disconnecting from", machine ? machine.baseUrl : machine)
    console.groupEnd()
    this.sys.setDisplayMode("text", 80, 20)
    this.sys.print("\n\nDisconnecting...")
    this.sys.textInput.setState({ type: "multiline", text: "", pos: 0, len: 0 })
    this.sys.chipSound.stopAll()
    setTimeout(() => {
      if (this.machineWorkers.length) {
        this.setAddress(this.machineWorkers[this.machineWorkers.length - 1].baseUrl)
        this.sys.setDisplayMode("none", 0, 0)
        this.machineWorkers[this.machineWorkers.length - 1].send({ cmd: "resume" })
      } else {
        console.log("Going back, coz no machines left..")
        history.back()
        setTimeout(() => {
          console.log("Reloading, coz no machines left")
          location.reload()
        }, 1024)
      }
    }, 128)
    console.log("Machines in stack", this.machineWorkers.length)
  }

  setAddress(url: string) {
    this.machineWorkers[this.machineWorkers.length - 1].baseUrl = url
    this.sys.setAddress(url)
  }


  /* _privates */
  private _lastActiveMachine?: MachineWorker
  private _lastConnectingMachine?: MachineWorker
  private _connecting: any
  private _resizeState: any = {}

  private _onMessage(message: any, machineWorker: MachineWorker) {
    this._lastActiveMachine = machineWorker
    console.log(message.method)
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
    if (state.level === 1) {
      let msg = {
        cmd: "break",
        state: state
      }
      if (!this.machineWorkers.length) return
      this.machineWorkers[this.machineWorkers.length - 1].send(msg)
    } else if (state.level === 2) {
      if (!this.machineWorkers.length) return
      this.machineWorkers[this.machineWorkers.length - 1].terminate()
      this.sys.startTone(0, 256)
      setTimeout(() => {
        this.sys.stopTone(0)
        this.removeMachine()
      }, 128)
    }
  }

  private _onResize(state: any) {
    this._resizeState = state
    let msg = {
      cmd: "resize",
      state: state
    }
    if (!this.machineWorkers.length) return
    this.machineWorkers[this.machineWorkers.length - 1].send(msg)
  }

  private async _findBoot(url: string) {
    this.sys.print(".")
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
      this.sys.print(".")
      candidate += parts.shift() + "/"
      try {
        wasm = await this.sys.read(candidate + "boot.wasm", { type: "binary" })
      } catch (error) {
        wasm = null
      }
    }
    this.sys.print(".")
    return {
      cmd: "boot",
      wasm: wasm,
      url: url,
      origin: candidate
    }
  }
}
