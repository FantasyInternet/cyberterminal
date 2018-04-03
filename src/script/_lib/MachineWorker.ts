/**
 * Interface to MachineWorker
 */
interface MachineWorker {
  /**
   * Send a message to machine.
   * @param msg Message to send
   * @param transferables Objects to transfer
   */
  send(msg: any, transferables?: any[]): void

  /**
   * Register an event listener for received messages.
   * @param listener Callback function to call whenever a message is received
   */
  onMessage(listener: Function): void

  /**
   * Terminate the machine!
   */
  terminate(): void
}
