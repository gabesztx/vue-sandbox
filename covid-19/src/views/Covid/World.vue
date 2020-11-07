<template>
  <div class="page-content world">
    <section class="header-content hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="world-head">
            <img class="covid-icon" src="../../assets/covid-19.3.svg" />
            <div class="covid-label">COVID-19</div>
          </div>
          <div class="world-sub">
            <div class="world-title title">Világszerte</div>
            <div class="world-update subtitle">Utolsó frissítés: 2020.11.11</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
  // import { ref } from '@vue/composition-api';
  import router from '@/router';
  import { worldData } from '@/services/covid-data.service';

  export default {
    setup() {
      const onClick = () => {
        router.push({ path: '/countries' });
      };
      return {
        onClick,
        worldData,
      };
    },
  };
</script>
