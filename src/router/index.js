import { createRouter, createWebHistory } from 'vue-router'
import SobreMi from "@/layouts/SobreMi.vue";
import InicioInfo from "@/layouts/InicioInfo.vue";
import HabilidadesInfo from "@/layouts/HabilidadesInfo.vue";
import EducacionInfo from "@/layouts/EducacionInfo.vue";
import ExperianciaInfo from "@/layouts/ExperianciaInfo.vue";
import Proyectos from "@/layouts/Proyectos.vue";

const routes = [
  {
    path: '/',
    name: 'Ini',
    component: InicioInfo, 
  },
  {
    path: '/info',
    name: 'Info',
    component: SobreMi, 
  },
  {
    path: '/habilidades',
    name: 'Habilidad',
    component: HabilidadesInfo, 
  },
  {
    path: '/educacion',
    name: 'Educacion',
    component: EducacionInfo, 
  },
  {
    path: '/experiencias',
    name: 'Experiencia',
    component: ExperianciaInfo, 
  },
  {
    path: '/proyectos',
    name: 'Proyectos',
    component: Proyectos, 
  },
]

const router = createRouter({
  history: createWebHistory('/CV_SergioMerinoSaceda'),
  routes
})

export default router
