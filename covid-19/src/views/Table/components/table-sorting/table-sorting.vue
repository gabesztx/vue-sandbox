<template>
  <div class="box">
    <div class="padding-content">
      <!-- Title -->
      <div class="title-content">
        <div class="title-label">Sorting</div>
        <div class="tags-content">
          <span class="tag is-light" @click="isOpenCode = !isOpenCode" :class="isOpenCode ? 'active' : ''">
            <i class="mdi mdi-code-tags"></i>
          </span>
        </div>
      </div>
      <!-- Content -->
      <div class="table-content">
        <v-icell-table :data="state.data" :columns="state.columns"></v-icell-table>
      </div>
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
  import { data, columnsSorting } from '@/views/Table/components/data';

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
        data: data,
        columns: columnsSorting,
      });
      return {
        state,
        code,
      };
    },
  };
</script>
<style scoped></style>
