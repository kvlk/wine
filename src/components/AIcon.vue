<script setup>
import { ref } from 'vue'
</script>

<template>
  <component class="a-icon" :is="Element || 'span'">
    <slot></slot>
  </component>
</template>

<style>
.a-icon {
  @apply inline-block w-4 h-4 xl:w-6 xl:h-6;
}
</style>
