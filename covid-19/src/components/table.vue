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
    @page-change="onPageChange"
    @select="onSelect"
    @check="onCheck"
  >
    <b-table-column
      v-for="(column, index) in columns"
      v-slot="props"
      :key="index"
      :field="column.field"
      :label="column.label"
      :meta="column.meta"
      :searchable="column.searchable"
      :sortable="column.sortable"
      :visible="column.visible"
      :width="column.width"
    >
      <template v-if="column.image">
        <img :src="props.row[column.field]" />
      </template>
      <template v-else>{{ props.row[column.field] }}</template>
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
      id: [String, Number],
      image: Boolean,
    },

    setup(props: any, attr: any) {
      const selectValue = ref(props.selected);
      const checkedRowsValue = ref(props.checkedRows);

      const onSelect = (value: any) => {
        selectValue.value = value;
        attr.emit('onSelectChange', value);
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
        selectValue,
        checkedRowsValue,
      };
    },
  };
</script>

<style scoped></style>

<!-- onUpdated(() => {});-->
<!-- onUnmounted(() => {});-->
<!--
const stopWatchEffect = watchEffect(() => {
if (props.selected) {
selectValue.value = props.selected;
}
});-->
