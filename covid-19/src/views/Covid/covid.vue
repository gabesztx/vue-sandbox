<template>
  <section>
    <div class="box">
      <div class="title-content">
        <h1 class="title">Covid</h1>
        <figure class="image is-48x48">
          <img src="@/assets/covid-icon.png">
        </figure>
      </div>
      <v-icell-table
        :data="state.data"
        :columns="state.columns"
        :scrollable="true"
        :sticky-header="false"
        :paginated="true"
        :pagination-simple="true"
        :pagination-size="'is-small'"
        :per-page="5"
        :striped="true"
        :narrowed="false"
        :mobile-cards="true"
        :hoverable="true"
        :show-detail-icon="true"
        :sort-icon-size="'is-small'"
        :sort-icon="'menu-up'"
        @rowClick="onClick"
      ></v-icell-table>
    </div>
  </section>
</template>

<script lang="ts">
  import router from '@/router';
  import { reactive } from '@vue/composition-api';
  import { globalData } from '@/services/covid-data.service';

  export default {
    setup(){
      const state = reactive({
        data: globalData,
        columns: columns,
      });
      const onClick = (cell: any) => {
        // router.push({ path: '/covid/hun' });
      };
      return {
        onClick,
        state,
      };
    },
  };

  const columns = [
    {
      field: 'flagIcon',
      label: '',
      image: true,
      width: 50,

    },
    {
      field: 'countryText',
      label: 'Ország',
      sortable: false,
      searchable: false,

    },
    {
      field: 'activeCasesText',
      label: 'activeCasesText',
      centered: true,
      // sortable: false,
    },
    {
      field: 'newCasesText',
      label: 'newCasesText',
      centered: true,
    },
    {
      field: 'newDeathsText',
      label: 'newDeathsText',
      centered: true,
    },
   /* {
      field: 'totalCasesText',
      label: 'totalCasesText',
    },
    {
      field: 'totalDeathsText',
      label: 'totalDeathsText',
    },
    {
      field: 'totalRecoveredText',
      label: 'totalRecoveredText',
    },*/
    /*{
      field: 'lastUpdate',
      label: 'lastUpdate',
      width: 250,
    },*/
    /*
    {
      width: 50,
      button: {
        label: 'Részletek',
        class: 'tag is-primary is-rounded',
      },
    },
    */
  ];
</script>
