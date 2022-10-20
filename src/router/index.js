import { createRouter, createWebHistory } from "vue-router";
import PageMaison from '@/pages/PageMaison.vue'
import Conv from '@/pages/Conv.vue'
import store from '@/store/index.js'

const routes = [
    {
        name: 'PageMaison',
        path: '/',
        component: PageMaison,
    },
    {
        name: 'Conv',
        path: '/conv',
        component: Conv,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((from) => {
    if (store.state.user === null && from.name != 'PageMaison' ){
        return {name:'PageMaison'}
    }
})

export default router;