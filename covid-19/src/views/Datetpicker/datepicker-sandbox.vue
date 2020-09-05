<template>
  <section>
    <div class="columns">
      <div class="column is-6">
        <datepicker-date></datepicker-date>
      </div>
      <div class="column is-6">
        <datepicker-month></datepicker-month>
      </div>
    </div>
    <div class="columns">
      <div class="column is-12">
        <datepicker-range></datepicker-range>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import datePickerComponent from './components/date-picker/date-picker.vue';
  import monthPickerComponent from './components/month-picker/month-picker.vue';
  import rangePickerComponent from './components/range-picker/range-picker.vue';

  export default {
    components: {
      'datepicker-date': datePickerComponent,
      'datepicker-month': monthPickerComponent,
      'datepicker-range': rangePickerComponent,
    },
  };
</script>
