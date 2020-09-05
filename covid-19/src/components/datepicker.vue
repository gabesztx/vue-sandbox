<template>
  <div :class="classes">
    <ValidationProvider :rules="isRequired()" v-slot="">
      <b-field :label="label" :label-for="id">
        <!--:type="setFieldType(error)"-->
        <b-datepicker
          icon="calendar-today"
          v-model="model"
          :show-week-number="false"
          :type="type"
          :placeholder="placeHolder"
          :disabled="disabled"
          :min-date="minDate"
          :max-date="maxDate"
          :range="range"
          @input="onInput($event)"
          @change-month="onChangeMonth($event)"
          @change-year="onChangeYear($event)"
        >
          <button class="button is-primary" @click="setToDate">
            <b-icon icon="calendar-today"></b-icon>
            <span>Mai nap</span>
          </button>

          <button class="button is-danger" @click="setClearDate">
            <b-icon icon="close"></b-icon>
            <span>Törlés</span>
          </button>
        </b-datepicker>
      </b-field>
    </ValidationProvider>
  </div>
</template>

<script lang="ts">
  import { ref } from '@vue/composition-api';

  export default {
    name: 'v-icell-date',
    props: [
      'ui',
      'label',
      'placeHolder',
      'required',
      'value',
      'disabled',
      'classes',
      'id',
      'minDate',
      'maxDate',
      'type',
      'range',
    ],

    setup(props: any, attr: any) {
      const model = props.value ? ref(props.value) : null;
      const isRequired = () => (props.required ? 'required' : '');

      const onInput = (ev: InputEvent) => {
        attr.emit('input', ev);
      };
      const onChangeMonth = (month: number) => {
        attr.emit('changeMonth', month);
      };

      const onChangeYear = (year: number) => {
        attr.emit('changeYear', year);
      };

      /*const setFieldType = (error: any) => {
      return !error.valid ? 'is-danger' : 'is-success';
    };*/

      const setClearDate = () => {
        model.value = null;
        attr.emit('input', model.value);
      };

      const setToDate = () => {
        model.value = new Date();
        attr.emit('input', model.value);
      };
      return {
        isRequired,
        onInput,
        onChangeMonth,
        onChangeYear,
        // setFieldType,
        setClearDate,
        setToDate,
        model,
      };
    },
  };
</script>

<style scoped></style>
