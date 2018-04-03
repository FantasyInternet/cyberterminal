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
  setTimeout(() => {
    let coding = false
    let editor = <HTMLTextAreaElement>document.querySelector("textarea")
    editor.addEventListener("blur", () => {
      coding = false
      window.scrollTo(0, 0)
      terminal.resetMachine()
    })
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (coding = !coding) {
          editor.focus()
        } else {
          editor.blur()
        }
      }
    })
  }, 1024)
} catch (error) {
  //@ts-ignore
  self.machine = new Machine("./")
  console.log("Starting new Machine")
}
