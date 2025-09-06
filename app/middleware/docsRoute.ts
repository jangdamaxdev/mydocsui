export default defineNuxtRouteMiddleware((to) => {
  console.log('middleware route /docs', to);
  if (to.path.startsWith('/docs') ) {
    const { version } = useDocsVersion()
    return to.fullPath.replace('/docs', version.value.path)
  }
})
