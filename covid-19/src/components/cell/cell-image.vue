<template>
  <div class="cell-image" :style="{ backgroundImage: imagePath}" v-if="value"></div>
</template>

<script>
  import { ref } from '@vue/composition-api';

  export default {
    props: {
      column: Object,
      row: Object,
      value: String,
    },
    setup(props) {
      const imagePath = ref(`url(${props.column.path}${props.value}.svg)`);
      return {
        imagePath,
      };
    },

  };
</script>

<style scoped></style>
