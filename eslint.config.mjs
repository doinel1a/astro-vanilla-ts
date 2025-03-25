import astro from 'eslint-plugin-astro';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import promise from 'eslint-plugin-promise';
import sonarjs from 'eslint-plugin-sonarjs';
import unicorn from 'eslint-plugin-unicorn';

export default [
  ...astro.configs['flat/recommended'],
  jsxA11y.flatConfigs.recommended,
  promise.configs['flat/recommended'],
  sonarjs.configs.recommended,
  unicorn.configs.recommended
];
