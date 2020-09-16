<template>
  <div class="app-content">
    <!--  <section class="hero is-light is-small is-fullheight">-->
    <!--  <section class="hero is-light is-small is-fullheight"></section>-->
    <div class="main-content">
      <div class="container">
        <router-view />
      </div>
    </div>
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
