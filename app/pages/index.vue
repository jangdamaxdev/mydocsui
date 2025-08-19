<script setup lang="ts">
import { joinURL } from "ufo";

definePageMeta({
  heroBackground: "-z-10",
});

// const { data: page } =   useAsyncData('index', () => queryCollection('index').first())

const isMobile = ref(false);
onMounted(() => {
  isMobile.value = window.innerWidth < 768;
});
</script>

<template>
  <UPageHero
    class="relative"
    orientation="horizontal"
    :ui="{
      container: '!pb-20 py-24 sm:py-32 lg:py-40',
      title: 'text-5xl sm:text-7xl',
      wrapper: 'lg:min-h-[540px]',
    }"
  >
    <template #title>
      The Progressive<br /><span class="text-primary">Web Framework</span>
    </template>
  </UPageHero>
</template>
