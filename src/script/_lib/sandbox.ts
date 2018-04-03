export default function sandbox(js: string, api?: { [index: string]: any }) {
  let apiNames: string[] = []
  let apiValues: any[] = []
  if (api) {
    for (let name in api) {
      apiNames.push(name)
      apiValues.push(api[name])
    }
  }
  let name, names = extractNames(js, apiNames)
  let blacklist: string[] = ["eval"]
  while (name = names.pop()) {
    try {
      if (blacklist.indexOf(name) < 0 && eval(name + "!==undefined"))
        blacklist.push(name)
    } catch (err) {
      // name is a keyword or undefined
    }
  }
  let shadow = "var " + blacklist.join(",") + ";\nreturn (function(){\"use strict\";\n"
  console.log(shadow + js + "\n})();")
  let f = new Function(...apiNames, shadow + js + "\n})();")
  return f(...apiValues)
}

function extractNames(js: string, ignore: string[] = []) {
  ignore = ignore.slice(0)
  let names: string[] = []
  js += "\n" + unicodeUnescape(js)

  js = js.replace(/\s/gm, " ")
  js.replace(/[\$A-Z_a-z\x80-\uFFFF][\$0-9A-Z_a-z\x80-\uFFFF]*/gm, (match) => {
    match = match.trim()
    if (match) {
      if (names.indexOf(match) < 0 && ignore.indexOf(match) < 0) {
        try {
          eval("{let " + match + ";}")
          names.push(match)
        } catch (err) {
          ignore.push(match)
        }
      }
    }
    return match
  })
  return names
}

function unicodeUnescape(str: string) {
  for (let pattern of [
    /\\x[0-9a-fA-F]{2}/gm,
    /\\u[0-9a-fA-F]{4}/gm,
    /\\u\{[0-9a-fA-F]+\}/gm]) {
    str = str.replace(pattern, (match) => {
      try {
        return eval("\"" + match + "\"")
      } catch (err) {
        return ""
      }
    })
  }
  return str
}
