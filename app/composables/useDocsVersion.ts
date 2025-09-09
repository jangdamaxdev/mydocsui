import type { BadgeProps } from '@nuxt/ui'
import type { Collections } from '@nuxt/content'
interface Version {
  label: string
  collection: keyof Collections
  shortTag: 'live' | 'vi'
  tagColor: BadgeProps['color']
  path: string
}
function createVersions(collection: keyof Collections = 'nuxtcore'): Version[] {
  return [
    {
      label: 'English(Live)',
      shortTag: 'live',
      collection,
      tagColor: 'info',
      path: `/nuxt/${collection}/live`,
    },
    {
      label: 'Tiếng Việt',
      shortTag: 'vi',
      collection,
      tagColor: 'primary',
      path: `/nuxt/${collection}/vi`,
    }
  ]
}
// const versionsDefault: Version[] = [
//   {
//     label: 'English(Live)',
//     shortTag: 'live',
//     tagColor: 'info',
//     path: '/nuxt/nuxtcore/live',
//   },
//   {
//     label: 'Tiếng Việt',
//     shortTag: 'vi',
//     tagColor: 'primary',
//     path: '/nuxt/nuxtcore/vi',
//   },
// ]

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
      vi: '4.0.3'
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
  const versionCollection = computed(() => route.path.split('/').slice(2, 4).join('/') || 'nuxtcore/vi')
  const collection = computed(() => route.path.split('/').slice(2, 3).join() || 'nuxtcore')
  const versions = computed(() => createVersions(collection.value as keyof Collections))
  const version = computed(() =>
    versions.value.find(v => {
      return v.path.includes(versionCollection.value)
    })
  )

  const items = computed(() => versions.value.map(v => ({
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
