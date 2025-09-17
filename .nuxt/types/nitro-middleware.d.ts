export type MiddlewareKey = "auth" | "docs-route" | "guest" | "nuxt-content-route" | "nuxt-core-route" | "nuxt-ui-route"
declare module 'nitropack/types' {
  interface NitroRouteConfig {
    appMiddleware?: MiddlewareKey | MiddlewareKey[] | Record<MiddlewareKey, boolean>
  }
}
declare module 'nitropack' {
  interface NitroRouteConfig {
    appMiddleware?: MiddlewareKey | MiddlewareKey[] | Record<MiddlewareKey, boolean>
  }
}