<template>
    <div class="card">
        <h2>{{ title }}</h2>
        <p class="description">{{ description }}</p>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    description: String
})
</script>

<style scoped>
.card {
    background: #1f2937;
    /* gris oscuro, combina con el nav */
    color: #ffffff;
    /* texto blanco */
    border: 1px solid #374151;
    /* gris más claro para contraste */
    border-radius: 15px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
    transform: scale(1.02);
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.6);
}

h2 {
    margin: 0 0 10px 0;
    font-size: 1.5rem;
    color: #42b883;
    /* verde vue para títulos */
}

.description {
    font-size: 0.95rem;
    color: #d1d5db;
    /* gris claro para descripciones */
    margin-bottom: 10px;
}

.content {
    margin-top: 10px;
}
</style>
