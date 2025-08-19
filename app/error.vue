<script setup lang="ts">
import type { NuxtError } from '#app'

useSeoMeta({
  title: 'Page not found 3815',
  description: 'We are sorry but this page could not be found. 3815'
})

defineProps<{ error: NuxtError }>()

const { version } = useDocsVersion()
const { searchGroups, searchLinks, searchTerm } = useNavigation()


const [{ data: navigation }, { data: files }] = await Promise.all([
  useAsyncData('navigation', () => {
    return Promise.all([
      queryCollectionNavigation('docsv3', ['titleTemplate']),
      queryCollectionNavigation('docsv4', ['titleTemplate']).then(data => data[0]?.children),

    ])
  }, {
    transform: data => data.flat(),
    watch: [version]
  }),
  useLazyAsyncData('search', () => {
    return Promise.all([
      queryCollectionSearchSections('docsv3'),
      queryCollectionSearchSections('docsv4'),

    ])
  }, {
    server: false,
    transform: data => data.flat(),
    watch: [version]
  })
])


const versionNavigation = computed(() => navigation.value?.filter(item => item.path === version.value.path) ?? [])
const versionFiles = computed(() => files.value?.filter((file) => {
  return (version.value.path === '/docs/4.x' ? file.id.startsWith('/docs/4.x/') : !file.id.startsWith('/docs/4.x'))
}) ?? [])

provide('navigation', versionNavigation)
</script>

<template>
  <UApp>
    <AppHeader />

    <UError :error="error" />

    <AppFooter />

    <ClientOnly>
      <LazyUContentSearch
        v-model:search-term="searchTerm"
        :files="versionFiles"
        :navigation="versionNavigation"
        :groups="searchGroups"
        :links="searchLinks"
        :fuse="{ resultLimit: 42 }"
      />
    </ClientOnly>
  </UApp>
</template>
