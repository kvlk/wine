<script setup>
import { ref } from 'vue'

defineProps({
  headingLevel: Element
})
</script>

<template>
  <div class="a-image">
    <img src="./product-iamge-placeholder.jpg" alt="" sizes="" srcset="">
  </div>
  <!-- <component class="a-image" :is="Element || 'img'">
    <slot></slot>
  </component> -->
</template>

<style lang="scss">
.a-image {
  @apply w-full h-72 lg:h-150;
}
</style>
