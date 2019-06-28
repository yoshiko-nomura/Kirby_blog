module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'plugin:vue/strongly-recommended',
    'plugin:vue-types/strongly-recommended',
    'prettier',
  ],
  // required to lint *.vue files
  plugins: [
    'prettier',
    'vue',
  ],
  // add your custom rules here
  rules: {
    'prettier/prettier': [
      'off', // disable prettier rules
      {
        singleQuote: true,
        trailingComma: 'all',
        semi: false,
        printWidth: 150,
      },
    ],

    // prettier handles these rules
    'semi': [2, 'never'],
    'function-paren-newline': ['off'],
    'comma-dangle': [2, 'always-multiline'],
    'object-curly-newline': ['off'],
    'max-len': ['error', {
      code: 150,
      ignoreUrls: true
    }],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error']
      }
    ],
  },
}
