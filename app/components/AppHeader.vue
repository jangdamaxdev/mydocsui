<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = useState<ContentNavigationItem[]>('navigation')
const route = useRoute()

const { headerLinks } = useHeaderLinks()
const { version } = useDocsVersion()
const baseNavigation = headerLinks.value.map(
      link =>
        ({
          ...link,
          title: link.label,
          path: link.to,
          children: link.children?.map(child => ({
            ...child,
            title: child.label,
            path: child.to,
          })),
        }) as ContentNavigationItem
    )

const mobileNavigation = computed<ContentNavigationItem[]>(() => {
  // Show Migration and Bridge on mobile only when user is reading them
  const docsLink = navPageFromPath(version.value.path, navigation.value)
  // Menu for index page
  if (!route.params?.slug) {
    return baseNavigation
  }
  return [
    {
      ...docsLink,
      title: 'Table of Contents',
      children: docsLink.children?.map(child => ({ ...child, active: child.path.includes(route.params.slug[1]) })),
    },
    ...baseNavigation
    ].filter((item): item is ContentNavigationItem => Boolean(item))
})

const defaultOpen = computed(() => {
  const topLevelWithChildren = mobileNavigation.value.filter(link => link.children?.length)
  const currentPath = route.path

  return topLevelWithChildren.some(link => link.children?.some(child => currentPath.startsWith(child.path as string)))
})

</script>

<template>
  <UHeader>
    <template #left>
      <!-- <UContextMenu :items="logoContextMenuItems" size="xs"> -->
      <NuxtLink to="/" class="flex gap-2 items-end" aria-label="Back to home">
        <NuxtLogo ref="logo" class="block w-auto h-6" />
      </NuxtLink>
      <!-- </UContextMenu> -->
    </template>

    <UNavigationMenu :items="headerLinks" variant="link" :ui="{ linkLeadingIcon: 'hidden' }" />

    <template #right>
      <UTooltip text="Search" :kbds="['meta', 'K']">
        <UContentSearchButton />
      </UTooltip>

      <UColorModeButton />

      <UTooltip text="GitHub Stars">
        <UButton
          icon="i-simple-icons-github"
          to="https://github.com/jangdamaxdev/docs"
          target="_blank"
          variant="ghost"
          color="neutral"

          :ui="{
            label: 'hidden sm:inline-flex',
          }"
        >
          <span class="sr-only">My GitHub</span>
        </UButton>
      </UTooltip>
    </template>

    <template #body>
      <template v-if="route.path.startsWith('/nuxt')">
        <VersionSelect />
        <USeparator type="dashed" class="my-6" />
      </template>    
      <UContentNavigation :navigation="mobileNavigation" :default-open="defaultOpen" highlight />
    </template>
  </UHeader>
</template>
