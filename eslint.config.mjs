import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {require('eslint').Linter.Config[]} */
module.exports = [
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.commonjs,
      },
      ecmaVersion: 2022,
      sourceType: "module",
    },
    rules: {
      indent: ["error", 2],
      "linebreak-style": ["error", "windows"],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "no-unused-vars": ["error"],
      "no-undef": ["error"],
      "no-console": ["warn"],
      "comma-dangle": ["warn", "always-multiline"],
      "no-multiple-empty-lines": ["error", { max: 1 }],
      "eol-last": ["error", "always"],
      "no-var": "error",
      "prefer-const": "error",
      "no-use-before-define": "error",
      "no-undefined": "error",
      "require-await": "error",
      "no-return-await": "error",
      "no-async-promise-executor": "error",
    },
  },
  pluginJs.configs.recommended,
];
