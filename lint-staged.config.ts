import path from 'node:path';

const tsc = () => 'tsc --noEmit';

const eslint = (filenames: string[]) =>
  `eslint --fix ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`;

const prettier = (filenames: string[]) =>
  `prettier --write ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')} --cache`;

const config = {
  '*.{astro,js,jsx,ts,tsx}': [tsc, eslint],
  '*.{astro,html,css,scss,js,jsx,cjs,mjs,ts,tsx,mdx}': [prettier]
};

export default config;
