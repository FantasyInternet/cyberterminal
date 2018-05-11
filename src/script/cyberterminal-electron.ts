import ElectronSys from "./_lib/ElectronSys"
import CyberTerminal from "./_lib/CyberTerminal"
import Machine from "./_lib/Machine"

/**
 * Entry point for electron app
 */

if (typeof window !== "undefined") {
  //@ts-ignore
  window.cyberTerminal = new CyberTerminal(new ElectronSys())
} else {
  //@ts-ignore
  self.machine = new Machine()
}
