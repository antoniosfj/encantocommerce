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

watch(() => props.modelValue, (val: boolean) => {
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
        class='max-h-full inset-0 bg-black bg-opacity-80 fixed z-40 flex'
        @click='closeModal' />
    </Transition>
    <Transition
      name='slide'
      @leave="emit('update:modelValue', false)">
      <div
        v-show='props.modelValue'
        :class='modalClass'
        class='max-h-full dark:bg-gray-900 bg-gray-200 border border-black fixed z-50'
        @click.stop=''>
        <!-- Default slot -->
    
        <slot
          name='default'
          :close-modal='closeModal' />
      </div>
    </Transition>
  </teleport>
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

/* .slide-enter-to, .slide-leave-from {
  transform: translateX(0px);
} */
</style>