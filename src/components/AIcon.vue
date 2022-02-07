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
  @apply inline-block w-4 h-4 lg:w-6 lg:h-6;
}
</style>
