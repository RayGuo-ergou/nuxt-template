// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  presetWind,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import unoClassConfig from './configs/unocss'

export default defineConfig({
  shortcuts: [
    // Buttons
    unoClassConfig.button,
    unoClassConfig.base,
    unoClassConfig.shadow,
  ],
  theme: {
    colors: {
      // ...
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWind(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
