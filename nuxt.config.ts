// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [`~/assets/scss/main.scss`],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_mixins.scss" as *;',
        },
      },
    },
  },

  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },

  eslint: {
    config: {
      stylistic: {
        semi: false,
      },
    },
  },

  modules: ['@nuxtjs/i18n', '@nuxt/eslint'],
})
