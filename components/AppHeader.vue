<script setup>
function toggleColorMode() {
  console.log('bla')
  const currentTheme = localStorage.theme
  console.log({ currentTheme })
  if (!localStorage.theme || currentTheme === 'light') {
    localStorage.theme = 'dark'
    document.documentElement.classList.add('dark')
  } else {
    localStorage.theme = 'light'
    document.documentElement.classList.remove('dark')
  }
  console.log({ currentTheme: localStorage.theme })
}

</script>

<template>
  <div
    class='py-4 px-4 lg:px-8 w-full z-40 flex-none bg-transparent backdrop-blur border-slate-500 border-b'>
    <div class='max-w-7xl mx-auto flex items-center'>
      <a
        href='/'
        class='text-slate-200 hover:text-sky-400 font-semibold leading-6'>
        Encanto
      </a>
      <form
        action=''
        class='max-w-md w-full mx-auto'>
        <div class='relative flex items-center dark:text-gray-400 focus-within:text-white duration-200 mx-3'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='w-6 h-6 absolute ml-3 pointer-events-none'>
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' />
          </svg>
          <input
            type='text'
            name='search'
            placeholder='Procure um produto'
            autocomplete='off'
            aria-label='Procure um produto'
            class='focus:outline-none w-full pr-3 pl-10 py-2 bg-gray-50 border border-gray-300 text-gray-800 focus:text-gray-900 text-sm rounded-2xl
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
              dark:placeholder-gray-400 dark:text-gray-400 dark:focus:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
        </div>
      </form>
      <ul class='flex space-x-8'>
        <li>
          <a
            href='/'
            class='text-slate-200 hover:text-sky-400 font-semibold leading-6'>
            Conheca
          </a>
        </li>
        <li>
          <a
            href='/'
            class='text-slate-200 hover:text-sky-400 font-semibold leading-6'>
            Carrinho
          </a>
        </li>
        <li>
          <a
            href='/'
            class='text-slate-200 hover:text-sky-400 font-semibold leading-6'>
            Algo
          </a>
        </li>
      </ul>
      <div
        class='ml-6 pl-6 border-slate-500 border-l cursor-pointer'
        @click='toggleColorMode'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          class='w-5 h-5'>
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z' />
        </svg>
      </div>
    </div>
  </div>
</template>
