import Vue from 'vue';
import VueRouter, { NavigationGuardNext, Route, RouteConfig } from 'vue-router';
import { countryBeforeEnter, countryDetailBeforeEnter, wordBeforeEnter } from '@/core/services/covid-data.quard';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/world',
    beforeEnter: wordBeforeEnter,
    component: () => import('@/views/World/World.vue'),
  },
  {
    path: '/countries',
    name: '1',
    beforeEnter: countryBeforeEnter,
    component: () => import('@/views/Countries/Countries.vue'),
    // component: () => import('@/views/Covid/Page.vue'),
  },
  {
    name: '2',
    path: '/countries/:countryCode',
    beforeEnter: countryDetailBeforeEnter,
    component: () => import('@/views/CountriesDetail/CountryDetail.vue'),
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
