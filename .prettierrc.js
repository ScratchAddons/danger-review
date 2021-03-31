const fs = require("fs")

if (fs.existsSync(".prettierrc.json")) {
  module.exports = JSON.parse(fs.readFileSync(".prettierrc.json"))
} else {
  module.exports = {
    "printWidth": 120,
    "endOfLine": "lf",
    "useTabs": true
  }
}


