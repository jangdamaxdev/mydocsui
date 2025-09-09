import type { ContentNavigationItem } from "@nuxt/content";
// Chapters HAVE NOT INDEX.MD
const Chapters = [
'concepts',
'recipes',
'best-practices',
'community',
'bridge',
'migration',
'components',
'composables',
'utils',
'kit',
'commands',
'advanced',
'getting-started',
'directory-structure',
'going-further',
]
const navigation = useState<ContentNavigationItem[]>('navigation');
export default defineNuxtRouteMiddleware((to) => { 
    const chapterNavigation = computed(() => navPageFromPath(to.path, navigation.value))
    if (Chapters.includes(to.path.split('/').pop()) && chapterNavigation.value?.children) {
        return chapterNavigation.value?.children[0].path
    }
})
