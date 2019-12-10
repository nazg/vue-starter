
module.exports = {
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/recommended",
    "@vue/standard",
    "@vue/typescript",
  ],
  overrides: [
    {
      env: {
        jest: true,
      },
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
    },
    {
      files: ["*.vue"],
      rules: {
        "indent": "off",
        "sort-keys": "off",
      },
    },
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  root: true,
  rules: {
    "@typescript-eslint/no-unused-vars": ["warn", { args: "none" }],
    "@typescript-eslint/no-useless-constructor": "warn",

    "brace-style": ["warn", "stroustrup", { allowSingleLine: true }],
    "comma-dangle": ["warn", "always-multiline"],
    "indent": ["warn", 2],
    "no-console": "off",
    "no-debugger": "warn",
    "no-multiple-empty-lines": ["warn", { max: 3 }],
    "no-unused-vars": "off",
    "no-useless-constructor": "off",
    "object-curly-spacing": ["warn", "always"],
    "object-property-newline": ["warn", { allowAllPropertiesOnSameLine: true }],
    "padded-blocks": ["warn", { blocks: "never", switches: "never" }],
    "quote-props": ["warn", "consistent"],
    "quotes": ["warn", "double", { allowTemplateLiterals: false, avoidEscape: true }],
    "sort-imports": ["warn"],
    "sort-keys": ["warn", "asc"],
    "sort-vars": "warn",
    "space-before-function-paren": ["warn", { anonymous: "never", asyncArrow: "always", named: "never" }],

    "vue/attributes-order": "off",
    "vue/comma-dangle": ["warn", "always-multiline"],
    "vue/html-closing-bracket-newline": ["warn", { multiline: "never", singleline: "never" }],
    "vue/html-closing-bracket-spacing": ["warn", { selfClosingTag: "never" }],
    "vue/html-indent": ["warn", 2],
    "vue/max-attributes-per-line": "off",
    "vue/name-property-casing": ["warn", "kebab-case"],
    "vue/object-curly-spacing": ["warn", "always"],
    "vue/script-indent": ["warn", 2, { baseIndent: 1 }],
    "vue/singleline-html-element-content-newline": "off",
    "vue/v-bind-style": ["warn", "longform"],
    "vue/v-on-style": ["warn", "longform"],
  },
}
