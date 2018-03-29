({
  "name": require("./package.json")["name"],
  "version": require("./package.json")["version"],
  "main": "boot.js",
  "style": fs.writeFileSync("./src/script/_style.ts", 'export default ' + JSON.stringify("" + fs.readFileSync("./build/style/defaults.css")) + "\n")
})
