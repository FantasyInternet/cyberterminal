/// <reference path="./_classes/Sys" />

/**
 * Where it all starts.
 */
function init() {
  Sys.setDisplayMode("bitmap", 160, 90)
  for (let i = 0; i < 100; i++) {
    Sys.pset(i, i / 2, 255, 0, 255)
  }
  Sys.fillRect(80, 0, 80, 45, 0, 255, 127)
  colorCube()
}

let _b = 0
function colorCube() {
  Sys.log(_b += 1)
  for (let y = 0; y < 64; y++) {
    for (let x = 0; x < 64; x++) {
      Sys.pset(x, y, x * 4, y * 4, _b)
    }
  }
  if (_b > 255) _b = 0
  requestAnimationFrame(colorCube)
}

init()
