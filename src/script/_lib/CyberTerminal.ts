import Sys from "./Sys"

/**
 * Terminal app
 */
export default class CyberTerminal {
  machineWorkers: MachineWorker[] = []

  constructor(public sys: Sys) {
    this.sys.mouseInput.addEventListener(this._onMouseInput.bind(this))
    this.sys.gameInput.addEventListener(this._onGameInput.bind(this))
    this.connectTo(location.toString())
  }

  async connectTo(url: string) {
    if (this._connecting) return
    this._connecting = true
    let machine = this.addMachine()
    let wasm = await this._findBoot(url)
    if (wasm) {
      machine.send({
        cmd: "boot",
        wasm: wasm,
        url: url
      })
      this._connecting = false
    } else if (typeof process !== "undefined") {
      alert("Could not connect to " + url)
      this._connecting = false
    } else {
      location.assign(url)
    }
  }

  addMachine() {
    let machine = this.sys.createMachine()
    this.machineWorkers.push(machine)
    machine.onMessage(this._onMessage.bind(this))
    return machine
  }

  removeMachine() {
    let machine = this.machineWorkers.pop()
    if (machine) machine.terminate()
  }

  startTone() {
    this.sys.chipSound.startTone.apply(this.sys.chipSound, arguments)
  }
  stopTone() {
    this.sys.chipSound.stopTone.apply(this.sys.chipSound, arguments)
  }


  /* _privates */
  private _connecting: boolean = false

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
        if (this.sys.displayBitmap) {
          let buffer = message.buffer
          if (!buffer) throw "No buffer received!"
          let data = new Uint8ClampedArray(buffer)
          this.sys.displayBitmap.data.set(data, 0)
          machineWorker.send({
            cmd: "imagedata",
            width: this.sys.displayBitmap.width,
            height: this.sys.displayBitmap.height,
            buffer: buffer
          }, [buffer])
          this.sys.drawBitmap()
        }
        break

      default:
        break
    }
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

  private async _findBoot(url: string) {
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
    return wasm
  }
}
