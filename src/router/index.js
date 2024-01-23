import { createRouter, createWebHashHistory } from "vue-router";
import affixList from '../pages/affixList.vue';
import cultivate from '../pages/cultivate.vue';


const routes = [
    {
        path: "/",
        component: affixList,
    },
    {
        path: "/cultivate",
        component: cultivate,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;