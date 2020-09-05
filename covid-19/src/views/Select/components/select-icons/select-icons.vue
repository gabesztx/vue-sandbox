<template>
  <div class="box">
    <div class="padding-content">
      <!-- Title -->
      <div class="title-content">
        <div class="title-label">Select - icons</div>
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
        <v-icell-select
          :label="state.label"
          :placeHolder="state.placeHolder"
          :option="state.option"
          :expanded="state.expanded"
          :icon="state.icon"
          :value="state.value"
          @input="onInput"
        ></v-icell-select>
      </div>

      <!-- Settings -->
      <b-collapse :open="isOpenSetting">
        <div class="settings-content">
          <b-field grouped group-multiline>
            <div class="settings-item">
              <b-select v-model="state.icon" :size="'is-small'" @input="onIconSelect">
                <option value="">Icon: off</option>
                <option value="account">Icon: account</option>
                <option value="earth">Icon: earth</option>
                <option value="apple-icloud">Icon: apple-icloud</option>
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
  import { ref, reactive } from '@vue/composition-api';
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
      const state = reactive({
        label: '',
        expanded: true,
        icon: 'earth',
        placeHolder: 'earth',
        option: ['Option 1', 'Option 2', 'Option 3'],
        value: null,
      });
      const onInput = (value: any) => {
        state.value = value;
      };
      const onIconSelect = (value: string) => {
        state.placeHolder = value;
      };
      return {
        code,
        state,
        onInput,
        onIconSelect,
      };
    },
  };
</script>
<style scoped></style>
