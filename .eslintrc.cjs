/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['plugin:jsx-a11y/recommended', 'plugin:prettier/recommended'],
  overrides: [
    {
      files: ['*.astro'],
      plugins: ['astro'],
      env: {
        node: true,
        'astro/astro': true,
        es2020: true
      },
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
        sourceType: 'module'
      },
      rules: {
        'astro/no-conflict-set-directives': 'error',
        'astro/no-unused-define-vars-in-style': 'error'
      }
    },
    {
      files: ['**/*.astro/*.js', '*.astro/*.js'],
      env: {
        browser: true,
        es2020: true
      },
      parserOptions: {
        sourceType: 'module'
      },
      rules: {
        'prettier/prettier': 'off'
      }
    }
  ]
};
