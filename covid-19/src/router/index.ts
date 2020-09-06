import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { beforeEnter as covid19BeforeEnter } from '@/services/covid-19-tracking.quard';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/covid',
    name: 'Covid',
    beforeEnter: covid19BeforeEnter,
    component: () => import('@/views/Covid/covid.vue'),
  },
  {
    path: '/covid/:id',
    name: 'Detail',
    component: () => import('@/views/Covid/covid-detail.vue'),
  },
  {
    path: '/*',
    redirect: '/covid',
  },
  {
    path: '/',
    redirect: '/covid',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
