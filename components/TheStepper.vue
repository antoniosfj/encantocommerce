<script setup lang='ts'>

interface Step {
  title: string
  ok?: boolean
}

interface Props {
  modelValue: number
  steps: Step[]
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
    console.log(newValue, oldValue, props.steps.length);
    newValue = toInteger(newValue, 0); // Assuming old value is always a valid step/tab

    if (newValue >= 0 && newValue < props.steps.length) {
      emit('update:modelValue', newValue);
    } else if (newValue < 0) {
      emit('update:modelValue', 0);
    } else {
      emit('update:modelValue', props.steps.length - 1);
    }
  }
});

const activeLiClasses = ref(
  'text-violet-600 dark:text-violet-600 after:border-violet-600 dark:after:border-violet-600');

const currentLiClasses = ref(
  'text-violet-600 dark:text-violet-500 border-violet-600 dark:border-violet-500'
);

const liClasses = ref('flex items-center sm:w-full sm:after:content-[\'\'] \
  after:w-full after:h-1 after:hidden md:after:visible after:border-b after:border-1 \
  sm:after:inline-block after:mx-6 xl:after-mx-10 transition-colors duration-200 \
  after:transition-color after:duration-200 ');
const liSpanClasses = ref('flex items-center after:content-["/"] sm:after:hidden \
  after:mx-2 after:text-zinc-200 dark:after:text-zinc-500');

</script>

<template>
  <div>
    <ol
      class='flex items-center w-full
      text-sm font-medium text-center
      dark:text-zinc-400 sm:text-base'>
      <li
        v-for='(step, index) in steps'
        :key='index'
        :class="[
          index < modelValue || step.ok ? activeLiClasses : '',
          index < steps.length - 1 ? liClasses : 'flex items-center',
          index === modelValue ? currentLiClasses : '']">
        <span
          :class='[index < steps.length - 1 ? liSpanClasses : "flex items-center"]'>
          <span
            v-if='index < modelValue || step.ok'>
            <Icon
              class='w-5 h-5 mr-1'
              name='tabler:circle-check-filled' />
          </span>
          <span
            v-else
            class='me-2'>
            {{ index + 1 }}
          </span>
          {{ step.title }}
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