<template>
<NuxtPage/>
</template>

<script setup lang="ts">
definePageMeta({
  heroBackground: "opacity-30",
  key: "docs",
  middleware: ['docs-route']
});
</script>