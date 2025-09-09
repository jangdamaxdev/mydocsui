import type { ContentNavigationItem } from "@nuxt/content";
// Chapters HAVE NOT INDEX.MD
const Chapters = [
    'getting-started',
    'concepts',
    'recipes',
    'directory-structure',
    'going-further',
    'best-practices',
    'components',
    'composables',
    'utils',
    'kit',
    'commands',
    'advanced',
    'community',
    'bridge',
    'migration',
]
const navigation = useState<ContentNavigationItem[]>('navigation');
export default defineNuxtRouteMiddleware((to) => {
    const chapterNavigation = navPageFromPath(to.path, navigation.value)
    if (Chapters.includes(to.path.split('/').pop()) && chapterNavigation.children) {
        return chapterNavigation.children[0].path
    }
})
