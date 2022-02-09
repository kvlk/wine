<script setup>
import { ref } from 'vue'

import ABadge from './ABadge.vue'
</script>

<template>
  <div class="a-image">
    <img class="a-image-image" src="/product-image-placeholder.jpg" alt="" sizes="" srcset="">
    <ABadge class="a-badge-sale">
      &minus;25%
    </ABadge>
  </div>
  <!-- <component class="a-image" :is="Element || 'img'">
    <slot></slot>
  </component> -->
</template>

<style lang="scss">
.a-image {
  @apply relative flex justify-center items-center w-full h-w-screen md:h-150 mb-5;
}
.a-image-image {
  @apply w-auto max-h-full
}
</style>
