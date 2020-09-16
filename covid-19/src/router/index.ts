import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { countryBeforeEnter } from '@/services/covid-country-data.quard';
// import { wordBeforeEnter } from '@/services/covid-world-data.quard';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    // path: '/covid',
    path: '/',
    name: 'covid-table',
    beforeEnter: countryBeforeEnter,
    component: () => import('@/views/Covid/covid.vue'), // TODO: rename country
  },
  {
    path: '/covid/:id',
    name: 'covid-detail',
    component: () => import('@/views/Covid/covid-detail.vue'),
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
