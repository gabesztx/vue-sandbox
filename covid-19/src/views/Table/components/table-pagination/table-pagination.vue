<template>
  <div class="box">
    <div class="padding-content">
      <!-- Title -->
      <div class="title-content">
        <div class="title-label">Pagination</div>
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
        <v-icell-table
          :data="state.data"
          :columns="state.columns"
          :paginated="state.paginated"
          :pagination-simple="state.paginationSimple"
          :pagination-position="state.paginationPosition"
          :pagination-size="state.paginationSize"
          :per-page="state.perPage"
          :current-page="state.currentPage"
          @pageChange="onPageChange"
        ></v-icell-table>
      </div>

      <!-- Settings -->
      <b-collapse :open="isOpenSetting">
        <div class="select-content"></div>
        <div class="settings-content">
          <b-field grouped group-multiline>
            <div class="settings-item">
              <b-switch v-model="state.paginated" :size="'is-small'">Paginated</b-switch>
            </div>

            <div class="settings-item">
              <b-switch v-model="state.paginationSimple" :size="'is-small'">
                Pagination {{ !state.paginationSimple ? 'basic' : 'simple' }}
              </b-switch>
            </div>

            <div class="settings-item">
              <b-select v-model="state.perPage" :size="'is-small'">
                <option value="5">5 per page</option>
                <option value="10">10 per page</option>
                <option value="15">15 per page</option>
                <option value="20">20 per page</option>
              </b-select>
            </div>

            <div class="settings-item">
              <b-select v-model="state.paginationPosition" :size="'is-small'">
                <option value="bottom">pagination: bottom</option>
                <option value="top">pagination: top</option>
                <option value="both">pagination: both</option>
              </b-select>
            </div>
            <div class="settings-item">
              <b-button :label="'Set page to 2'" :size="'is-small'" @click="state.currentPage = 2"></b-button>
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
  import { templateCode } from '@/views/Table/components/table-pagination/template-code';
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
        paginated: true,
        paginationSimple: true,
        paginationPosition: 'bottom',
        paginationSize: 'is-small',
        perPage: 5,
        currentPage: 1,
      });
      const onPageChange = (page: number) => {
        state.currentPage = page;
      };
      return {
        code,
        state,
        onPageChange,
      };
    },
  };
</script>
<style scoped></style>
