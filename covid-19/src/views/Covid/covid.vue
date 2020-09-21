<template>
  <section class="section is-main-section">
    <div class="card has-table has-mobile-sort-spaced">
      <div class="">
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
          @rowClick="onClick"
        ></v-icell-table>
      </div>
    </div>


    <!--   <v-icell-input
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
   ></v-icell-input>-->
  </section>

  <!--  <section class="columns">
      <div class="column is-12">
        <div class="box">
          <div class="title-content">
            <figure class="image is-48x48">
              <img src="@/assets/covid-icon.png">
            </figure>
          </div>
        </div>
      </div>
    </section>-->
</template>

<script lang="ts">
  import router from '@/router';
  import { reactive } from '@vue/composition-api';
  import { countryData } from '@/services/covid-data.service';

  export default {

    setup(){
      const searchInput = reactive({
        rounded: false,
        loading: false,
        label: '',
        placeHolder: 'Keresés..',
        size: 'is-small',
        classes: 'searchInputContent',
        customClass: 'searchInput',
        iconRight: 'magnify',
        // icon: 'magnify',
        // expanded: true,
        // styleType: 'is-light',
      });

      const table = reactive({
        columns: columns,
        data: countryData,
        scrollable: true,
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
        sortIcon: 'arrow-up', // 'menu-up',
        bordered: false,
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
      const onClick = (cell: any) => {
        // router.push({ path: '/covid/hun' });
      };
      return {
        onClick,
        onInput,
        table,
        searchInput,
      };
    },
  };

  const columns = [
    {
      field: 'countryCode',
      label: '',
      image: true,
      width: 55,
      meta: 'hello',
    },
    {
      field: 'countryText',
      label: 'Ország',
      sortable: true,
      searchable: false,
      width: 210,
    },
    {
      field: 'activeCasesText',
      label: 'Aktív esetek száma',
      sortable: true,
      customSort: (a, b, isAsc) => {
        const AObj = a.activeCasesText === '-' ? -2 : Number(a.activeCasesText);
        const BObj = b.activeCasesText === '-' ? -2 : Number(b.activeCasesText);
        if (isAsc) {
          return BObj - AObj;
        } else {
          return AObj - BObj;
        }
      },
    },
    {
      field: 'newCasesText',
      label: 'Napi esetek száma',
      sortable: true,
      customSort: (a, b, isAsc) => {
        const AObj = a.newCasesText === '-' ? -1 : Number(a.newCasesText.substring(1));
        const BObj = b.newCasesText === '-' ? -1 : Number(b.newCasesText.substring(1));
        if (!isAsc) {
          return BObj - AObj;
        } else {
          return AObj - BObj;
        }
      },
    },
    {
      field: 'newDeathsText',
      label: 'Napi elhunytak száma',
      sortable: true,
      customSort: (a, b, isAsc) => {
        // TODO: refactor és kiszervezés
        const AObj = a.newDeathsText === '-' ? -1 : Number(a.newDeathsText.substring(1));
        const BObj = b.newDeathsText === '-' ? -1 : Number(b.newDeathsText.substring(1));
        if (!isAsc) {
          return BObj - AObj;
        } else {
          return AObj - BObj;
        }
      },
    },
  ];
  /*{
  const columns = [
      field: 'flagIcon',
      label: '',
      image: true,
      width: 50,
    },
    {
      field: 'country',
      label: 'Ország',
      sortable: true,
      width: 210,
    },
    {
      field: 'newConfirmed',
      label: 'Napi esetek száma',
      sortable: true,
    },
    {
      field: 'newRecovered',
      label: 'Napi gyógyultak száma',
      sortable: true,
    },
    {
      field: 'newDeaths',
      label: 'Napi elhunytak száma',
      sortable: true,
    },
  ];
  */

</script>


<!--<template>
  <section class="columns">
    <div class="column is-12">
      <div class="box">
        <div class="title-content">
          <figure class="image is-48x48">
            <img src="@/assets/covid-icon.png">
          </figure>
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

        <v-icell-table
          :data="table.data"
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
          @rowClick="onClick"
        ></v-icell-table>
      </div>
    </div>
  </section>
</template>-->
