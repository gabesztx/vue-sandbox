<template>
  <div class="country-content" :class="classes">
    <div class="pages">
      <b-button @click="onClick1">page 1</b-button>
      <countries></countries>
    </div>
    <div class="pages">
      <b-button @click="onClick2">page 2</b-button>
    </div>
  </div>
</template>
<script lang="ts">
  import router from '@/router';
  import { computed, onUnmounted, onMounted, ref, watch } from '@vue/composition-api';
  import Countries from '@/views/Countries/Countries.vue';

  export default {
    components: {
      Countries,
    },
    props: {
      slide: [String, Number],
    },
    setup(props) {
      let countryContentEl: HTMLElement;
      const classes = ref(`page${props.slide}`);

      const onClick1 = () => {
        router.push({ path: `/countries/hu` });
        // router.replace(url);
      };
      const onClick2 = () => {
        router.push({ path: `/countries` });
        // router.replace(url);
      };
      const stopWatch = watch(
        () => props.slide,
        (value) => {
          classes.value = `animated ${value === 1 ? 'slideRight' : 'slideLeft'}`;
        }
      );

      const addAnimationListener = () => {
        countryContentEl.addEventListener('animationend', onAnimationEnd);
      };
      const removeAnimationListener = () => {
        countryContentEl.removeEventListener('animationend', onAnimationEnd);
        // console.log('countryContentEl', countryContentEl);
      };

      const onAnimationEnd = () => {
        console.log('Animation End OK', props.slide);
      };

      onMounted(() => {
        countryContentEl = document.querySelector('.country-content') as HTMLElement;
        addAnimationListener();
      });
      onUnmounted(() => {
        removeAnimationListener();
        stopWatch();
      });

      return {
        classes,
        onClick1,
        onClick2,
      };
    },
  };
</script>
