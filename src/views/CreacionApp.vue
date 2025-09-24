<template>
    <section class="docs-container">
        <h1>🛠️ Creación de una aplicación Vue</h1>

        <!-- Instancia de la aplicación -->
        <DocCard title="⚡ Instancia de la aplicación" description="El punto de partida de Vue">
            <p>
                Toda aplicación Vue comienza con <code>createApp()</code>.
                Este método crea la **instancia de aplicación**, que es la base de todo.
            </p>

            <pre><code>import { createApp } from 'vue'

const app = createApp({
  /* opciones del componente raíz */
})</code></pre>
        </DocCard>

        <!-- El componente raíz -->
        <DocCard title="📦 El componente raíz" description="La base de tu app">
            <p>
                Al crear la aplicación, debemos pasarle un componente raíz.
                Normalmente lo importamos desde <code>App.vue</code>:
            </p>

            <pre><code>import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)</code></pre>

            <p>
                Una app Vue real suele estar compuesta de muchos componentes organizados en árbol.
                Ejemplo de una app de tareas:
            </p>

            <pre><code>App (root)
├─ TodoList
│  └─ TodoItem
│     ├─ TodoDeleteButton
│     └─ TodoEditButton
└─ TodoFooter
   ├─ TodoClearButton
   └─ TodoStatistics</code></pre>
        </DocCard>

        <!-- Montar la aplicación -->
        <DocCard title="🚀 Montar la aplicación" description="Mostrar la app en el navegador">
            <p>
                Para que la app se vea en pantalla, hay que “montarla” en un elemento del DOM usando
                <code>.mount()</code>.
            </p>

            <pre><code>&lt;div id="app"&gt;&lt;/div&gt;

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')</code></pre>

            <p>
                Todo lo que esté en <code>App.vue</code> se renderizará dentro del <code>div#app</code>.
                Ese <b>contenedor no forma parte de la app</b>, solo sirve como punto de montaje.
            </p>
        </DocCard>

        <!-- Plantilla en el DOM -->
        <DocCard title="📝 Plantilla en el DOM" description="Usar HTML como plantilla raíz">
            <p>
                Si no usas compilación, también puedes definir la plantilla en el propio HTML:
            </p>

            <pre><code>&lt;div id="app"&gt;
  &lt;button @click="count++"&gt;{{ count }}&lt;/button&gt;
&lt;/div&gt;

import { createApp } from 'vue'

const app = createApp({
  data() {
    return { count: 0 }
  }
})

app.mount('#app')</code></pre>

            <p>
                Esto es útil si usas Vue en páginas estáticas o junto a frameworks del lado del servidor.
            </p>
        </DocCard>

        <!-- Configuración de la aplicación -->
        <DocCard title="⚙️ Configuración" description="Opciones globales de la aplicación">
            <p>
                Cada aplicación tiene un objeto <code>config</code> para ajustes globales.
                Por ejemplo, manejar errores en toda la app:
            </p>

            <pre><code>app.config.errorHandler = (err) => {
  console.error("Ocurrió un error:", err)
}</code></pre>

            <p>
                También puedes registrar componentes globales:
            </p>

            <pre><code>app.component('TodoDeleteButton', TodoDeleteButton)</code></pre>

            <p>
                👉 Importante: haz toda la configuración <b>antes</b> de llamar a <code>.mount()</code>.
            </p>
        </DocCard>

        <!-- Múltiples instancias -->
        <DocCard title="🔀 Varias aplicaciones en una página" description="Más de una instancia de Vue">
            <p>
                Vue permite crear múltiples instancias de aplicación en una misma página.
                Cada una será independiente:
            </p>

            <pre><code>const app1 = createApp({...})
app1.mount('#container-1')

const app2 = createApp({...})
app2.mount('#container-2')</code></pre>

            <p>
                Esto es útil si solo quieres usar Vue en ciertas partes de un sitio web en lugar de toda la página.
            </p>
        </DocCard>
    </section>
</template>

<script setup>
import DocCard from "../components/DocCard.vue"
</script>
