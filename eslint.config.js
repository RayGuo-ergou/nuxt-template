import { defaultConfig, ray } from '@ergou_rrrr/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default ray(defaultConfig, ...compat.config({
  // https://github.com/francoismassart/eslint-plugin-tailwindcss
  // Not working in eslint@9 at the moment
  extends: ['plugin:tailwindcss/recommended'],
  rules: {
    'tailwindcss/no-custom-classname': 'off',
  },
}))
