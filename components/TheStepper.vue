<script setup lang='ts'>

withDefaults(defineProps<{
  modelValue: number,
  steps: string[],
}>(), {
  modelValue: 0,
  steps: () => ([]),
});

const activeLiClasses = ref(
  'text-blue-600 dark:text-blue-500 after:border-blue-600 dark:after:border-blue-500');

const liClasses = ref('flex items-center sm:w-full sm:after:content-[\'\'] \
  after:w-full after:h-1 after:hidden md:after:visible after:border-b after:border-1 \
  sm:after:inline-block after:mx-6 xl:after-mx-10 transition-colors duration-200 \
  after:transition-color after:duration-200 ');
const liSpanClasses = ref('flex items-center after:content-["/"] sm:after:hidden \
  after:mx-2 after:text-gray-200 dark:after:text-gray-500');

</script>

<template>
  <ol
    class='flex items-center w-full
    text-sm font-medium text-center
    text-gray-500 dark:text-gray-400 sm:text-base'>
    <li
      v-for='(step, index) in steps'
      :key='index'
      :class="[
        index < modelValue ? activeLiClasses : '',
        index < steps.length - 1 ? liClasses : 'flex items-center']">
      <span
        :class='[index < steps.length - 1 ? liSpanClasses : "flex items-center"]'>
        <Icon
          v-if='index < modelValue'
          name='tabler:circle-check-filled'
          class='w-5 h-5 mr-2' />
        <span
          v-else
          class='me-2'>{{ index + 1 }}</span>
        {{ step }}</span>
    </li>
  </ol>
</template>