export default {
  extends: 'stylelint-config-standard',
  ignoreFiles: [],
  rules: {
  },
  overrides: [
    {
      files: ['**/*.js', '**/*.cjs', '**/*.mjs', '**/*.jsx', '**/*.ts', '**/*.tsx'],
      customSyntax: 'postcss-styled-syntax',
    },
  ],
};
