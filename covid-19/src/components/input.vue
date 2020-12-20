<template>
  <div :class="classes">
    <b-field :label="label" :type="styleType" :label-for="id">
      <b-input
        :value="value"
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
        :use-html5-validation="useHtml5Validation"
        :validation-message="validationMessage"
        v-on:input="onInput"
        @icon-click="onIconClick"
      />
    </b-field>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';
// import { BField } from 'buefy/src/components/field';
// import { BInput } from 'buefy/src/components/input';

export default {
  // components: {
  //   [BField.name]: BField,
  //   [BInput.name]: BInput,
  // },
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
    useHtml5Validation: Boolean,
    validationMessage: String,
    validationRules: String,
  },
  setup(props: any, {emit}: any){
    const model = ref(props.value);
    const isRequired = () => (props.required ? 'required' : '');

    const onInput = (value) => {
      emit('input', value);
    };
    const onIconClick = () => {
      emit('icon-click');
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
