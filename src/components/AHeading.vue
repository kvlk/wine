<script setup>
import { ref } from 'vue'

defineProps({
  headingLevel: Element
})
</script>

<template>
  <component class="a-heading" 
    :is="(headingLevel > 6 ? 'h6' : 'h' + headingLevel) || 'h1'">
    <slot v-if="headingLevel <= 6"></slot>
    <small v-else>
      <slot></slot>
    </small>
  </component>
</template>

<style lang="scss">
.a-heading {
  @apply mb-1.5 tracking-wide font-bold text-gray-800;

  @at-root {
    h1#{&} {
      @apply text-2xl lg:text-3xl xl:text-4xl;
    }
    h2#{&} {
      @apply 
        text-xl lg:text-2xl xl:text-3xl 
        leading-6 lg:leading-7 xl:leading-9;
    }
    h3#{&} {
      @apply 
        text-lg lg:text-2xl xl:text-3xl 
        leading-6 lg:leading-7 xl:leading-9;
    }
    h4#{&} {
      @apply text-lg lg:text-xl xl:text-2xl;
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
