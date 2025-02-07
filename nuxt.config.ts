import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  css: ['@/assets/styles/tailwind.css'],

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
  ],

  tailwindcss: {
    // Options
  },

  compatibilityDate: '2025-02-07',
})