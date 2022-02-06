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
  font-family: system, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Segoe WP', Roboto, Ubuntu, Oxygen, Cantarell, 'Fira Sans', 'Helvetica Neue', Helvetica, 'Lucida Grande', 'Droid Sans', Tahoma, 'Microsoft Sans Serif', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  min-width: 320px;
  margin: 0 auto 40px;
}

#app {
}

</style>
