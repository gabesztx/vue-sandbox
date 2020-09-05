<template>
  <section>
    <div class="box">
      <h1 class="title">Covid adatok</h1>
      <v-icell-table
        :data="tableState.data"
        :columns="tableState.columns"
        :sticky-header="false"
        :paginated="true"
        :scrollable="true"
        :pagination-simple="true"
        :pagination-size="'is-small'"
        :per-page="7"
        :striped="false"
        :narrowed="false"
        :mobile-cards="true"
        :hoverable="false"
        :show-detail-icon="true"
        :sort-icon-size="'is-small'"
        :sort-icon="'menu-up'"
        @cellClick="onCellClick"
      ></v-icell-table>
    </div>
  </section>
</template>

<script lang="ts">
  import { reactive } from '@vue/composition-api';
  import { getGlobalData } from '@/services/covid-19-tracking.service';

  export default {
    setup() {
      const tableState = reactive({
        data: getGlobalData(),
        columns: [
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
          {
            width: 50,
            button: {
              label: 'Részletek',
              class: 'is-rounded is-primary is-small',
            },
          },
        ],
      });
      const onRowClick = (row: any) => {
        console.log('rowClick', row);
      };
      const onCellClick = (cell: any) => {
        console.log('cellClick', cell);
      };
      return {
        onRowClick,
        onCellClick,
        tableState,
      };
    },
  };
</script>
