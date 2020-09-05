<template>
  <b-button :type="classes" :native-type="type" :disabled="disabled">{{ label }}</b-button>
</template>

<script>
  export default {
    name: 'v-button',
    props: {
      ui: String,
      classes: String,
      label: String,
      type: String,
      disabled: Boolean,
    },
    setup() {
      return {};
    },
  };
</script>

<style scoped></style>
