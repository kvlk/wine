<script setup>
import { ref } from 'vue'
</script>

<template>
  <component class="a-badge" :is="Element || 'span'">
    <!-- <span class="a-badge-expert-label-extended">Wine</span> -->
    <slot></slot>
  </component>
</template>

<style lang="scss">
.a-badge {
  @apply no-underline;

  &-code {
    @apply tracking-tight text-sm text-gray-500;
  }
  &-expert {
    @apply px-2 py-1 lg:p-0 lg:w-10 lh:h-10 inline-flex justify-center items-center rounded-4xl tracking-tight text-xs lg:text-base bg-primary-50 hover:bg-primary-100 focus:bg-primary-100;

    // &-label-extended {
    //   @apply lg:hidden;
    // }
  }
  &-action {
    @apply space-y-2 tracking-tight text-sm lg:text-base;
  }
  &-sale {
    @apply px-1.5 py-1 rounded tracking-tighter leading-none text-base lg:text-2xl bg-primary-500 text-white;
  }
}
</style>
