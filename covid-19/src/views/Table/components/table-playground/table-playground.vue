<template>
  <div class="box">
    <div class="padding-content">
      <!-- Title -->
      <div class="title-content">
        <div class="title-label">Playground</div>
        <div class="tags-content">
          <span class="tag is-light" @click="isOpenSetting = !isOpenSetting" :class="isOpenSetting ? 'active' : ''">
            <i class="mdi mdi-cog"></i>
          </span>
          <span class="tag is-light" @click="isOpenCode = !isOpenCode" :class="isOpenCode ? 'active' : ''">
            <i class="mdi mdi-code-tags"></i>
          </span>
        </div>
      </div>

      <!-- Table -->
      <div class="table-content">
        <v-icell-table
          :data="state.data"
          :columns="state.columns"
          :bordered="state.bordered"
          :striped="state.striped"
          :narrowed="state.narrowed"
          :loading="state.loading"
          :hoverable="state.hoverable"
          :focusable="state.focusable"
          :mobileCards="state.mobileCards"
        ></v-icell-table>
      </div>

      <!-- Settings -->
      <b-collapse :open="isOpenSetting">
        <div class="settings-content">
          <b-field grouped group-multiline>
            <div class="settings-item">
              <b-switch v-model="state.bordered" :size="switcherClass">Bordered</b-switch>
            </div>
            <div class="settings-item">
              <b-switch v-model="state.striped" :size="switcherClass">Striped</b-switch>
            </div>
            <div class="settings-item">
              <b-switch v-model="state.narrowed" :size="switcherClass">Narrowed</b-switch>
            </div>
            <div class="settings-item">
              <b-switch v-model="state.hoverable" :size="switcherClass">Hoverable</b-switch>
            </div>
            <div class="settings-item">
              <b-switch v-model="state.focusable" :size="switcherClass">Focusable</b-switch>
            </div>
            <div class="settings-item">
              <b-switch v-model="state.loading" :size="switcherClass">Loading</b-switch>
            </div>
            <div class="settings-item">
              <b-switch v-model="state.mobileCards" :size="switcherClass">Mobile cards</b-switch>
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
  import { data, columns } from '@/views/Table/components/data';

  export default {
    data() {
      return {
        isOpenSetting: false,
        isOpenCode: false,
        isOpenData: false,
        switcherClass: 'is-small',
      };
    },
    setup() {
      const code = ref(templateCode);
      const state = reactive({
        data: data,
        columns: columns,
        bordered: false,
        striped: false,
        narrowed: false,
        hoverable: false,
        focusable: false,
        loading: false,
        mobileCards: true,
      });
      return {
        code,
        state,
      };
    },
  };
</script>
<style scoped></style>
