export default defineNuxtRouteMiddleware((to) => {
  if (to.path.startsWith('/docs') ) {
    const { version } = useDocsVersion()
    return to.fullPath.replace('/docs', version.value.path)
  }
})
