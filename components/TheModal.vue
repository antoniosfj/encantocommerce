<script setup lang='ts'>
const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
    default: false,
  },
  backdropClass: {
    type: String,
    required: false,
    default: 'items-center justify-center p-4',
  },
  modalClass: {
    type: String,
    required: false,
    default: 'w-96 h-96',
  },
});

const showContent = ref(false);

function closeModal() {
  showContent.value = false;
  emit('update:modelValue', false);
}

watch(() => props.modelValue, (val) => {
  if (val) {
    showContent.value = true;
  }
}, {immediate: true});

</script>

<template>
  <teleport
    to='body'>
    <Transition>
      <div
        v-show='props.modelValue'
        :class='backdropClass'
        class='max-h-full inset-0 bg-black bg-opacity-60 fixed z-20 flex'
        @click='closeModal' />
    </Transition>
    <Transition
      name='slide'
      @leave="emit('update:modelValue', false)">
      <div
        v-show='props.modelValue'
        :class='modalClass'
        class='max-h-full dark:bg-slate-900 bg-gray-200 border border-black fixed z-40'
        @click.stop=''>
        <!-- Default slot -->
    
        <slot
          name='default'
          :close-modal='closeModal' />
      </div>
    </Transition>
  </teleport>
  <!-- <teleport
    to='body'>
    <Transition @after-enter='showContent = true'>
      <div
        v-show='props.modelValue'
        class='max-h-full inset-0 dark:bg-gray-700 bg-gray-900 bg-opacity-50 dark:bg-opacity-50 fixed z-50 flex'
        :class='backdropClass'
        @click='closeModal'>
        <Transition
          name='slide'
          @leave="emit('update:modelValue', false)">
          <div
            v-if='showContent'
            :class='modalClass'
            class='max-h-full dark:bg-slate-900 bg-gray-200 border border-black relative'
            @click.stop=''>        
            <slot
              name='default'
              :close-modal='closeModal' />
          </div>
        </Transition>
      </div>
    </Transition>
  </teleport> -->
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all .3s ease;
} 

.slide-enter-from,
.slide-leave-to {
  transform: translateX(500px);
}

/* .slide-enter-to, .slide-leave-from {
  transform: translateX(0px);
} */
</style>