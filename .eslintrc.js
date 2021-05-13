module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    jest: true,
  },
  // add your custom rules here
  rules: {
    semi: ['error', 'never'],
    curly: 'off',
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-expressions': 'error',
  },
}
