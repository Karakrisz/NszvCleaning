// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || 'https://api.nszvtakaritas.hu',
    },
  },
  devtools: { enabled: true },
  css: ['~/assets/css/app.css'],
  ssr: true,

  app: {
    head: {
      title: 'NSZV Takarítás - Lakás takarítás Budapest',
      htmlAttrs: {
        lang: 'hu',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Lakás takarítás Budapesten: szobák, irodaházak, Airbnb lakások és egyéb ingatlanok tisztítása gyorsan, precízen és megbízhatóan.',
        },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'robots', name: 'robots', content: 'index, follow' },
        {
          'http-equiv': 'Content-Security-Policy',
          content: `
            default-src 'self' https: data:;
            img-src 'self' https: http: data:;
            font-src 'self' https: data:;
            style-src 'self' https: 'unsafe-inline';
            script-src 'self' https: 'unsafe-inline' 'unsafe-eval';
          `,
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://www.alkuszom.info' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap',
        },
      ],
    },
  },

  modules: [
    '@nuxt/image',
    '@nuxtjs/sitemap',
    [
      'nuxt-mail',
      {
        message: {
          to: 'info@nszvtakaritas.hu',
        },
        smtp: {
          host: 's57.tarhely.com',
          port: 587,
          auth: {
            user: 'info@nszvtakaritas.hu',
            pass: 'Hacker13prog',
          },
        },
      },
    ],
  ],

  site: {
    url: 'https://www.nszvtakaritas.hu',
    trailingSlash: true,
  },

  sitemap: {
    sources: ['/api/sitemap'],
    // defaults: { priority: 0.7 },
  },

  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },
  compatibilityDate: '2025-02-23',
})