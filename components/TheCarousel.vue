<script setup lang='ts'>
interface Slide {
  url: string,
  alt?: string,
}

const props = defineProps({
  slides: {
    type: Array as PropType<Slide[]>,
    required: true,
    default: () => [],
  }
})

const currentIndex = ref(0)

const prevSlide = () => {
  const isFirstSlide = currentIndex.value === 0
  const newIndex = isFirstSlide ? props.slides.length - 1 : currentIndex.value - 1
  currentIndex.value = newIndex
}

const nextSlide = () => {
  const isLastSlide = currentIndex.value === props.slides.length - 1
  const newIndex = isLastSlide ? 0 : currentIndex.value + 1
  currentIndex.value = newIndex
}
</script>

<template>
  <div class='w-full max-w-[1400px] h-[780px] max-h-[780px] m-auto px-4 relative group'>
    <div
      :style='{ backgroundImage: `url(${props.slides[currentIndex].url})` }'
      class='h-full w-full rounded-2xl bg-center bg-cover duration-500' />
    <div class='backdrop-blur hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full p-2 dark:bg-black/20 dark:text-white bg-white/20 text-black cursor-pointer'>
      <Icon
        name='mdi:chevron-left'
        size='30'
        @click='prevSlide' />
    </div>
    <div class='backdrop-blur hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full p-2 dark:bg-black/20 dark:text-white bg-white/20 text-black cursor-pointer'>
      <Icon
        name='mdi:chevron-right'
        size='30'
        @click='nextSlide' />
    </div>
    <div class='flex gap-4 top-4 justify-center py-2 dark:bg-black/20 dark:text-white bg-white/20 text-black'>
      <div
        v-for='(slide, index) in props.slides'
        :key='index'
        class='text-xl'>
        <Icon
          name='mdi:circle'
          class='cursor-pointer'
          size='10'
          @click='currentIndex = index' />
      </div>
    </div>
  </div>
</template>