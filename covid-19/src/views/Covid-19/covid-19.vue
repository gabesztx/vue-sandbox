<template>
  <section>
    <div class="columns">
      <div class="column is-12">
        <v-icell-table
          :data="tableState.data"
          :columns="tableState.columns"
          :paginated="true"
          :pagination-simple="true"
          :pagination-size="'is-small'"
          :per-page="10"
          :striped="true"
          :narrowed="false"
          :sort-icon="'menu-up'"
          :sort-icon-size="'is-small'"
          :mobile-cards="true"
          :hoverable="true"
        ></v-icell-table>
      </div>
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
            label: '',
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
        ],
      });
      return {
        tableState,
      };
    },
  };
</script>
