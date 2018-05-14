import GameInput from "./GameInput"
import ChipSound from "./ChipSound"
import MouseInput from "./MouseInput"
import TextInput from "./TextInput"
import Breaker from "./Breaker"

/**
 * Unified interface to system I/O
 */
export default interface Sys {
  /** Name of current display mode. */
  displayMode: string
  /** The current width of the display in characters or pixels. */
  displayWidth: number
  /** The current height of the display in characters or pixels. */
  displayHeight: number
  /** The current display bitmap. */
  displayBitmap?: ImageData
  /** Tone generator. */
  chipSound: ChipSound
  /** Text input state. */
  textInput: TextInput
  /** Mouse input state. */
  mouseInput: MouseInput
  /** Game input state. */
  gameInput: GameInput
  /** Inputs in prioritized order, highest to lowest. */
  inputPriority: string[]
  /** Stop button to break or disconnect current connection. */
  breaker: Breaker

  /**
   * Switch display mode.
   * @param mode Name of mode to switch to
   * @param width The width of the display in characters or pixels
   * @param height The height of the display in characters or pixels
   */
  setDisplayMode(mode: "text" | "pixel", width: number, height: number): void

  /**
   * Draw current bitmap to screen.
   */
  drawBitmap(): void

  /**
   * Start tone oscillator
   * @param channel Audio channel to use
   * @param frequency Frequency of tone
   * @param volume Volume of tone (0-1)
   * @param type Wave type
   */
  startTone(channel: number, frequency: number, volume: number, type: "sine" | "square" | "sawtooth" | "triangle"): void

  /**
   * Stop tone oscillator
   * @param channel Audio channel
   */
  stopTone(channel: number): void

  /**
   * Create a machine.
   * @returns the worker running the machine
   */
  createMachine(): MachineWorker

  /**
   * Read a file.
   * @param filename Name of file to read
   * @param options Options
   */
  read(filename: string, options: any): Promise<any>

  /**
   * Write to a file.
   * @param filename Name of file to write to
   * @param data Data to write
   */
  write(filename: string, data: string | ArrayBuffer): Promise<boolean>

  /**
   * Delete a file.
   * @param filename Name of file to delete
   */
  delete(filename: string): Promise<boolean>

  /**
   * Focus on given type of input.
   * @param input The type of input to prioritize
   */
  focusInput(input: "text" | "mouse" | "game"): string[]

  /**
   * Set the state of the text input.
   * @param text Text to put into editor
   * @param pos Cursor position
   * @param len Selection length
   */
  setTextInput(text: string, pos: number, len: number): void
}
