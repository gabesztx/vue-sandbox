<template>
  <div :class="classes">
    <ValidationProvider :rules="isRequired()" v-slot="">
      <b-field :label="label" :label-for="id">
        <b-datetimepicker
          v-model="model"
          :show-week-number="false"
          :placeholder="placeHolder"
          :disabled="disabled"
          icon="calendar-today"
          @input="onInputChange($event)"
          @change-month="onChangeMonth($event)"
          @change-year="onChangeYear($event)"
          trap-focus
        ></b-datetimepicker>
      </b-field>
    </ValidationProvider>
  </div>
</template>

<script lang="ts">
  import { ref } from '@vue/composition-api';

  export default {
    name: 'v-icell-datetime',
    props: ['id', 'label', 'placeHolder', 'required', 'value', 'disabled', 'classes'],
    setup(props: any, attr: any) {
      const model = props.value ? ref(props.value) : null;
      const isRequired = () => (props.required ? 'required' : '');

      const onInputChange = (ev: InputEvent) => {
        attr.emit('valueChange', ev); // TODO: valueChange
      };

      const onChangeMonth = (month: number) => {
        attr.emit('changeMonth', month);
      };

      const onChangeYear = (year: number) => {
        attr.emit('changeYear', year);
      };

      return {
        isRequired,
        onInputChange,
        onChangeMonth,
        onChangeYear,
        model,
      };
    },
  };
</script>

<style scoped></style>
