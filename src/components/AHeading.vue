<script setup>
import { ref } from 'vue'

defineProps({
  headingLevel: Element
})
</script>

<template>
  <component class="a-heading" :is="headingLevel || 'h1'">
    <slot></slot>
  </component>
</template>

<style lang="scss">
.a-heading {
  @apply mb-1.5 tracking-wide font-bold text-gray-800;

  @at-root {
    h1#{&} {
      @apply text-5xl;
    }
    h2#{&} {
      @apply text-4xl;
    }
    h3#{&} {
      @apply text-lg lg:text-2xl xl:text-3xl-28;
    }
    h4#{&} {
      @apply text-2xl;
    }
    h5#{&} {
      @apply text-lg;
    }
    h6#{&} {
      @apply text-base;

      small,
      small & {
        @apply font-medium text-gray-500;
      }
    }
  }
}
</style>
