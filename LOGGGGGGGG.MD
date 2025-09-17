Lỗi ở Content
* Files:
- /files/markdown lỗi nhiều `CodePreview.vue:21` [Vue warn]: Failed to resolve component: `ExampleTitle` ---- DOne
- /files/csv: shared.js?v=8f972c55:16 [Icon] failed to load icon `vscode-icons:file-type-csv` ------lỗi từ biên tập content
* Studio:
- /studio/debug: `Warning.vue:9` [Vue warn]: Failed to resolve component: `Shortcut` ------lỗi từ biên tập content. Chức năng không dùng đến hoặc đã bỏ, còn trong content của bản live.

# UI
ComponentsList.vue
IconsTheme.vue
ComponentTheme.vue

Code.vue:21 [Vue warn]: Slot "default" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead. 
  at <ProseCode class="language-ts-type shiki shiki-themes material-theme-lighter material-theme-lighter material-theme-palenight" language="ts-type" style= {}  ... > 
  at <AsyncComponentWrapper class="language-ts-type shiki shiki-themes material-theme-lighter material-theme-lighter material-theme-palenight" language="ts-type" style=""  ... > 
  at <ProseP key="0" > 
  at <AsyncComponentWrapper key="0" > 
  at <MDCRenderer key=0 body= 

Found 5 errors in 5 files.


Errors  Files
     1  app/components/content/examples/command-palette/CommandPaletteSelectExample.vue:136
     1  app/components/content/examples/input/InputMaskExample.vue:2
     1  app/components/content/examples/table/TableRowContextMenuEventExample.vue:147
     1  app/components/example/ExampleFulltextFusejs.vue:5
     1  app/components/TemplateCard.vue:2