<template>
  <div id="app">
    <Navbar />
    <main class="content">
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
