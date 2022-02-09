<script setup>
import { ref } from 'vue'
</script>

<template>
  <component class="a-price" :is="Element || 'span'">
    <slot></slot>
  </component>
</template>

<style lang="scss">
.a-price {
  @apply space-x-3 tracking-wide font-bold text-4xl;

  ins {
    @apply text-primary-500 no-underline;
  }
  del {
    @apply tracking-normal text-lg text-gray-600 lg:text-gray-500 line-through;
  }
}
</style>
