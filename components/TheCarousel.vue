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
});

const currentIndex = ref(0);

const prevSlide = () => {
  const isFirstSlide = currentIndex.value === 0;
  const newIndex = isFirstSlide ? props.slides.length - 1 : currentIndex.value - 1;
  currentIndex.value = newIndex;
};

const nextSlide = () => {
  const isLastSlide = currentIndex.value === props.slides.length - 1;
  const newIndex = isLastSlide ? 0 : currentIndex.value + 1;
  currentIndex.value = newIndex;
};

let carouselIntervalId: NodeJS.Timeout;
onMounted(() => {
  carouselIntervalId = setInterval(() => {
    nextSlide();
  }, 4000);
});

onUnmounted(() => clearInterval(carouselIntervalId));
</script>

<template>
  <div class='w-full h-[780px] max-h-[780px] m-auto relative group'>
    <div
      :style='{ backgroundImage: `url(${props.slides[currentIndex].url})` }'
      class='h-full w-full rounded-md bg-center bg-cover duration-500' />
    <div class='backdrop-blur-sm hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full p-2 dark:bg-zinc-800/20 dark:text-zinc-800 bg-white/20 text-white cursor-pointer'>
      <Icon
        name='mdi:chevron-left'
        size='30'
        @click='prevSlide' />
    </div>
    <div class='backdrop-blur hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full p-2 dark:bg-zinc-800/20 dark:text-zinc-800 bg-white/20 text-white cursor-pointer'>
      <Icon
        name='mdi:chevron-right'
        size='30'
        @click='nextSlide' />
    </div>
    <div class='relative flex space-x-3 bottom-8 justify-center'>
      <div
        v-for='(slide, index) in props.slides'
        :key='index'>
        <Icon
          name='mdi:circle'
          class='cursor-pointer dark:hover:text-zinc-800 text-white'
          size='15'
          :class="[index === currentIndex ? 'dark:text-zinc-800 text-white' : 'dark:text-zinc-800/50 text-white/50']"
          @click='currentIndex = index' />
      </div>
    </div>
  </div>
</template>