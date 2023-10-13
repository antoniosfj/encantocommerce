<script setup lang='ts'>
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
    default: false,
  }
});
</script>

<template>
  <teleport
    to='body'>
    <div
      v-if='props.modelValue'
      class='inset-0 bg-gray-900 dark:bg-opacity-50 bg-opacity-50 fixed z-50' />
  </teleport>
</template>