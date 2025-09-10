<template>
  <div class="app">
    <Navbar />
    <main class="p-6">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue"
</script>

<style>
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
}
</style>