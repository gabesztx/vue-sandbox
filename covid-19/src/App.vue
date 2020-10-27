<template>
  <div class="main-content">
    <router-view/>
    <!--<router-view :pagePos="pagePos" />-->
  </div>
</template>

<script lang="ts">
  import router from '@/router';
  import { ref } from '@vue/composition-api';

  export default {
    setup() {
      // const pagePos = ref(0);
      /*router.afterEach((to: Route, from: Route) => {
        // pagePos.value = to.meta.slide;
        console.log('afterEach');
      });*/
     /* router.beforeEach((to: Route, from: Route, next: NavigationGuardNext) => {
        console.log('beforeEach');
        next();
      });*/

      /*router.beforeResolve((to: Route, from: Route, next: NavigationGuardNext) => {
        console.log('beforeResolve');
        next();
      });*/

      return {
        // pagePos,
      };
    },
  };
</script>
