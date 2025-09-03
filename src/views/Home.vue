<template>
    <section>
        <h1>Bienvenido a la Guía de Vue 🎉</h1>
        <p>Aprende Vue paso a paso con ejemplos sencillos y divertidos.</p>
        <router-link to="/docs">
            <button class="btn">Empezar ahora 🚀</button>
        </router-link>
    </section>
</template>

<style scoped>
h1 {
    font-size: 2rem;
    color: #42b883;
}

p {
    font-size: 1.1rem;
    margin: 1rem 0;
}

.btn {
    background: #35495e;
    color: white;
    border: none;
    padding: 0.7rem 1.2rem;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
}

.btn:hover {
    background: #2c3e50;
}
</style>
