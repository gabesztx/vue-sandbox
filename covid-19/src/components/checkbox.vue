<template>
  <b-field :label="label">
    <b-checkbox :disabled="disabled" v-model="model">{{ model }}</b-checkbox>
  </b-field>
</template>

<script lang="ts">
  import { ref } from '@vue/composition-api';

  export default {
    name: 'v-icell-checkbox',
    props: {
      ui: String,
      label: String,
      type: String,
      required: Boolean,
      disabled: Boolean,
      value: [Boolean, String, Number, Object],
    },
    setup(props: any) {
      const model = props.value ? ref(props.value) : false;
      const isRequired = () => (props.required ? 'required' : '');
      return {
        isRequired,
        model,
      };
    },
  };
</script>

<style scoped></style>
