let configs
export function getMdcConfigs () {
if (!configs) {
  configs = Promise.all([
    import('E:/PROJECT/mydocsui/node_modules/.pnpm/nuxt-content-twoslash@0.1.2_cd74b84644acd40e51464bdad5945c9c/node_modules/nuxt-content-twoslash/dist/runtime/mdc.config').then(m => m.default),
  ])
}
return configs
}