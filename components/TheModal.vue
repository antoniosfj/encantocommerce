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

function closeModal() {
  console.log('closed by event');
  emit('update:modelValue', false);
}
</script>

<template>
  <teleport
    to='body'>
    <div
      v-if='props.modelValue'
      class='max-h-full inset-0 dark:bg-gray-400 bg-gray-900 bg-opacity-50 dark:bg-opacity-50 fixed z-50 flex'
      :class='backdropClass'
      @click='closeModal'>
      <div
        :class='modalClass'
        class='max-h-full dark:bg-slate-900 bg-gray-200 border border-black relative'
        @click.stop=''>
        <slot />
      </div>
    </div>
  </teleport>
</template>