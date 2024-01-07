<script setup>

defineProps({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: '',
  },
  price: {
    type: Number,
    default: 0,
  }
});

</script>

<template>
  <li class='p-3 border-t default-border-color hover:bg-zinc-300 dark:hover:bg-zinc-800 transition-colors duration-200'>
    <div class='flex items-center space-x-4'>
      <div class='flex-shrink-0'>
        <img
          src='https://down-br.img.susercontent.com/file/46e731a6851a5dd89447eb096deb139d'
          alt='Profile picture 2'
          class='w-8 h-8 rounded-full'>
      </div>
      <div class='flex-1 min-w-0'>
        <p
          class='font-medium text-zinc-900 truncate dark:text-white'>
          {{ name }}
        </p>
        <p class='text-sm text-zinc-500 truncate dark:text-zinc-400'>
          {{ description }}
        </p>
      </div>
      <div class='inline-flex items-center text-base font-semibold text-zinc-900 dark:text-white'>
        R$ {{ price }}
      </div>
    </div>
  </li>
</template>