import path from "node:path"
import {fileURLToPath} from "node:url"

import {includeIgnoreFile} from "@eslint/compat"
import js from "@eslint/js"
import prettier from "eslint-config-prettier"
import jsxA11y from "eslint-plugin-jsx-a11y"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import globals from "globals"
import ts from "typescript-eslint"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const gitignore = path.resolve(dirname, ".gitignore")

/** @type {import('eslint').Linter.Config[]} */

const config = [
    includeIgnoreFile(gitignore),
    {
        files: [
            "**/*.js",
            "**/*.cjs",
            "**/*.mjs",
            "**/*.jsx",
            "**/*.ts",
            "**/*.cts",
            "**/*.mts",
            "**/*.tsx",
        ],

        languageOptions: {
            ecmaVersion: "latest",
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2025,
                ...globals.jest,
            },
            parser: ts.parser,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: {
            "simple-import-sort": simpleImportSort,
            "react-hooks": reactHooks,
        },
        settings: {
            react: {
                version: "detect",
            },
        },
    },
    js.configs.recommended,
    ...ts.configs.recommended,
    react.configs.flat.recommended,
    react.configs.flat["jsx-runtime"],
    jsxA11y.flatConfigs.recommended,
    prettier,
    {
        rules: {
            ...reactHooks.configs.recommended.rules,
            "@typescript-eslint/consistent-type-imports": [
                "error",
                {
                    prefer: "type-imports",
                    disallowTypeAnnotations: true,
                    fixStyle: "separate-type-imports",
                },
            ],
            "@typescript-eslint/consistent-type-exports": [
                "error",
                {
                    fixMixedExportsWithInlineTypeSpecifier: false,
                },
            ],
            "@typescript-eslint/no-import-type-side-effects": "error",
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    ignoreRestSiblings: true,
                },
            ],
            "comma-dangle": ["error", "always-multiline"],
            "comma-spacing": [
                "error",
                {
                    before: false,
                    after: true,
                },
            ],
            "comma-style": ["error", "last"],
            "eol-last": ["error", "always"],
            "eqeqeq": ["error", "always"],
            "function-paren-newline": ["off"],
            "indent": ["off"],
            "jsx-a11y/accessible-emoji": ["off"],
            "no-console": ["off"],
            "no-mixed-spaces-and-tabs": ["error"],
            "no-unused-vars": [
                "error",
                {
                    ignoreRestSiblings: true,
                },
            ],
            "object-curly-newline": [
                "error",
                {
                    consistent: true,
                },
            ],
            "object-curly-spacing": ["error", "never"],
            "object-property-newline": [
                "error",
                {
                    allowAllPropertiesOnSameLine: true,
                },
            ],
            "prefer-const": ["error"],
            "quote-props": ["error", "consistent-as-needed"],
            "quotes": ["error", "double"],
            "react/jsx-tag-spacing": [
                "error",
                {
                    beforeSelfClosing: "always",
                },
            ],
            "react/react-in-jsx-scope": ["off"],
            "react-hooks/rules-of-hooks": ["error"],
            "react-hooks/exhaustive-deps": ["error"],
            "semi": ["error", "never"],
            "semi-spacing": [
                "error",
                {
                    before: false,
                    after: true,
                },
            ],
            "semi-style": ["error", "last"],
            "simple-import-sort/imports": ["error"],
            "simple-import-sort/exports": ["error"],
            "space-before-function-paren": [
                "error",
                {
                    anonymous: "never",
                    named: "never",
                    asyncArrow: "always",
                },
            ],
        },
    },
]

export default config
