import Vue from 'vue';
import VueRouter, { NavigationGuardNext, Route, RouteConfig } from 'vue-router';
import { countryBeforeEnter, countryDetailBeforeEnter, wordBeforeEnter } from '@/core/services/covid-data.quard';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    // name: 'home',
    path: '/world',
    beforeEnter: wordBeforeEnter,
    component: () => import('@/views/World/World.vue'),
  },
  {
    path: '/countries',
    beforeEnter: countryBeforeEnter,
    component: () => import('@/views/Countries/Countries.vue'),
    // component: () => import('@/views/Covid/Page.vue'),
  },
  {
    // name: 'country-detail',
    // meta: { slide: 1 },
    path: '/countries/:countryCode',
    beforeEnter: countryDetailBeforeEnter,
    component: () => import('@/views/CountriesDetail/CountryDetail.vue'),
    // component: () => import('@/views/Covid/Page.vue'),
  },
  {
    path: '',
    redirect: '/world',
  },
  {
    path: '/*',
    redirect: '/world',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
