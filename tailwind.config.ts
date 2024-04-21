import { dynamicIconsPlugin, iconsPlugin } from '@egoist/tailwindcss-icons'
import type { Config } from 'tailwindcss'

export default {
  plugins: [
    iconsPlugin(),
    dynamicIconsPlugin(),
  ],
} satisfies Partial<Config>
