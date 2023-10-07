<script setup>
useHead({
  bodyAttrs: {
    class: 'bg-slate-100 dark:bg-slate-900'
  }
})
</script>

<template>
  <div>
    <AppHeader />
    <NuxtPage class='max-w-7xl mx-auto' />
    <AppFooter />
  </div>
</template>
