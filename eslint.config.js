import js from "@eslint/js";
import vue from "eslint-plugin-vue";
import importPlugin from "eslint-plugin-import";

export default {
  languageOptions: {
    sourceType: "module",
    globals: {
      window: "readonly",
      document: "readonly",
      console: "readonly",
    },
  },

  plugins: {
    vue: vue,
    import: importPlugin,
  },

  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "src"]],
        extensions: [".js", ".vue"],
      },
    },
  },

  rules: {
    ...js.configs.recommended.rules,
    ...vue.configs["flat/recommended"].rules,
    "import/no-unresolved": "error",
    "import/named": "error",
  },
};
