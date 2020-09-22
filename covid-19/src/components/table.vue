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
    :paginated="!!data.length ? true : false"
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
    <!--REFACTOR paginated -->
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
      :custom-sort="column.customSort"
    >
      <!--<div :class="`table-column-content ${getNewCasesClass(props.row[column.field], column.field)}`">-->
      <div :class="`table-column-content`">
        <template v-if="!column.image && !column.button">
          <span :class="`cell-value`">{{ props.row[column.field] }}</span>
        </template>

        <template v-if="column.button">
          <b-button
            :class="column.button.class"
            :label="column.button.label"
            v-on:click="onCellClick(props.row)"
          ></b-button>
        </template>

        <template v-if="column.image">
          <div class="img-content">
            <img class="img-flag" v-bind:src="props.row[column.field]">
          </div>
        </template>
      </div>
    </b-table-column>

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

      const getNewCasesClass = (value, field) => {
        if ('newCasesText' === field) {
          const num = Number(value.substring(1));
          if (num < 400 && num > 200) {
            return 'primary';
          }
          if (num < 800 && num > 400) {
            return 'warning';
          }
          if (num > 400) {
            return 'danger';
          }
        }
      };
      return {
        onSelect,
        onCheck,
        onPageChange,
        onRowClick,
        onCellClick,
        selectValue,
        checkedRowsValue,
        getNewCasesClass,
      };
    },
  };
</script>
<style scoped></style>
<!--<div class="td-img" :style="{ backgroundImage: `url(${props.row[column.field]})` }" />-->
<!--
<b-table-column :field="columns[0].field" v-slot="props" :width="columns[0].width">
<div class="img-content">
  <img class="img-flag" v-bind:src="props.row.countryCode">
</div>
</b-table-column>
<b-table-column
  :field="columns[1].field"
  :label="columns[1].label"
  v-slot="props"
>
{{ props.row.countryText }}
</b-table-column>-->
