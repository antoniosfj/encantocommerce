<script setup>
useHead({
  bodyAttrs: {
    class: 'bg-zinc-100 dark:bg-zinc-900 transition-colors duration-500 font-sans'
  }
});
</script>

<template>
  <div>
    <AppHeader />
    <NuxtPage class='max-w-7xl mx-auto px-4' />
    <!-- <AppFooter /> -->
  </div>
</template>
