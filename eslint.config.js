// eslint.config.js
import js from "@eslint/js";
import vue from "eslint-plugin-vue";

export default [
  js.configs.recommended,
  vue.configs["vue3-essential"],
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      vue,
    },
    rules: {
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
      "vue/multi-word-component-names": "off",
      "vue/no-mutating-props": "warn",
      "vue/require-default-prop": "off",
      "vue/no-v-html": "warn",
      "no-unused-vars": "warn",
      "no-undef": "error",
      eqeqeq: ["warn", "always"],
      curly: "error",
    },
  },
];
