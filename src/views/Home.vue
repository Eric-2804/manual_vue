<template>
    <section>

        <div class="titulo">
            <img src="../assets/vue.png" alt="">
            <h1>Manual Vue</h1>
        </div>
        <div class="search-container">
            <input type="text" placeholder="Buscar... (CTRL + K)" />
            <button>🔍</button>
        </div>

        <nav>
            <router-link to="/introduccion">
                <span><img src="../assets/icons/icons1.png" alt=""></span> Introducción
            </router-link>
            <router-link to="/inicio-rapido">
                <span><img src="../assets/icons/icons2.png" alt=""></span> Inicio Rápido
            </router-link>
            <router-link to="/creacion-app">
                <span><img src="../assets/icons/icons3.png" alt=""></span> Creación de App
            </router-link>
            <router-link to="/sintaxis-plantilla">
                <span><img src="../assets/icons/icons4.png" alt=""></span> Sintaxis Plantilla
            </router-link>
            <router-link to="/propiedades-estilo">
                <span><img src="../assets/icons/icons5.png" alt=""></span> Propiedades & Estilo
            </router-link>
            <router-link to="/renderizado">
                <span><img src="../assets/icons/icons6.png" alt=""></span> Renderizado
            </router-link>
            <router-link to="/eventos-form">
                <span><img src="../assets/icons/icons7.png" alt=""></span> Eventos & Formularios
            </router-link>
            <router-link to="/reactividad-avanzada">
                <span><img src="../assets/icons/icons8.png" alt=""></span> Reactividad Avanzada
            </router-link>
            <router-link to="/componentes-basicos">
                <span><img src="../assets/icons/icons9.png" alt=""></span> Componentes Básicos
            </router-link>
            <router-link to="/ciclo-vida">
                <span><img src="../assets/icons/icons10.png" alt=""></span> Ciclo de Vida
            </router-link>
        </nav>


        <div class="contenido">

            <div class="card">
                <img src="../assets/imgcard/card1.webp" alt="">
            </div>
            <div class="card">
                <img src="../assets/imgcard/card2.jpeg" alt="">
            </div>
            <div class="card">
                <img src="../assets/imgcard/card3.jpg" alt="">
            </div>
            <div class="card">
                <img src="../assets/imgcard/card4.png" alt="">
            </div>
            <div class="card">
                <img src="../assets/imgcard/card5.jpg" alt="">
            </div>
            <div class="card">
                <img src="../assets/imgcard/card6.png" alt="">
            </div>

        </div>

    </section>
</template>

<style scoped>
section {
    min-height: 200vh;
    background: radial-gradient(circle at top left, #1e293b, #0f172a);
    color: white;
    font-family: Arial, sans-serif;
}

.titulo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    padding-top: 20px;
    padding-bottom: 20px;
}

.titulo img {
    width: 50px;
    height: auto;
    border-radius: 10px;
    margin-right: 3px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.titulo h1 {

    color: white;
    margin-right: 100px;
    font-family: 'Courier New', Courier, monospace;
    transition: text-shadow 0.3s ease;
    text-shadow: 0 0 5px #42b883, 0 0 10px #42b883, 0 0 20px #2c9e6f;
}



.titulo h1:hover {
    text-shadow: 0 0 10px #42b883, 0 0 20px #42b883, 0 0 40px #2c9e6f;
}

.titulo img:hover {
    transform: scale(1.20);
    /* agranda un poquito */
}

.search-container {
    display: flex;
    align-items: center;
    padding: 15px;
    background-color: #111827;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
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


nav {
    display: flex;
    justify-content: space-around;
    background-color: #1f2937;
    padding: 10px 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

nav img {

    height: 30px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}


nav img:hover {
    transform: scale(1.20);
}

nav a {
    text-decoration: none;
    color: #d1d5db;
    font-size: 14px;
    text-align: center;
    transition: color 0.2s ease;
    font-family: 'Courier New', Courier, monospace;
}

nav a:hover {
    color: #42b883;
}

nav a span {
    display: block;
    font-size: 20px;
    margin-bottom: 3px;
}

.contenido {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 20px;
    margin: 50px;
}


.card {
    background-color: #ffffff;
    border: 1px solid #000000;
    border-radius: 20px;
    text-align: center;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20px;
}

.card img {
    height: 250px;
    border-radius: 10px;
}
</style>
