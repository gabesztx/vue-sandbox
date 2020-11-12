<template>
  <div class="detail-icon">
    <b-button :type="'is-primary'" :size="'is-small'" :icon-right="'mdi mdi-eye'" @click="onClick"></b-button>
  </div>
</template>

<script>
  export default {
    props: {
      column: Object,
      row: Object,
      value: [String, Number],
    },
    setup(props, { emit }) {
      const onClick = () => {
        emit('componentCellEmit', props.row);
      };
      return {
        onClick,
      };
    },
  };
</script>

<style scoped lang="scss">
  @import 'cell-icon';
</style>
