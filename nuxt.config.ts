export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  ssr: false,
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  app: {
    baseURL: '/coffee-game/',
    head: {
      title: 'بازی کافه - Coffee Game',
      meta: [
        { name: 'description', content: 'بازی مدیریت کافه - سفارشات قهوه را سرو کنید!' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }
})
