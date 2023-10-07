<script setup>
useHead({
  bodyAttrs: {
    class: 'bg-slate-900 text-slate-500'
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
