/**
 * Terminal app
 */
export default class CyberTerminal {
  constructor(public sys: Sys) {
    this.addMachine()
  }

  addMachine() {
    let machineWorker = this.sys.createMachine()
    machineWorker.onMessage(this._onMessage.bind(this))
  }


  /* _privates */

  private _onMessage(message: any, machineWorker: MachineWorker) {
    switch (message.cmd) {
      case "call":
        let value
        try {
          message.success = true
          value = (<any>this.sys)[message.method].apply(this.sys, message.arguments)
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
}
