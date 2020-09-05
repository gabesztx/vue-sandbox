<template>
  <div class="box">
    <div class="padding-content">
      <!-- Title -->
      <div class="title-content">
        <div class="title-label">Selection</div>
        <div class="tags-content">
          <span class="tag is-light" @click="isOpenSetting = !isOpenSetting" :class="isOpenSetting ? 'active' : ''">
            <i class="mdi mdi-cog"></i>
          </span>
          <span class="tag is-light" @click="isOpenData = !isOpenData" :class="isOpenData ? 'active' : ''">
            <i class="mdi mdi-code-greater-than"></i>
          </span>
          <span class="tag is-light" @click="isOpenCode = !isOpenCode" :class="isOpenCode ? 'active' : ''">
            <i class="mdi mdi-code-tags"></i>
          </span>
        </div>
      </div>

      <!-- Content -->
      <div class="table-content">
        <v-icell-table
          :data="state.data"
          :columns="state.columns"
          :selected="isSelected ? state.selected : null"
          @onSelectChange="onSelectChange($event)"
        ></v-icell-table>
      </div>

      <!-- Settings -->
      <b-collapse :open="isOpenSetting">
        <div class="settings-content">
          <b-field grouped group-multiline>
            <div class="settings-item">
              <b-switch v-model="isSelected" :size="'is-small'">Selected</b-switch>
            </div>
          </b-field>
        </div>
      </b-collapse>
    </div>

    <!-- Data -->
    <div class="data-content">
      <code-box :open="isOpenData" :code="state.selected"></code-box>
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
  import { data, columns } from '@/views/Table/components/data';

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
      const isSelected = ref(true);
      const state = reactive({
        data: data,
        columns: columns,
        selected: data[0],
      });
      const onSelectChange = (value: any) => {
        state.selected = value;
      };
      return {
        code,
        state,
        isSelected,
        onSelectChange,
      };
    },
  };
</script>
<style scoped></style>
