<template>
  <span class="cell-value">
    <span :class="getClass">{{ getValue }}</span>
  </span>
</template>

<script>
  import { computed } from '@vue/composition-api';

  export default {
    props: {
      column: Object,
      row: Object,
      value: [String, Number],
    },
    setup(props) {
      const getValue = computed(() => {
        const value = props.value;
        const customValue = props.column['customValue'];
        return customValue ? customValue(value) : value;
      });

      const getClass = computed(() => {
        const value = props.value;
        const customClass = props.column['customClass'];
        return customClass ? customClass(value) : '';
      });

      return {
        getValue,
        getClass,
      };
    },
  };
</script>

<style scoped></style>
