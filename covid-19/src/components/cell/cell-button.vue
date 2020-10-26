<template>
  <div class="detail-button">
    <b-button
      :rounded="true"
      :class="'tag'"
      :type="'is-primary'"
      :size="'is-small'"
      :label="'Részletek'"
      @click="onClick"
    ></b-button>
  </div>
</template>

<script>
  import { computed } from '@vue/composition-api';

  export default {
    props: {
      column: Object,
      row: Object,
      value: [String, Number],
    },
    setup(props, { emit }) {
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

      const onClick = () => {
        emit('componentCellEmit', props.row);
      };
      return {
        onClick,
        getValue,
        getClass,
      };
    },
  };
</script>

<style scoped></style>
