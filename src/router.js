import Vue from 'vue';
import VueRouter from 'vue-router';

import Page1Tien from '@/pages/Page1Tien';
import Page2Tien from '@/pages/Page2Tien';
import Page3Tien from '@/pages/Page3Tien';
import LoginTien from './LoginTien';

Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        name: 'login',
        component: LoginTien,
    },
    {
        path: '/',
        name: 'page1',
        component: Page1Tien,
        meta: {page:1},
    },
    {
        path: '/page-2',
        name: 'page2',
        component: Page2Tien,
        meta: {page:2},
    },
    {
        path: '/page-3',
        name: 'page3',
        component: Page3Tien,
        meta: {page:3},
    }
];
const router = new VueRouter({routes});
export default router;
