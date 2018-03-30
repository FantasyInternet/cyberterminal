import WebSys from "./_lib/WebSys"
import CyberTerminal from "./_lib/CyberTerminal"
import Machine from "./_lib/Machine"

/**
 * Entry point for browser version
 */

try {
  ; (<any>window)["cyberTerminal"] = new CyberTerminal(new WebSys())
  console.log("Starting CyberTerminal")
} catch (error) {
  ; (<any>self)["machine"] = new Machine("./")
  console.log("Starting new Machine")
}
