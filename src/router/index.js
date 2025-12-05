// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Accueil from "@/view/Accueil.vue";
import Contact from "@/view/Contact.vue";


const routes = [
    {
        path: '/',
        name: "Accueil",
        meta: { title: 'Accueil' },
        component: Accueil,
    },
    {
        path: '/contact',
        name: "Contact",
        meta: { title: 'Contact' },
        component: Contact,
    },


    // la route "catch-all" change en Vue Router 4 :
    {
        path: '/:pathMatch(.*)*',
        name: 'Redirection accueil',
        redirect: '/',
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router