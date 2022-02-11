<script setup>
import { ref } from 'vue'

import AHeading from './AHeading.vue'
import ARating from './ARating.vue'
</script>

<template>
  <div class="m-info-name">
    <AHeading heading-level="3">
      Chateau de la Turmeliere, Muscadet Sevre et Maine Sur Lie AOP, 2020
    </AHeading>
    <ARating />
  </div>
</template>

<style>
.m-info-name {
  @apply 
    space-y-1.5 lg:space-y-2 xl:space-y-2.5
    pt-5 px-4 lg:p-0 
    lg:mb-8 
    bg-white lg:bg-transparent;
}
</style>
