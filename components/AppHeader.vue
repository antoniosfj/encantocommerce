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

const searching = ref(false);

</script>

<template>
  <Transition>
    <div
      v-show='searching'
      class='max-h-full inset-0 bg-black bg-opacity-60 fixed z-20' />
  </Transition>
  <div
    :class="[searching ? 'z-30 bg-opacity-95 dark:bg-opacity-95' : 'z-10 bg-opacity-70 dark:bg-opacity-70']"
    class='sticky top-0 py-4 px-4 lg:px-8 w-full border-gray-300 dark:border-gray-700 border-b dark:bg-slate-900 bg-slate-100 duration-100'>
    <div class='max-w-7xl mx-auto flex items-center'>
      <a
        href='/'
        class='default-text-color hover:text-sky-400 font-semibold leading-6'>
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
            class='input-default rounded-2xl'
            @focus='searching = true'
            @blur='searching = false'>
          <search-list-overlay />
        </div>
      </form>
      <div class='flex space-x-8 default-text-color hover:text-sky-400 font-semibold leading-6 cursor-pointer'>
        Ola, crie sua conta ou logue
        <Icon
          name='mdi:chevron-down'
          class='w-6 h-6 active:rotate-180' />
      </div>
      <Icon
        name='mdi:cart-outline'
        class='w-6 h-6 cursor-pointer text-blue-500 dark:text-green-500 ml-6'
        @click='showCartModal = true' />
      <div
        class='ml-6 pl-6 default-text-color border-slate-500 border-l'>
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
    <the-modal
      v-model='showCartModal'
      backdrop-class='justify-end items-start p-0'
      modal-class='w-80 h-full right-0 border-l border-gray-300 border-gray-300 dark:border-gray-700'>
      <template #default='{ closeModal }'>
        <div
          class='pl-5 sticky top-0 w-full border-gray-300 dark:border-gray-700 border-b dark:bg-slate-900/75 bg-slate-100/60 duration-500'>
          <div class='flex items-center justify-between'>
            <div>
              <Icon
                name='mdi:cart-outline'
                class='w-6 h-6 text-blue-500 dark:text-green-500' />
              <span class='default-text-color ml-3'>Carrinho</span>
            </div>
            <div
              class='py-4 px-4 border-l border-gray-300 dark:border-gray-700 cursor-pointer'
              @click='closeModal()'>
              <Icon
                name='mdi:close'
                class='min-h-[34px] w-6 h-6 default-text-color' />
            </div>
          </div>
        </div>
        <div class='p-5'>
          <button
            class='btn-success block w-full rounded-3xl uppercase font-semibold'>
            Checkout
          </button>
          <button
            class='mt-2 mb-3 btn-secondary'>
            Editar
          </button>
        </div>
      </template>
    </the-modal>
  </div>
</template>


<style scoped>
.v-enter-active,
  .v-leave-active {
    transition: opacity .3s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  .v-enter-to, .v-leave-from {
    opacity: 1;
  }
  </style>