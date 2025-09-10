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
/* Fondo global oscuro */
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  /* 🎨 Fondo azul oscuro */
  background: #0d1b2a;
  color: #f9fafb;

  font-family: 'Inter', sans-serif;
  margin: 0;
}

.content {
  flex: 1;
  max-width: 900px;
  margin: auto;
  padding: 2rem;
}
</style>


