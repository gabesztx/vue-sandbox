<!--<div class="title">{{ $t('country') }}</div>-->
<template>
  <div class="page-content countryDetail">
    <section class="header-content hero is-white">
      <div class="hero-body">
        <div class="container">
          <div class="country-header">
            <div class="country-left">
              <img class="country-flag" src="http://localhost:5000/static/flags/ci.svg" />
              <div class="country-text-box">
                <div class="country-name">{{ dummyData.country }}</div>
                <div class="last-update">
                  Utoljára frissítve:
                  <b>{{ dummyData.time }}</b>
                </div>
                <div class="country-number">
                  Lakosság szám:
                  <b>{{ dummyData.population }}</b>
                </div>
              </div>
            </div>
            <div class="country-right">
              <div class="btn-content">
                <b-button :class="'button'" :label="'Táblázat'" :type="'is-light'" @click="onClick"></b-button>
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
                  <div :class="`column is-${12 / layoutColumnsNumber}`" :key="index">
                    <div class="card">
                      <div class="card-content">
                        <div class="subtitle">{{ name }}</div>
                        <div class="title">{{ dummyData.detailData[name] }}</div>
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
  import { onMounted, onUnmounted, ref } from '@vue/composition-api';

  const dummyData = {
    continent: 'Europe',
    country: 'Hungary',
    day: '2020-10-25',
    time: '2020-10-25T02:30:06+00:00',
    countryCode: 'hu',
    population: 9652579,

    detailData: {
      casesNew: 1820,
      casesActive: 38701,
      casesCritical: 205,
      casesRecovered: 16007,
      cases1MPop: 5812,
      casesTotal: 56098,
      deathsNew: 38,
      deaths1MPop: 144,
      deathsTotal: 1390,
      tests1MPop: 99605,
      testsTotal: 961441,
    },
  };

  const getRowLayout = (layoutColumnsNumber: number) => {
    const columns = [] as any;
    let column = 0;
    Object.keys(dummyData.detailData).forEach((key, index) => {
      if (index % layoutColumnsNumber === 0) {
        columns.push({ row: [] });
        column++;
      }
      columns[column - 1].row.push(key);
    });
    return columns;
  };

  export default {
    setup() {
      const layoutColumnsNumber = 3;
      const layoutData = ref(getRowLayout(layoutColumnsNumber));
      const onClick = () => {
        router.push({ path: '/countries' });
      };

      return {
        layoutData,
        layoutColumnsNumber,
        dummyData,
        onClick,
      };
    },
  };
</script>

<!--
onMounted(() => {
// console.log('page 2 mount');
});
onUnmounted(() => {
// console.log('page 2 destroy');
});-->
