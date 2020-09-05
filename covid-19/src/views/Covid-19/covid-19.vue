<template>
  <section>
    <div class="box">
      <h1 class="title">Covid adatok</h1>
      <v-icell-table
        :data="tableState.data"
        :columns="tableState.columns"
        :sticky-header="false"
        :paginated="false"
        :pagination-simple="true"
        :pagination-size="'is-small'"
        :per-page="7"
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
  import { reactive } from '@vue/composition-api';
  import { getGlobalData } from '@/services/covid-19-tracking.service';
  import router from '@/router';

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
          /*{
            width: 50,
            button: {
              label: 'Részletek',
              class: 'tag is-primary is-rounded',
            },
          },*/
        ],
      });
      const onClick = (cell: any) => {
        // router.push({ name: 'Detail', params: { id: 'hungary' } });
        router.push({ path: '/covid/hun' });
      };
      return {
        onClick,
        tableState,
      };
    },
  };
</script>
