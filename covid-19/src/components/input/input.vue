<template>
  <div :class="classes">
    <ValidationProvider :rules="isRequired()" v-slot="">
      <b-field :label="label" :type="styleType" :label-for="id">
        <b-input
          v-model="model"
          :type="type"
          :capitalize="capitalize"
          :custom-class="customClass"
          :disabled="disabled"
          :id="id"
          :name="name"
          :placeholder="placeHolder"
          :loading="loading"
          :rounded="rounded"
          :size="size"
          :required="required"
          :expanded="expanded"
          :has-counter="hasCounter"
          :maxlength="maxlength"
          :password-reveal="passwordReveal"
          :icon="icon"
          :icon-clickable="iconClickable"
          :icon-right="iconRight"
          :icon-pack="iconPack"
          @icon-click="onIconClick"
          @input.native="onInput($event)"
        />
      </b-field>
    </ValidationProvider>
  </div>
</template>

<script lang="ts">
  import { ref } from '@vue/composition-api';
  import { BField } from 'buefy/src/components/field';
  import { BInput } from 'buefy/src/components/input';

  export default {
    components: {
      [BField.name]: BField,
      [BInput.name]: BInput,
    },
    name: 'v-icell-input',
    props: {
      ui: String,
      styleType: String,
      type: String,
      name: String,
      id: [String, Number],
      classes: String,
      label: String,
      labelFor: String,
      capitalize: String,
      customClass: String,
      placeHolder: String,
      validationPattern: Function,
      required: Boolean,
      disabled: Boolean,
      loading: Boolean,
      expanded: Boolean,
      rounded: Boolean,
      passwordReveal: Boolean,
      size: String,
      hasCounter: Boolean,
      inputData: String,
      value: [String, Number, Object, Date],
      maxlength: [String, Number],
      iconPack: String,
      icon: String,
      iconRight: String,
      iconClickable: Boolean,
    },
    setup(props: any, attr: any) {
      const model = ref(props.value);
      const isRequired = () => (props.required ? 'required' : '');
      const onInput = (ev: InputEvent) => {
        attr.emit('input', ev, model.value);
      };
      const onIconClick = () => {
        attr.emit('icon-click');
      };
      return {
        isRequired,
        onInput,
        onIconClick,
        model,
      };
    },
  };
</script>
<style scoped></style>
