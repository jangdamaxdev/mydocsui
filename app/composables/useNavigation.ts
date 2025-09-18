import { createSharedComposable } from '@vueuse/core'

function _useHeaderLinks() {
  const route = useRoute()
  const { version } = useDocsVersion()

  const headerLinks = computed(() => {
    const lang = computed(() => version.value.shortTag).value


    return [
      {
        label: 'Nuxt meta-framework',
        icon: 'i-lucide-book-marked',
        to: `https://nuxt.com/`,
        search: false,
        active: route.path.startsWith('/nuxt'),
        children: [{
          label: 'Nuxt Core',
          description: `Nuxt's goal is to make web development intuitive and performant with a great Developer Experience in mind.`,
          icon: 'i-lucide-rocket',
          to: `/nuxt/nuxtcore/${lang}/getting-started`,
          active: route.path.startsWith('/nuxt/nuxtcore'),

        }, {
          label: 'Nuxt Content',
          description: `The powerful Git-based CMS designed specifically for Nuxt developers.`,
          icon: 'i-lucide-rocket',
          to: `/nuxt/nuxtcontent/${lang}/getting-started`,
          active: route.path.startsWith('/nuxt/nuxtcontent'),

        },
        {
          label: 'Nuxt UI',
          description: `Nuxt UI harnesses the combined strengths of Reka UI, Tailwind CSS, and Tailwind Variants`,
          icon: 'i-lucide-rocket',
          to: `/nuxt/nuxtui/${lang}/getting-started`,
          active: route.path.startsWith('/nuxt/nuxtui'),

        }]
      },
      {
        label: 'TypeScript',
        description: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
        icon: 'i-lucide-messages-square',
        to: `https://www.typescriptlang.org/`,
        // active: route.path.startsWith(path)
      },
      {
        label: 'Golang',
        description: 'An open source programming language that makes it easy to build simple, reliable, and efficient software.',
        icon: 'i-lucide-messages-square',
        to: `https://go.dev/`,
        // active: route.path.startsWith(`${to}/spec`)
      },
      {
        label: 'Rust',
        description: 'Empowering everyone to build reliable and efficient software.',
        icon: 'i-lucide-messages-square',
        to: `https://www.rust-lang.org/`,
        // active: route.path.startsWith(`${to}/spec`)
      }
    ]
  })

  return { headerLinks }
}

export const useHeaderLinks = import.meta.client ? createSharedComposable(_useHeaderLinks) : _useHeaderLinks

const _useNavigation = () => {
  const nuxtApp = useNuxtApp()
  const searchTerm = ref<string>('')

  const { headerLinks } = useHeaderLinks()

  const searchLinks = computed(() => [
    {
      label: 'Ask AI',
      icon: 'i-lucide-wand',
      to: 'javascript:void(0);',
      onSelect: () => nuxtApp.$kapa?.openModal()
    },
    ...headerLinks.value.map((link) => {
      // Remove `/docs` and `/enterprise` links from command palette
      if (link.search === false) {
        return {
          label: link.label,
          icon: link.icon,
          children: link.children
        }
      }
      return link
    })
      .filter((link): link is NonNullable<typeof link> => Boolean(link))
  ])

  type SearchGroup = {
    id: string
    label: string
    icon?: string
    items: Array<{
      id: string
      label: string
      suffix?: string
      icon?: string
      avatar?: {
        src?: string
        ui?: {
          root: string
        }
      }
      to: string
      onSelect?: () => Promise<void>
    }>
  }

  const searchGroups = computed<SearchGroup[]>(() => {
    const aiGroup: SearchGroup = {
      id: 'ask-ai-search',
      label: 'AI',
      icon: 'i-lucide-wand',
      items: []
    }


    const groups = [aiGroup]

    if (!searchTerm.value) {
      return groups
    }

    aiGroup.items = [{
      id: `ask-ai-${searchTerm.value}`,
      label: `Ask AI about "${searchTerm.value}"`,
      icon: 'i-lucide-wand',
      to: 'javascript:void(0);',
      onSelect() {
        return nuxtApp.$kapa.openModal(searchTerm.value)
      }
    }]   

    return groups
  })

  return {
    searchTerm,
    headerLinks,
    searchLinks,
    searchGroups
  }
}

export const useNavigation = import.meta.client ? createSharedComposable(_useNavigation) : _useNavigation
import type { ContentNavigationItem } from '@nuxt/content'


export function useNavigationChapter(navigation: ContentNavigationItem[]) {
  const route = useRoute()
  const navigationChapter = []
  for (const nav of navigation) {
    navigationChapter.push(
      {
        active: route.path.startsWith(nav.path),
        // description: nav.title,
        icon: nav.icon,
        label: nav.title,
        to: nav.path
      }
    )
  }
  return navigationChapter
}