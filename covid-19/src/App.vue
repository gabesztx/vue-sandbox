<template>
  <div class="app-content">
    <!--  <section class="hero is-light is-small is-fullheight">-->
    <!--  <section class="hero is-light is-small is-fullheight"></section>-->
    <router-view />
  <!--  <div class="main-content">
      <div class="container">
      </div>
    </div>-->
  </div>
</template>

<script lang="ts">
  import { ToastService } from '@/services/toast.service';

  export default {
    provide: {
      toastService: new ToastService(),
    },
  };
</script>
