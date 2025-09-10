<template>
  <section class="docs-container">
    <h1>🧩 Componentes Básicos</h1>

    <DocCard title="📦 Creación de Componentes" description="Tu primer componente Vue">
      <p>Aquí irá cómo crear un componente simple.</p>
    </DocCard>

    <DocCard title="🔗 Comunicación" description="Props y Emits">
      <p>Aquí irá cómo pasar datos entre componentes con props y emits.</p>
    </DocCard>
  </section>
</template>

<script setup>
import DocCard from "../components/DocCard.vue"
</script>
