({
  "name": require("./package.json")["name"],
  "version": require("./package.json")["version"],
  "description": require("./package.json")["description"],
  "author": require("./package.json")["author"],
  "main": "boot.js",
  "style": fs.writeFileSync("./src/script/_lib/css.ts", 'export default ' + JSON.stringify("" + fs.readFileSync("./build/style/defaults.css")) + "\n")
})
