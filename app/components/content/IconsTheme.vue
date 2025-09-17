<script setup lang="ts">
import json5 from 'json5'
// import icons from '#build/ui-pro' đúng là của `#build/ui` do phía dev export thiếu component Icon.vue và file icons.ts
const icons = {
  arrowDown: 'i-lucide-arrow-down',
  arrowLeft: 'i-lucide-arrow-left',
  arrowRight: 'i-lucide-arrow-right',
  arrowUp: 'i-lucide-arrow-up',
  caution: 'i-lucide-circle-alert',
  check: 'i-lucide-check',
  chevronDoubleLeft: 'i-lucide-chevrons-left',
  chevronDoubleRight: 'i-lucide-chevrons-right',
  chevronDown: 'i-lucide-chevron-down',
  chevronLeft: 'i-lucide-chevron-left',
  chevronRight: 'i-lucide-chevron-right',
  chevronUp: 'i-lucide-chevron-up',
  close: 'i-lucide-x',
  copy: 'i-lucide-copy',
  copyCheck: 'i-lucide-copy-check',
  dark: 'i-lucide-moon',
  ellipsis: 'i-lucide-ellipsis',
  error: 'i-lucide-circle-x',
  external: 'i-lucide-arrow-up-right',
  eye: 'i-lucide-eye',
  eyeOff: 'i-lucide-eye-off',
  file: 'i-lucide-file',
  folder: 'i-lucide-folder',
  folderOpen: 'i-lucide-folder-open',
  hash: 'i-lucide-hash',
  info: 'i-lucide-info',
  light: 'i-lucide-sun',
  loading: 'i-lucide-loader-circle',
  menu: 'i-lucide-menu',
  minus: 'i-lucide-minus',
  panelClose: 'i-lucide-panel-left-close',
  panelOpen: 'i-lucide-panel-left-open',
  plus: 'i-lucide-plus',
  reload: 'i-lucide-rotate-ccw',
  search: 'i-lucide-search',
  stop: 'i-lucide-square',
  success: 'i-lucide-circle-check',
  system: 'i-lucide-monitor',
  tip: 'i-lucide-lightbulb',
  upload: 'i-lucide-upload',
  warning: 'i-lucide-triangle-alert'
}
const appConfig = useAppConfig()
// const { framework, module } = useSharedData()

const { data: ast } = await useAsyncData(`icons-theme`, async () => {
  const md = `
::code-collapse{class="ui-only nuxt-only"}

\`\`\`ts [app.config.ts]
export default defineAppConfig(${json5.stringify({
  ui: {
    icons
  }
}, null, 2).replace(/,([ |\t\n]+[}|\])])/g, '$1')})
\`\`\`\

::

::code-collapse{class="ui-pro-only nuxt-only"}

\`\`\`ts [app.config.ts]
export default defineAppConfig(${json5.stringify({
  ui: {
    icons: appConfig.ui.icons
  }
}, null, 2).replace(/,([ |\t\n]+[}|\])])/g, '$1')})
\`\`\`\

::

::code-collapse{class="vue-only ui-only"}

\`\`\`ts [vite.config.ts]
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from '@nuxt/ui/vite'

export default defineConfig({
  plugins: [
    vue(),
    ui(${json5.stringify({
      ui: {
        icons
      }
    }, null, 2).replace(/,([ |\t\n]+[}|\])])/g, '$1')
      .split('\n')
      .map((line, i) => i === 0 ? line : `    ${line}`)
      .join('\n')})
  ]
})
\`\`\`

::

::code-collapse{class="vue-only ui-pro-only"}

\`\`\`ts [vite.config.ts]
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import uiPro from '@nuxt/ui-pro/vite'

export default defineConfig({
  plugins: [
    vue(),
    uiPro(${json5.stringify({
      ui: {
        icons
      }
    }, null, 2).replace(/,([ |\t\n]+[}|\])])/g, '$1')
      .split('\n')
      .map((line, i) => i === 0 ? line : `    ${line}`)
      .join('\n')})
  ]
})
\`\`\`

::
`

  return parseMarkdown(md)
}, 
// { watch: [framework, module] }
)
</script>

<template>
  <MDCRenderer v-if="ast" :body="ast.body" :data="ast.data" />
</template>
