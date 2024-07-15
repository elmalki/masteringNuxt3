<script setup lang="ts">
import {CheckCircleIcon} from '@heroicons/vue/20/solid'

defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})
defineEmits(['update:modelValue']);
</script>
<template>
  <div class="container">
    <div class="flex justify-end">
      <button type="button"
              @click="$emit('update:modelValue', !modelValue)"
              class="inline-flex items-center mt-2 gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
              :class=" {'bg-teal-600 hover:bg-teal-500':modelValue,
              'bg-gray-600 hover:bg-gray-500':!modelValue}"
      >
        {{ modelValue ? 'Completed!' : 'Mark as complete' }}
        <CheckCircleIcon v-if="modelValue" class="-mr-0.5 h-5 w-5" aria-hidden="true"/>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
