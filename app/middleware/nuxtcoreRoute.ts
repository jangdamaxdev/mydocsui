// import type { ContentNavigationItem } from "@nuxt/content";
// const Redirects = [

// ]
// export default defineNuxtRouteMiddleware((to) => {
// const navigation = inject<Ref<ContentNavigationItem[]>>("navigation", ref([]));
// console.log('middleware route', navigation.value);

//   const chapterNavigation = computed(() => navPageFromPath(to.path, navigation.value))
//   console.log('chapterNavigation', chapterNavigation.value, 'to.path', to.path, "navigation", navigation.value);

//   if (chapterNavigation.value?.children!) {
//     const fullPath = to.fullPath.replace(chapterNavigation.value?.path, chapterNavigation.value?.children[0].path)
//     console.log('fullPath', fullPath);    
//     return fullPath
//   }
// })



// export default defineNuxtRouteMiddleware((to) => {
//   const routeRoot = computed(()=>to.fullPath.split('/')[1]) 
//   console.log(routeRoot.value);
//   const startsWith = [
//     'blog',
//     'modules'
//   ]
//   if (startsWith.includes(routeRoot.value)) { 
//     navigateTo(`https://nuxt.com/${to.path}`)
//   }
// })
