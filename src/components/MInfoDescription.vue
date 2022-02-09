<script setup>
import { ref } from 'vue'

import AButton from './AButton.vue'
import AHeading from './AHeading.vue'
</script>

<template>
  <div class="m-info-description">    
    <AHeading heading-level="h6">
      <small>О товаре</small>
    </AHeading>    
    <div>
      <p>Белое сухое вино, изготовленное из винограда сорта Мелонь де Бургонь, который произрастает на виноградниках в апелласьоне Мюскаде Севр э Мен. Сбор урожая проводится только по достижении ягодами оптимальной зрелости.</p>
    </div>
    <AButton class="a-button-outline">
      Развернуть
    </AButton>
  </div>
</template>

<style lang="scss">
.m-info-description {
  @apply space-y-4 text-sm lg:text-base;

  .a-heading {
    @apply xs:sr-only lg:not-sr-only xl:sr-only; 
  }
}
</style>
