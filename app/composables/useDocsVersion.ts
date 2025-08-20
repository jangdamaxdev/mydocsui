import type { BadgeProps } from '@nuxt/ui'
import type { Collections } from '@nuxt/content'
interface Version {
  label: string
  // shortTag: 'v4' | 'v3'
  branch: 'live' | 'vi'
  tagColor: BadgeProps['color']
  path: string
  collection: keyof Collections
}

const versions: Version[] = [
  {
    label: 'Version English',
    // shortTag: 'v4',
    branch: 'live',
    tagColor: 'info',
    path: '/nuxt/nuxtcore/live',
    collection: 'nuxtcore'
  },
  {
    label: 'Tiếng Việt',
    // shortTag: 'v3',
    branch: 'vi',
    tagColor: 'primary',
    path: '/nuxt/nuxtcore/vi',
    collection: 'nuxtcore'
  }
]

const collectionMap: Record<keyof Collections, string> = {
  nuxtcore: 'nuxt',
  nuxtcontent: '@nuxt/content',
  nuxtui: '@nuxt/ui',
}

export const useDocsTags = (framework: keyof Collections = 'nuxtcore') => {
  const { data: tags } = useAsyncData('versions', async () => {  
    const { 'dist-tags': distTags } = await $fetch<{ 'dist-tags': Record<string, string> }>(`https://registry.npmjs.org/${collectionMap[framework]}`)
    return distTags.latest
    // return Object.fromEntries(
    //   Object.entries(tagMap).map(([shortTag]: [keyof typeof tagMap, string]) => {
    //     return [shortTag, distTags[tagMap[shortTag]] ?? distTags.latest]
    //   })
    // )
  }, { default: () => ({}) })
// console.log('tags', tags);

  return { tags }
}

export const useDocsVersion = () => {
  const route = useRoute()

  const version = computed(() => {
    if (route.path.startsWith('/nuxt/nuxtcore/vi')) {
      return versions.find(v => v.path === '/nuxt/nuxtcore/vi')
    }
    return versions[0]
  })

  const items = computed(() => versions.map(v => ({
    ...v,
    ...(v.branch === version.value.branch
      ? {
          checked: true,
          color: v.tagColor,
          type: 'checkbox' as const
        }
      : {
          to: route.path.replace(version.value.path, v.path)
        })
  })))

  return {
    items,
    version,
    versions
  }
}
