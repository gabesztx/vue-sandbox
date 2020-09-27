<template>
  <div class="page-content country">
    <!--<button v-on:click="onClick('/country/hungary')">Country Detail</button>-->
    <!--<div class="box">-->
    <section class="header-content hero is-small">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Koronavírus esetek</h1>
          <h3 class="subtitle">Országszerte</h3>
        </div>
      </div>
    </section>
    <section class="body-content section">
      <div class="container">
        <div class="card">
          <div class="card-content">
            <div class="title-content">
              <div class="title-label">
                <img class="table-icon" src="@/assets/covid-icon.png" />
                <span class="table-title">COVID-19</span>
              </div>
              <div class="settings-icon">
                <span class="" @click="isOpenSetting = !isOpenSetting" :class="isOpenSetting ? 'active' : ''">
                  <i class="mdi mdi-cog" />
                </span>
              </div>
            </div>
            <div class="table-content">
              <v-icell-table
                :data="table.data"
                :bordered="table.bordered"
                :columns="table.columns"
                :scrollable="table.scrollable"
                :sticky-header="table.stickyHeader"
                :paginated="table.paginated"
                :pagination-simple="table.paginationSimple"
                :pagination-size="table.paginationSize"
                :per-page="table.perPage"
                :striped="table.striped"
                :narrowed="table.narrowed"
                :mobile-cards="table.mobileCards"
                :hoverable="table.hoverable"
                :show-detail-icon="table.showDetailIcon"
                :sort-icon-size="table.sortIconSize"
                :sort-icon="table.sortIcon"
                :height="table.height"
                :row-class="onRowClass"
                :class-object="onClassObject"
                @rowClick="onClick"
              ></v-icell-table>
            </div>
          </div>
        </div>
      </div>

      <!--<b-collapse :open="isOpenSetting">
        <div class="settings-content">
          <v-icell-input
            :label="searchInput.label"
            :place-holder="searchInput.placeHolder"
            :rounded="searchInput.rounded"
            :size="searchInput.size"
            :loading="searchInput.loading"
            :style-type="searchInput.styleType"
            :expanded="searchInput.expanded"
            :icon="searchInput.icon"
            :icon-right="searchInput.iconRight"
            :type="searchInput.type"
            :custom-class="searchInput.customClass"
            :classes="searchInput.classes"
            @input="onInput"
          ></v-icell-input>
        </div>
      </b-collapse>-->

      <!--      </div>-->
    </section>
  </div>
</template>
<script lang="ts">
  import router from '@/router';
  import { reactive } from '@vue/composition-api';
  import { countryData } from '@/services/covid-data.service';
  import { columns } from '@/views/Covid/table-config/columns';

  export default {
    data() {
      return {
        isOpenSetting: false,
      };
    },

    setup() {
      const searchInput = reactive({
        rounded: false,
        loading: false,
        placeHolder: 'Keresés...',
        size: 'is-small',
        classes: 'searchInputContent',
        customClass: 'searchInput',
        icon: 'magnify',
        // iconRight: 'magnify',
        // expanded: true,
        // styleType: 'is-light',
      });

      const table = reactive({
        columns: columns,
        data: countryData,
        scrollable: false,
        stickyHeader: false,
        paginated: true,
        paginationSimple: true,
        paginationSize: 'is-small',
        perPage: 10,
        striped: true,
        narrowed: false,
        mobileCards: true,
        hoverable: false,
        showDetailIcon: false,
        sortIconSize: 'is-small',
        bordered: false,
        // sortIcon: 'arrow-up', // 'menu-up',
        sortIcon: 'menu-up',
        // striped: false,
      });

      const onInput = (event: InputEvent, value: any) => {
        // TODO: refactor, kiszervezés, speciális karakterek hiba kezelése
        table.data = countryData.filter((item) => {
          let isFind = false;
          Object.values(item).forEach((val: any) => {
            const isMatch = new RegExp(value, 'i').test(val);
            if (isMatch) {
              isFind = true;
            }
          });
          return isFind;
        });
      };
      const onClick = (routerLink: string) => {
        // router.push({ path: '/' });
        // router.push({ path: routerLink });
        // router.push({ path: `/country/${params}` });
      };
      const onRowClass = (row, index) => {
        if (index === 1) {
          return 'is-anyad-selected-apadat'; // első sorra  ráteszi a classt
        }
      };
      const onClassObject = (row, value) => {
        if (value === '-') {
          row.newCasesText = 'nincs adat';
          // console.log('obj', row);
        }
      };
      return {
        onClick,
        onInput,
        onRowClass,
        onClassObject,
        table,
        searchInput,
      };
    },
  };
</script>
