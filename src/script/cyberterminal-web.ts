import WebSys from "./_lib/WebSys"
import CyberTerminal from "./_lib/CyberTerminal"
import Machine from "./_lib/Machine"

/**
 * Entry point for browser version
 */

if (typeof window !== "undefined") {
  //@ts-ignore
  let terminal = window.cyberTerminal = new CyberTerminal(new WebSys())
} else {
  //@ts-ignore
  self.machine = new Machine("./")
}
