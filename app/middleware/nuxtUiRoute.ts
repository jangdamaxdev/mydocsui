import type { ContentNavigationItem } from "@nuxt/content";
// Chapters HAVE NOT INDEX.MD
const Chapters = [
    'composables',
    'components'
]
export default defineNuxtRouteMiddleware((to) => {
    const navigation = useState<ContentNavigationItem[]>('navigation');
    const chapterNavigation = navPageFromPath(to.path, navigation.value)
    if (Chapters.includes(to.path.split('/').pop()) && chapterNavigation.children) {
        return chapterNavigation.children[0].path
    }
})
