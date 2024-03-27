import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/view/HomeView.vue";
import LoginView from "@/view/LoginView.vue";
import RegisterView from "@/view/RegisterView.vue";

const routes = [
    {path: '/', name: 'home', component: () => HomeView},
    {path: '/login', name: 'login', component: () => LoginView},
    {path: '/register', name: 'register', component: () => RegisterView},
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router

