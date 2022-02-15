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
    2xl:container xl:mx-auto
    flex flex-col lg:grid lg:grid-cols-24 lg:grid-rows-none 
    lg:px-7 pb-10 pt-0 lg:pt-10 
    bg-gray-100 lg:bg-transparent;

  .a-image {
    @apply 
      lg:col-start-1 lg:col-end-16 lg:row-start-2 lg:row-end-5 
      xl:col-start-1 xl:col-end-10 
      2xl:col-end-9;
  }
  .m-info-name {
    @apply 
      flex flex-col order-1 lg:block 
      lg:col-start-16 lg:col-end-25 
      xl:col-start-10 xl:col-end-18 xl:row-start-2 
      2xl:col-start-9 2xl:col-end-19 
      lg:ml-10 xl:ml-8 xl:mr-6;
  }
  .m-info-description {
    @apply 
      order-4 
      lg:col-start-16 lg:col-end-25 
      xl:col-start-10 xl:col-end-18 xl:row-start-3 
      2xl:col-start-9 2xl:col-end-19 
      lg:ml-10 xl:ml-8 xl:mr-6;
  }
  .m-offer-box {
    @apply 
      flex flex-col order-3 xl:block
      lg:col-start-16 lg:col-end-25 
      xl:col-start-18 xl:col-end-25 xl:row-start-2 xl:row-end-5 
      2xl:col-start-19
      lg:ml-10 xl:mb-auto;
  }
  .a-badge-code {
    @apply 
      lg:col-start-16 lg:col-end-25 
      xl:col-start-18 xl:col-end-25 xl:row-start-1 xl:items-start 
      2xl:col-start-19 
      lg:ml-10;
  }
}
</style>
