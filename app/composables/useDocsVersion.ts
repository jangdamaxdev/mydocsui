import type { BadgeProps } from '@nuxt/ui'
import type { Collections } from '@nuxt/content'
interface Version {
  label: string
  // collection: keyof Collections
  shortTag: 'live' | 'vi'
  tagColor: BadgeProps['color']
  path: string
}

const versions: Version[] = [
  {
    label: 'English(Live)',
    // collection: 'nuxtcore',
    shortTag: 'live',
    tagColor: 'info',
    path: '/nuxt/nuxtcore/live',
  },
  {
    label: 'Tiếng Việt',
    // collection: 'nuxtcore',
    shortTag: 'vi',
    tagColor: 'primary',
    path: '/nuxt/nuxtcore/vi',
  },
  // {
  //   label: 'English(Live)',
  //   // collection: 'nuxtcore',
  //   shortTag: 'live',
  //   tagColor: 'info',
  //   path: '/nuxt/nuxtcontent/live',
  // },
  // {
  //   label: 'Tiếng Việt',
  //   // collection: 'nuxtcontent',
  //   shortTag: 'vi',
  //   tagColor: 'primary',
  //   path: '/nuxt/nuxtcontent/vi',
  // }
]

const collectionMap: Record<keyof Collections, string> = {
  nuxtcore: 'nuxt',
  nuxtcontent: '@nuxt/content',
  nuxtui: '@nuxt/ui',
}

export const useDocsTags = (framework: keyof Collections = 'nuxtcore') => {
  const { data: tags } = useAsyncData('versions', async () => {
    const { 'dist-tags': distTags } = await $fetch<{ 'dist-tags': Record<string, string> }>(`https://registry.npmjs.org/${collectionMap[framework]}`)
    return {
      live: distTags.latest,
      vi: '0.0.1'
    }
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
  const collection = computed(() => route.path.split('/').slice(2,4).join('/'))
  const version = computed(() =>    
      versions.find(v => v.path.includes(collection.value))
)

  const items = computed(() => versions.map(v => ({
    ...v,
    ...(v.shortTag === version.value.shortTag
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
