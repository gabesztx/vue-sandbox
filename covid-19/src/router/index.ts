import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { countryBeforeEnter } from '@/services/covid-country-data.quard';
import { worldBeforeEnter } from '@/services/covid-world-data.quard';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    // name: 'home',
    path: '/',
    component: () => import('@/views/Covid/Home.vue'),
    // beforeEnter: worldBeforeEnter,
  },
  {
    // name: 'country',
    path: '/country',
    meta: { slide: 0 },
    component: () => import('@/views/Covid/Country.vue'),
    // component: () => import('@/views/Covid/Page.vue'),
    beforeEnter: countryBeforeEnter,
  },
  {
    // name: 'country-detail',
    path: '/country/:id',
    meta: { slide: 1 },
    component: () => import('@/views/Covid/CountryDetail.vue'),
    // component: () => import('@/views/Covid/Page.vue'),
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
