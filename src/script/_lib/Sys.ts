import GameInput from "./GameInput"

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

}
