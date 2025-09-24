<template>
  <section class="docs-container">

    <div class="manual-titulo">
    <img src="../assets/introduccion/menu.png" alt="">
    <h1>Manual de Vue 3 para Principiantes</h1>
  </div>

      <div class="contenido">


      <DocCard>
        <div class="titulo">
      <img src="../assets/introduccion/card1.png" alt="">
      <h2>Introducción</h2> 
    </div>

      <div class="subtitulo">
      <img src="../assets/vue.png" alt="">
      <h3>¿Qué es Vue 3?</h3>
       </div>

      <p>
        Vue es un <b>framework progresivo</b> de JavaScript para construir interfaces de usuario modernas.
        Se basa en HTML, CSS y JS, y usa un modelo declarativo y orientado a componentes.
      </p>
      <p>
        En Vue 3 se presenta la <b>Composition API</b>, que permite organizar la lógica de componentes
        de forma más clara usando <code>&lt;script setup&gt;</code>.
      </p>
    </DocCard>






    <!-- Instalación -->
    <DocCard title="⚙️ Instalación" description="Cómo instalar Vue en Windows y Linux">
      <h3>Windows</h3>
      <p>1. Descarga Node.js LTS desde <a href="https://nodejs.org" target="_blank">nodejs.org</a>.</p>
      <p>2. Instálalo y verifica con <code>node -v</code> y <code>npm -v</code>.</p>

      <h3>Linux (Debian/Ubuntu)</h3>
      <p>1. Ejecuta en la terminal:</p>
      <pre><code>sudo apt update
sudo apt install nodejs npm</code></pre>
      <p>2. Verifica con <code>node -v</code> y <code>npm -v</code>.</p>

      <h3>Crear un proyecto Vue</h3>
      <pre><code>npm create vue@latest</code></pre>
    </DocCard>

    <!-- Conceptos Básicos -->
    <DocCard title="📦 Conceptos Básicos" description="Tu primera app con Vue">
      <pre><code>import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')</code></pre>

      <p>Usamos <code>ref()</code> para definir datos reactivos:</p>

      <pre><code>import { ref } from 'vue'
const mensaje = ref('Hola Mundo')</code></pre>
    </DocCard>

    <!-- Renderizado -->
    <DocCard title="🎨 Renderizado" description="Cómo mostrar datos en la plantilla">
      <ul>
        <li>Interpolación: <code>{{ mensaje }}</code></li>
        <li>Atributos dinámicos: <code>&lt;a :href="url"&gt;</code></li>
        <li>Condicionales: <code>v-if</code>, <code>v-else</code></li>
        <li>Listas: <code>v-for</code></li>
        <li>Eventos: <code>@click</code></li>
      </ul>
    </DocCard>

    <!-- Componentes -->
    <DocCard title="🧩 Componentes" description="Reutiliza piezas de interfaz">
      <pre><code>&lt;script setup&gt;
import { ref } from 'vue'
const count = ref(0)
function incrementar() { count.value++ }
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click="incrementar"&gt;Contador: {{ count }}&lt;/button&gt;
&lt;/template&gt;</code></pre>
    </DocCard>

    <!-- Uso Avanzado -->
    <DocCard title="🚀 Uso Avanzado" description="Composables, Vue Router y Pinia">
      <h3>Composables</h3>
      <p>Funciones reutilizables como <code>useMouse()</code> o <code>useCounter()</code>.</p>

      <h3>Vue Router</h3>
      <pre><code>npm install vue-router@4</code></pre>

      <h3>Pinia</h3>
      <pre><code>npm install pinia</code></pre>
    </DocCard>

    <!-- Recursos -->
    <DocCard title="📚 Recursos" description="Sitios recomendados">
      <ul>
        <li><a href="https://vuejs.org/guide/" target="_blank">Guía oficial Vue 3</a></li>
        <li><a href="https://router.vuejs.org/" target="_blank">Vue Router</a></li>
        <li><a href="https://pinia.vuejs.org/" target="_blank">Pinia</a></li>
        <li><a href="https://developer.mozilla.org/" target="_blank">MDN Web Docs</a></li>
      </ul>
    </DocCard>








    </div>
  </section>
</template>

<script setup>
import DocCard from "../components/DocCard.vue"
</script>

<style scoped>

.docs-container {
  min-height: 100vh; 
  margin: 0; 
  padding: 40px 20px;
  background-color: #111827;
  color: #f9fafb;
  font-family: "Segoe UI", Arial, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 30px; 
}


.manual-titulo{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: 0 0 5px #42b883, 0 0 10px #42b883, 0 0 20px #2c9e6f;;
}


.manual-titulo img{
height: 50px;
}

.manual-titulo h1 {
  color: white;
  font-family: 'Courier New', Courier, monospace;
  transition: text-shadow 0.3s ease;
    text-shadow: 0 0 5px #42b883, 0 0 10px #42b883, 0 0 20px #2c9e6f;
}


.titulo {
display: flex;
justify-content: center;
}



</style>
