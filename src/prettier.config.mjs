/** @type {import("prettier").Config} */
const sortImportsPlugin = await import.meta.resolve('@ianvs/prettier-plugin-sort-imports');

const config = {
  arrowParens: 'avoid',
  htmlWhitespaceSensitivity: 'ignore',
  importOrder: [
    '<BUILTIN_MODULES>',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '',
    '^(?!\\.css$)[.]+',
    '',
    '\\.css$',
  ],
  plugins: [sortImportsPlugin],
  printWidth: 120,
  quoteProps: 'consistent',
  singleQuote: true,
  trailingComma: 'es5',
};

export default config;