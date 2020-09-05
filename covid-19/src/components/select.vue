<template>
  <ValidationProvider :rules="isRequired()" v-slot="">
    <b-field :label="label" :label-for="id">
      <b-select
        :id="id"
        :icon="icon"
        :placeholder="placeHolder"
        :icon-pack="iconPack"
        :expanded="expanded"
        :multiple="multiple"
        :value="model"
        :native-size="nativeSize"
        @input="onInput($event)"
      >
        <option v-for="(item, index) in option" :value="item" :key="index">
          {{ item }}
        </option>
      </b-select>
    </b-field>
  </ValidationProvider>
</template>
<script lang="ts">
  import { ref } from '@vue/composition-api';

  export default {
    name: 'v-icell-select',
    props: {
      ui: String,
      label: String,
      id: [String, Number],
      placeHolder: String,
      name: String,
      option: Array,
      expanded: Boolean,
      required: Boolean,
      disabled: Boolean,
      multiple: Boolean,
      icon: String,
      iconPack: String,
      value: [String, Number, Boolean, Object, Array, Function],
      nativeSize: [String, Number],
    },
    setup(props: any, attr: any) {
      const defaultValue = props.multiple ? [] : null;
      const model = props.value ? ref(props.value) : defaultValue;
      const isRequired = () => (props.required ? 'required' : '');
      const onInput = (value: string | any[]) => {
        attr.emit('input', value);
      };
      return {
        model,
        isRequired,
        onInput,
      };
    },
  };
</script>

<style scoped></style>
