<template>
  <section>
    <div class="box">
      <h1 class="title">Covid adatok</h1>
      <b-button :label="'Back'" v-on:click="navigationBack"></b-button>
    </div>
  </section>
</template>

<script lang="ts">
  // import { reactive } from '@vue/composition-api';
  // import { getGlobalData } from '@/services/covid-19-tracking.service';
  import router from '@/router';

  export default {
    setup() {
      const navigationBack = () => {
        router.push({ path: '/covid' });
      };
      return {
        navigationBack,
      };
    },
  };
</script>
