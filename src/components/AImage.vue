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
</template>

<style lang="scss">
.a-image {
  @apply relative flex justify-center items-center w-full h-w-screen md:h-150 px-4 lg:px-0 pt-10 lg:pt-5 pb-5 bg-white lg:bg-transparent;
}
.a-image-image {
  @apply w-auto max-h-full
}
</style>
