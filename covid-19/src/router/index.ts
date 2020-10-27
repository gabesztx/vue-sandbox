import Vue from 'vue';
import VueRouter, { NavigationGuardNext, Route, RouteConfig } from 'vue-router';
import { countryBeforeEnter, countryDetailBeforeEnter } from '@/services/covid-data.quard';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [

  {
    // name: 'home',
    path: '/home',
    component: () => import('@/views/Covid/Home.vue'),
  },

  {
    path: '/countries',
    // name: 'list',
    // meta: { slide: 0 },
    beforeEnter: countryBeforeEnter,
    component: () => import('@/views/Covid/Countres.vue'),
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

/*router.beforeEach((to: Route, from: Route, next: NavigationGuardNext) => {
  console.log('beforeEach');
  if (to.params.country) {
    console.log('vaaaan');
    // router.replace('/home');
    // next({path:'/'});
    /!*getCountryDetailData(to.params.country).then((res) => {
      if (res.data) {
        console.log('RES', res);
      } else {
        // console.log('NOOP');
        router.push({ path: `/list` });
      }
    });*!/
  } else {
    next();
  }

});*/


export default router;
