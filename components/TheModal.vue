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
}

watch(() => props.modelValue, (val) => {
  if (val) {
    showContent.value = true;
  }
}, {immediate: true});

</script>

<template>
  <the-backdrop
    :model-value='props.modelValue'
    :backdrop-class='backdropClass'
    @update:model-value="(val) => emit('update:modelValue', val)"
    @backdrop-click='closeModal'
    @after-enter='showContent = true'>
    <Transition
      name='slide'
      @leave="emit('update:modelValue', false)">
      <div
        v-if='showContent'
        :class='modalClass'
        class='max-h-full dark:bg-slate-900 bg-gray-200 border border-black relative'
        @click.stop=''>
        <!-- Default slot -->
    
        <slot
          name='default'
          :close-modal='closeModal' />
      </div>
    </Transition>
  </the-backdrop>
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