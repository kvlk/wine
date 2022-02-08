<script setup>
import { ref } from 'vue'
import AHeading from './AHeading.vue'
import MInfoName from './MInfoName.vue'

defineProps({
  title: String
})
</script>

<template>
  <div class="o-product-details">
    <!-- a-image -->
    <!-- [a-badge-sale] -->

    <!-- m-offer-box -->

    <!-- a-badge-code -->
    <MInfoName />
    <!-- m-info-name -->
    <!-- m-info-description -->
    <!-- a-button -->
    <!-- a-badge-icon -->
    <!-- lg:a-badge-expert -->
  </div>
</template>

<style>
.o-product-details {
  @apply px-4 lg:px-7 py-10;
}
</style>
