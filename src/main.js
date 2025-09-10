import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import App from "./App.vue"
import './style.css'

// Views principales
import Home from "./views/Home.vue"
import Introduccion from "./views/Introduccion.vue"
import InicioRapido from "./views/InicioRapido.vue"

// Lo esencial
import CreacionApp from "./views/CreacionApp.vue"
import SintaxisPlantilla from "./views/SintaxisPlantilla.vue"
import PropiedadesEstilo from "./views/PropiedadesEstilo.vue"
import Renderizado from "./views/Renderizado.vue"
import EventosForm from "./views/EventosForm.vue"
import ReactividadAvanzada from "./views/ReactividadAvanzada.vue"
import ComponentesBasicos from "./views/ComponentesBasicos.vue"
import CicloVida from "./views/CicloVida.vue"

// Router
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: Home },
        { path: "/introduccion", component: Introduccion },
        { path: "/inicio-rapido", component: InicioRapido },
        { path: "/creacion-app", component: CreacionApp },
        { path: "/sintaxis-plantilla", component: SintaxisPlantilla },
        { path: "/propiedades-estilo", component: PropiedadesEstilo },
        { path: "/renderizado", component: Renderizado },
        { path: "/eventos-form", component: EventosForm },
        { path: "/reactividad-avanzada", component: ReactividadAvanzada },
        { path: "/componentes-basicos", component: ComponentesBasicos },
        { path: "/ciclo-vida", component: CicloVida },
    ],
})

createApp(App).use(router).mount("#app")
