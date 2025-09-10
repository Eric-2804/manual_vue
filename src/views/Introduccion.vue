<template>
    <section class="docs-container">
        <h1>📘 Manual de Vue 3 para Principiantes</h1>

        <!-- Introducción -->
        <DocCard title="👋 Introducción" description="¿Qué es Vue 3?">
            <p>
                Vue (se pronuncia como <i>view</i>) es un <b>framework de JavaScript</b>
                que sirve para crear <b>interfaces de usuario</b>. Usa HTML, CSS y JS de
                siempre, pero les da superpoderes para trabajar de forma <b>más clara y organizada</b>.
            </p>

            <p>
                Lo mejor: Vue es <b>reactivo</b>. Si un dato cambia en tu JavaScript, la
                pantalla se actualiza automáticamente sin que tengas que tocar el DOM.
            </p>

            <h3>Ejemplo rápido</h3>
            <pre><code>import { createApp, ref } from 'vue'

createApp({
  setup() {
    return { count: ref(0) }
  }
}).mount('#app')</code></pre>

            <pre><code>&lt;div id="app"&gt;
  &lt;button @click="count++"&gt;
    Contador: {{ count }}
  &lt;/button&gt;
&lt;/div&gt;</code></pre>

            <p>
                👉 Resultado: un contador que sube cada vez que haces clic. ¡Así de simple!
            </p>
        </DocCard>

        <!-- Prerrequisitos -->
        <DocCard title="📚 Prerrequisitos" description="Qué necesitas saber antes">
            <p>
                Antes de empezar con Vue, asegúrate de conocer lo básico de
                <b>HTML, CSS y JavaScript</b>. No necesitas ser un experto, pero sí tener
                una idea de cómo funcionan.
            </p>
            <p>
                Si nunca has hecho frontend, lo mejor es aprender esos fundamentos y luego
                volver a Vue. Créeme, ¡te será mucho más fácil!
            </p>
        </DocCard>

        <!-- El marco progresivo -->
        <DocCard title="🌍 El Marco Progresivo" description="¿Por qué Vue es tan flexible?">
            <p>
                Vue es progresivo: significa que <b>crece contigo</b>. Puedes usarlo para:
            </p>
            <ul>
                <li>🌐 Dar vida a un HTML estático.</li>
                <li>🧩 Insertar un componente en otra web.</li>
                <li>⚡ Crear una app completa de una sola página (SPA).</li>
                <li>💻 Renderizar en servidor (SSR) o generar sitios estáticos (SSG).</li>
                <li>📱 Incluso apps móviles o de escritorio.</li>
            </ul>
            <p>
                Lo importante: <b>los conceptos básicos son siempre los mismos</b>. Lo que
                aprendas ahora servirá en proyectos grandes o pequeños.
            </p>
        </DocCard>

        <!-- Componentes de un solo archivo -->
        <DocCard title="📦 Componentes de un solo archivo" description="SFC en Vue">
            <p>
                En proyectos modernos usamos archivos <code>.vue</code>, llamados
                <b>Single File Components (SFC)</b>. Cada componente tiene:
            </p>
            <ul>
                <li>🔹 <b>JavaScript</b> → la lógica</li>
                <li>🔹 <b>HTML</b> → la estructura</li>
                <li>🔹 <b>CSS</b> → los estilos</li>
            </ul>

            <pre><code>&lt;script setup&gt;
import { ref } from 'vue'
const count = ref(0)
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click="count++"&gt;Contador: {{ count }}&lt;/button&gt;
&lt;/template&gt;

&lt;style scoped&gt;
button { font-weight: bold; }
&lt;/style&gt;</code></pre>
        </DocCard>

        <!-- Estilos de API -->
        <DocCard title="🧑‍💻 Estilos de API" description="Options API vs Composition API">
            <h3>1. Options API (clásica)</h3>
            <pre><code>&lt;script&gt;
export default {
  data() {
    return { count: 0 }
  },
  methods: {
    incrementar() { this.count++ }
  },
  mounted() {
    console.log("Contador inicial:", this.count)
  }
}
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click="incrementar"&gt;Contador: {{ count }}&lt;/button&gt;
&lt;/template&gt;</code></pre>

            <h3>2. Composition API (moderna)</h3>
            <pre><code>&lt;script setup&gt;
import { ref, onMounted } from 'vue'
const count = ref(0)
function incrementar() { count.value++ }
onMounted(() => {
  console.log("Contador inicial:", count.value)
})
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click="incrementar"&gt;Contador: {{ count }}&lt;/button&gt;
&lt;/template&gt;</code></pre>

            <p>
                👉 Ambas hacen lo mismo.
                - La <b>Options API</b> es más fácil para empezar o proyectos simples.
                - La <b>Composition API</b> es más flexible para proyectos grandes.
            </p>
        </DocCard>
    </section>
</template>

<script setup>
import DocCard from "../components/DocCard.vue"
</script>

<style scoped>
.docs-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 1.5rem;
}

.docs-container h1 {
    text-align: center;
    margin-bottom: 2rem;
}
</style>
