<script setup lang='ts'>
import { useThemeStore } from '@/store/theme'
import { storeToRefs } from 'pinia'
const themeStore = useThemeStore()
const { theme } = storeToRefs(themeStore)
const { toggleTheme } = themeStore

const searchText = ref('')
const searchInput = ref<HTMLInputElement  | null>(null)

function searchProduct() {
  if (!searchText.value && searchInput) searchInput.value?.focus()
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
      <nav class='text-slate-700 dark:text-slate-200'>
        <ul class='flex space-x-8'>
          <li
            v-for="[name, url] in [
              ['Crie a sua conta', '/'],
              ['Entre', '/'],
              ['Carrinho', '/'],
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
  </div>
</template>
