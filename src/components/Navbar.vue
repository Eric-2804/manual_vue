<template>
  <nav class="navbar">
    <h1 class="logo">📘 Vue Guía</h1>
    <ul class="menu">
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/docs">Documentación</router-link></li>
      <li><router-link to="/about">Acerca</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #42b883;
  padding: 1rem 2rem;
  color: white;
}

.logo {
  font-size: 1.2rem;
  font-weight: bold;
}

.menu {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.menu a {
  text-decoration: none;
  color: white;
  font-weight: 500;
}

.menu a.router-link-exact-active {
  border-bottom: 2px solid white;
}
</style>
