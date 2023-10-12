<script setup>
useHead({
  bodyAttrs: {
    class: 'bg-slate-200 dark:bg-slate-900 transition-colors duration-500 font-mono'
  }
});
</script>

<template>
  <div>
    <AppHeader />
    <NuxtPage class='max-w-7xl mx-auto' />
    <AppFooter />
  </div>
</template>
