<script setup>

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
});

const emit = defineEmits(['afterEnter', 'backdropClick']);
</script>

<template>
  <teleport
    to='body'>
    <Transition @after-enter="emit('afterEnter')">
      <div
        v-show='props.modelValue'
        :class='backdropClass'
        class='max-h-full inset-0 bg-gray-900 bg-opacity-50 dark:bg-opacity-50 fixed z-50 flex'
        @click="emit('backdropClick')">
        <slot />
      </div>
    </Transition>
  </teleport>
</template>