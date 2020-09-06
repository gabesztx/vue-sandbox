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
        :height="''"
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
  import { getGlobalData } from '@/services/covid-19-tracking.service';
  import { createNamespacedHelpers } from 'vuex-composition-helpers';
  const { useState, useActions } = createNamespacedHelpers('covid');

  export default {
    setup() {
      const { isLoading } = useState(['isLoading']);
      const { isLoadingAction } = useActions(['isLoadingAction']);
      const state = reactive({
        data: getGlobalData(),
        columns: columns,
      });
      const onClick = (cell: any) => {
        // isLoadingAction();
        router.push({ path: '/covid/hun' });
      };
      return {
        onClick,
        // getIsLoading,
        isLoading,
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
    /*{
      width: 50,
      button: {
        label: 'Részletek',
        class: 'tag is-primary is-rounded',
      },
    },*/
  ];
</script>
