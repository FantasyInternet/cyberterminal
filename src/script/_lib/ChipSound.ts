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
    this._whiteNoise = this._ctx.createBuffer(1, this._ctx.sampleRate * 2, this._ctx.sampleRate)
    let noise = this._whiteNoise.getChannelData(0)
    for (let i = 0; i < noise.length; i++) {
      noise[i] = Math.random() * 2 - 1
    }
  }

  startTone(channel: number, frequency: number, volume: number = 1, type: "sine" | "square" | "sawtooth" | "triangle" | "noise" = "square") {
    let chan = this._channels[channel]
    if (chan && chan.type !== type) {
      this.stopTone(channel)
      chan = this._channels[channel]
    }
    if (!chan) {
      chan = {
        type: type,
        gain: this._ctx.createGain(),
        autoStop: null,
        oscillator: null,
        bufferSource: null
      }
      chan.gain.gain.setValueAtTime(0, 0)
      chan.gain.connect(this._ctx.destination)
      if (type === "noise") {
        chan.bufferSource = this._ctx.createBufferSource()
        chan.bufferSource.buffer = this._whiteNoise
        chan.bufferSource.loop = true
        chan.bufferSource.connect(chan.gain)
        chan.bufferSource.start()
      } else {
        chan.oscillator = this._ctx.createOscillator()
        chan.oscillator.frequency.setValueAtTime(frequency, 0)
        chan.oscillator.type = type
        chan.oscillator.connect(chan.gain)
        chan.oscillator.start()
      }
      this._channels[channel] = chan
    }
    this.rampFrequency(channel, frequency, .001)
    this.rampVolume(channel, volume, .001)
  }

  rampFrequency(channel: number, frequency: number, duration: number) {
    duration /= 1000
    let chan = this._channels[channel]
    if (!chan) return
    if (chan.bufferSource) {
      chan.bufferSource.playbackRate.cancelScheduledValues(this._ctx.currentTime + duration)
      chan.bufferSource.playbackRate.linearRampToValueAtTime((frequency / this._ctx.sampleRate) * 10, this._ctx.currentTime + duration)
    }
    if (chan.oscillator) {
      chan.oscillator.frequency.cancelScheduledValues(this._ctx.currentTime + duration)
      chan.oscillator.frequency.linearRampToValueAtTime(frequency, this._ctx.currentTime + duration)
    }
    clearTimeout(chan.autoStop)
    chan.autoStop = setTimeout(() => {
      this.stopTone(channel)
    }, 1000 * 10)
  }

  rampVolume(channel: number, volume: number, duration: number) {
    duration /= 1000
    let chan = this._channels[channel]
    if (!chan) return
    chan.gain.gain.cancelScheduledValues(this._ctx.currentTime + duration)
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
      if (chan.oscillator) {
        chan.oscillator.stop()
        chan.oscillator.disconnect(chan.gain)
      }
      if (chan.bufferSource) {
        chan.bufferSource.stop()
        chan.bufferSource.disconnect(chan.gain)
      }
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
  private _whiteNoise: AudioBuffer

}

interface Channel {
  type: "sine" | "square" | "sawtooth" | "triangle" | "noise",
  oscillator: OscillatorNode | null,
  bufferSource: AudioBufferSourceNode | null,
  gain: GainNode,
  autoStop: any
}
