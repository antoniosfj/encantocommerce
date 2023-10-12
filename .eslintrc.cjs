module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    '@nuxt/eslint-config',
    'plugin:vue/vue3-strongly-recommended'
  ],
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    },
    {
      files: ['pages/*.vue'],
      rules: {
        'vue/multi-word-component-names': 'off'
      }
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'vue'
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'nonblock-statement-body-position': [
      'error',
      'below',
    ],
    'curly': [
      'error',
      'all',
    ],
    'brace-style': [
      'error',
      '1tbs'
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        'singleline': 'never',
        'multiline': 'never'
      }
    ],
    'vue/html-quotes': [
      'error',
      'single',
      { 'avoidEscape': true },
    ]
  }
};
