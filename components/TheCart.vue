<script setup lang='ts'>

defineProps({
  show: {
    type: Boolean,
    default: false,
  }
});

const emit = defineEmits(['update:show']);


</script>

<template>
  <the-modal
    :model-value='show'
    backdrop-class='justify-end items-start p-0'
    modal-class='w-80 h-full right-0 border-l border-gray-300 border-gray-300 dark:border-gray-700'
    @update:model-value="emit('update:show', $event)">
    <template #default='{ closeModal }'>
      <div
        class='pl-5 sticky top-0 w-full border-gray-300 dark:border-gray-700 border-b dark:bg-gray-900/75 bg-gray-100/60 duration-300'>
        <div class='flex items-center justify-between'>
          <div>
            <Icon
              name='mdi:cart-outline'
              class='w-6 h-6 text-blue-500 dark:text-green-500' />
            <span class='default-text-color ml-3'>Carrinho</span>
          </div>
          <div
            class='py-4 px-4 border-l border-gray-300 dark:border-gray-700 cursor-pointer'
            @click='closeModal()'>
            <Icon
              name='mdi:close'
              class='min-h-[34px] w-6 h-6 default-text-color' />
          </div>
        </div>
      </div>
      <slot />
      <div class='py-1 px-3'>
        <button
          class='btn-primary full-block rounded-3xl uppercase font-semibold'>
          Checkout
        </button>
        <button
          class='btn-secondary full-block mt-2 rounded-3xl uppercase font-semibold'>
          Editar
        </button>
      </div>
    </template>
  </the-modal>
</template>