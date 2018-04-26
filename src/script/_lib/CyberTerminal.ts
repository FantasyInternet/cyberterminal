import Sys from "./Sys"

/**
 * Terminal app
 */
export default class CyberTerminal {
  machineWorker?: MachineWorker

  constructor(public sys: Sys) {
    this.sys.gameInput.addEventListener(this._onGameInput.bind(this))
    this.resetMachine()
  }

  resetMachine() {
    if (this.machineWorker) {
      this.machineWorker.terminate()
    }
    this.machineWorker = this.sys.createMachine()
    this.machineWorker.onMessage(this._onMessage.bind(this))
  }

  startTone() {
    this.sys.chipSound.startTone.apply(this.sys.chipSound, arguments)
  }
  stopTone() {
    this.sys.chipSound.stopTone.apply(this.sys.chipSound, arguments)
  }


  /* _privates */

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

  private _onGameInput(state: any) {
    let msg = {
      cmd: "gameInput",
      state: state
    }
    if (!this.machineWorker) return
    this.machineWorker.send(msg)
  }
}
