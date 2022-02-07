<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})
</script>
<script>
// import { defineComponent } from '@vue/composition-api'

// export default defineComponent({
//   setup() {
    
//   },
// })

export default {}
</script>

<template>
  <div class="o-header">
    <div class="o-header-dummy">
      {{ msg }}
    </div>
  </div>
</template>

<style>
.o-header {
  @apply box-content flex justify-center items-center h-10 lg:h-32 py-2 lg:py-3 px-6 bg-gray-100;
}
.o-header-dummy {
  @apply container text-center text-2xl lg:text-6xl xl:text-8xl font-black text-gray-300 uppercase;
}
</style>
