<script setup>
import { ref } from 'vue'

defineProps({
  linkElement: Element
})
</script>

<template>
  <component class="a-link" :is="linkElement || 'a'">
    <slot></slot>
  </component>
</template>

<style>
.a-link {
  @apply border-b border-blue-50 text-sm lg:text-base text-blue-400 hover:text-blue-600 focus:text-blue-600;
}
</style>
