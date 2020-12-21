<template>
  <div class="page-content" :class="anim">
    <div class="page page1">
      <b-button @click="onClick1">page 1</b-button>
      <page-1></page-1>
    </div>
    <div class="page page2">
      <b-button @click="onClick2">page 2</b-button>
    </div>
    <!--    <div class="page"></div>-->
    <!--    <b-button @click="onClick2">page 2</b-button>-->
    <!--    <div>Page Content</div>-->
    <!--    <div class="pages" v-bind:style="{ transform: `translate3d(${slidePos}, 0, 0)` }">
          <div class="page">
            &lt;!&ndash;        <v-page-country></v-page-country>&ndash;&gt;
          </div>
          <div class="page">
            &lt;!&ndash;        <v-page-country-detail></v-page-country-detail>&ndash;&gt;
          </div>
        </div>-->
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import router from '@/router';
  import { computed, onUnmounted, ref, watch } from '@vue/composition-api';
  import { NavigationGuardNext, Route } from 'vue-router';
  import Countries from '@/views/Countries/Countries.vue';

  export default {
    components: {
      'page-1': Countries,
    },
    props: {
      pageId: Number,
    },
    setup(props) {
      console.log(props.pageId);
      // const slidePos = c
      // coomputed(() => `${props.pagePos * -100}%`);
      // const slidePos = computed(() => `${props.pagePos * -100}%`);
      const anim = ref('');
      const onClick1 = (url) => {
        anim.value = 'animated animSlideLeft';
        // console.log('click');
        // router.push({path: `/countries`});
        // router.push({ path: url });
        // router.replace(url);
      };
      const onClick2 = (url) => {
        anim.value = 'animated animSlideRight';
        // router.push({path: `/countries/123345`});
        // router.push({ path: url });
        // router.replace(url);
      };

      const stopWatch = watch(
        () => props.pageId,
        (newVal) => {
          update(newVal);
        }
      );

      // const enterAnim = ref('');
      // const leaveAnim = ref('');
      // const slideLeftRule = ['slideInLeft', 'slideOutRight'];
      // const slideRightRule = ['slideInRight', 'slideOutLeft'];
      const update = (num) => {
        // let enterClass = '';
        // let leaveClass = '';
        // // enterClass = `animate__animated animate__slideInLeft`;
        // // leaveClass = `animate__animated animate__slideOutRight`;
        // const isLeft = from.name === '2' && to.name === '1';
        // const isRight = from.name === '1' && to.name === '2';
        // if (isLeft) {
        //   enterClass = `animate__animated animate__slideInLeft`;
        //   leaveClass = `animate__animated animate__slideOutRight`;
        // }
        // if (isRight) {
        //   enterClass = `animate__animated animate__slideInRight`;
        //   leaveClass = `animate__animated animate__slideOutLeft`;
        // }
        // enterAnim.value = enterClass;
        // leaveAnim.value = leaveClass;
      };

      update(props.pageId);

      onUnmounted(() => {
        console.log('unmount');
        stopWatch();
      });

      return {
        // slidePos,
        anim,
        onClick1,
        onClick2,
      };
    },
  };
</script>
