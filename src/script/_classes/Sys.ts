/**
 * Unified interface to system I/O
 */
declare interface Sys {
  /** Name of current display mode. */
  displayMode: string
  /** The current width of the display in characters or pixels. */
  displayWidth: number
  /** The current height of the display in characters or pixels. */
  displayHeight: number
  /** The current display bitmap. */
  displayBitmap?: ImageData


  /**
   * Write something to console.
   * @param msg Something to write
   */
  log(msg: any): void

  /**
   * Switch display mode.
   * @param mode Name of mode to switch to
   * @param width The width of the display in characters or pixels
   * @param height The height of the display in characters or pixels
   */
  setDisplayMode(mode: "text" | "bitmap", width: number, height: number): void

  /**
   * Set a specific pixel a specific color.
   * @param x X coordinate
   * @param y Y coordinate
   * @param r Red
   * @param g Green
   * @param b Blue
   * @param a Alpha (default 255)
   */
  pset(x: number, y: number, r: number, g: number, b: number, a?: number): void

  /**
   * Get a specific pixel and return its color.
   * @param x X coordinate
   * @param y Y coordinate
   * @returns The red,green,blue and alpha values in an array.
   */
  pget(x: number, y: number): Uint8ClampedArray
}

declare let Sys: Sys
