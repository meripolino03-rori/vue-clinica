<template>
  <div id="app">
    <AppNavbar />
    <RouterView />
    <AppFooter />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import AppNavbar from './components/layout/AppNavbar.vue'
import AppFooter from './components/layout/AppFooter.vue'
</script>