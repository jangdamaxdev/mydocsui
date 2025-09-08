import { createResolver } from 'nuxt/kit'
import { parseMdc } from './helpers/mdc-parser.mjs'

const { resolve } = createResolver(import.meta.url)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuip',
    'nuxt-content-twoslash',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/plausible',
    '@nuxt/eslint',
    '@nuxt/scripts',
    '@nuxtjs/turnstile',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'motion-v/nuxt',
    'nuxt-llms',
    '@nuxthub/core',
    'nuxt-charts',
    'nuxt-auth-utils'
  ],
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
    '/blog': { redirect: 'https://nuxt.com/blog', prerender: false },
    '/blog/nuxt-on-the-edge': { redirect: 'https://nuxt.com/blog/nuxt-on-the-edge', prerender: false },
    '/blog/v3-9': { redirect: 'https://nuxt.com/blog/v3-9', prerender: false },
    '/blog/v3-10': { redirect: 'https://nuxt.com/blog/v3-10', prerender: false },
    '/blog/v3-15': { redirect: 'https://nuxt.com/blog/v3-15', prerender: false },

    '/modules': { redirect: 'https://nuxt.com/modules', prerender: false },
    "/modules/tailwindcss": { redirect: 'https://nuxt.com/modules/tailwindcss', prerender: false },
    "/modules/unocss": { redirect: 'https://nuxt.com/modules/unocss', prerender: false },
    "/modules/pinia": { redirect: 'https://nuxt.com/modules/pinia', prerender: false },
    "/modules/harlem": { redirect: 'https://nuxt.com/modules/harlem', prerender: false },
    "/modules/xstate": { redirect: 'https://nuxt.com/modules/xstate', prerender: false },
    "/deploy": { redirect: 'https://nuxt.com/deploy', prerender: false },
    // REDIRECT TO FIRST CHILD CONTENT. XEM XÉT ĐƯA VÀO MIDDLEWAREROUTE
    '/nuxt/nuxtcore/vi': { redirect: '/nuxt/nuxtcore/vi/getting-started/introduction', prerender: false },
    '/nuxt/nuxtcore/live': { redirect: '/nuxt/nuxtcore/live/getting-started/introduction', prerender: false },
    '/nuxt/nuxtcore/vi/getting-started': { redirect: '/nuxt/nuxtcore/vi/getting-started/introduction', prerender: false },
    '/nuxt/nuxtcore/live/getting-started': { redirect: '/nuxt/nuxtcore/live/getting-started/introduction', prerender: false },
    '/nuxt/nuxtcore/vi/guide/concepts': { redirect: '/nuxt/nuxtcore/vi/guide/concepts/auto-imports', prerender: false },
    '/nuxt/nuxtcore/live/guide/concepts': { redirect: '/nuxt/nuxtcore/live/guide/concepts/auto-imports', prerender: false },
    '/nuxt/nuxtcore/vi/guide/directory-structure': { redirect: '/nuxt/nuxtcore/vi/guide/directory-structure/app', prerender: false },
    '/nuxt/nuxtcore/live/guide/directory-structure': { redirect: '/nuxt/nuxtcore/live/guide/directory-structure/app', prerender: false },
    '/nuxt/nuxtcore/vi/guide/going-further': { redirect: '/nuxt/nuxtcore/vi/guide/going-further/experimental-features', prerender: false },
    '/nuxt/nuxtcore/live/guide/going-further': { redirect: '/nuxt/nuxtcore/live/guide/going-further/experimental-features', prerender: false },
    '/nuxt/nuxtcore/vi/guide/recipes': { redirect: '/nuxt/nuxtcore/vi/guide/recipes/custom-routing', prerender: false },
    '/nuxt/nuxtcore/live/guide/recipes': { redirect: '/nuxt/nuxtcore/live/guide/recipes/custom-routing', prerender: false },
    '/nuxt/nuxtcore/vi/guide/best-practices': { redirect: '/nuxt/nuxtcore/vi/guide/best-practices/performance', prerender: false },
    '/nuxt/nuxtcore/live/guide/best-practices': { redirect: '/nuxt/nuxtcore/live/guide/best-practices/performance', prerender: false },
    // '/nuxt/nuxtcore/vi/guide/going-further/custom-routing': { redirect: '/nuxt/nuxtcore/vi/guide/recipes/custom-routing', prerender: false },
    // '/nuxt/nuxtcore/live/guide/going-further/custom-routing': { redirect: '/nuxt/nuxtcore/live/guide/recipes/custom-routing', prerender: false },
    // '/nuxt/nuxtcore/vi/guide/going-further/edge-release-channel': { redirect: '/nuxt/nuxtcore/vi/guide/going-further/nightly-release-channel', prerender: false },
    // '/nuxt/nuxtcore/live/guide/going-further/edge-release-channel': { redirect: '/nuxt/nuxtcore/live/guide/going-further/nightly-release-channel', prerender: false },
    '/nuxt/nuxtcore/vi/bridge': { redirect: '/nuxt/nuxtcore/vi/bridge/overview', prerender: false },
    '/nuxt/nuxtcore/live/bridge': { redirect: '/nuxt/nuxtcore/live/bridge/overview', prerender: false },
    '/nuxt/nuxtcore/vi/migration': { redirect: '/nuxt/nuxtcore/vi/migration/overview', prerender: false },
    '/nuxt/nuxtcore/live/migration': { redirect: '/nuxt/nuxtcore/live/migration/overview', prerender: false },
    '/nuxt/nuxtcore/vi/api/components': { redirect: '/nuxt/nuxtcore/vi/api/components/client-only', prerender: false },
    '/nuxt/nuxtcore/live/api/components': { redirect: '/nuxt/nuxtcore/live/api/components/client-only', prerender: false },
    '/nuxt/nuxtcore/vi/api/composables': { redirect: '/nuxt/nuxtcore/vi/api/composables/use-app-config', prerender: false },
    '/nuxt/nuxtcore/live/api/composables': { redirect: '/nuxt/nuxtcore/live/api/composables/use-app-config', prerender: false },
    '/nuxt/nuxtcore/vi/api/utils': { redirect: '/nuxt/nuxtcore/vi/api/utils/dollarfetch', prerender: false },
    '/nuxt/nuxtcore/live/api/utils': { redirect: '/nuxt/nuxtcore/live/api/utils/dollarfetch', prerender: false },
    '/nuxt/nuxtcore/vi/api/kit': { redirect: '/nuxt/nuxtcore/vi/api/kit/modules', prerender: false },
    '/nuxt/nuxtcore/live/api/kit': { redirect: '/nuxt/nuxtcore/live/api/kit/modules', prerender: false },
    '/nuxt/nuxtcore/vi/api/commands': { redirect: '/nuxt/nuxtcore/vi/api/commands/dev', prerender: false },
    '/nuxt/nuxtcore/live/api/commands': { redirect: '/nuxt/nuxtcore/live/api/commands/dev', prerender: false },
    '/nuxt/nuxtcore/vi/api/advanced': { redirect: '/nuxt/nuxtcore/vi/api/advanced/hooks', prerender: false },
    '/nuxt/nuxtcore/live/api/advanced': { redirect: '/nuxt/nuxtcore/live/api/advanced/hooks', prerender: false },
    // '/nuxt/nuxtcore/vi/api/configuration/nuxt-config': { redirect: '/nuxt/nuxtcore/vi/api/nuxt-config', prerender: false },
    // '/nuxt/nuxtcore/live/api/configuration/nuxt-config': { redirect: '/nuxt/nuxtcore/live/api/nuxt-config', prerender: false },
    // '/nuxt/nuxtcore/vi/examples': { redirect: '/nuxt/nuxtcore/vi/examples/hello-world', prerender: false },
    // '/nuxt/nuxtcore/live/examples': { redirect: '/nuxt/nuxtcore/live/examples/hello-world', prerender: false },
    // '/nuxt/nuxtcore/vi/examples/features': { redirect: '/nuxt/nuxtcore/vi/examples/features/auto-imports', prerender: false },
    // '/nuxt/nuxtcore/live/examples/features': { redirect: '/nuxt/nuxtcore/live/examples/features/auto-imports', prerender: false },
    // '/nuxt/nuxtcore/vi/examples/routing': { redirect: '/nuxt/nuxtcore/vi/examples/routing/middleware', prerender: false },
    // '/nuxt/nuxtcore/live/examples/routing': { redirect: '/nuxt/nuxtcore/live/examples/routing/middleware', prerender: false },
    // '/nuxt/nuxtcore/vi/examples/advanced': { redirect: '/nuxt/nuxtcore/vi/examples/advanced/config-extends', prerender: false },
    // '/nuxt/nuxtcore/live/examples/advanced': { redirect: '/nuxt/nuxtcore/live/examples/advanced/config-extends', prerender: false },
    // '/nuxt/nuxtcore/vi/examples/experimental': { redirect: '/nuxt/nuxtcore/vi/examples/experimental/wasm', prerender: false },
    // '/nuxt/nuxtcore/live/examples/experimental': { redirect: '/nuxt/nuxtcore/live/examples/experimental/wasm', prerender: false },
    '/nuxt/nuxtcore/vi/community': { redirect: '/nuxt/nuxtcore/vi/community/getting-help', prerender: false },
    '/nuxt/nuxtcore/live/community': { redirect: '/nuxt/nuxtcore/live/community/getting-help', prerender: false },
    // '/nuxt/nuxtcore/vi/community/nuxt-community': { redirect: '/nuxt/nuxtcore/vi/community/getting-help', prerender: false },
    // '/nuxt/nuxtcore/live/community/nuxt-community': { redirect: '/nuxt/nuxtcore/live/community/getting-help', prerender: false },

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
  turnstile: {
    siteKey: '0x4AAAAAAAP2vNBsTBT3ucZi'
  },
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
