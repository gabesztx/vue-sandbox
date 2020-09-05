<template>
  <div class="box">
    <div class="padding-content">
      <!-- Title -->
      <div class="title-content">
        <div class="title-label">Searchable</div>
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
        <v-icell-table :data="data" :columns="columns"></v-icell-table>
      </div>

      <!-- Settings -->
      <b-collapse :open="isOpenSetting">
        <div class="settings-content">
          <b-field grouped group-multiline>
            <div class="settings-item">
              <b-switch v-model="idSearch" :size="'is-small'">ID</b-switch>
            </div>
            <div class="settings-item">
              <b-switch v-model="firstNameSearch" :size="'is-small'">First Name</b-switch>
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
  import { ref, computed } from '@vue/composition-api';
  import { templateCode } from '@/views/Table/components/table-searchable/template-code';
  import { data } from '@/views/Table/components/data';

  export default {
    data() {
      return {
        data: data,
        isOpenSetting: false,
        isOpenCode: false,
      };
    },
    setup() {
      const code = ref(templateCode);
      const idSearch = ref(false);
      const firstNameSearch = ref(false);
      const columns = computed(() => {
        return [
          {
            field: 'id',
            label: 'ID',
            searchable: idSearch.value,
          },
          {
            field: 'first_name',
            label: 'First Name',
            searchable: firstNameSearch.value,
          },
          {
            field: 'last_name',
            label: 'Last Name',
          },
          {
            field: 'date',
            label: 'Date',
          },
          {
            field: 'gender',
            label: 'Gender',
          },
        ];
      });
      return {
        code,
        columns,
        idSearch,
        firstNameSearch,
      };
    },
  };
</script>
<style scoped></style>
