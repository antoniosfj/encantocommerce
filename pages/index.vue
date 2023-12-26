<script setup>
const slides = [
  {
    url: 'https://images.unsplash.com/photo-1696446701744-f548de20f463?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80'
  },
  {
    url: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  },
  {
    url: '/img/bbs2.jpg'
  },
  {
    url: '/img/bbs.jpg'
  },
];
</script>

<template>
  <div>
    <the-carousel
      class='mt-5'
      :slides='slides' />
    <div class='flex justify-around space-x-8'>
      <div
        v-for="title in ['Principais categorias', 'Recomendado', 'Random']"
        :key='title'
        class='h-[420px] mt-5 flex flex-col py-5 bg-gray-50 dark:bg-gray-700 dark:text-gray-300 text-gray-800 shadow-lg rounded-sm overflow-hidden max-w-sm transition-all duration-500'>
        <div class='font-bold text-xl mb-3 px-4'>
          <h2 class='dark:text-gray-200 text-gray-900'>
            {{ title }}
          </h2>
        </div>
        <div class='px-4 h-full'>
          <div
            class='h-full d-block'>
            <a
              v-for="cat in [{ name: 'Eletronicos' }, { name: 'Eletronicos' }, { name: 'Eletronicos' }, { name: 'Eletronicos' }]"
              :key='cat.name'
              href=''
              class='h-1/2 w-1/2 flex flex-col justify-around float-left p-2'>
              <img
                src='/img/bbs.jpg'
                alt='Barra do Sul'>
              <span class='mt-2'>{{ cat.name }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <the-carousel
      class='mt-5'
      :slides='slides' />
  </div>
</template>