import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { beforeEnter as covid19BeforeEnter } from '@/services/covid-19-tracking.quard';
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/input',
    name: 'Input',
    component: () => import('@/views/Input/input-sandbox.vue'),
  },
  {
    path: '/datepicker',
    name: 'Datepicker',
    component: () => import('@/views/Datetpicker/datepicker-sandbox.vue'),
  },
  {
    path: '/table',
    name: 'Table',
    component: () => import('@/views/Table/table-sandbox.vue'),
  },
  {
    path: '/select',
    name: 'Select',
    component: () => import('@/views/Select/select-sandbox.vue'),
  },
  {
    path: '/covid-19',
    name: 'Covid-19',
    component: () => import('@/views/Covid-19/covid-19.vue'),
    beforeEnter: covid19BeforeEnter,
  },
  {
    path: '/*',
    // redirect: '/covid-19',
    redirect: '/input',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
