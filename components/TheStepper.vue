<script setup lang='ts'>
interface Props {
  modelValue: number
  steps: string[]
  contentClass: string | string[]
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 0,
  steps: () => ([]),
});

const emit = defineEmits(['update:modelValue']);

const computedContentClasses = computed(() => {
  if (Array.isArray(props.contentClass)) {
    return props.contentClass.join(' ');
  }
  return props.contentClass;
});

watch(() => props.modelValue, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    newValue = toInteger(newValue, oldValue); // Assuming old value is always a valid step/tab
    emit('update:modelValue', newValue);
    if (newValue >= 0 && newValue <= props.steps.length) {
      emit('update:modelValue', newValue);
    } else {
      emit('update:modelValue', oldValue);
    }
  }
}, { immediate: true });

const activeLiClasses = ref(
  'text-blue-600 dark:text-blue-500 after:border-blue-600 dark:after:border-blue-500');

const liClasses = ref('flex items-center sm:w-full sm:after:content-[\'\'] \
  after:w-full after:h-1 after:hidden md:after:visible after:border-b after:border-1 \
  sm:after:inline-block after:mx-6 xl:after-mx-10 transition-colors duration-200 \
  after:transition-color after:duration-200 ');
const liSpanClasses = ref('flex items-center after:content-["/"] sm:after:hidden \
  after:mx-2 after:text-gray-200 dark:after:text-gray-500');

</script>

<template>
  <div>
    <ol
      class='flex items-center w-full
      text-sm font-medium text-center
      text-gray-500 dark:text-gray-400 sm:text-base'>
      <li
        v-for='(step, index) in steps'
        :key='index'
        :class="[
          index < modelValue ? activeLiClasses : '',
          index < steps.length - 1 ? liClasses : 'flex items-center']">
        <span
          :class='[index < steps.length - 1 ? liSpanClasses : "flex items-center"]'>
          <Icon
            v-if='index < modelValue'
            name='tabler:circle-check-filled'
            class='w-5 h-5 mr-2' />
          <span
            v-else
            class='me-2'>
            {{ index + 1 }}
          </span>
          {{ step }}
        </span>
      </li>
    </ol>
    <div
      v-for='(step, index) in steps'
      :key='index'
      :class='computedContentClasses'>
      <slot
        v-if='index === modelValue'
        :name='`step${index + 1}`'>
        Tab {{ index + 1 }}
      </slot>
    </div>
  </div>
</template>