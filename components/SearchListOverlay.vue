<script setup lang='ts'>

defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Array,
    default: () => [
      { text: 'Test', key: 1 },
      { text: 'Test', key: 2 },
      { text: 'Test', key: 3 },
      { text: 'Test', key: 4 },
    ],
  }
});

</script>

<template>
  <ul
    v-show='show'
    role='list'
    class='
      absolute top-[34px] w-full
      transition-colors duration-500'>
    <li
      v-for='option in options'
      :key='option.key'
      class='px-5 py-2
      border border-t-0 border-blue-500 last:rounded-b-2xl
      dark:bg-gray-700 bg-gray-50
      text-gray-900 dark:text-gray-300
      hover:text-gray-950 dark:hover:text-gray-200
      hover:bg-gray-200 dark:hover:bg-gray-600
      transition-color duration-300'>
      Something
    </li>
  </ul>
</template>