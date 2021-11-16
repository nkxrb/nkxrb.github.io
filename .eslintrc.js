const rulesDirPlugin = require('eslint-plugin-rulesdir')
rulesDirPlugin.RULES_DIR = 'custom_rules'

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/base',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: ['rulesdir'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'rulesdir/no-hello': 'warn',
    'quotes': ['error', 'single'],//强制使用单引号
    'semi': ['error', 'never'], //强制不使用分号结尾
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 3,
        'allowFirstLine': true
      },
      'multiline': {
        'max': 1,
        'allowFirstLine': true
      }
    }],
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'never'
    }]
  }
}
