// eslint.config.js

import storybook from "eslint-plugin-storybook";
import prettier from "eslint-plugin-prettier";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
    ...nextVitals,
    ...nextTs,

    {
        plugins: {
            storybook,
        },
        rules: {
            ...storybook.configs.recommended.rules,
        },
    },

    {
        plugins: {
            prettier,
        },
        rules: {
            "prettier/prettier": [
                "error",
                {
                    tabWidth: 4,
                    useTabs: false,
                    semi: true,
                    singleQuote: false,
                    trailingComma: "all",
                    printWidth: 120,
                },
            ],
        },
    },

    globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
