import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import App from "./App.vue"

// Views
import Home from "./views/Home.vue"
import Docs from "./views/Docs.vue"
import About from "./views/About.vue"

// Router
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: Home },
        { path: "/docs", component: Docs },
        { path: "/about", component: About },
    ],
})

createApp(App).use(router).mount("#app")

