import type { ContentNavigationItem } from "@nuxt/content";
// Chapters HAVE NOT INDEX.MD
const Chapters = [
    'collections',
    'files',
    'utils',
    'components',
    'going-further',
    'deploy',
    'integrations',
    'advanced',
    'studio'
]
const navigation = useState<ContentNavigationItem[]>('navigation');
export default defineNuxtRouteMiddleware((to) => {
    const chapterNavigation = navPageFromPath(to.path, navigation.value)
    if (Chapters.includes(to.path.split('/').pop()) && chapterNavigation.children) {
        return chapterNavigation.children[0].path
    }
})
