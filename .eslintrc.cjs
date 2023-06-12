const fs = require("fs");

const folders = fs
  .readdirSync("src", { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

module.exports = {
  root: true,
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "import",
    "prettier",
    "simple-import-sort",
  ],
  overrides: [
    {
      files: ["*.ts"],
      rules: {
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
              ["^\\u0000", "^@?\\w"],
              // Absolute imports
              [`^(${folders.join("|")})(/.*|$)`],
              // Relative imports.
              ["^\\."],
            ],
          },
        ],
        "no-restricted-globals": 0,
      },
    },
  ],
  rules: {
    // common
    "brace-style": [
      "error",
      "1tbs",
      {
        allowSingleLine: false,
      },
    ],
    curly: "error",
    "no-console": [
      "error",
      {
        allow: ["warn", "error"],
      },
    ],
    "no-debugger": "error",
    // typescript
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      {
        assertionStyle: "never",
      },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: ["enumMember"],
        format: ["UPPER_CASE"],
      },
      {
        selector: ["typeLike"],
        format: ["PascalCase"],
      },
      {
        selector: ["variable"],
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
      },
      {
        selector: ["function"],
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: "typeParameter",
        format: ["PascalCase"],
        prefix: ["T"],
      },
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: false,
        },
      },
    ],
    // import
    "import/no-anonymous-default-export": "error",
    "import/no-named-as-default-member": "off",
  },
};
