/// <reference path="./_classes/Sys" />

/**
 * Where it all starts.
 */
function init() {
  Sys.setDisplayMode("bitmap", 160, 90)
  for (let i = 0; i < 100; i++) {
    Sys.log(i)
    Sys.pset(i, i / 2, 255, 255, 255)
    Sys.log(Sys.pget(i, i / 2))
  }
  Sys.fillRect(80, 0, 80, 45, 0, 255, 127, 127)
}

init()
