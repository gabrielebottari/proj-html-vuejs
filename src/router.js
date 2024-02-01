import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import SuccessStory from './pages/SuccessStory.vue';
import NotFound from './pages/NotFound.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/SuccessStory',
            name: 'SuccessStory',
            component: SuccessStory
        },
        {
            path:'/:pathMatch(.*)*',
            name: 'error',
            component: NotFound,
        }

    ]
});

export { router };