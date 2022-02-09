<script setup>
import { ref } from 'vue'
</script>

<template>
  <component class="a-badge" :is="Element || 'span'">
    <slot></slot>
  </component>
</template>

<style lang="scss">
.a-badge {
  @apply inline-flex items-center no-underline;

  &-code {
    @apply flex lg:order-first gap-x-4 p-4 pb-3 lg:p-0 lg:mb-9 justify-end tracking-tight text-sm text-gray-500 bg-white lg:bg-transparent;

    .a-link {
      @apply sr-only lg:not-sr-only leading-none;
    }
    .a-icon {
      @apply w-4 h-4;
    }
  }
  &-expert {
    @apply px-2 py-1 lg:p-0 lg:w-10 lg:h-10 inline-flex justify-center items-center rounded-4xl tracking-tight font-semibold lg:font-bold text-xs lg:text-base bg-primary-50 hover:bg-primary-100 focus:bg-primary-100;

    &-label-extended {
      @apply mr-1 lg:sr-only;
    }
  }
  &-action {
    @apply space-x-2 tracking-tight text-sm lg:text-base;

    svg {
      @apply w-full h-full;
    }
  }
  &-sale {
    @apply absolute -bottom-1 left-4 lg:bottom-auto lg:left-auto lg:top-1 lg:right-1 h-6 lg:h-8 px-1.5 pt-0.5 pb-1 rounded tracking-tighter font-bold leading-none text-base lg:text-2xl bg-primary-500 text-white;
  }
}
</style>
