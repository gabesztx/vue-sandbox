<template>
  <div class="app-content">
    <header class="header-content">
      <div class="container bd-lead">
        <div class="columns">
          <div class="column i-12">
            <bue-nav-bar></bue-nav-bar>
          </div>
        </div>
      </div>
    </header>
    <div class="main-content">
      <div class="container bd-lead">
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
