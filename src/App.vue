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
  background: #f9fafb;
  color: #333;
}
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1;
  max-width: 900px;
  margin: auto;
}
</style>
