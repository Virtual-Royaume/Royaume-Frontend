module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "svelte3"
  ],
  "overrides": [{ "files": ["*.svelte"], "processor": "svelte3/svelte3" }],
  "settings": {
    "svelte3/typescript": () => require("typescript")
  },
  "rules": {
    // Layout & Formatting :
    "indent": ["error", 2],

    "quotes": ["error", "double"],

    "semi": ["error", "always"],

    "linebreak-style": ["error", "windows"],
    "semi-style": ["error", "last"],
    "brace-style": "error",
    "comma-style": ["error", "last"],

    "operator-linebreak": ["error", "before"],
    "implicit-arrow-linebreak": ["error", "beside"],

    "arrow-spacing": "error",
    "block-spacing": "error",
    "semi-spacing": "error",
    "comma-spacing": ["error", { "before": false, "after": true }],
    "computed-property-spacing": ["error", "never"],
    "array-bracket-spacing": ["error", "never"],
    "func-call-spacing": ["error", "never"],
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true, "mode": "strict" }],
    "object-curly-spacing": ["error", "always"],
    "rest-spread-spacing": ["error", "never"],
    "template-curly-spacing": "error",
    "template-tag-spacing": "error",
    "keyword-spacing": ["error", { "before": true, "after": true }],

    "space-infix-ops": "error",
    "space-unary-ops": "error",

    "space-before-blocks": "error",
    "space-before-function-paren": ["error", "never"],

    "new-parens": "error",
    "no-extra-parens": "error",
    "space-in-parens": ["error", "never"],

    "function-paren-newline": ["error", "consistent"],
    "function-call-argument-newline": ["error", "consistent"],

    "comma-dangle": ["error", "never"],

    "dot-location": ["error", "property"],

    "eol-last": ["error", "never"],

    "lines-between-class-members": ["error", "always"],

    "max-len": ["error", { "code": 150 }],

    "no-multiple-empty-lines": "error",
    "no-tabs": "error",
    "no-trailing-spaces": "error",
    "no-whitespace-before-property": "error",

    "nonblock-statement-body-position": ["error", "beside"],

    "wrap-regex": "error",

    "camelcase": "error",

    // Possible Problems :
    "no-floating-decimal": "error",
    "no-lonely-if": "error",
    "no-multi-assign": "error"
  }
};