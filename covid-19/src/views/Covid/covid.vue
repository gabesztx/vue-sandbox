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
  import router from '@/router';
  import { reactive } from '@vue/composition-api';
  import { countryData } from '@/services/covid-data.service';

  export default {
    setup(){
      const state = reactive({
        data: countryData,
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
      sortable: true,
      searchable: false,
    },
    {
      field: 'activeCasesText',
      label: 'Aktív fertőzöttek',
      sortable: true,
      customSort: (a, b, isAsc) => {
        // TODO: refactor és kiszervezés
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
      label: 'Napi új fertőzött',
      sortable: true,
      customSort: (a, b, isAsc) => {
        // TODO: refactor és kiszervezés
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
      label: 'Napi új elhunyt',
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
</script>
