import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { countryBeforeEnter } from '@/services/covid-country-data.quard';
import { worldBeforeEnter } from '@/services/covid-world-data.quard';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    // name: 'home',
    component: () => import('@/views/Covid/Home.vue'),
    // beforeEnter: worldBeforeEnter,
  },
  {
    path: '/country',
    // name: 'country',
    meta: { slide: 0 },
    component: () => import('@/views/Covid/Page.vue'),
    beforeEnter: countryBeforeEnter,
  },
  {
    path: '/country/:id',
    // name: 'country-detail',
    meta: { slide: 1 },
    component: () => import('@/views/Covid/Page.vue'),
  },
  {
    path: '/*',
    redirect: '/',
  },
  {
    path: '/',
    redirect: '/',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
