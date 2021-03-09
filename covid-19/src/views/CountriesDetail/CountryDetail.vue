<template>
  <div class="page-content country-detail-page" v-if="countryDetailData">
    <section class="section header-content">
      <div class="container">
        <div class="country-header">
          <div class="country-left">
            <div
              class="country-flag"
              :style="{ backgroundImage: `url(/static/flags/${countryDetailData.countryCode}.svg)` }"
            ></div>
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
                :label="''"
                :size="''"
                :type="'is-light'"
                :icon-left="'table'"
                :icon-pack="'fa'"
                @click="onNavigate"
              ></b-button>
            </div>
          </div>
        </div>
      </div>
      <div class="header-bg"></div>
    </section>
    <section class="section body-content" v-if="layoutData">
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
                        <div class="title">{{ countryDetailData[name] }}</div>
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
  import { countryDetailData } from '@/core/services/covid-data.service';
  import { generateColumns } from '@/core/utils/layout-generator';
  import { computed } from '@vue/composition-api';
  import store from '@/store';

  export default {
    setup() {
      const layoutColumnNumber = 3;
      const countryDetailData = computed(() => store.getters['countries/getCountriesDetailData']);
      const layoutData = computed(() => generateColumns(countryDetailData.value, layoutColumnNumber));
      const onNavigate = () => {
        // console.log('countryDetailData', countryDetailData.value);
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
  @import 'CountryDetail';
</style>
