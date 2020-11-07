import Vue from 'vue';
import VueRouter, { NavigationGuardNext, Route, RouteConfig } from 'vue-router';
import { countryBeforeEnter, countryDetailBeforeEnter } from '@/services/covid-data.quard';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    // name: 'home',
    path: '/home',
    component: () => import('@/views/Covid/World.vue'),
  },
  {
    path: '/countries',
    // name: 'list',
    // meta: { slide: 0 },
    beforeEnter: countryBeforeEnter,
    component: () => import('@/views/Covid/Countries.vue'),
    // component: () => import('@/views/Covid/Page.vue'),
  },
  {
    // name: 'country-detail',
    // meta: { slide: 1 },
    path: '/countries/:countryCode',
    beforeEnter: countryDetailBeforeEnter,
    component: () => import('@/views/Covid/CountryDetail.vue'),
    // component: () => import('@/views/Covid/Page.vue'),
  },
  {
    path: '/*',
    redirect: '/home',
  },
  {
    path: '/',
    redirect: '/home',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
