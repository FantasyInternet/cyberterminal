/// <reference path="./script/_lib/rom_api" />


async function init() {
  let _x = 0
  let _dx = 1
  let _y = 0
  let _dy = 1
  let _z = 0
  let _dz = 1
  let _fps = Math.random()
  let _nextFps = 0
  let t = 0
  let w = 320
  let h = 180
  setDisplayMode("indexed", w, h)
  while (true) {
    for (let i = 0; i < 256; i++) {
      palette((i + _z) % 256, i, i, i)
    }
    fillRect(0, 0, 80, 180, 200, 100, 100)
    fillRect(320 - 80, 0, 80, 180, 200, 100, 100)
    fillRect(0, 0, 320, 45, 200, 100, 100)
    fillRect(0, 180 - 45, 320, 45, 200, 100, 100)

    fillRect(80, 0, 1, 180, 0, 0, 0)
    fillRect(320 - 81, 0, 1, 180, 0, 0, 0)
    fillRect(0, 45, 320, 1, 0, 0, 0)
    fillRect(0, 180 - 46, 320, 1, 0, 0, 0)
    //t = performance.now()
    //t = await commitDisplay()
    t = await waitForVsync()
    _fps++
    if (t >= _nextFps) {
      log(_fps + " FPS")
      _fps = 0
      _nextFps += 1000
    }
    _x += _dx
    _y += _dy
    _z += _dz
    for (let y = 0; y < 64; y++) {
      for (let x = 0; x < 64; x++) {
        pset(x + _x, y + _y, x * 4, y * 4, _z)
      }
    }
    if (_x >= w - 64) _dx = -1
    if (_x <= 0) _dx = 1
    if (_y >= h - 64) _dy = -1
    if (_y <= 0) _dy = 1
    if (_z >= 255) _dz = -1
    if (_z <= 0) _dz = 1
  }
}
init()
