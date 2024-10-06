module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["plugin:@typescript-eslint/recommended", "next/core-web-vitals"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {},
  overrides: [
    {
      files: ["**/*.d.ts"],
      rules: {
        "no-var": "off",
      },
    },
  ],
};
