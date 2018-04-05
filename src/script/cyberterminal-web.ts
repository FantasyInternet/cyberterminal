import WebSys from "./_lib/WebSys"
import CyberTerminal from "./_lib/CyberTerminal"
import Machine from "./_lib/Machine"

/**
 * Entry point for browser version
 */

if (typeof window !== "undefined") {
  //@ts-ignore
  let terminal = window.cyberTerminal = new CyberTerminal(new WebSys())
  console.log("Starting CyberTerminal")
} else {
  //@ts-ignore
  self.machine = new Machine("./")
  console.log("Starting new Machine")
}
