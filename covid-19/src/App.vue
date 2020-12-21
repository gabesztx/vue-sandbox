<template>
  <div class="main-content">
    <!--    <transition mode="" :enter-active-class="enterAnim" :leave-active-class="leaveAnim"></transition>-->
    <!--    <keep-alive></keep-alive>-->
    <!--    <router-view :page-id="pagePos"/>-->
    <router-view />
    <!--    <router-view />-->
    <!--<router-view :pagePos="pagePos" />-->
  </div>
</template>

<script lang="ts">
  import router from '@/router';
  import { NavigationGuardNext, Route } from 'vue-router';
  import Vue from 'vue';
  import { ref } from '@vue/composition-api';

  export default {
    // beforeRouteUpdate (to, from, next) {
    //   console.log('beforeRouteUpdate');
    //
    // },
    /* watch: {
     '$route'(to, from){
       console.log('Ssssss');
       // react to route changes...
     }
   },*/
    setup(props, ctx) {
      // console.log('ctx', ctx);
      // const enterAnim = ref('');
      // const leaveAnim = ref('');
      // const slideLeftRule = ['slideInLeft', 'slideOutRight'];
      // const slideRightRule = ['slideInRight', 'slideOutLeft'];
      /*  router.beforeEach((to: Route, from: Route, next: NavigationGuardNext<Vue>) => {
        let enterClass = '';
        let leaveClass = '';
        // enterClass = `animate__animated animate__slideInLeft`;
        // leaveClass = `animate__animated animate__slideOutRight`;
        const isLeft = from.name === '2' && to.name === '1';
        const isRight = from.name === '1' && to.name === '2';
        if (isLeft) {
          enterClass = `animate__animated animate__slideInLeft`;
          leaveClass = `animate__animated animate__slideOutRight`;
        }
        if (isRight) {
          enterClass = `animate__animated animate__slideInRight`;
          leaveClass = `animate__animated animate__slideOutLeft`;
        }
        enterAnim.value = enterClass;
        leaveAnim.value = leaveClass;
        next();
      });*/
      // const pagePos = ref(0);

      // router.beforeEach((to: Route, from: Route, next: NavigationGuardNext) => {
      //   // console.log(from.path, to.path);
      //   // console.log('beforeEach');
      //   next();
      // });
      //
      //
      // router.beforeResolve((to: Route, from: Route, next: NavigationGuardNext) => {
      //   console.log('beforeResolve');
      //   // next();
      // });
      //
      const pagePos = ref(1);
      /*router.afterEach((to: Route, from: Route) => {
      pagePos.value = to.meta;
    });*/

      return {
        pagePos,
        // enterAnim,
        // leaveAnim,
        // pagePos,
      };
    },
  };
</script>
