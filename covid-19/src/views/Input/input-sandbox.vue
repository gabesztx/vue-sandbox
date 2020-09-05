<template>
  <section>
    <div class="columns">
      <div class="column is-12">
        <input-playground></input-playground>
      </div>
    </div>
    <div class="columns">
      <div class="column is-6">
        <input-password></input-password>
      </div>
      <div class="column is-6">
        <input-icons></input-icons>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import playgroundComponent from './components/input-playground/input-playground.vue';
  import passwordComponent from './components/input-password/input-password.vue';
  import iconsComponent from './components/input-icons/input-icons.vue';

  export default {
    components: {
      'input-playground': playgroundComponent,
      'input-password': passwordComponent,
      'input-icons': iconsComponent,
    },
  };
</script>
