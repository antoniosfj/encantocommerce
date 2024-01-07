<script setup lang='ts'>

defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Array,
    default: () => [],
  }
});

</script>

<template>
  <ul
    v-show='show'
    role='list'
    class='
      absolute top-[34px] w-full
      transition-colors duration-300'>
    <li
      v-if='options.length === 0'
      class='px-5 py-2 text-center font-bold
        border border-t-0 border-violet-500 last:rounded-b-2xl
        dark:bg-zinc-700 bg-zinc-50
        text-zinc-900 dark:text-zinc-300
        hover:text-zinc-950 dark:hover:text-zinc-200
        hover:bg-zinc-200 dark:hover:bg-zinc-600
        transition-color duration-300'>
      Nenhum resultado :3
    </li>
    <li
      v-for='option in options'
      :key='option.key'
      class='px-5 py-2
        border border-t-0 border-violet-500 last:rounded-b-2xl
        dark:bg-zinc-700 bg-zinc-50
        text-zinc-900 dark:text-zinc-300
        hover:text-zinc-950 dark:hover:text-zinc-200
        hover:bg-zinc-200 dark:hover:bg-zinc-600
        transition-color duration-300'>
      Something
    </li>
  </ul>
</template>