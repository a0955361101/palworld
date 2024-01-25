import { createRouter, createWebHashHistory } from "vue-router";
import affixList from '../pages/affixList.vue';
import cultivate from '../pages/cultivate.vue';
import library from '../pages/library.vue';


const routes = [
    {
        path: "/",
        component: affixList,
    },
    {
        path: "/cultivate",
        component: cultivate,
    },
    {
        path: "/library",
        component: library,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;