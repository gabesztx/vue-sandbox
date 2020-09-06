<template>
  <section>
    <div class="box">
      <h1 class="title">Covid</h1>
      <v-icell-table
        :data="state.data"
        :columns="state.columns"
        :scrollable="true"
        :sticky-header="false"
        :paginated="true"
        :pagination-simple="true"
        :pagination-size="'is-small'"
        :per-page="10"
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
  // import { getAllData } from '@/services/covid-data.service';

  export default {
    setup() {
      const state = reactive({
        data: [],
        columns: columns,
      });
      const onClick = (cell: any) => {
        router.push({ path: '/covid/hun' });
      };
      return {
        onClick,
        state,
      };
    },
  };

  const columns = [
    {
      field: 'regionFlagUrl',
      image: true,
      width: 50,
    },
    {
      field: 'regionName',
      label: 'Ország',
      sortable: false,
      searchable: false,
      width: 250,
    },
    {
      field: 'casesCount',
      label: 'Esetek',
      sortable: false,
    },
    {
      field: 'recoveredCount',
      label: 'Gyógyultak',
    },
    {
      field: 'deceasedCount',
      label: 'Elhunytak',
    },
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
