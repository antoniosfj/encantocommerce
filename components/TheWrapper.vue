<script setup lang='ts'>


interface Props {
  show: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  show: false,
});


</script>


<template>
  <div
    class='relative'>
    <slot />
    <div 
      v-if='show'
      class='absolute bg-zinc-200 dark:bg-zinc-800 opacity-90 inset-0'>
      <slot name='overlay'>
        <div class='relative h-full w-full'>
          <div class='animate-pulse w-full'>
            <div class='h-1 bg-violet-500 rounded col-span-2' />
          </div>
          <div class='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <Icon
              name='tabler:loader-2'
              class='animate-spin w-8 h-8 cursor-pointer text-violet-500 dark:text-green-500' />
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>