<template>
  <div class="page-content country-detail-page">
    <section class="header-content hero is-white">
      <div class="hero-body">
        <div class="container">
          <div class="country-header">
            <div class="country-left">
              <img class="country-flag" :src="`/static/flags/${countryDetailData.countryCode}.svg`" />
              <div class="country-text-box">
                <div class="country-name">{{ countryDetailData.country }}</div>
                <div class="last-update">
                  {{ $t('time') }}
                  <b>{{ countryDetailData.time }}</b>
                </div>
                <div class="country-number">
                  {{ $t('population') }}
                  <b>{{ countryDetailData.population }}</b>
                </div>
              </div>
            </div>
            <div class="country-right">
              <div class="btn-content">
                <b-button
                  :class="'button'"
                  :label="'Táblázat'"
                  :type="'is-primary'"
                  :size="''"
                  @click="onNavigate"
                ></b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section body-content">
      <div class="container">
        <div class="columns is-mobile">
          <div class="column">
            <template v-for="(columns, index) in layoutData">
              <div class="columns" :key="index">
                <template v-for="(name, index) in columns.row">
                  <div :class="`column is-${12 / layoutColumnNumber}`" :key="index">
                    <div class="card">
                      <div class="card-content">
                        <div class="subtitle">{{ $t(name) }}</div>
                        <div class="title">{{ countryDetailData.covidData[name] }}</div>
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
  import router from '@/router';
  import { countryDetailData } from '@/services/covid-data.service';
  import { generateColumns } from '@/core/utils/layout-generator';

  export default {
    setup() {
      const layoutColumnNumber = 3;
      const layoutData = generateColumns(countryDetailData.covidData, layoutColumnNumber);
      const onNavigate = () => {
        router.push({ path: '/countries' });
      };
      return {
        countryDetailData,
        layoutData,
        layoutColumnNumber,
        onNavigate,
      };
    },
  };
</script>

<style scoped lang="scss">
  @import './CountryDetail';
</style>
