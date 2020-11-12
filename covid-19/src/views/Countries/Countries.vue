<template>
  <div class="page-content country-page">
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
                  <b-button :label="'Első oldal'" :size="'is-small'" @click="onPageChange(1)"></b-button>
                </div>

                <div class="settings-item">
                  <b-select v-model="table.perPage" :size="'is-small'">
                    <template v-for="(num, index) in settings.perPageNumber">
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
  import { countriesData } from '@/services/covid-data.service';
  import { searchData, columnsData } from '@/services/table.service';
  import { onMounted, onUnmounted, reactive } from '@vue/composition-api';

  export default {
    data(){
      return {
        isOpenSetting: false,
      };
    },
    setup(){
      const search = reactive({
        loading: false,
        placeHolder: 'Keresés...',
        customClass: 'searchInput',
        icon: 'magnify',
        size: 'is-small',
      });

      const table = reactive({
        columns: columnsData,
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
      });

      const settings = reactive({
        perPageNumber: 15,
      });

      const onInput = (event: InputEvent, value: any) => {
        table.data = searchData(countriesData, value);
      };
      const onNavigateDetail = ({ countryCode }) => {
        router.push({ path: `/countries/${countryCode}` });
      };
      const onPageChange = (page: number) => {
        table.currentPage = page;
      };
      onMounted(() => {
      });
      onUnmounted(() => {
      });
      return {
        onInput,
        onPageChange,
        onNavigateDetail,
        table,
        search,
        settings,
      };
    },
  };
</script>

<style scoped lang="scss">
  @import './Countries';
</style>
