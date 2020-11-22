<template>
  <div class="page-content country-page">
    <!--Header Content-->
    <section class="header-content hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered">Országszerte</h1>
        </div>
      </div>
    </section>

    <!--Body Content-->
    <section class="body-content section">
      <div class="container">
        <!--<div class="card-wrapper" v-if="false">
          <div class="card-top"></div>
          <div class="card-bottom"></div>
        </div>-->
        <div class="card">
          <div class="card-content">
            <!-- Header Content-->
            <div class="table-header-content">
              <!-- TODO: kontinens választó folytatás-->
              <div class="table-icon-content">
                <div class="table-covid-text">COVID-19</div>
                <!--                <div class="home-icon fa fa-globe" @click="onNavigateHome"></div>-->
                <!--<img class="table-covid-icon" src="static/covid-icon/covid-19.5.svg" />-->
              </div>

              <!--<div class="table-name-content">
                <div class="table-covid-text">COVID-19</div>
              </div>-->

              <div class="table-handler-content">
                <v-icell-input
                  class="search-content"
                  :label="search.label"
                  :place-holder="search.placeHolder"
                  :rounded="search.rounded"
                  :size="search.size"
                  :loading="search.loading"
                  :style-type="search.styleType"
                  :expanded="search.expanded"
                  :icon="search.icon"
                  :icon-right="search.iconRight"
                  :type="search.type"
                  :custom-class="search.customClass"
                  :classes="search.classes"
                  @input="onInput"
                ></v-icell-input>
                <div class="settings-icon-content" @click="isOpenSetting = !isOpenSetting">
                  <div class="icon-content" :class="isOpenSetting ? 'active' : ''">
                    <div class="icon-setting mdi mdi-cog"></div>
                  </div>
                </div>
                <div class="home-icon-content">
                  <div class="home-icon fa fa-globe" @click="onNavigateHome"></div>
                  <!--                  <b-button :icon-pack="'fa'" :icon-left="'globe'" :size="'is-small'" :type="'is-light'"></b-button>-->
                </div>
              </div>
            </div>

            <!-- Settings Content-->
            <div class="settings-content" :class="isOpenSetting ? 'active' : ''">
              <div class="settings-item-content">
                <div class="settings-item">
                  <!--v-model="selectedOptions"-->
                  <b-dropdown class="selectDropDown" aria-role="list" :multiple="true">
                    <b-button slot="trigger" :label="'Oszlopok'" :size="''"></b-button>
                    <template v-for="(item, index) in settings.columns">
                      <div class="dropDown-item" :key="index">
                        <b-checkbox v-model="item.visible" :size="'is-small'">
                          <span>{{ item.label }}</span>
                        </b-checkbox>
                      </div>
                    </template>
                  </b-dropdown>
                </div>

                <div class="settings-item">
                  <b-select v-model="table.perPage" :size="'is-small'">
                    <template v-for="(num, index) in settings.perPageNumber">
                      <option :key="index" :label="`${num} sor`" :value="num">
                        {{ `${num} sor` }}
                      </option>
                    </template>
                  </b-select>
                </div>

                <!--<div class="settings-item">
                  <b-button :label="'Első oldal'" :size="'is-small'" @click="onPageChange(1)"></b-button>
                </div>-->
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
                :default-sort-direction="table.defaultSortDirection"
                :default-sort="table.defaultSort"
                :sort-multiple="table.sortMultiple"
                :sort-multiple-data="table.sortMultipleData"
                :sort-multiple-key="table.sortMultipleKey"
                @pageChange="onPageChange"
                @componentCellEmit="onNavigateDetail"
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
  import { countriesData, continentsData } from '@/services/covid-data.service';
  import { searchData, columns } from '@/services/table.service';
  import { onMounted, onUnmounted, reactive } from '@vue/composition-api';
  import { IColumn } from '@/core/interfaces';

  export default {
    data() {
      return {
        isOpenSetting: false,
      };
    },
    setup() {
      const search = reactive({
        loading: false,
        placeHolder: 'Ország keresés',
        customClass: 'searchInput',
        icon: 'magnify',
        size: 'is-small',
      });

      const table = reactive({
        columns: columns,
        data: countriesData,
        scrollable: false,
        stickyHeader: false,
        paginated: true,
        paginationSimple: true,
        paginationSize: 'is-small',
        perPage: 7,
        subheading: 10,
        striped: true,
        currentPage: 1,
        narrowed: false,
        mobileCards: true,
        hoverable: false,
        showDetailIcon: false,
        sortIconSize: 'is-small',
        bordered: false,
        sortIcon: 'menu-up',
        defaultSortDirection: 'asc', // 'desc'
        defaultSort: '', // ['casesNew', 'desc'],
        sortMultiple: false,
        sortMultipleKey: null, // 'shiftKey', 'altKey', 'ctrlKey'
        sortMultipleData: [], // { field: 'casesCritical', order: 'asc' },{ field: 'casesActive', order: 'asc' }
      });

      const settings = reactive({
        perPageNumber: 15,
        columns: columns.filter((column) => column.hasOwnProperty('visible')),
      });
      const onInput = (value: any) => {
        // console.log(searchData(countriesData, value));
        table.data = searchData(value, countriesData);
      };
      const onNavigateDetail = ({ countryCode }) => {
        router.push({ path: `/countries/${countryCode}` });
      };
      const onNavigateHome = () => {
        router.push({ path: `/world` });
      };
      const onPageChange = (page: number) => {
        table.currentPage = page;
      };
      onMounted(() => {});
      onUnmounted(() => {});
      return {
        onInput,
        onPageChange,
        onNavigateDetail,
        onNavigateHome,
        table,
        search,
        settings,
      };
    },
  };
</script>

<style scoped lang="scss">
  @import 'Countries';
</style>
