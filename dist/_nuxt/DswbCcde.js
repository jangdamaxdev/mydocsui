import{Bi as e,Ca as t,Ga as n,Ni as r,ja as i,ko as a,oo as o,wa as s,yo as c}from"#entry";import"./BpRXZuPS.js";import"./CY_dl_HE.js";import"./B89OoJR8.js";import{t as l}from"./CiS4aUr_.js";import{t as u}from"./DybGxnBJ.js";import{r as d}from"./kYsnaxgG.js";import"./C_ZiLLQI.js";import"./AKO2wNIJ.js";var f=a(u()),p=i({__name:`IconsTheme`,async setup(i){let a,u,p={arrowDown:`i-lucide-arrow-down`,arrowLeft:`i-lucide-arrow-left`,arrowRight:`i-lucide-arrow-right`,arrowUp:`i-lucide-arrow-up`,caution:`i-lucide-circle-alert`,check:`i-lucide-check`,chevronDoubleLeft:`i-lucide-chevrons-left`,chevronDoubleRight:`i-lucide-chevrons-right`,chevronDown:`i-lucide-chevron-down`,chevronLeft:`i-lucide-chevron-left`,chevronRight:`i-lucide-chevron-right`,chevronUp:`i-lucide-chevron-up`,close:`i-lucide-x`,copy:`i-lucide-copy`,copyCheck:`i-lucide-copy-check`,dark:`i-lucide-moon`,ellipsis:`i-lucide-ellipsis`,error:`i-lucide-circle-x`,external:`i-lucide-arrow-up-right`,eye:`i-lucide-eye`,eyeOff:`i-lucide-eye-off`,file:`i-lucide-file`,folder:`i-lucide-folder`,folderOpen:`i-lucide-folder-open`,hash:`i-lucide-hash`,info:`i-lucide-info`,light:`i-lucide-sun`,loading:`i-lucide-loader-circle`,menu:`i-lucide-menu`,minus:`i-lucide-minus`,panelClose:`i-lucide-panel-left-close`,panelOpen:`i-lucide-panel-left-open`,plus:`i-lucide-plus`,reload:`i-lucide-rotate-ccw`,search:`i-lucide-search`,stop:`i-lucide-square`,success:`i-lucide-circle-check`,system:`i-lucide-monitor`,tip:`i-lucide-lightbulb`,upload:`i-lucide-upload`,warning:`i-lucide-triangle-alert`},m=r(),{data:h}=([a,u]=o(()=>e(`icons-theme`,async()=>{let e=`
::code-collapse{class="ui-only nuxt-only"}

\`\`\`ts [app.config.ts]
export default defineAppConfig(${f.default.stringify({ui:{icons:p}},null,2).replace(/,([ |\t\n]+[}|\])])/g,`$1`)})
\`\`\`\

::

::code-collapse{class="ui-pro-only nuxt-only"}

\`\`\`ts [app.config.ts]
export default defineAppConfig(${f.default.stringify({ui:{icons:m.ui.icons}},null,2).replace(/,([ |\t\n]+[}|\])])/g,`$1`)})
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
    ui(${f.default.stringify({ui:{icons:p}},null,2).replace(/,([ |\t\n]+[}|\])])/g,`$1`).split(`
`).map((e,t)=>t===0?e:`    ${e}`).join(`
`)})
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
    uiPro(${f.default.stringify({ui:{icons:p}},null,2).replace(/,([ |\t\n]+[}|\])])/g,`$1`).split(`
`).map((e,t)=>t===0?e:`    ${e}`).join(`
`)})
  ]
})
\`\`\`

::
`;return d(e)})),a=await a,u(),a);return(e,r)=>{let i=l;return c(h)?(n(),t(i,{key:0,body:c(h).body,data:c(h).data},null,8,[`body`,`data`])):s(``,!0)}}}),m=Object.assign(p,{__name:`IconsTheme`});export{m as default};
//# sourceMappingURL=DswbCcde.js.map