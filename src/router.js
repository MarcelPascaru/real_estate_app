import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {path: '/', name: 'home', component: () => import('./components/HomeComponent.vue')},
    {path: '/login', name: 'login', component: () => import('./components/LoginComponent.vue')},
    {path: '/register', name: 'register', component: () => import('./components/RegisterComponent.vue')},
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router

