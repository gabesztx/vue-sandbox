<template>
  <div class="page-content countryDetail">
    <button v-on:click="onClick">Back</button>
  </div>
</template>
<script lang="ts">
  import router from '@/router';

  export default {
    setup() {
      const onClick = () => {
        router.push({ path: '/country' });
      };

      return {
        onClick,
      };
    },
  };
</script>
