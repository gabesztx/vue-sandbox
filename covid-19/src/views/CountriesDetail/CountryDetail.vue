<template>
  <div class="page-content country-detail-page">
    <section class="header-content hero is-white">
      <div class="hero-body">
        <div class="container">
          <div class="country-header">
            <div class="country-left">
              <img class="country-flag" :src="flagImgPath" />
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
                  @click="onClick"
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
  // import { ref } from '@vue/composition-api';
  import { countryDetailData } from '@/services/covid-data.service';

  const getRowLayout = (layoutColumnNumber: number) => {
    const columns = [] as any;
    let column = 0;
    Object.keys(countryDetailData.covidData).forEach((key, index) => {
      if (index % layoutColumnNumber === 0) {
        columns.push({ row: [] });
        column++;
      }
      columns[column - 1].row.push(key);
    });
    return columns;
  };

  export default {
    setup() {
      const layoutColumnNumber = 3;
      const flagImgPath = `/static/flags/${countryDetailData.countryCode}.svg`;
      const layoutData = getRowLayout(layoutColumnNumber);
      const onClick = () => {
        router.push({ path: '/countries' });
      };
      return {
        flagImgPath,
        countryDetailData,
        layoutData,
        layoutColumnNumber,
        onClick,
      };
    },
  };
</script>

<style scoped lang="scss">
  @import './CountryDetail';
</style>
