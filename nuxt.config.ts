// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from '@nuxt/kit';

const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image','@pinia/nuxt'],
  css: [resolve('./assets/main.scss')],
  imports: {
    dirs: ['composables/**', 'utils/**', 'store/**', 'layouts/**', 'pages/**'],
  },
  app:{
    head:{
      title: 'Nuxt 3',
      meta: [
        { name: 'description', content: 'Nuxt 3' },
        { name: 'keywords', content: 'Nuxt 3' },
        {name:'title', content:'Nuxt 3'}
      ],
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
    }
  },
  vite: {
    build:{
      minify: true
    },
    css: {
      postcss: {
        plugins: [
          require('cssnano')({
            preset: 'default',
          }),
        ],
      }
    }
  },

  nitro:{
    prerender: {
      crawlLinks: true,
      routes: ['/']
    },
    compressPublicAssets: true
  },

  optimization:{
    splitChunks: {
      chunks: 'all',
      maxSize: 200000,
    }
  },
})