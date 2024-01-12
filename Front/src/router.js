import { createWebHistory, createRouter } from "vue-router";
import register from "./views/auth/register.vue";
import Login from "./views/auth/login.vue";

const routes = [
    {
        path: "/",
        name: "inicio",
        component: () => import("./views/inicio.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: Login

    },
    {
        path: "/register",
        name: "register",
        component: register,
        meta:{
            requiresGuest: true,
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;