<template>
  <div class="box">
    <div class="padding-content">
      <!-- Title -->
      <div class="title-content">
        <div class="title-label">Input - icons</div>
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
          :label="state.label"
          :value="state.value"
          :type="state.type"
          :place-holder="state.placeHolder"
          :icon="state.icon"
          :icon-clickable="state.iconClickable"
          @input="onInput"
          @icon-click="onIconClick"
        ></v-icell-input>
      </div>

      <!-- Settings -->
      <b-collapse :open="isOpenSetting">
        <div class="settings-content">
          <b-field grouped group-multiline>
            <div class="settings-item">
              <b-switch v-model="state.iconClickable" :size="'is-small'">Icon clickable</b-switch>
            </div>
            <div class="settings-item">
              <b-select v-model="state.icon" :size="'is-small'" @input="onIconSelect">
                <option value="">Icon: off</option>
                <option value="email">Icon: email</option>
                <option value="magnify">Icon: magnify</option>
                <option value="credit-card">Icon: credit card</option>
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
  import { ref, reactive, inject } from '@vue/composition-api';
  import { templateCode } from './template-code';

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
      const toast = inject('toastService') as any;
      const state = reactive({
        label: '',
        placeHolder: 'email',
        icon: 'email',
        value: '',
        iconClickable: false,
      });
      const onIconClick = () => {
        toast.open('Clicked on the icon!', 'is-info');
      };
      const onInput = (ev: InputEvent, value: any) => {
        state.value = value;
      };
      const onIconSelect = (value: string) => {
        state.placeHolder = value;
      };
      return {
        code,
        state,
        onInput,
        onIconClick,
        onIconSelect,
      };
    },
  };
</script>
<style scoped></style>
