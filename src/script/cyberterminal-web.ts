import WebSys from "./_lib/WebSys"
import CyberTerminal from "./_lib/CyberTerminal"
import Machine from "./_lib/Machine"

/**
 * Entry point for browser version
 */

try {
  //@ts-ignore
  let terminal = window.cyberTerminal = new CyberTerminal(new WebSys())
  console.log("Starting CyberTerminal")
} catch (error) {
  //@ts-ignore
  self.machine = new Machine("./")
  console.log("Starting new Machine")
}
