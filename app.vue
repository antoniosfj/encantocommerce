<script setup>
useHead({
  bodyAttrs: {
    class: 'bg-gray-100 dark:bg-gray-900 transition-colors duration-500 font-sans'
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
