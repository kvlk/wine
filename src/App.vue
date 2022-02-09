<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import OHeader from './components/OHeader.vue'
import OProductDetails from './components/OProductDetails.vue'
</script>

<template>
  <OHeader msg="Header" />
  <OProductDetails />
</template>

<style>
html {
  @apply font-medium text-gray-800;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  @apply mt-0 mx-auto mb-10;
}

#app {
}

</style>
