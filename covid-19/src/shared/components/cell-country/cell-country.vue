<template>
  <div class="cell-country" v-html="value"></div>
</template>
<script>
  // import { computed } from '@vue/composition-api';
  export default {
    props: {
      value: String,
    },
    setup(props) {
      return {};
    },
  };
</script>

<style scoped lang="scss">
  @import 'cell-country';
</style>
