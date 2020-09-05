<template>
  <b-navbar class="navbar is-light">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="@/assets/logo-icononly.png" />
      </b-navbar-item>
    </template>
    <template slot="start">
      <div class="logo-title">Covid 19</div>
    </template>
    <template slot="end">
      <b-navbar-item
        v-for="(item, index) in menuItem"
        tag="router-link"
        :key="index"
        :active="item.active"
        :to="{ path: item.path }"
      >
        {{ item.name }}
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script lang="ts">
  import router from '@/router';
  import { reactive, ref } from '@vue/composition-api';

  export default {
    setup() {
      const menuItem = reactive({
        'covid-19': {
          path: '/covid-19',
          name: 'Covid 19',
          active: false,
        },
        input: {
          path: '/input',
          name: 'Input',
          active: false,
        },
        select: {
          path: '/select',
          name: 'Select',
          active: false,
        },
        datepicker: {
          path: '/datepicker',
          name: 'Datepicker',
          active: false,
        },
        table: {
          path: '/table',
          name: 'Table',
          active: false,
        },
      });

      const changeMenuActivation = (item: any, active: boolean) => {
        Object.assign(item, {
          ...item,
          active: active,
        });
      };

      router.afterEach((to, from) => {
        const routeFrom = from.path.slice(1);
        const routeTo = to.path.slice(1);
        if (routeFrom) {
          changeMenuActivation(menuItem[routeFrom], false);
        }
        changeMenuActivation(menuItem[routeTo], true);
      });
      return {
        menuItem,
      };
    },
  };
</script>

<style scoped></style>
