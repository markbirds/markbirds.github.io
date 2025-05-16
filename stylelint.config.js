export default {
  customSyntax: "postcss-html",
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended-vue",
    "stylelint-prettier/recommended",
  ],
  rules: {
    "declaration-empty-line-before": "never",
  },
};
