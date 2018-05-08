import GameInput from "./GameInput"
import ChipSound from "./ChipSound"
import MouseInput from "./MouseInput"
import TextInput from "./TextInput"

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

  /**
   * Switch display mode.
   * @param mode Name of mode to switch to
   * @param width The width of the display in characters or pixels
   * @param height The height of the display in characters or pixels
   */
  setDisplayMode(mode: "text" | "indexed" | "rgb", width: number, height: number): void

  /**
   * Draw current bitmap to screen.
   */
  drawBitmap(): void

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
}
