<template>
  <div class="box">
    <div class="padding-content">
      <!-- Title -->
      <div class="title-content">
        <div class="title-label">Edit columns</div>
        <div class="tags-content">
          <span class="tag is-light" @click="isOpenSetting = !isOpenSetting" :class="isOpenSetting ? 'active' : ''">
            <i class="mdi mdi-cog"></i>
          </span>
          <span class="tag is-light" @click="isOpenCode = !isOpenCode" :class="isOpenCode ? 'active' : ''">
            <i class="mdi mdi-code-tags"></i>
          </span>
        </div>
      </div>

      <!-- Content -->
      <div class="table-content">
        <v-icell-table :data="state.data" :columns="state.columns"></v-icell-table>
      </div>

      <!-- Settings -->
      <b-collapse :open="isOpenSetting">
        <div class="settings-content">
          <b-field grouped group-multiline>
            <div class="settings-item" v-for="(column, index) in state.columns" :key="index">
              <b-switch v-model="column.visible" :size="'is-small'">
                {{ column.label }}
              </b-switch>
            </div>
          </b-field>
        </div>
      </b-collapse>
    </div>

    <!-- Code -->
    <div class="code-content">
      <code-box :open="isOpenCode" :code="code" copy></code-box>
    </div>
  </div>
</template>

<script lang="ts">
  import { reactive, ref } from '@vue/composition-api';
  import { templateCode } from './template-code';
  import { data, columnsEdit } from '@/views/Table/components/data';

  export default {
    data() {
      return {
        isOpenSetting: false,
        isOpenCode: false,
        isOpenData: false,
      };
    },
    setup() {
      const code = ref(templateCode);
      const state = reactive({
        data: data,
        columns: columnsEdit,
      });
      return {
        state,
        code,
      };
    },
  };
</script>
<style scoped></style>
