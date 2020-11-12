import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { countryBeforeEnter, countryDetailBeforeEnter, wordBeforeEnter } from '@/services/covid-data.quard';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
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
