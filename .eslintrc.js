module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['vue'],
  rules: {
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 10
        },
        multiline: {
          max: 15
        }
      }
    ],
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['Layout']
      }
    ],
    'vue/v-on-event-hyphenation': [
      'error',
      'never',
      {
        autofix: true
      }
    ]
  }
}
