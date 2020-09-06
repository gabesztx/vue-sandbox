import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { covidBeforeEnter } from '@/services/covid-data.quard';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    // path: '/covid',
    path: '/',
    name: 'covid-table',
    beforeEnter: covidBeforeEnter,
    component: () => import('@/views/Covid/covid.vue'),
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
