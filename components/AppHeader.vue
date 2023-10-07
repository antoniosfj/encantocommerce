<template>
  <div
    class='py-4 px-4 lg:px-8 w-full z-40 flex-none bg-transparent backdrop-blur border-slate-500 border-b'>
    <div class='max-w-7xl mx-auto flex items-center justify-between'>
      <a
        href='/'
        class='text-slate-200 hover:text-sky-400 font-semibold leading-6'>
        Encanto
      </a>
      <form
        action=''
        class='max-w-md w-full'>
        <div class='relative flex items-center text-gray-400 focus-within:text-gray-600 transition-all duration-300'>
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
            class='w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2
              ring-gray-300 focus:ring-gray-500 focus:ring-2'>
        </div>
      </form>
      <div class='lg-flex items-center'>
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
      </div>
    </div>
  </div>
</template>
