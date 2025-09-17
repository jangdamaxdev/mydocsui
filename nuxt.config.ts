import { createResolver } from 'nuxt/kit'
import { parseMdc } from './helpers/mdc-parser.mjs'
const { resolve } = createResolver(import.meta.url)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    'nuip',
    'nuxt-content-twoslash',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxthub/core',
    '@nuxtjs/plausible',
    '@nuxt/eslint',
    '@nuxt/scripts',
    // '@nuxtjs/turnstile',
    '@vueuse/nuxt',
    'nuxt-component-meta',
    'nuxt-og-image',
    'motion-v/nuxt',
    'nuxt-llms',
    'nuxt-charts',
    'nuxt-auth-utils',
  ],
  componentMeta: {
    exclude: [
      '@nuxt/content',
      '@nuxt/icon',
      '@nuxt/image',
      '@nuxtjs/color-mode',
      '@nuxtjs/mdc',
      '@nuxtjs/plausible',
      'nuxt/dist',
      'nuxt-og-image',
    ],
    metaFields: {
      type: false,
      props: true,
      slots: true,
      events: true,
      exposed: false
    }
  },
  $development: {
    site: {
      url: 'http://localhost:3000'
    }
  },
  devtools: {
    enabled: true
  },
  app: {
    pageTransition: false,
    layoutTransition: false
  },
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'dark'
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'material-theme-lighter',
            dark: 'material-theme-palenight'
          },
          langs: ['sql', 'diff', 'ini']
        }
      }
    },
    preview: {
      api: 'https://api.nuxt.studio'
    }
  },
  mdc: {
    highlight: {
      noApiRoute: false
    }
  },
  ui: {
    theme: {
      colors: ['primary', 'secondary', 'info', 'success', 'warning', 'error', 'important']
    }
  },
  routeRules: {
    // NUXT CORE
    // Pre-render
    '/': { prerender: true },
    '/404.html': { prerender: true },
    '/nuxt/nuxtcore/vi/getting-started/introduction': { prerender: true },
    // Admin
    '/admin': { ssr: false },
    '/admin/**': { ssr: false },

    // NUXT CORE: Redirect `hard code link` trong content (marckdown) sang trang chủ Live version.
    // @ts-ignore
    '/blog/**': { redirect: (route: { path: string }) => 'https://nuxt.com/' + route.path, prerender: false },
    '/blog': { redirect: 'https://nuxt.com/blog', prerender: false },

    // @ts-ignore
    '/modules/**': { redirect: (route: { path: string }) => 'https://nuxt.com/' + route.path, prerender: false },
    '/modules': { redirect: 'https://nuxt.com/modules', prerender: false },

    "/deploy": { redirect: 'https://nuxt.com/deploy', prerender: false },

    // NUXT CONTENT
    '/studio': { redirect: '/docs/studio', prerender: false },
    '/templates': { redirect: 'https://content.nuxt.com/templates', prerender: false },
    '/blog/visual-editor': { redirect: 'https://content.nuxt.com/blog/visual-editor', prerender: false },
    // Link chết trong content /studio/setup, chuyển đại về trang chủ
    '/home/videos/HomeNotionLikePoster.webp': { redirect: 'https://content.nuxt.com', prerender: false },
    // NUXT UI
    // @ts-ignore
    '/getting-started/**': { redirect: (route: { path: string }) => '/docs' + route.path, prerender: false },
    '/getting-started': { redirect: '/docs/getting-started', prerender: false },
    // @ts-ignore
    '/components/**': { redirect: (route: { path: string }) => '/docs' + route.path, prerender: false },
    '/components': { redirect: '/docs/components', prerender: false },
    // @ts-ignore
    '/composables/**': { redirect: (route: { path: string }) => '/docs' + route.path, prerender: false },
    '/composables': { redirect: '/docs/composables', prerender: false },

  },
  sourcemap: true,
  compatibilityDate: '2025-07-17',
  nitro: {
    prerender: {
      crawlLinks: true,
      ignore: [
        route => route.startsWith('/modules'),
        route => route.startsWith('/admin')
      ],
      autoSubfolderIndex: false
    },
    cloudflare: {
      pages: {
        routes: {
          exclude: [
            '/docs/*'
          ]
        }
      }
    }
  },
  hub: {
    cache: true
  },
  typescript: {
    strict: false
  },
  hooks: {
    'content:file:beforeParse': async ({ file }) => {
      if (file.id.startsWith('docsv4/')) {
        file.body = file.body.replaceAll('(/docs/', '(/docs/4.x/')
      }
    },
    'content:file:afterParse': async ({ file, content }) => {
      if (file.id === 'index/index.yml') {
        // @ts-expect-error -- TODO: fix this
        for (const tab of content.hero.tabs) {
          tab.content = await parseMdc(tab.content)
        }
        // @ts-expect-error -- TODO: fix this
        delete content.meta.body
      }
    }
  },
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never'
      }
    }
  },
  icon: {
    customCollections: [{
      prefix: 'custom',
      dir: resolve('./app/assets/icons')
    }],
    clientBundle: {
      scan: true,
      includeCustomCollections: true
    },
    provider: 'iconify'
  },
  image: {
    format: ['webp', 'jpeg', 'jpg', 'png', 'svg'],
    provider: 'ipx',
    ipx: {
      baseURL: 'https://ipx.nuxt.com'
    }
  },
  llms: {
    domain: 'https://nuxt.com',
    title: 'Nuxt Docs',
    description: 'Nuxt is an open source framework that makes web development intuitive and powerful. Create performant and production-grade full-stack web apps and websites with confidence.',
    full: {
      title: 'Nuxt Docs',
      description: 'The complete Nuxt documentation and blog posts written in Markdown (MDC syntax).'
    }
  },
  // turnstile: {
  //   siteKey: '0x4AAAAAAAP2vNBsTBT3ucZi'
  // },
  twoslash: {
    floatingVueOptions: {
      classMarkdown: 'prose prose-primary dark:prose-invert'
    },
    // Skip Twoslash in dev to improve performance. Turn this on when you want to explicitly test twoslash in dev.
    enableInDev: false,
    // Do not throw when twoslash fails, the typecheck should be down in github.com/nuxt/nuxt's CI
    throws: false
  }
})
