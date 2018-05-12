({
  "wabt": fs.writeFileSync("./src/script/_lib/wabt.ts", 'export default eval("(function(){"+' + JSON.stringify("" + fs.readFileSync("./node_modules/wabt/index.js")) + "+\"})()\")\n")
})
