export interface IColumn {
  label?: string;
  customKey?: string | number;
  field?: string;
  meta?: any;
  width?: number | string;
  numeric?: boolean;
  centered?: boolean;
  searchable?: boolean;
  sortable?: boolean;
  visible?: boolean;
  subheading?: string | number;
  customSort?: (a: object, b: object, isAsc: boolean) => number;
  customSearch?: (a: object, input: string) => any;
  sticky?: boolean;
  cellClass?: string;
  headerSelectable?: boolean;
  componentName?: any;


}
