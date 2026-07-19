<template>
  <div id="app">
    <AppNavbar />
    <RouterView />
    <AppFooter />

    <SocialSidebar />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import AppNavbar from './components/layout/AppNavbar.vue'
import AppFooter from './components/layout/AppFooter.vue'
import SocialSidebar from './components/layout/SocialSidebar.vue'
</script>