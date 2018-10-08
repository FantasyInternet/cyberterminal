/**
 * Class responsible for creating bleeps and bloops! 🎶
 */
export default class ChipSound {
  constructor() {
    if (this._ctx.state === "suspended") {
      let cb = () => {
        this._ctx.resume()
        if (this._ctx.state === "running") {
          document.body.removeEventListener("pointerdown", cb)
          document.body.removeEventListener("keydown", cb)
        }
      }
      document.body.addEventListener("pointerdown", cb)
      document.body.addEventListener("keydown", cb)
    }
  }

  startTone(channel: number, frequency: number, volume: number = 1, type: "sine" | "square" | "sawtooth" | "triangle" = "square") {
    let chan = this._channels[channel]
    if (!chan) {
      chan = {
        oscillator: this._ctx.createOscillator(),
        gain: this._ctx.createGain(),
        autoStop: null
      }
      chan.oscillator.connect(chan.gain)
      chan.gain.connect(this._ctx.destination)
      chan.oscillator.frequency.setValueAtTime(frequency, 0)
      chan.gain.gain.setValueAtTime(volume * .5, 0)
    } else {
      chan.oscillator.frequency.cancelScheduledValues(this._ctx.currentTime + .001)
      chan.oscillator.frequency.linearRampToValueAtTime(frequency, this._ctx.currentTime + .001)
      chan.gain.gain.cancelScheduledValues(this._ctx.currentTime + .001)
      chan.gain.gain.linearRampToValueAtTime(volume * .5, this._ctx.currentTime + .001)
    }
    clearTimeout(chan.autoStop)
    chan.oscillator.type = type
    if (!this._channels[channel]) {
      this._channels[channel] = chan
      chan.oscillator.start()
    }
    chan.autoStop = setTimeout(() => {
      this.stopTone(channel)
    }, 1000 * 10)
  }

  rampFrequency(channel: number, frequency: number, duration: number) {
    let chan = this._channels[channel]
    if (!chan) return
    chan.oscillator.frequency.linearRampToValueAtTime(frequency, this._ctx.currentTime + duration)
    clearTimeout(chan.autoStop)
    chan.autoStop = setTimeout(() => {
      this.stopTone(channel)
    }, 1000 * 10)
  }

  rampVolume(channel: number, volume: number, duration: number) {
    let chan = this._channels[channel]
    if (!chan) return
    chan.gain.gain.linearRampToValueAtTime(volume * .5, this._ctx.currentTime + duration)
    clearTimeout(chan.autoStop)
    chan.autoStop = setTimeout(() => {
      this.stopTone(channel)
    }, 1000 * 10)
  }

  stopTone(channel: number) {
    let chan = this._channels[channel]
    if (chan) {
      clearTimeout(chan.autoStop)
      chan.oscillator.stop()
      chan.oscillator.disconnect(chan.gain)
      chan.gain.disconnect(this._ctx.destination)
      delete this._channels[channel]
    }
  }

  stopAll() {
    for (let i = 0; i < this._channels.length; i++) {
      this.stopTone(i)
    }
  }

  /** _privates */
  private _channels: Channel[] = []
  private _ctx: AudioContext = new AudioContext()
}

interface Channel {
  oscillator: OscillatorNode,
  gain: GainNode,
  autoStop: any
}
