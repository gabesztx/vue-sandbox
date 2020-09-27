export const columns = [
  {
    field: 'countryCode',
    label: '',
    image: true,
    width: 50,
    meta: {
      url: `http://localhost:5000/static/flags/`,
    },
  },
  {
    field: 'country',
    label: 'Hely',
    sortable: true,
    searchable: false,
    width: 170,
  },

  {
    field: 'casesActive',
    label: 'Aktív esetek',
    sortable: true,
  },

  {
    field: 'casesNew',
    label: 'Napi új esetek',
    sortable: true,
    // width: 200,
    customSort: (a, b, isAsc) => {
      const AObj = a.casesNew == '-' ? -1 : Number(a.casesNew);
      const BObj = b.casesNew == '-' ? -1 : Number(b.casesNew);
      return !isAsc ? BObj - AObj : AObj - BObj;
    },
  },
  {
    field: 'deathsNew',
    label: 'Napi új elhunytak',
    sortable: true,
    // width: 200,
    customSort: (a, b, isAsc) => {
      // TODO: refactor és kiszervezés
      const AObj = a.deathsNew === '-' ? -1 : Number(a.deathsNew);
      const BObj = b.deathsNew === '-' ? -1 : Number(b.deathsNew);
      return !isAsc ? BObj - AObj : AObj - BObj;
    },
  },
  {
    field: 'casesCritical',
    label: 'Kritikus esetek',
    sortable: true,
    customSort: (a, b, isAsc) => {
      // TODO: refactor és kiszervezés
      const AObj = a.casesCritical === '-' ? -1 : Number(a.casesCritical);
      const BObj = b.casesCritical === '-' ? -1 : Number(b.casesCritical);
      return !isAsc ? BObj - AObj : AObj - BObj;
    },
  },
  /*  {
  field: 'casesTotal',
  label: 'Totál esetek',
  sortable: true,
  customSort: (a, b, isAsc) => {
    const AObj = a.casesTotal == '-' ? -1 : Number(a.casesTotal);
    const BObj = b.casesTotal == '-' ? -1 : Number(b.casesTotal);
    return !isAsc ? BObj - AObj : AObj - BObj;
  },
},*/
  /*{
    field: 'cases1MPop',
    label: 'Total esetek / 1M fő',
    sortable: true,
    customSort: (a, b, isAsc) => {
      const AObj = a.cases1MPop == '-' ? -1 : Number(a.cases1MPop);
      const BObj = b.cases1MPop == '-' ? -1 : Number(b.cases1MPop);
      return !isAsc ? BObj - AObj : AObj - BObj;
    },
  },*/
  /*{
    field: 'testsTotal',
    label: 'Mintavételek száma',
    sortable: true,
    customSort: (a, b, isAsc) => {
      // TODO: refactor és kiszervezés
      const AObj = a.testsTotal === '-' ? -1 : Number(a.testsTotal);
      const BObj = b.testsTotal === '-' ? -1 : Number(b.testsTotal);
      return !isAsc ? BObj - AObj : AObj - BObj;
    },
  },*/
  /*    {
        field: 'tests1MPop',
        label: 'Tesztek / 1M fő',
        sortable: true,
        customSort: (a, b, isAsc) => {
          const AObj = a.tests1MPop === '-' ? -1 : Number(a.tests1MPop);
          const BObj = b.tests1MPop === '-' ? -1 : Number(b.tests1MPop);
          if (!isAsc) {
            return BObj - AObj;
          } else {
            return AObj - BObj;
          }
        },
      },
      {
        field: 'deaths1MPop',
        label: 'Elhunytak / 1M fő',
        sortable: true,
        customSort: (a, b, isAsc) => {
          const AObj = a.deaths1MPop === '-' ? -1 : Number(a.deaths1MPop);
          const BObj = b.deaths1MPop === '-' ? -1 : Number(b.deaths1MPop);
          if (!isAsc) {
            return BObj - AObj;
          } else {
            return AObj - BObj;
          }
        },
      },*/
  /*{
    field: 'population',
    label: 'Lakosok száma',
    sortable: true,
    width: 150,
    customSort: (a, b, isAsc) => {
      const AObj = a.population === '-' ? -1 : Number(a.population);
      const BObj = b.population === '-' ? -1 : Number(b.population);
      if (!isAsc) {
        return BObj - AObj;
      } else {
        return AObj - BObj;
      }
    },
  },*/
];
