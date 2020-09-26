<template>
  <div class="page-content">
    <div class="pages" v-bind:style="{ transform: `translate3d(${slidePos}, 0, 0)` }">
      <div class="page">
        <v-page-country></v-page-country>
      </div>
      <div class="page">
        <v-page-country-detail></v-page-country-detail>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import router from '@/router';
  import { computed } from '@vue/composition-api';

  export default {
    props: {
      pagePos: Number,
    },
    setup(props) {
      const slidePos = computed(() => `${props.pagePos * -100}%`);
      const onClick = (url) => {
        router.push({ path: url });
        // router.replace(url);
      };

      /*  const stopWatch = watch(
          () => props.pagePos,
          (newVal) => {
            console.log('change: ', newVal);
          }
        );

        onUnmounted(() => {
          // stopWatch();
        });*/

      return {
        slidePos,
        onClick,
      };
    },
  };

  /*methods: {
   // --------
   // ENTERING
   // --------

   beforeEnter: function (el) {
     console.log('beforeEnter');
     // ...
   },
   // the done callback is optional when
   // used in combination with CSS
   enter: function (el, done) {
     // ...
     console.log('enter');
     done();
   },
   afterEnter: function (el) {
     console.log('afterEnter');
     // ...
   },
   enterCancelled: function (el) {
     console.log('enterCancelled');
     // ...
   },

   // --------
   // LEAVING
   // --------

   beforeLeave: function (el) {
     console.log('beforeLeave');
     // ...
   },
   // the done callback is optional when
   // used in combination with CSS
   leave: function (el, done) {
     console.log('leave');
     // ...
     done();
   },
   afterLeave: function (el) {
     console.log('afterLeave');
     // ...
   },
   // leaveCancelled only available with v-show
   leaveCancelled: function (el) {
     console.log('beforeLeave');
     // ...
   },
 },*/
</script>
