import { createRouter, createWebHashHistory } from "vue-router";
import affixList from '../pages/affixList.vue';


const routes = [
    {
        path: "/",
        component: affixList,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;