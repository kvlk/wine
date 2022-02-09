<script setup>
import { ref } from 'vue'

import AHeading from './AHeading.vue'

import MInfoName from './MInfoName.vue'
import MOfferBox from './MOfferBox.vue'
import MInfoDescription from './MInfoDescription.vue'

defineProps({
  title: String
})
</script>

<template>
  <div class="o-product-details">
    <!-- a-image -->
    <!-- [a-badge-sale] -->
    <!-- a-badge-code -->
    <MInfoName />
    <MInfoDescription />
    <MOfferBox />
    <!-- m-info-name -->
    <!-- a-badge-icon -->
    <!-- lg:a-badge-expert -->
  </div>
</template>

<style>
.o-product-details {
  @apply px-4 lg:px-7 py-10;
}
</style>
