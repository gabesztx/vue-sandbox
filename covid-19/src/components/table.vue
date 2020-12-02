<template>
  <b-table
    :data="data"
    :bordered="bordered"
    :striped="striped"
    :hoverable="hoverable"
    :focusable="focusable"
    :loading="loading"
    :narrowed="narrowed"
    :mobile-cards="mobileCards"
    :selected="selected ? selectValue : {}"
    :checkable="checkable"
    :checkbox-position="checkboxPosition"
    :checked-rows="checkedRows ? checkedRowsValue : []"
    :is-row-checkable="isRowCheckable"
    :header-checkable="headerCheckable"
    :paginated="paginated"
    :pagination-simple="paginationSimple"
    :pagination-position="paginationPosition"
    :pagination-size="paginationSize"
    :current-page="currentPage"
    :per-page="perPage"
    :sticky-header="stickyHeader"
    :sort-icon="sortIcon"
    :sort-icon-size="sortIconSize"
    :show-detail-icon="showDetailIcon"
    :detailed="detailed"
    :card-layout="cardLayout"
    :scrollable="scrollable"
    :height="height"
    :row-class="rowClass"
    :default-sort-direction="defaultSortDirection"
    :default-sort="defaultSort"
    :sort-multiple="sortMultiple"
    :sort-multiple-data="sortMultipleData"
    :sort-multiple-key="sortMultipleKey"
    @page-change="onPageChange"
    @select="onSelect"
    @check="onCheck"
    @click="onRowClick"
  >
    <!-- No Found -->
    <template slot="empty">
      <div class="no-found-content">
        <div class="no-found-icon has-text-grey">
          <span class="icon is-large">
            <i class="mdi mdi-emoticon-sad mdi-48px" />
          </span>
        </div>
        <div class="no-found-text">Nincs találat!</div>
      </div>
    </template>

    <b-table-column
      v-for="(column, index) in columns"
      v-slot="props"
      :key="index"
      :label="column.label"
      :field="column.field"
      :meta="column.meta"
      :searchable="column.searchable"
      :sortable="column.sortable"
      :visible="column.visible"
      :width="column.width"
      :centered="column.centered"
      :subheading="column.subheading"
      :cell-class="column.cellClass"
      :header-class="column.headerClass"
      :custom-sort="column.customSort"
      :custom-key="column.customKey"
    >
      <template v-if="column.componentName">
        <div class="cell-content">
          <component
            v-bind:is="column.componentName"
            :column="column"
            :row="props.row"
            :value="props.row[column.field]"
            @onCellEmit="onCellEmit"
          ></component>
        </div>
      </template>
      <template v-else>
        <div class="cell-content" v-html="props.row[column.field]"></div>
      </template>
    </b-table-column>
  </b-table>
</template>

<script lang="ts">
  import { ref } from '@vue/composition-api';

  export default {
    // name: 'v-table',
    props: {
      data: Array,
      columns: Array,
      bordered: Boolean,
      striped: Boolean,
      narrowed: Boolean,
      hoverable: Boolean,
      loading: Boolean,
      focusable: Boolean,

      /* Checkbox */
      detailed: Boolean,
      checkable: Boolean,
      checkboxPosition: String,
      checkedRows: Array,
      isRowCheckable: Function,
      headerCheckable: Boolean,
      customIsChecked: Function,

      /* Select */
      selected: Object,
      isRowSelectable: Function,

      mobileCards: Boolean,
      cardLayout: Boolean,
      defaultSort: [String, Array],
      defaultSortDirection: String,
      sortIcon: String,
      sortIconSize: String,
      sortMultiple: Boolean,
      sortMultipleData: Array,
      sortMultipleKey: String,
      paginated: Boolean,
      currentPage: Number,
      perPage: [Number, String],
      showDetailIcon: Boolean,
      paginationSimple: Boolean,
      paginationSize: String,
      paginationPosition: String,
      backendSorting: Boolean,
      backendFiltering: Boolean,
      rowClass: Function,
      openedDetailed: Array,
      hasDetailedVisible: Function,
      detailKey: String,
      customDetailRow: Boolean,
      backendPagination: Boolean,
      total: [Number, String],
      iconPack: String,
      mobileSortPlaceholder: String,
      customRowKey: String,
      draggable: Boolean,
      scrollable: Boolean,
      ariaNextLabel: String,
      ariaPreviousLabel: String,
      ariaPageLabel: String,
      ariaCurrentLabel: String,
      stickyHeader: Boolean,
      height: [Number, String],
      centered: Boolean,
      subheading: [String, Number],
      cellClass: String,
      id: [String, Number],
      isImage: Boolean,
    },

    setup(props: any, { emit }) {
      const selectValue = ref(props.selected);
      const checkedRowsValue = ref(props.checkedRows);
      const onSelect = (value: any) => {
        selectValue.value = value;
        emit('onSelectChange', value);
      };
      const onRowClick = (value: any) => {
        emit('rowClick', value);
      };
      const onCellClick = (value: any) => {
        emit('cellClick', value);
      };
      const onCheck = (value: any) => {
        checkedRowsValue.value = value;
        emit('onCheckedChange', value);
      };
      const onPageChange = (page: number) => {
        emit('pageChange', page);
      };
      const onUpdateCell = (cell, row) => {
        emit('updateCell', cell, row);
      };
      const onCellEmit = (value) => {
        emit('onCellEmit', value);
      };
      return {
        onSelect,
        onCheck,
        onPageChange,
        onRowClick,
        onCellClick,
        onUpdateCell,
        onCellEmit,
        selectValue,
        checkedRowsValue,
      };
    },
  };
</script>
<style scoped></style>
