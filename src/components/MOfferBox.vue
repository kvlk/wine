<script setup>
import { ref } from 'vue'

import APrice from './APrice.vue'
import AButton from './AButton.vue'

import MMedia from './MMedia.vue'
</script>

<template>
  <div class="m-offer-box">
    <APrice>
      <ins>1 890 ₽</ins>
      <del>2 990 ₽</del>
    </APrice>
    <div class="m-offer-box-buttons">
      <AButton button-element="button" class="a-button-primary">
        Добавить в корзину
      </AButton>
      <AButton class="a-button-outline">
        Добавить в список
      </AButton>
    </div>
    <MMedia />
  </div>
</template>

<style lang="scss">
.m-offer-box {
  @apply space-y-6 lg:mb-7 p-4 lg:p-6 rounded-b-lg lg:rounded-4xl bg-white lg:bg-gray-50 lg:shadow-xs;

  .a-price {
    @apply block -mt-1 lg:-mb-1;
  }

  .a-button {
    @apply w-full h-14;
  }
}
.m-offer-box-buttons {
  @apply space-y-2;
}
</style>
