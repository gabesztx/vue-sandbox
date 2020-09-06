<template>
  <div class="app-content">
    <section class="hero is-light is-small is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="main-content">
            <router-view />
          </div>
        </div>
      </div>
    </section>
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

<!--useStore().getters['count/getCount']-->
<!--useStore().commit('count/removeCount');-->
<!--<b-loading :is-full-page="true" :active="loading"></b-loading>-->
