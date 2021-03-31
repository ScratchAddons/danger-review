const fs = require("fs")

if (fs.existsSync(".eslintrc.json")) {
  module.exports = JSON.parse(fs.readFileSync(".eslintrc.json"))
} else {
  module.exports = {
    "parserOptions": {
      "sourceType": "module"
    },
    "env": {
      "es2020": true,
      "browser": true
    },
    "globals": {},
    "extends": "eslint:recommended",
    "rules": {
      "no-prototype-builtins": 1,
      "no-template-curly-in-string": 2,
      "array-callback-return": 2,
      "default-case-last": 2,
      "eqeqeq": 2,
      "guard-for-in": 2,
      "no-empty": [2, { "allowEmptyCatch": true }],
      "no-caller": 2,
      "no-implied-eval": 2,
      "no-new-wrappers": 2,
      "no-proto": 2,
      "no-warning-comments": 1,
      "no-unused-vars": 0,
      "no-useless-escape": 0,
      "no-inner-declarations": 0,
      "no-constant-condition": [2, { "checkLoops": false }]
    },
    "overrides": [
      {
        "files": [],
        "env": {},
        "rules": {
          "no-eval": 2
        }
      }
    ]
  }
}
