<template>
    <div class="card">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <slot />
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
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    margin: 1.5rem 0;
    transition: transform 0.2s ease;
}

.card:hover {
    transform: translateY(-5px);
}
</style>
