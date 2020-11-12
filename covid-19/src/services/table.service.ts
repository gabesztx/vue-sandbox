import { i18n } from '@/locales/i18n';
import { IColumn } from '@/core/interfaces';

export const columnsData: IColumn[] = [
  {
    field: 'countryCode',
    width: 30,
    componentName: 'cell-image',
  },
  {
    field: 'country',
    label: 'Ország',
    sortable: true,
    width: 180,
  },
  {
    field: 'casesNew',
    label: i18n.tc('casesNew'),
    sortable: true,
    centered: true,
    componentName: 'cell-base',
    visible: true,
    customValue: (value) => (value === 'N/A' ? 'Nincs adat' : '+' + value),
    customClass: (value) => (value === 'N/A' ? 'is-no-data' : ''),
    customSort: (a, b, isAsc) => sortingCustomValue(a, b, isAsc, 'casesNew', 'N/A'),
  },
  {
    field: 'deathsNew',
    label: i18n.tc('deathsNew'),
    sortable: true,
    centered: true,
    componentName: 'cell-base',
    visible: true,
    customValue: (v) => (v === 'N/A' ? 'Nincs adat' : '+' + v),
    customClass: (v) => (v === 'N/A' ? 'is-no-data' : ''),
    customSort: (a, b, isAsc) => sortingCustomValue(a, b, isAsc, 'deathsNew', 'N/A'),
  },
  {
    field: 'casesActive',
    label: i18n.tc('casesActive'),
    sortable: true,
    centered: true,
    visible: true,
  },
  {
    field: 'casesCritical',
    label: i18n.tc('casesCritical'),
    sortable: true,
    centered: true,
    visible: true,
  },
  {
    width: 30,
    componentName: 'cell-icon',
  },
];

export const searchData = (searchData: any, searchValue: any) => {
  return searchData.filter((item) => {
    let isFind = false;
    Object.values(item).forEach((val: any) => {
      const isMatch = new RegExp(searchValue, 'i').test(val);
      if (isMatch) {
        isFind = true;
      }
    });
    return isFind;
  });
};

export const sortingCustomValue = (a, b, isAsc, filed, customValue) => {
  const AObj = a[filed] === customValue ? -1 : Number(a[filed]);
  const BObj = b[filed] === customValue ? -1 : Number(b[filed]);
  return !isAsc ? BObj - AObj : AObj - BObj;
};
