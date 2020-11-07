<template>
  <div class="page-content world">
    <section class="header-content hero is-small">
      <div class="hero-body">
        <div class="container">
          <div class="world-head">
            <img class="covid-icon" src="../../assets/covid-19.3.svg" />
            <div class="covid-label">COVID-19</div>
          </div>
          <div class="world-sub">
            <div class="world-title title">Világszerte</div>
            <div class="world-update-time subtitle">{{ $t('time') }}: 2020.11.11</div>
          </div>
          <div class="world-body">
            <div class="box-item">
              <div class="box-item-label">{{ $t('casesTotal') }}</div>
              <div class="box-item-value">{{ worldData.casesTotal }}</div>
            </div>
            <div class="box-item">
              <div class="box-item-label">{{ $t('casesRecovered') }}</div>
              <div class="box-item-value">{{ worldData.casesRecovered }}</div>
            </div>
            <div class="box-item">
              <div class="box-item-label">{{ $t('casesCritical') }}</div>
              <div class="box-item-value">{{ worldData.casesCritical }}</div>
            </div>
            <div class="box-item">
              <div class="box-item-label">{{ $t('deathsTotal') }}</div>
              <div class="box-item-value">{{ worldData.deathsTotal }}</div>
            </div>
          </div>
          <div class="world-button">
            <b-button @click="onClick" label="Táblázat" type="is-primary"></b-button>
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
