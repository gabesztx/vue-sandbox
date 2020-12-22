<template>
  <div class="country-content" :class="classes">
    <div class="pages">
      <countries-page></countries-page>
    </div>
    <div class="pages">
      <countries-detail-page></countries-detail-page>
    </div>
  </div>
</template>
<script lang="ts">
  import router from '@/router';
  import { onUnmounted, onMounted, ref, watch } from '@vue/composition-api';
  import Countries from '@/views/Countries/Countries.vue';
  import CountriesDetail from '@/views/CountriesDetail/CountryDetail.vue';

  export default {
    components: {
      'countries-page': Countries,
      'countries-detail-page': CountriesDetail,
    },
    props: {
      slide: [String, Number],
    },
    setup(props) {
      let countryContentEl: HTMLElement;
      const classes = ref(`page${props.slide}`);
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
      };

      const onAnimationEnd = () => {
        classes.value = `page${props.slide}`;
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
      };
    },
  };
</script>
<style scoped lang="scss">
  @import 'PageCountries';
</style>
