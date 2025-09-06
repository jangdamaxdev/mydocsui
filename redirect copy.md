```ts [nuxt.config.ts]
routeRules: {
    // Pre-render
    '/': { prerender: true },
    '/blog/rss.xml': { prerender: true },
    '/404.html': { prerender: true },
    '/docs/3.x/getting-started/introduction': { prerender: true },
    '/docs/4.x/getting-started/introduction': { prerender: true },
    // Admin
    '/admin': { ssr: false },
    '/admin/**': { ssr: false },
    // Redirects `hard code link` in content (marckdown). Hình như là chỉ nhóm Guide và API có các link này. Xem lại
    '/nuxt/nuxtcore/live/getting-started': { redirect: '/nuxt/nuxtcore/live/getting-started/introduction', prerender: false },
    '/docs': { redirect: '/nuxt/nuxtcore/getting-started/introduction', prerender: false },   
    '/docs/getting-started': { redirect: '/nuxt/nuxtcore/getting-started/introduction', prerender: false },
    '/docs/guide/concepts': { redirect: '/nuxt/nuxtcore/guide/concepts/auto-imports', prerender: false },
    '/docs/guide/directory-structure': { redirect: '/nuxt/nuxtcore/guide/directory-structure/app', prerender: false },
    '/docs/guide/going-further': { redirect: '/nuxt/nuxtcore/guide/going-further/experimental-features', prerender: false }, 
    '/docs/guide/going-further/edge-release-channel': { redirect: '/nuxt/nuxtcore/guide/going-further/nightly-release-channel', prerender: false },
    '/docs/bridge': { redirect: '/nuxt/nuxtcore/bridge/overview', prerender: false },
    '/docs/migration': { redirect: '/nuxt/nuxtcore/migration/overview', prerender: false },
    '/docs/api/components': { redirect: '/nuxt/nuxtcore/api/components/client-only', prerender: false },
    '/docs/api/composables': { redirect: '/nuxt/nuxtcore/api/composables/use-app-config', prerender: false },
    '/docs/api/utils': { redirect: '/nuxt/nuxtcore/api/utils/dollarfetch', prerender: false },
    '/docs/api/kit': { redirect: '/nuxt/nuxtcore/api/kit/modules', prerender: false },
    '/docs/api/commands': { redirect: '/nuxt/nuxtcore/api/commands/dev', prerender: false },
    '/docs/api/advanced': { redirect: '/nuxt/nuxtcore/api/advanced/hooks', prerender: false },
    '/docs/api/configuration/nuxt-config': { redirect: '/nuxt/nuxtcore/api/nuxt-config', prerender: false },
    '/docs/examples': { redirect: '/nuxt/nuxtcore/examples/hello-world', prerender: false },
    '/docs/examples/features': { redirect: '/nuxt/nuxtcore/examples/features/auto-imports', prerender: false },
    '/docs/examples/routing': { redirect: '/nuxt/nuxtcore/examples/routing/middleware', prerender: false },
    '/docs/examples/advanced': { redirect: '/nuxt/nuxtcore/examples/advanced/config-extends', prerender: false },
    '/docs/examples/experimental': { redirect: '/nuxt/nuxtcore/examples/experimental/wasm', prerender: false },
    '/docs/community': { redirect: '/nuxt/nuxtcore/community/getting-help', prerender: false },
    '/docs/community/nuxt-community': { redirect: '/nuxt/nuxtcore/community/getting-help', prerender: false },
    '/docs/guide/recipes': { redirect: '/nuxt/nuxtcore/guide/recipes/custom-routing', prerender: false },
    '/docs/guide/best-practices': { redirect: '/nuxt/nuxtcore/guide/best-practices/performance', prerender: false },
    '/docs/guide/going-further/custom-routing': { redirect: '/nuxt/nuxtcore/guide/recipes/custom-routing', prerender: false },


    // Redirect to live version at https://nuxt.com/ 
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

    
  }
```
