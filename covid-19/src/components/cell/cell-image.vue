<template>
  <div class="cell-image" :style="{ backgroundImage: getImagePath }" v-if="value"></div>
</template>

<script>
  import { computed } from '@vue/composition-api';

  export default {
    props: {
      column: Object,
      row: Object,
      value: String,
    },
    setup(props) {
      const path = `http://localhost:5000/static/flags/`;
      const getImagePath = computed(() => `url(${path}${props.value}.svg)`);
      return {
        getImagePath,
      };
    },
  };
</script>

<style scoped></style>
