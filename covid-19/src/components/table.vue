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
    @page-change="onPageChange"
    @select="onSelect"
    @check="onCheck"
    @click="onRowClick"
  >
    <b-table-column
      v-slot="props"
      v-for="(column, index) in columns"
      :key="index"
      :field="column.field"
      :label="column.label"
      :meta="column.meta"
      :searchable="column.searchable"
      :sortable="column.sortable"
      :visible="column.visible"
      :width="column.width"
      :centered="column.centered"
      :subheading="column.subheading"
      :cell-class="column.cellClass"
      :header-class="column.headerClass"
    >
      <template v-if="column.image">
        <div class="td-img" :style="{ backgroundImage: `url(${props.row[column.field]})` }" />
      </template>
      <template v-else>
        <span :class="column.class">
          {{ props.row[column.field] }}
        </span>
      </template>
      <template v-if="column.button">
        <b-button
          :class="column.button.class"
          :label="column.button.label"
          v-on:click="onCellClick(props.row)"
        ></b-button>
      </template>
    </b-table-column>
  </b-table>
</template>

<script lang="ts">
  import { ref } from '@vue/composition-api';

  export default {
    name: 'v-table',
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
      filtersEvent: String,
      centered: Boolean,
      subheading: [String, Number],
      cellClass: String,
      id: [String, Number],
      image: Boolean,
    },

    setup(props: any, attr: any){
      const selectValue = ref(props.selected);
      const checkedRowsValue = ref(props.checkedRows);
      const onSelect = (value: any) => {
        selectValue.value = value;
        attr.emit('onSelectChange', value);
      };
      const onRowClick = (value: any) => {
        attr.emit('rowClick', value);
      };
      const onCellClick = (value: any) => {
        attr.emit('cellClick', value);
      };
      const onCheck = (value: any) => {
        checkedRowsValue.value = value;
        attr.emit('onCheckedChange', value);
      };
      const onPageChange = (page: number) => {
        attr.emit('pageChange', page);
      };
      return {
        onSelect,
        onCheck,
        onPageChange,
        onRowClick,
        onCellClick,
        selectValue,
        checkedRowsValue,
      };
    },
  };
</script>
<style scoped></style>
