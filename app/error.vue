<script setup lang="ts">
import type { NuxtError } from "#app";
import { upperFirst } from "scule";

useSeoMeta({
  title: "Page not found 3815",
  description: "We are sorry but this page could not be found. 3815",
});

defineProps<{ error: NuxtError }>();

const { version } = useDocsVersion();
const { searchGroups, searchLinks, searchTerm } = useNavigation();

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

const versionNavigation = computed(() => [navPageFromPath(version.value.path, navigation.value)])
const versionFiles = computed(() => files.value?.filter(file => file.id.startsWith(version.value.path) ?? []))

useState('navigation', () => navigation)

</script>

<template>
  <UApp>
    <AppHeader />

    <UError :error="error" />

    <!-- <AppFooter /> -->

    <ClientOnly>
      <LazyUContentSearch
        v-model:search-term="searchTerm"
        :files="versionFiles"
        :navigation="versionNavigation"
        :groups="searchGroups"
        :links="searchLinks"
        :fuse="{ resultLimit: 20 }"
      />
    </ClientOnly>
  </UApp>
</template>
