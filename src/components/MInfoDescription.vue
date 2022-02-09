<script setup>
import { ref } from 'vue'

import AButton from './AButton.vue'
import AHeading from './AHeading.vue'
import ABadge from './ABadge.vue'
import AIcon from './AIcon.vue'
import ABorder from './ABorder.vue'

</script>

<template>
  <div class="m-info-description">    
    <AHeading heading-level="6">
      <small>О товаре</small>
    </AHeading>    
    <div>
      <p>Белое сухое вино, изготовленное из винограда сорта Мелонь де Бургонь, который произрастает на виноградниках в апелласьоне Мюскаде Севр э Мен. Сбор урожая проводится только по достижении ягодами оптимальной зрелости.</p>
    </div>
    <AButton class="a-button-outline">
      Развернуть
    </AButton>

    <div class="space-y-4 mt-5">
      <ABorder />

      <ABadge class="a-badge-action">
        <AIcon>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="white"/><path d="M8 16C12.416 16 16 12.416 16 8C16 3.584 12.416 -3.13323e-07 8 -6.99382e-07C3.584 -1.08544e-06 1.08544e-06 3.584 6.99382e-07 8C3.13323e-07 12.416 3.584 16 8 16ZM7.2 4L8.8 4L8.8 5.6L7.2 5.6L7.2 4ZM7.2 7.2L8.8 7.2L8.8 12L7.2 12L7.2 7.2Z" fill="#C2C0BF"/></svg>
        </AIcon>
        <span>Купили 86 раз за сутки</span>
      </ABadge>

      <ABorder />

      <AHeading heading-level="6">
        <small>Тип вина</small>
      </AHeading>
      <ABadge class="a-badge-expert">
        <span class="a-badge-expert-label-extended">Wine</span>
        98
      </ABadge>
    </div>

  </div>
</template>

<style lang="scss">
.m-info-description {
  @apply space-y-4 px-4 py-5 mt-2 lg:mt-0 lg:px-0 lg:py-0 rounded-lg lg:rounded-none text-sm lg:text-base bg-white lg:bg-transparent;

  .a-heading {
    @apply xs:sr-only lg:not-sr-only xl:sr-only; 
  }
}
</style>
