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
const collectionMap: Record<keyof Collections, Record<string,string>> = {
  nuxtcore: {name: 'nuxt', versionVI: '4.0.3'},
  nuxtcontent: {name: '@nuxt/content', versionVI: '3.6.3'},
  nuxtui: {name: '@nuxt/ui', versionVI: '3.3.0'},
}

export const useDocsTags = (framework: keyof Collections = 'nuxtcore') => {
  const { data: tags } = useAsyncData('versions', async () => {
    const { 'dist-tags': distTags } = await $fetch<{ 'dist-tags': Record<string, string> }>(`https://registry.npmjs.org/${collectionMap[framework].name}`)
    return {
      live: distTags.latest,
      vi: collectionMap[framework].versionVI,
    }
  }, { default: () => ({}) })


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
