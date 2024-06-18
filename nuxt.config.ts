// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [`~/assets/scss/main.scss`],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_mixins.scss" as *;'
        }
      }
    }
  },

  modules: ["@nuxtjs/i18n"]
})