/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: [],
  extends: [
    'plugin:jsx-a11y/recommended',
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      files: ['*.astro'],
      rules: {
        indent: 'off'
      }
    },
    {
      files: ['*.astro'],
      plugins: ['astro'],
      env: {
        'astro/astro': true,
        node: true,
        es2022: true
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
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' }
        ],
        '@typescript-eslint/no-non-null-assertion': 'off'
      }
    },
    {
      files: ['*.d.ts'],
      rules: {
        '@typescript-eslint/triple-slash-reference': 'off'
      }
    },
    {
      files: ['**/*.astro/*.js', '*.astro/*.js'],
      env: {
        'astro/astro': true,
        browser: true,
        es2022: true
      },
      parserOptions: {
        sourceType: 'module'
      },
      rules: {
        'prettier/prettier': 'off'
      }
    }
  ],
  rules: {
    // base
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    // end

    // prettier
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: true,
        jsxSingleQuote: true,
        trailingComma: 'none',
        bracketSpacing: true,
        bracketSameLine: false,
        arrowParens: 'always',
        endOfLine: 'crlf'
      }
    ],
    // end prettier

    // unicorn
    'unicorn/filename-case': 'off',
    'unicorn/prevent-abbreviations': 'off'
    // end unicorn
  }
};
