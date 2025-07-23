// config.mjs
import js           from "@eslint/js";
import globals      from "globals";
import { defineConfig } from "eslint/config";

// 👇 import the security plugins you installed
import security     from "eslint-plugin-security";
import securityNode from "eslint-plugin-security-node";
import noUnsanitized from "eslint-plugin-no-unsanitized";

export default defineConfig([
  {
    // 1) Which files this block applies to
    files: ["**/*.{js,mjs,cjs}"],

    // 2) Language & env settings
    languageOptions: {
      ecmaVersion: 2021,
      sourceType:  "module",
      globals:     globals.browser,
    },
    env: {
      browser: true,
      node:    true,
      es2021:  true,
    },

    plugins: {
      js,
      security,
      "security-node": securityNode,
      "no-unsanitized": noUnsanitized,
    },
    extends: [
      "js/recommended",
      "plugin:security/recommended",
      "plugin:security-node/recommended",
      "plugin:no-unsanitized/recommended",
    ],

    // 5) Any custom rule tweaks
    rules: {
      // e.g. bump eval‐detection to error if you like:
      "security/detect-eval-with-expression": "error",
    },
  },
]);
