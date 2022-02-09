<script setup>
import { ref } from 'vue'

import AHeading from './AHeading.vue'

import MRating from './MRating.vue'
</script>

<template>
  <div class="m-info-name">
    <AHeading heading-level="3">
      Chateau de la Turmeliere, Muscadet Sevre et Maine Sur Lie AOP, 2020
    </AHeading>
    <MRating />
  </div>
</template>

<style>
.m-info-name {
  @apply space-y-1.5 lg:space-y-2 pt-5 px-4 lg:p-0 xl:space-y-2.5 lg:mb-4 bg-white lg:bg-transparent;
}
</style>
