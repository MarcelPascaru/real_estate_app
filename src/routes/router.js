import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/view/HomeView.vue";
import LoginView from "@/view/LoginView.vue";
import RegisterView from "@/view/RegisterView.vue";
import ChatView from "@/view/ChatView.vue";
import BuyView from "@/view/BuyView.vue";

const routes = [
    {path: '/', name: 'home', component: () => HomeView},
    {path: '/login', name: 'login', component: () => LoginView},
    {path: '/register', name: 'register', component: () => RegisterView},
    {path: '/chat', name: 'chat', component: () => ChatView},
    {path: '/buy', name: 'buy', component: () => BuyView},
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router

