<template>
  <div class="box">
    <div class="padding-content">
      <!-- Title -->
      <div class="title-content">
        <div class="title-label">Checkable</div>
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
          :checkable="state.checkable"
          :checked-rows="state.checkedRows"
          :header-checkable="state.headerCheckable"
          :checkbox-position="state.checkboxPosition"
          :is-row-checkable="state.isRowCheckable ? onEnabledFirstRowCheckable : onDisabledFirstRowCheckable"
          @onCheckedChange="onCheckedChange"
        ></v-icell-table>
      </div>

      <!-- Settings -->
      <b-collapse :open="isOpenSetting">
        <div class="settings-content">
          <b-field grouped group-multiline>
            <div class="settings-item">
              <b-switch v-model="state.checkable" :size="'is-small'">Checkable</b-switch>
            </div>
            <div class="settings-item">
              <b-switch v-model="state.headerCheckable" :size="'is-small'">Header checkable</b-switch>
            </div>
            <div class="settings-item">
              <b-switch @input="onCheckboxPosition(state.checkboxPosition)" :size="'is-small'">
                Checkbox position:
                {{ state.checkboxPosition }}
              </b-switch>
            </div>
            <div class="settings-item">
              <b-switch v-model="state.isRowCheckable" :size="'is-small'">
                First row:
                {{ state.isRowCheckable ? 'disable' : 'enable' }}
              </b-switch>
            </div>
          </b-field>
        </div>
      </b-collapse>
    </div>
    <!-- Data -->
    <div class="data-content">
      <code-box :open="isOpenData" :code="state.checkedRows"></code-box>
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
      const state = reactive({
        data: data,
        columns: columns,
        isRowCheckable: true,
        checkable: true,
        checkboxPosition: 'left',
        headerCheckable: true,
        checkedRows: [data[0], data[2]],
      });

      const onCheckedChange = (value: any) => {
        state.checkedRows = value;
      };
      const onCheckboxPosition = (value: string) => {
        state.checkboxPosition = value === 'left' ? 'right' : 'left';
      };
      const onEnabledFirstRowCheckable = (row: any) => {
        return row.id !== 0;
      };
      const onDisabledFirstRowCheckable = (row: any) => {
        return row.id !== 1;
      };
      return {
        code,
        state,
        onCheckedChange,
        onCheckboxPosition,
        onEnabledFirstRowCheckable,
        onDisabledFirstRowCheckable,
      };
    },
  };
</script>
<style scoped></style>
