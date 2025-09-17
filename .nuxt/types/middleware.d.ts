import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "auth" | "docs-route" | "guest" | "nuxt-content-route" | "nuxt-core-route" | "nuxt-ui-route"
declare module 'nuxt/app' {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}