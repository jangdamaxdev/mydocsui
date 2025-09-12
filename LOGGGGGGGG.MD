``` SH
version from app.vue xem path có dạng "/docs/4.x" { label: 'Version 4',                                                                9:43:50 PM
  shortTag: 'v4',
  branch: 'main',
  tagColor: 'info',
  path: '/docs/4.x',
  collection: 'docsv4' }


  queryCollectionNavigation('docsv4', ['titleTemplate']) [ { title: 'Docs', path: '/docs', stem: 'docs', children: [ [Object] ], page: false } ]


  navigation from app.vue, xem item.path, tìm example có helloworld và 4 thư mục 
  [ 
    { title: 'Docs',                                      9:43:50 PM
    titleTemplate: null,
    icon: 'i-lucide-book-marked',
    path: '/docs/3.x',
    stem: 'docs/3.x',
    page: false },
    children: [ [Object], [Object], [Object], [Object], [Object], [Object], [Object]
    [Mỗi children tương ướng với thư mục như getting-started, components, etc. CHúng lại có `children` riêng là các file MD cuối cùng và nó k có children. Bên cạnh children là các props giống như bên ngoài],
     ],
    

  { title: 'Docs',
    titleTemplate: null,
    icon: 'i-lucide-book-marked',
    path: '/docs/4.x',
    stem: 'docs/4.x',
    children: [ [Object], [Object], [Object], [Object], [Object], [Object], [Object] ],
    page: false },

  { title: 'Blog',
    path: '/blog',
    stem: 'blog',
    children:
     [ [Object],
     [nhiều children khác ],
     ],
    page: false } ]
files from app.vue, xem file.id undefined  
```
trước khi  dùng `data[0]?.children` thì mỗi queryCollectionNavigation sẽ trả về 1 mảng có 1 phần tử, có dạng
```sh
    {   
    title: 'Docs',
    # titleTemplate: null,
    # icon: 'i-lucide-book-marked',
    path: '/docs',
    stem: 'docs',
    children: [ [Object] ],
    page: false 
    }
```
`children` có 1 phần tử,  và phần tử đó là 1 trong 3 object ở trên. 
Do đó phải dùng ` transform: data => data.flat(),` để bỏ bớt 1 lớp mảng ` [ [Object] ]` thành ` [Object] `. Nên cuối cùng navigation có dạng như trên.

``` ts CORE
/docs/guide/directory-structure/plugins 
    '/docs/guide/directory-structure/plugins': { redirect: '/docs/guide/directory-structure/app/plugins ', prerender: false },
    '/blog': { redirect: 'https://nuxt.com/blog', prerender: false },


```
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