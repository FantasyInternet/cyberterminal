/**
 * Unified interface to system I/O
 */
declare interface Sys {
  displayMode?: string
  displayWidth?: number
  displayHeight?: number


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
}

declare let Sys: Sys
