<template>
  <section class="">
    Global
  </section>
</template>
<script lang="ts">
  import router from '@/router';
  import { reactive } from '@vue/composition-api';
  import { worldData } from '@/services/covid-data.service';

  export default {
    setup(){
      console.log('worldData: ', worldData);
      const onClick = (cell: any) => {
      };
      return {
        onClick,
      };
    },
  };

</script>
