<template>
  <div class="box">
    <div class="padding-content">
      <!-- Title -->
      <div class="title-content">
        <div class="title-label">Sticky header</div>
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
        <v-icell-table :data="state.data" :columns="state.columns" :sticky-header="state.stickyHeader"></v-icell-table>
      </div>

      <!-- Settings -->
      <b-collapse :open="isOpenSetting">
        <div class="settings-content">
          <b-field grouped group-multiline>
            <div class="settings-item">
              <b-switch v-model="state.stickyHeader" :size="'is-small'">Sticky header</b-switch>
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
  import { ref, reactive } from '@vue/composition-api';
  import { templateCode } from './template-code';
  import { dataBig, columnsBig } from '@/views/Table/components/data';

  export default {
    data() {
      return {
        isOpenSetting: false,
        isOpenCode: false,
      };
    },
    setup() {
      const code = ref(templateCode);
      const state = reactive({
        data: dataBig,
        columns: columnsBig,
        stickyHeader: true,
      });
      return {
        state,
        code,
      };
    },
  };
</script>
<style scoped></style>
