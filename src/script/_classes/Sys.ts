/**
 * Unified interface to system I/O
 */
declare abstract class Sys {
  /**
   * Write something to console.
   * @param msg Something to write
   */
  static log(msg: any): void
}
