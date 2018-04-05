import ElectronSys from "./_lib/ElectronSys"
import CyberTerminal from "./_lib/CyberTerminal"
import Machine from "./_lib/Machine"

/**
 * Entry point for electron app
 */

if (typeof window !== "undefined") {
  //@ts-ignore
  let terminal = window.cyberTerminal = new CyberTerminal(new ElectronSys())
  console.log("Starting CyberTerminal")
} else {
  //@ts-ignore
  self.machine = new Machine("./")
  console.log("Starting new Machine")
}
