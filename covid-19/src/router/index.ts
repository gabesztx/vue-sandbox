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
    // component: () => import('@/views/Countries/Countries.vue'),
    component: () => import('@/views/Page.vue'),
    props: {
      slide: 1,
    },

    // import Page from '@/views/Page';
  },
  {
    path: '/countries/:countryCode',
    name: '2',
    beforeEnter: countryDetailBeforeEnter,
    // component: () => import('@/views/CountriesDetail/CountryDetail.vue'),
    component: () => import('@/views/Page.vue'),
    props: {
      slide: 2,
    },
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
