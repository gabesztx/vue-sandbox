<template>
  <div class="box">
    <div class="padding-content">
      <!-- Title -->
      <div class="title-content">
        <div class="title-label">Input - playground</div>
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
      <div class="input-content">
        <v-icell-input
          :label="label"
          :place-holder="placeHolder"
          :rounded="state.rounded"
          :size="state.size"
          :disabled="state.disabled"
          :loading="state.loading"
          :style-type="state.styleType"
          :value="state.value"
          @input="onInput"
        ></v-icell-input>
      </div>

      <!-- Settings -->
      <b-collapse :open="isOpenSetting">
        <div class="settings-content">
          <b-field grouped group-multiline>
            <div class="settings-item">
              <b-switch v-model="state.label" :size="'is-small'">Label</b-switch>
            </div>
            <div class="settings-item">
              <b-switch v-model="state.rounded" :size="'is-small'">Rounded</b-switch>
            </div>
            <div class="settings-item">
              <b-switch v-model="state.placeHolder" :size="'is-small'">Placeholder</b-switch>
            </div>
            <div class="settings-item">
              <b-switch v-model="state.disabled" :size="'is-small'">Disabled</b-switch>
            </div>
            <div class="settings-item">
              <b-switch v-model="state.loading" :size="'is-small'">Loading</b-switch>
            </div>
            <div class="settings-item">
              <b-select v-model="state.styleType" :size="'is-small'">
                <option value="">Style: Default</option>
                <option value="is-success">Style: Success</option>
                <option value="is-info">Style: Info</option>
                <option value="is-warning">Style: Warning</option>
                <option value="is-danger">Style: Error</option>
              </b-select>
            </div>
            <div class="settings-item">
              <b-select v-model="state.size" :size="'is-small'">
                <option value="">Size: Default</option>
                <option value="is-small">Size: Small</option>
                <option value="is-medium">Size: Medium</option>
                <option value="is-large">Size: Large</option>
              </b-select>
            </div>
          </b-field>
        </div>
      </b-collapse>
    </div>
    <!-- Data -->
    <div class="data-content">
      <code-box :open="isOpenData" :code="state.value"></code-box>
    </div>
    <!-- Code -->
    <div class="code-content">
      <code-box :open="isOpenCode" :code="code" copy></code-box>
    </div>
  </div>
</template>

<script lang="ts">
  import { computed, reactive } from '@vue/composition-api';
  import { templateCode } from './template-code';

  export default {
    data() {
      return {
        code: templateCode,
        isOpenSetting: false,
        isOpenCode: false,
        isOpenData: false,
      };
    },
    setup() {
      const state = reactive({
        rounded: false,
        disabled: false,
        loading: false,
        label: false,
        placeHolder: true,
        size: '',
        value: '',
        styleType: '',
      });
      const label = computed(() => (state.label ? 'Label' : ''));
      const placeHolder = computed(() => (state.placeHolder ? 'Placeholder' : ''));
      const onInput = (ev: InputEvent, value: any) => {
        state.value = value;
      };
      return {
        state,
        label,
        placeHolder,
        onInput,
      };
    },
  };
</script>
<style scoped></style>
