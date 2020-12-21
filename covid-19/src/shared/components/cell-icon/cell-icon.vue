<template>
  <div class="detail-icon">
    <div class="icon-content" @click="onClick">
      <!--      <i class="mdi mdi-eye"></i>-->
      <i class="fa fa-eye"></i>
    </div>
    <!-- <b-button
       :type="'is-primary'"
       :size="'is-small'"
       :icon-right="'mdi mdi-eye'"
       @click="onClick">
     </b-button>-->
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
        emit('onCellEmit', props.row);
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
