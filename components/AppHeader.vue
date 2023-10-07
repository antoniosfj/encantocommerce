<script setup>
import { useThemeStore } from '@/store/theme'
import { storeToRefs } from 'pinia'
const themeStore = useThemeStore()
const { theme } = storeToRefs(themeStore)
const { toggleTheme } = themeStore

const searchText = ref('')
const searchInput = ref(null)

function searchProduct() {
  if (!searchText.value && searchInput) searchInput.value.focus()
  searchText.value = ''
}
</script>

<template>
  <div
    class='py-4 px-4 lg:px-8 w-full z-40 flex-none bg-transparent backdrop-blur border-slate-500 border-b'>
    <div class='max-w-7xl mx-auto flex items-center'>
      <a
        href='/'
        class='text-slate-700 dark:text-slate-200 hover:text-sky-400 font-semibold leading-6'>
        Encanto
      </a>
      <form
        action=''
        class='max-w-md w-full mx-auto'>
        <div class='relative flex items-center text-gray-300 focus-within:text-gray-400 dark:text-gray-400 dark:focus-within:text-white duration-200 mx-3'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='w-6 h-6 absolute ml-3 cursor-pointer'
            @click='searchProduct'>
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' />
          </svg>
          <input
            ref='searchInput'
            v-model='searchText'
            type='text'
            name='search'
            placeholder='Buscar produtos'
            autocomplete='off'
            aria-label='Buscar produtos'
            class='input-default'>
        </div>
      </form>
      <nav class='text-slate-700 dark:text-slate-200'>
        <ul class='flex space-x-8'>
          <li
            v-for="[name, url] in [
              ['Crie a sua conta', '/'],
              ['Entre', '/'],
              ['Algo', '/'],
            ]"
            :key='name'>
            <a
              :href='url'
              class='hover:text-sky-400 font-semibold leading-6'>
              {{ name }}
            </a>
          </li>
        </ul>
      </nav>
      <div
        class='ml-6 pl-6 text-slate-700 dark:text-slate-200 border-slate-500 border-l'>
        <svg
          v-if="theme =='dark'"
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          class='w-5 h-5 hover:text-sky-400 font-semibold cursor-pointer'
          @click='toggleTheme'>
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z' />
        </svg>
        <svg
          v-else
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          class='w-5 h-5 hover:text-sky-400 font-semibold cursor-pointer'
          @click='toggleTheme'>
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z' />
        </svg>
      </div>
    </div>
  </div>
</template>
