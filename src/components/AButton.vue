<script setup>
import { ref } from 'vue'

defineProps({
  buttonElement: Element
})
</script>

<template>
  <component class="a-button" :is="buttonElement || 'a'">
    <slot></slot>
  </component>
</template>

<style lang="scss">
.a-button {
  @apply h-8 px-4 inline-flex justify-center items-center min-w-16 rounded-lg tracking-tight font-bold text-sm lg:text-base cursor-pointer disabled:cursor-default;

  &-primary {
    @apply bg-primary-400 text-white hover:bg-primary-900 focus:bg-primary-900 disabled:bg-gray-200 disabled:text-gray-600;
  }
  &-outline {
    @apply border border-gray-400 hover:border-gray-600 focus:divide-gray-600 bg-white text-current hover:text-gray-600 hover:bg-gray-200 focus:text-gray-600 focus:bg-gray-200 disabled:bg-gray-200 disabled:text-gray-600;
  }
}
</style>
