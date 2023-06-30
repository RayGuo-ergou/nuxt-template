import path from 'path'

const prismaClient = require
  .resolve('@prisma/client')
  .replace(
    /@prisma(\/|\\)client(\/|\\)index\.js/,
    '.prisma/client/index-browser.js'
  )

const prismaIndexBrowser = path.normalize(
  path.relative(process.cwd(), prismaClient)
)
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    '.prisma/client/index-browser': prismaIndexBrowser,
  },

  modules: ['@unocss/nuxt', '@vueuse/nuxt', '@hypernym/nuxt-anime'],
  build: {
    transpile: ['trpc-nuxt'],
  },

  // auto import components
  components: true,

  // env variables
  runtimeConfig: {
    public: {
      // public runtime config
    },
    // private runtime config
  },
  devtools: { enabled: true },
})
