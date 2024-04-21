import path from 'node:path'

import process from 'node:process'

const prismaClient = require
  .resolve('@prisma/client')
  .replace(
    /@prisma(\/|\\)client(\/|\\)index\.js/,
    '.prisma/client/index-browser.js',
  )

const prismaIndexBrowser = `../${path.normalize(
  path.relative(process.cwd(), prismaClient),
)}`
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    '.prisma/client/index-browser': prismaIndexBrowser,
  },

  extends: ['@nuxt/ui-pro'],

  modules: ['@vueuse/nuxt', '@nuxt/ui'],

  build: {
    transpile: ['trpc-nuxt'],
  },

  // auto import components
  components: true,

  // env variables
  runtimeConfig: {
    public: {
      // public runtime config
      NODE_ENV: process.env.NODE_ENV,
    },
    // private runtime config
  },
  devtools: { enabled: true },
  typescript: {
    // typeCheck: true,
    strict: true,
  },
})
