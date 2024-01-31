import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import Page2 from './pages/Page2.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/page2',
            name: 'page2',
            component: Page2
        },

    ]
});

export { router };