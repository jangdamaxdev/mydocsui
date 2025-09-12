export default defineNuxtRouteMiddleware((to, from) => {
const versionPath = from.path.split('/').slice(0, 4).join('/')
  if (to.path.startsWith('/docs/guide/directory-structure/plugins')) {
    return '/docs/guide/directory-structure/app/plugins'
  }
  if (to.path.startsWith('/docs')) {
    return to.fullPath.replace('/docs', versionPath)
  }
})
