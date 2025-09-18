<script setup lang="ts">
import { upperFirst } from 'scule'

const colorMode = useColorMode()
const { version } = useDocsVersion()
const { searchLinks, searchTerm } = useNavigation()
const color = computed(() => (colorMode.value === 'dark' ? '#020420' : 'white'))
// SET DEFAULT FOR NUXT UI
useSharedData()

const [{ data: navigation }, { data: files }] = await Promise.all([
  useAsyncData(
    'navigation',
    () => {
      return Promise.all([
        queryCollectionNavigation('nuxtcore').then(data => data[0]?.children),
        queryCollectionNavigation('nuxtcontent').then(data => data[0]?.children),
        queryCollectionNavigation('nuxtui').then(data => data[0]?.children),
      ])
    },
    {
      transform: data =>
        data.flatMap(item => {
          const Collections = item[0].children
          const CollectionName = 'Nuxt ' + upperFirst(item[0]?.title.slice(4))
          Collections.map(collection => {
            collection.title = CollectionName
            return collection
          })
          return Collections
        }),
      watch: [version],
    }
  ),
  useLazyAsyncData(
    'search',
    () => {
      return Promise.all([
        queryCollectionSearchSections('nuxtcore'),
        queryCollectionSearchSections('nuxtcontent'),
        queryCollectionSearchSections('nuxtui'),
      ])
    },
    {
      server: false,
      transform: data => data.flat(),
      watch: [version],
    }
  ),
])
// onNuxtReady(() => fetchList())

useHead({
  titleTemplate: title => (title ? `${title} · Nuxt` : 'Nuxt: The Intuitive Web Framework'),
  meta: [{ key: 'theme-color', name: 'theme-color', content: color }],
})

if (import.meta.server) {
  useHead({
    meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    link: [{ rel: 'icon', type: 'image/png', href: '/icon.png' }],
    htmlAttrs: {
      lang: 'en',
    },
  })
  useSeoMeta({
    ogSiteName: 'Nuxt',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterSite: 'nuxt_js',
  })
}

const versionNavigation = computed(() => {
  return [navPageFromPath(version.value.path, navigation.value)]
})
const versionFiles = computed(() => files.value?.filter(file => file.id.startsWith(version.value.path) ?? []))
useState('navigation', () => navigation)

const appear = ref(false)
const appeared = ref(false)

onMounted(() => {
  setTimeout(() => {
    appear.value = true
    setTimeout(() => {
      appeared.value = true
    }, 1000)
  }, 0)
})
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator color="var(--ui-primary)" />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <ClientOnly>
      <LazyUContentSearch
        v-model:search-term="searchTerm"
        :files="versionFiles"
        :navigation="versionNavigation"
        :links="searchLinks"
        :fuse="{ resultLimit: 20 }"
      />
    </ClientOnly>
  </UApp>
</template>
