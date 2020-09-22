import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { countryBeforeEnter } from '@/services/covid-country-data.quard';
import { worldBeforeEnter } from '@/services/covid-world-data.quard';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/world',
    name: 'covid-world',
    beforeEnter: worldBeforeEnter,
    component: () => import('@/views/Covid/covid-world.vue'),
  },
  {
    path: '/country',
    name: 'covid-country',
    beforeEnter: countryBeforeEnter,
    component: () => import('@/views/Covid/covid-country.vue'),
  },
/*  {
    path: '/country/:id',
    name: 'covid-detail',
    component: () => import('@/views/Covid/covid-country-detail.vue'),
  },*/
  {
    path: '/*',
    redirect: '/world',
  },
  {
    path: '/',
    redirect: '/world',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
