import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importHelpers from "eslint-plugin-import-helpers";

export default tseslint.config(
  {
    ignores: [
      "node_modules",
      "dist",
      "build",
      "docs",
      ".vscode",
      "package-lock.json",
      "yarn.lock",
      "pnpm-lock.yaml",
    ],
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "jsx-a11y": jsxA11y,
      "import-helpers": importHelpers,
    },
    rules: {
      "spaced-comment": "warn",
      "no-console": "warn",
      /**
       * React
       * @see https://github.com/jsx-eslint/eslint-plugin-react#readme
       */
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/no-unknown-property": "error",
      "react/self-closing-comp": "error",
      /**
       * Import Helpers
       * @see https://github.com/willhoney7/eslint-plugin-import-helpers
       */
      "import-helpers/order-imports": [
        "error",
        {
          newlinesBetween: "always", // new line between groups
          groups: [
            "/^react/",
            "module",
            "/^@/contexts/",
            "/^@/components/",
            "/^@/lib/",
            "/^@/assets/",
            "/^@/",
            ["parent", "sibling", "index"],
          ],
          alphabetize: { order: "asc", ignoreCase: true },
        },
      ],
      "jsx-a11y/alt-text": [
        "warn",
        {
          elements: ["img"],
          img: ["Image"],
        },
      ],
      "jsx-a11y/aria-props": "warn",
      "jsx-a11y/aria-proptypes": "warn",
      "jsx-a11y/aria-unsupported-elements": "warn",
      "jsx-a11y/role-has-required-aria-props": "warn",
      "jsx-a11y/role-supports-aria-props": "warn",
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  }
);
