<template>
  <section>
    <!-- Barra de búsqueda -->
    <div class="search-container">
      <input type="text" placeholder="Buscar... (CTRL + K)" />
      <button>🔍</button>
    </div>

    <!-- Navbar -->
    <nav>
      <router-link to="/css">
        <span>🎨</span>CSS
      </router-link>
      <router-link to="/javascript">
        <span>⚡</span>JavaScript
      </router-link>
      <router-link to="/ecosistema">
        <span>🌐</span>Ecosistema
      </router-link>
      <router-link to="/terminal">
        <span>⌘</span>Terminal
      </router-link>
    </nav>

    <!-- Contenido de prueba -->
    <main>
      <h2>Bienvenido a la guía de Vue 🎉</h2>
      <p>Aquí podrás aprender Vue paso a paso con ejemplos prácticos.</p>
    </main>
  </section>
</template>

<style scoped>
/* Fondo general */
section {
  min-height: 100vh;
  background: radial-gradient(circle at top left, #1e293b, #0f172a);
  color: white;
  font-family: Arial, sans-serif;
}

/* Barra de búsqueda */
.search-container {
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: #111827;
  box-shadow: 0 2px 5px rgba(0,0,0,0.3);
}

.search-container input {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 20px;
  outline: none;
  font-size: 16px;
  background: #1f2937;
  color: #e5e7eb;
}

.search-container input::placeholder {
  color: #9ca3af;
}

.search-container button {
  margin-left: 10px;
  padding: 10px 15px;
  border: none;
  background-color: #42b883;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.2s ease;
}

.search-container button:hover {
  background-color: #2c9e6f;
}

/* Navbar */
nav {
  display: flex;
  justify-content: space-around;
  background-color: #1f2937;
  padding: 10px 0;
  box-shadow: 0 2px 5px rgba(0,0,0,0.3);
}

nav a {
  text-decoration: none;
  color: #d1d5db;
  font-size: 14px;
  text-align: center;
  transition: color 0.2s ease;
}

nav a:hover {
  color: #42b883;
}

nav a span {
  display: block;
  font-size: 20px;
  margin-bottom: 3px;
}

/* Contenido */
main {
  padding: 20px;
  text-align: center;
}

main h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #42b883;
}
</style>
