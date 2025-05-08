import eslintConfigPrettier from "eslint-config-prettier";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  {
    ignores: [".nuxt/**", ".output/**", ".gitignore"],
    files: ["**/*.js", "**/*.ts", "**/*.vue"],
    rules: {
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "vue/multi-word-component-names": "off",
      "vue/v-on-event-hyphenation": "off",
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
  eslintConfigPrettier,
);
