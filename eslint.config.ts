import astroParser from 'astro-eslint-parser';
import prettierConfig from 'eslint-config-prettier/flat';
import eslintAstro from 'eslint-plugin-astro';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
// @ts-expect-error - No type declarations available
import promise from 'eslint-plugin-promise';
import { configs as sonarjs } from 'eslint-plugin-sonarjs';
import unicorn from 'eslint-plugin-unicorn';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
  {
    ignores: ['.astro', '.vercel', 'dist']
  },
  prettierConfig,
  prettierPlugin,
  eslintAstro.configs.recommended,
  sonarjs.recommended,
  promise.configs['flat/recommended'],
  tseslint.configs.recommended,
  [
    {
      files: ['**/*.astro'],
      languageOptions: {
        parser: astroParser,
        parserOptions: {
          sourceType: 'module',
          extraFileExtensions: ['.astro'],
          parser: tseslint.parser
        }
      }
    },
    {
      files: ['**/*.d.ts'],
      rules: {
        '@typescript-eslint/triple-slash-reference': 'off'
      }
    }
  ],
  unicorn.configs.recommended,
  {
    rules: {
      'unicorn/prevent-abbreviations': [
        'error',
        {
          allowList: {
            Props: true
          }
        }
      ]
    }
  }
);
