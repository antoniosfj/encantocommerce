<script setup>
useHead({
  bodyAttrs: {
    class: 'bg-slate-200 dark:bg-slate-900 transition-colors duration-500 font-sans'
  }
});
</script>

<template>
  <div>
    <AppHeader />
    <the-backdrop :model-value='true' />
    <NuxtPage class='max-w-7xl mx-auto px-4' />
    <AppFooter />
  </div>
</template>
