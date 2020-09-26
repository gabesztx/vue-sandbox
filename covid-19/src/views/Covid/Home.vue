<template>
  <div class="page-content home">
    <button v-on:click="onClick">Country</button>
  </div>
</template>
<script lang="ts">
  import router from '@/router';
  import { ref } from '@vue/composition-api';

  export default {
    setup() {
      const show = ref(true);
      const slideAnim = ref(``);
      const onClick = () => {
        router.push({ path: '/country' });
      };
      return {
        onClick,
        show,
        slideAnim,
      };
    },
  };
</script>
