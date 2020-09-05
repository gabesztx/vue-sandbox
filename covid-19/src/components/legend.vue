<template>
  <h3 :class="classes" class="is-size-5">
    {{ caption || name }}
  </h3>
</template>

<script>
  export default {
    name: 'v-icell-legend',
    props: {
      caption: String,
      name: String,
      classes: String,
    },
    setup() {
      return {};
    },
  };
</script>

<style scoped></style>
