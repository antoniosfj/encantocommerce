<script setup lang='ts'>
import { useThemeStore } from '@/store/theme';
import { storeToRefs } from 'pinia';
const themeStore = useThemeStore();
const { theme } = storeToRefs(themeStore);
const { toggleTheme } = themeStore;

const showCartModal = ref(false);


const searchText = ref('');
const searchInput = ref<HTMLInputElement  | null>(null);

function searchProduct() {
  if (!searchText.value && searchInput) {
    searchInput.value?.focus();
  }
  
  searchText.value = '';
}


</script>

<template>
  <div
    class='sticky top-0 py-4 px-4 lg:px-8 w-full z-40 flex-none backdrop-blur border-gray-300 dark:border-gray-700 border-b dark:bg-slate-900/75 bg-slate-100/60 duration-500'>
    <div class='max-w-7xl mx-auto flex items-center'>
      <a
        href='/'
        class='text-default-color hover:text-sky-400 font-semibold leading-6'>
        Encanto
      </a>
      <form
        action=''
        class='max-w-md w-full mx-auto'>
        <div class='relative flex items-center text-gray-300 focus-within:text-gray-400 dark:text-gray-400 dark:focus-within:text-white duration-200 mx-3'>
          <Icon
            name='tabler:search'
            class='w-6 h-6 absolute ml-3 cursor-pointer'
            @click='searchProduct' />
          <input
            ref='searchInput'
            v-model='searchText'
            type='text'
            name='search'
            placeholder='Buscar produtos'
            autocomplete='off'
            aria-label='Buscar produtos'
            class='input-default rounded-2xl'>
        </div>
      </form>
      <div class='flex space-x-8 text-default-color hover:text-sky-400 font-semibold leading-6 cursor-pointer'>
        Ola, crie sua conta ou logue
        <Icon
          name='mdi:chevron-down'
          class='w-6 h-6 rotate-180' />
      </div>
      <Icon
        name='mdi:cart-outline'
        class='w-6 h-6 cursor-pointer text-blue-500 dark:text-green-500 ml-6'
        @click='showCartModal = true' />
      <div
        class='ml-6 pl-6 text-default-color border-slate-500 border-l'>
        <Icon
          v-if="theme =='dark'"
          name='tabler:sun-high'
          class='w-5 h-5 hover:text-sky-400 font-semibold cursor-pointer'
          @click='toggleTheme' />
        <Icon
          v-else
          name='tabler:moon'
          class='w-5 h-5 hover:text-sky-400 font-semibold cursor-pointer'
          @click='toggleTheme' />
      </div>
    </div>
    <the-modal v-model='showCartModal' />
  </div>
</template>
