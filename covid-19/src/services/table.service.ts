import { i18n } from '@/locales/i18n';
import { IColumn } from '@/core/interfaces';

export const columns: IColumn[] = [
  {
    field: 'countryCode',
    width: 30,
    componentName: 'cell-image',
  },
  {
    field: 'country',
    label: 'Ország',
    sortable: true,
    width: 220,
  },
  {
    field: 'casesNew',
    label: i18n.tc('casesNew'),
    sortable: true,
    componentName: 'cell-base',
    customValue: (value) => (value === 'N/A' ? 'Nincs adat' : '+' + value),
    customClass: (value) => (value === 'N/A' ? 'is-no-data' : ''),
    customSort: (a, b, isAsc) => sortingCustomValue(a, b, isAsc, 'casesNew', 'N/A'),
    visible: true,
    // centered: true,
  },
  {
    field: 'deathsNew',
    label: i18n.tc('deathsNew'),
    sortable: true,
    visible: true,
    componentName: 'cell-base',
    customValue: (v) => (v === 'N/A' ? 'Nincs adat' : '+' + v),
    customClass: (v) => (v === 'N/A' ? 'is-no-data' : ''),
    customSort: (a, b, isAsc) => sortingCustomValue(a, b, isAsc, 'deathsNew', 'N/A'),
    // centered: true,
  },
  {
    field: 'casesActive',
    label: i18n.tc('casesActive'),
    sortable: true,
    visible: true,
    // centered: true,
  },
  {
    field: 'casesCritical',
    label: i18n.tc('casesCritical'),
    sortable: true,
    visible: true,
    // centered: true,
  },
  {
    width: 30,
    componentName: 'cell-icon',
  },
];

// TODO: Highlights
export const highlight = (value: any, result: any) => {
  const reg = new RegExp(value, 'gi');
  return result.replace(reg, (str) => '<b>' + str + '</b>');
};

export const searchData = (value: any, searchData: any) => {
  return searchData.filter((item) => {
    let isFind = false;
    Object.values(item).forEach((val: any) => {
      const isMatch = new RegExp(value, 'i').test(val);
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
