<script setup>
import { ref } from 'vue'
import AHeading from './AHeading.vue'
import ARating from './ARating.vue'
</script>

<template>
<div class="m-info-name">
  <AHeading headingLevel="h3">
    Chateau de la Turmeliere, Muscadet Sevre et Maine Sur Lie AOP, 2020
  </AHeading>
  <ARating />
</div>
</template>

<style>
.m-info-name {
  @apply mb-4;
}
</style>
