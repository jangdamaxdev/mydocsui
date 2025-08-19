<script setup lang="ts">
const colorMode = useColorMode();
const { version } = useDocsVersion();
// console.log('version from app.vue xem path có dạng "/docs/4.x"', version.value);

const { searchGroups, searchLinks, searchTerm } = useNavigation();
// const { fetchList } = useModules()

const color = computed(() =>
  colorMode.value === "dark" ? "#020420" : "white",
);

const [{ data: navigation }, { data: files }] = await Promise.all([
  useAsyncData(
    "navigation",
    () => {
      return Promise.all([
        queryCollectionNavigation("docsv3", ["titleTemplate"]).then(
          (data) => data[0]?.children,
        ),
        queryCollectionNavigation("docsv4", ["titleTemplate"]).then(
          (data) => data[0]?.children,
        ),
      ]);
    },
    {
      transform: (data) => data.flat(),
      watch: [version],
    },
  ),
  useLazyAsyncData(
    "search",
    () => {
      return Promise.all([
        queryCollectionSearchSections("docsv3"),
        queryCollectionSearchSections("docsv4"),
      ]);
    },
    {
      server: false,
      transform: (data) => data.flat(),
      watch: [version],
    },
  ),
]);

// onNuxtReady(() => fetchList())

useHead({
  titleTemplate: (title) =>
    title ? `${title} · Nuxt` : "Nuxt: The Intuitive Web Framework",
  meta: [{ key: "theme-color", name: "theme-color", content: color }],
});

if (import.meta.server) {
  useHead({
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [{ rel: "icon", type: "image/png", href: "/icon.png" }],
    htmlAttrs: {
      lang: "en",
    },
  });
  useSeoMeta({
    ogSiteName: "Nuxt",
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterSite: "nuxt_js",
  });
}
const [{ data: navigation2 }, { data: files2 }] = await Promise.all([
  useAsyncData(
    "navigation2",
    () =>
      queryCollectionNavigation("nuxtui").then(
        (data) => {
          // console.log("queryCollectionNavigation nuxtcontent", data);
          return data[0]?.children;
        },
      ),
    {
      transform: data => data.flat(),
      // watch: [version]
    },
  ),
  useLazyAsyncData(
    "search",
    () => queryCollectionSearchSections("nuxtui"),

    {
      server: false,
      transform: data => data.flat(),
      // watch: [version]
    },
  ),
]);
console.log("navigation2", navigation2.value);

const versionNavigation = computed(
  () =>
    navigation.value?.filter((item) => item.path === version.value.path) ?? [],
);
const versionFiles = computed(
  () =>
    files.value?.filter((file) => {
      return version.value.path === "/docs/4.x"
        ? file.id.startsWith("/docs/4.x/")
        : !file.id.startsWith("/docs/4.x");
    }) ?? [],
);

provide("navigation", versionNavigation);

const appear = ref(false);
const appeared = ref(false);

onMounted(() => {
  setTimeout(() => {
    appear.value = true;
    setTimeout(() => {
      appeared.value = true;
    }, 1000);
  }, 0);
});
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
        :groups="searchGroups"
        :links="searchLinks"
        :fuse="{ resultLimit: 42 }"
      />
    </ClientOnly>
  </UApp>
</template>
