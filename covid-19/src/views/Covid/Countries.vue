<template>
  <div class="page-content country">
    <!--Header Content-->
    <section class="header-content hero is-small">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Országonként</h1>
          <h3 class="subtitle is-6">
            <span>COVID-19</span>
          </h3>
        </div>
      </div>
    </section>

    <!--Body Content-->
    <section class="body-content section">
      <div class="container">
        <div class="card">
          <div class="card-content">
            <!-- Header Content-->
            <div class="header-content">
              <v-icell-input
                class="search-content"
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
                @focus="onFocus()"
                @blur="onBlur()"
              ></v-icell-input>
              <div class="settings-icon">
                <div
                  class="icon-content"
                  @click="isOpenSetting = !isOpenSetting"
                  :class="isOpenSetting ? 'active' : ''"
                >
                  <div class="icon-setting mdi mdi-cog"></div>
                </div>
              </div>
            </div>

            <!-- Settings Content-->
            <div class="settings-content" v-if="isOpenSetting" :class="isOpenSetting ? 'active' : ''">
              <div class="settings-item-content">
                <div class="settings-item">
                  <b-button :label="'Első oldal'" :size="'is-small'" @click="table.currentPage = 1"></b-button>
                </div>

                <div class="settings-item">
                  <b-select v-model="table.perPage" :size="'is-small'">
                    <template v-for="(num, index) in settings.numberInput.perPageNumber">
                      <option :key="index" :label="`${num} sor`" :value="num"></option>
                    </template>
                  </b-select>
                </div>
              </div>
            </div>

            <!-- Table Content-->
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
                :current-page="table.currentPage"
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
                @pageChange="onPageChange"
                @componentCellEmit="onNavigateToDetail"
              ></v-icell-table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
  import router from '@/router';
  // import { columns } from '@/views/Covid/table-config/columns';
  import { countriesData } from '@/services/covid-data.service';
  import { onMounted, onUnmounted, reactive } from '@vue/composition-api';

  export default {
    data() {
      return {
        isOpenSetting: false,
      };
    },

    setup() {
      const searchInput = reactive({
        // rounded: true,
        // iconRight: 'magnify',
        loading: false,
        placeHolder: 'Keresés...',
        customClass: 'searchInput',
        icon: 'magnify',
        size: 'is-small',
      });

      const perPage = 10;
      const table = reactive({
        columns: columns,
        data: countriesData,
        scrollable: false,
        stickyHeader: false,
        paginated: true,
        paginationSimple: true,
        paginationSize: 'is-small',
        perPage: perPage,
        subheading: 10,
        striped: true,
        currentPage: 1,
        narrowed: false,
        mobileCards: true,
        hoverable: false,
        showDetailIcon: false,
        sortIconSize: 'is-small',
        bordered: false,
        sortIcon: 'menu-up', //'arrow-up'
      });

      const settings = reactive({
        numberInput: {
          controlsPosition: 'compact',
          perPageNumber: 15,
          size: 'is-small',
          // type: 'is-warning',
          controlRounded: true,
          editable: false,
          min: 1,
          max: 15,
        },
      });

      const onInput = (event: InputEvent, value: any) => {
        // TODO: refactor, kiszervezés, speciális karakterek hiba kezelése
        table.data = countriesData.filter((item) => {
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
      const onNavigateToDetail = ({ countryCode }) => {
        router.push({ path: `/countries/${countryCode}` });
      };
      const onPageChange = (page: number) => {
        table.currentPage = page;
      };
      const onFocus = () => {
        searchInput.customClass = 'searchInput active-focus';
      };
      const onBlur = () => {
        searchInput.customClass = 'searchInput';
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
      onMounted(() => {
        // console.log('page 1 mount');
      });
      onUnmounted(() => {
        // console.log('page 2 destroy');
      });
      return {
        onClick,
        onInput,
        onRowClass,
        onFocus,
        onBlur,
        onPageChange,
        onNavigateToDetail,
        table,
        searchInput,
        settings,
      };
    },
  };
  const columns = [
    {
      field: 'countryCode',
      label: '',
      width: 30,
      component: 'cell-image',
    },
    {
      // searchable: false,
      field: 'country',
      label: 'Ország',
      sortable: true,
      width: 180,
      headerClass: 'customHead',
      customSort: (a, b, isAsc) => {
        const AObj = a.casesNew == 'N/A' ? -1 : Number(a.casesNew);
        const BObj = b.casesNew == 'N/A' ? -1 : Number(b.casesNew);
        return !isAsc ? BObj - AObj : AObj - BObj;
      },
    },
    {
      field: 'casesNew',
      label: 'Napi új esetek',
      sortable: true,
      centered: true,
      component: 'cell-base',
      headerClass: 'customHead',
      visible: true,
      customValue: (v) => (v === 'N/A' ? 'Nincs adat' : '+' + v),
      customClass: (v) => (v === 'N/A' ? 'is-no-data' : ''),
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
      visible: true,
      customValue: (v) => (v === 'N/A' ? 'Nincs adat' : '+' + v),
      customClass: (v) => (v === 'N/A' ? 'is-no-data' : ''),
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
      visible: true,
    },
    {
      field: 'casesCritical',
      label: 'Kritikus esetek',
      sortable: true,
      centered: true,
      headerClass: 'customHead',
      visible: true,
      customSort: (a, b, isAsc) => {
        // TODO: refactor és kiszervezés
        const AObj = a.casesCritical === '-' ? -1 : Number(a.casesCritical);
        const BObj = b.casesCritical === '-' ? -1 : Number(b.casesCritical);
        return !isAsc ? BObj - AObj : AObj - BObj;
      },
    },
    {
      field: '',
      label: '',
      width: 30,
      // component: 'cell-button',
      component: 'cell-icon',
    },
  ];
</script>

<!--<b-numberinput
  v-model="table.perPage"
  :controls-position="settings.numberInput.controlsPosition"
  :controls-rounded="settings.numberInput.controlRounded"
  :size="settings.numberInput.size"
  :type="settings.numberInput.type"
  :min="settings.numberInput.min"
  :max="settings.numberInput.max"
  :editable="settings.numberInput.editable"
></b-numberinput>-->
