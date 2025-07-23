// eslint.config.mjs
import js            from "@eslint/js";
import globals       from "globals";
import { defineConfig } from "eslint/config";

// 👇 import the security plugins
import pluginSecurity     from "eslint-plugin-security";
import pluginSecurityNode from "eslint-plugin-security-node";
import pluginNoUnsanitized from "eslint-plugin-no-unsanitized";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],

    // 1) language & env
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

    // 2) base JS rules
    plugins: {
      js,
      security: pluginSecurity,
      "security-node": pluginSecurityNode,
      "no-unsanitized": pluginNoUnsanitized,
    },
    extends: [
      "js/recommended",                     // your existing JS rules
      "plugin:security/recommended",        // ⚠️ detect eval(), ReDoS, etc.
      "plugin:security-node/recommended",   // ⚠️ Node.js-specific checks
      "plugin:no-unsanitized/recommended",  // ⚠️ innerHTML, XSS sinks
    ],

    // 3) custom tweaks (optional)
    rules: {
      // for example, elevate eval detection to an “error”
      "security/detect-eval-with-expression": "error",
      // …any other overrides…
    },
  },
]);
