// import type { ContentNavigationItem } from "@nuxt/content";
// const Redirects = [

// ]
// export default defineNuxtRouteMiddleware((to) => {
// const navigation = inject<Ref<ContentNavigationItem[]>>("navigation", ref([]));
//   const chapterNavigation = computed(() => navPageFromPath(to.path, navigation.value))
//   console.log('chapterNavigation', chapterNavigation.value, 'to.path', to.path, "navigation", navigation.value);
  
//   if (chapterNavigation.value?.children!) {
//     const fullPath = to.fullPath.replace(chapterNavigation.value?.path, chapterNavigation.value?.children[0].path)
//     console.log('fullPath', fullPath);    
//     return fullPath
//   }
// })



export default defineNuxtRouteMiddleware((to) => {

  // if (to.path.startsWith('/nuxt/nuxtcore') && !to.path.startsWith('/nuxt/nuxtcore/live') && !to.path.startsWith('/nuxt/nuxtcore/vi')) {
  //   return to.fullPath.replace('/nuxt/nuxtcore', '/nuxt/nuxtcore/vi')
  // }
  // if (to.path.startsWith('/docs')) {
  //   return to.fullPath.replace('/docs', '/nuxt/nuxtcore/vi')
  // }
})
