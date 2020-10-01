<template>
  <div class="page-content country">
    <!--<button v-on:click="onClick('/country/hungary')">Country Detail</button>-->
    <!--<div class="box">-->
    <section class="header-content hero is-small">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Koronavírus</h1>
          <h3 class="subtitle">
            <span>Országszerte</span>
          </h3>
        </div>
      </div>
    </section>
    <section class="body-content section">
      <div class="container">
        <div class="card">
          <div class="card-content">
            <div class="title-content">
              <div class="table-title">
                <b-icon class="table-icon" icon="virus-outline" type="" custom-size="fa-2x" size=""></b-icon>
                <span class="table-label">COVID-19</span>
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
                :columns="table.columns"
                :bordered="table.bordered"
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
                :filters-event="''"
                :row-class="onRowClass"
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
      <!-- </div>-->
    </section>
  </div>
</template>
<script lang="ts">
  import router from '@/router';
  // import { columns } from '@/views/Covid/table-config/columns';
  import { countryData } from '@/services/covid-data.service';
  import { reactive } from '@vue/composition-api';

  export default {
    data(){
      return {
        isOpenSetting: false,
      };
    },

    setup(){
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
        subheading: 10,
        striped: true,
        narrowed: false,
        mobileCards: true,
        hoverable: false,
        showDetailIcon: false,
        sortIconSize: 'is-small',
        bordered: false,
        sortIcon: 'menu-up', //'arrow-up'
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
        // console.log('onRowClass', row, ' - ', index);
        /*if (index === 1) {
          return 'is-anyad-selected-apadat'; // első sorra  ráteszi a classt
        }*/
      };
      return {
        onClick,
        onInput,
        onRowClass,
        table,
        searchInput,
      };
    },
  };
  const columns = [
    {
      field: 'countryCode',
      label: '',
      width: 30,
      component: 'cell-image',
      path: `http://localhost:5000/static/flags/`,
    },
    {
      field: 'country',
      label: 'Ország',
      sortable: true,
      width: 200,
      headerClass: 'customHead',
      customSort: (a, b, isAsc) => {
        const AObj = a.casesNew == 'N/A' ? -1 : Number(a.casesNew);
        const BObj = b.casesNew == 'N/A' ? -1 : Number(b.casesNew);
        return !isAsc ? BObj - AObj : AObj - BObj;
      },
      // searchable: false,
    },
    {
      field: 'casesNew',
      label: 'Napi új esetek',
      sortable: true,
      centered: true,
      component: 'cell-base',
      headerClass: 'customHead',
      customValue: v => v === 'N/A' ? 'Nincs adat' : '+' + v,
      customClass: v => v === 'N/A' ? 'is-no-data' : '',
      customSort: (a, b, isAsc) => {
        const AObj = a.casesNew == 'N/A' ? -1 : Number(a.casesNew);
        const BObj = b.casesNew == 'N/A' ? -1 : Number(b.casesNew);
        return !isAsc ? BObj - AObj : AObj - BObj;
      },
    },
    {
      field: 'deathsNew',
      label: 'Napi új elhunytak',
      sortable: true,
      centered: true,
      component: 'cell-base',
      headerClass: 'customHead',
      customValue: v => v === 'N/A' ? 'Nincs adat' : '+' + v,
      customClass: v => v === 'N/A' ? 'is-no-data' : '',
      customSort: (a, b, isAsc) => {
        const AObj = a.deathsNew === 'N/A' ? -1 : Number(a.deathsNew);
        const BObj = b.deathsNew === 'N/A' ? -1 : Number(b.deathsNew);
        return !isAsc ? BObj - AObj : AObj - BObj;
      },
    },
    {
      field: 'casesActive',
      label: 'Aktív esetek',
      sortable: true,
      centered: true,
      headerClass: 'customHead',
    },
    {
      field: 'casesCritical',
      label: 'Kritikus esetek',
      sortable: true,
      centered: true,
      headerClass: 'customHead',
      customSort: (a, b, isAsc) => {
        // TODO: refactor és kiszervezés
        const AObj = a.casesCritical === '-' ? -1 : Number(a.casesCritical);
        const BObj = b.casesCritical === '-' ? -1 : Number(b.casesCritical);
        return !isAsc ? BObj - AObj : AObj - BObj;
      },
    },
  ];

</script>
