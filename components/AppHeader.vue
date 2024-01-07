<script setup lang='ts'>
import { useThemeStore } from '@/store/theme';
import { storeToRefs } from 'pinia';
const themeStore = useThemeStore();
const { theme } = storeToRefs(themeStore);
const { toggleTheme } = themeStore;

const showCart = ref(false);

const searchText = ref('');
const searchInput = ref<HTMLInputElement  | null>(null);

function searchProduct() {
  if (!searchText.value && searchInput) {
    searchInput.value?.focus();
  }
  
  searchText.value = '';
}

const cartItems = ref([
  { name: 'PlayStation 5', description: 'Console bla bla', price: 3449.99, _uid: 1 },
  { name: 'PlayStation 4', description: 'Console bla bla', price: 2149.99, _uid: 2 },
  { name: 'PlayStation 3', description: 'Console bla bla', price: 1249.99, _uid: 3 },
]);

const orderPrice = computed(() => cartItems.value.reduce((acc, item) => acc + item.price, 0).toFixed(2));

const options = ref([
  { text: 'Test', key: 1 },
  { text: 'Test', key: 2 },
  { text: 'Test', key: 3 },
  { text: 'Test', key: 4 },
]);

const searching = ref(false);

</script>

<template>
  <Transition>
    <div
      v-show='searching'
      class='max-h-full inset-0 bg-black bg-opacity-70 fixed z-20' />
  </Transition>
  <div
    :class="[
      searching ? 'z-30 bg-opacity-95 dark:bg-opacity-95'
      : 'z-30 bg-opacity-70 dark:bg-opacity-70']"
    class='
      sticky top-0 py-4 px-4 lg:px-8 w-full border-zinc-300 dark:border-zinc-700 border-b dark:bg-zinc-900 bg-zinc-100 duration-200'>
    <div class='max-w-7xl mx-auto flex items-center'>
      <NuxtLink
        to='/'
        class='default-text-color hover:text-sky-400 font-semibold leading-6'>
        Encanto
      </NuxtLink>
      <div
        class='max-w-md w-full mx-auto'>
        <div class='relative flex items-center text-zinc-300 focus-within:text-zinc-400 dark:text-zinc-400 dark:focus-within:text-white duration-200 mx-3'>
          <Icon
            name='tabler:search'
            class='w-6 h-6 absolute ml-3 cursor-pointer'
            @click='searchProduct' />
          <input
            ref='searchInput'
            v-model='searchText'
            autocomplete='off'
            type='text'
            name='searchInput'
            placeholder='Buscar produtos'
            aria-label='Buscar produtos'
            class='input-default pl-10 rounded-2xl focus:rounded-b-none'
            @focus='searching = true'
            @blur='searching = false'>
          <search-list-overlay
            :show='searching'
            :options='options' />
        </div>
      </div>
      <div class='flex space-x-8 default-text-color hover:text-sky-400 font-semibold leading-6 cursor-pointer'>
        Ola, crie sua conta ou logue
        <Icon
          name='mdi:chevron-down'
          class='w-6 h-6 active:rotate-180' />
      </div>
      <Icon
        name='mdi:cart-outline'
        class='w-6 h-6 cursor-pointer text-violet-500 dark:text-green-500 ml-6'
        @click='showCart = true' />
      <div
        class='ml-6 pl-6 default-text-color border-zinc-500 border-l'>
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
    <the-cart v-model:show='showCart'>
      <cart-items-group>
        <cart-item
          v-for='item in cartItems'
          :key='item._uid'
          v-bind='item' />
      </cart-items-group>
      <div class='my-2 p-3 flex items-center justify-between'>
        <h6 class='text-bold text-xl text-zinc-900 dark:text-white'>
          Total
        </h6>
        <h6 class='text-bold text-xl text-zinc-900 dark:text-white'>
          R$ {{ orderPrice }}
        </h6>
      </div>
    </the-cart>
  </div>
</template>


<style scoped>
.v-enter-active,
  .v-leave-active {
    transition: opacity .2s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  .v-enter-to, .v-leave-from {
    opacity: 1;
  }
  </style>