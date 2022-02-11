<script setup>
import { ref } from 'vue'

import AImage from './AImage.vue'
import AHeading from './AHeading.vue'
import ABadge from './ABadge.vue'
import ABadgeCode from './ABadgeCode.vue'
import ALink from './ALink.vue'
import AIcon from './AIcon.vue'
import ABorder from './ABorder.vue'

import MInfoName from './MInfoName.vue'
import MOfferBox from './MOfferBox.vue'
import MInfoDescription from './MInfoDescription.vue'
</script>

<template>
  <div class="o-product-details">
    <AImage />

    <ABadgeCode code-number="876241" link="#share" v-if="$grid.lg" />

    <MInfoName />

    <MOfferBox />

    <MInfoDescription />
  </div>
</template>

<style lang="scss">
.o-product-details {
  @apply 
    flex flex-col lg:grid lg:grid-cols-12 lg:grid-rows-none 
    lg:px-7 pb-10 pt-0 lg:pt-10 
    bg-gray-100 lg:bg-transparent;

  .a-image {
    @apply 
      lg:col-start-1 lg:col-end-8 lg:row-start-1 lg:row-end-6 
      xl:col-start-1 xl:col-end-6; 
  }
  .m-info-name {
    @apply 
      flex flex-col order-1 lg:block 
      lg:col-start-8 lg:col-end-13 
      xl:col-start-6 xl:col-end-10 
      lg:ml-10 xl:ml-8 xl:mr-6;
  }
  .m-info-description {
    @apply 
      order-4 
      lg:col-start-8 lg:col-end-13 
      xl:col-start-6 xl:col-end-10 xl:row-start-2 
      lg:ml-10 xl:ml-8 xl:mr-6;
  }
  .m-offer-box {
    @apply 
      flex flex-col order-3 xl:block
      lg:col-start-8 lg:col-end-13 
      xl:col-start-10 xl:col-end-13 
      lg:ml-10 xl:mb-auto;
  }
  .a-badge-code {
    @apply 
      lg:col-start-8 lg:col-end-13 
      xl:col-start-10 xl:col-end-13 xl:row-start-1 xl:items-start 
      lg:ml-10;
  }
}
</style>
