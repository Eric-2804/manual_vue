<template>
  <section class="docs-container">
    <h1>🖼️ Renderizado en Vue</h1>

    <DocCard title="✅ Condicionales" description="Mostrar u ocultar elementos">
      <p>Aquí irá el contenido sobre v-if, v-else y v-show.</p>
    </DocCard>

    <DocCard title="🔁 Listas" description="Renderizar múltiples elementos">
      <p>Aquí irá el contenido sobre v-for y listas dinámicas.</p>
    </DocCard>
  </section>
</template>

<script setup>
import DocCard from "../components/DocCard.vue"
</script>
