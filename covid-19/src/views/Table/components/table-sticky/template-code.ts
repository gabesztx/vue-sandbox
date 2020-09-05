export const templateCode =
  '<template>\n' +
  '  <v-icell-table\n' +
  '    :data="state.data"\n' +
  '    :columns="state.columns"\n' +
  '    :sticky-header="state.stickyHeader">\n' +
  '  </v-icell-table>\n' +
  '</template>\n' +
  '\n' +
  '<script lang="ts">\n' +
  "import { reactive } from '@vue/composition-api';\n" +
  '\n' +
  'export default {\n' +
  '  setup() {\n' +
  '    const state = reactive({\n' +
  '      data: data,\n' +
  '      columns: columns,\n' +
  '      stickyHeader: true\n' +
  '    })\n' +
  '    return {\n' +
  '      state\n' +
  '    };\n' +
  '  }\n' +
  '};\n' +
  '\n' +
  'export const columns = [\n' +
  '  {\n' +
  "    field: 'id',\n" +
  "    label: 'ID'\n" +
  '  },\n' +
  '  {\n' +
  "    field: 'first_name',\n" +
  "    label: 'First Name'\n" +
  '  },\n' +
  '  {\n' +
  "    field: 'last_name',\n" +
  "    label: 'Last Name'\n" +
  '  },\n' +
  '  {\n' +
  "    field: 'street',\n" +
  "    label: 'Street'\n" +
  '  },\n' +
  '  {\n' +
  "    field: 'date',\n" +
  "    label: 'Date'\n" +
  '  },\n' +
  '  {\n' +
  "    field: 'gender',\n" +
  "    label: 'Gender'\n" +
  '  }\n' +
  '];\n' +
  '\n' +
  'const data = [\n' +
  '  {\n' +
  '    id: 1,\n' +
  "    first_name: 'Matt',\n" +
  "    last_name: 'Oglevie',\n" +
  "    street: '160 Emmet Point',\n" +
  "    date: '9/6/2019',\n" +
  "    gender: 'Male'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 2,\n' +
  "    first_name: 'Myrna',\n" +
  "    last_name: 'Kinzel',\n" +
  "    street: '9056 Bayside Drive',\n" +
  "    date: '8/25/2020',\n" +
  "    gender: 'Female'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 3,\n' +
  "    first_name: 'Brandy',\n" +
  "    last_name: 'Goodbar',\n" +
  "    street: '3439 Northland Alley',\n" +
  "    date: '2/6/2020',\n" +
  "    gender: 'Male'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 4,\n' +
  "    first_name: 'Hayden',\n" +
  "    last_name: 'Pretty',\n" +
  "    street: '169 Lakewood Gardens Junction',\n" +
  "    date: '4/11/2020',\n" +
  "    gender: 'Male'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 5,\n' +
  "    first_name: 'Padriac',\n" +
  "    last_name: 'Latchmore',\n" +
  "    street: '5 Golf View Circle',\n" +
  "    date: '1/18/2020',\n" +
  "    gender: 'Male'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 6,\n' +
  "    first_name: 'Celka',\n" +
  "    last_name: 'Emanuelli',\n" +
  "    street: '0 Superior Road',\n" +
  "    date: '4/9/2020',\n" +
  "    gender: 'Female'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 7,\n' +
  "    first_name: 'Saunders',\n" +
  "    last_name: 'Igounet',\n" +
  "    street: '5 Jackson Park',\n" +
  "    date: '5/10/2020',\n" +
  "    gender: 'Male'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 8,\n' +
  "    first_name: 'Anna',\n" +
  "    last_name: 'Allderidge',\n" +
  "    street: '905 International Hill',\n" +
  "    date: '7/22/2020',\n" +
  "    gender: 'Female'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 9,\n' +
  "    first_name: 'Ingelbert',\n" +
  "    last_name: 'Bateson',\n" +
  "    street: '4 Valley Edge Trail',\n" +
  "    date: '12/31/2019',\n" +
  "    gender: 'Male'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 10,\n' +
  "    first_name: 'Jon',\n" +
  "    last_name: 'Iacomettii',\n" +
  "    street: '297 Dunning Court',\n" +
  "    date: '12/17/2019',\n" +
  "    gender: 'Male'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 11,\n' +
  "    first_name: 'Jasen',\n" +
  "    last_name: 'Proppers',\n" +
  "    street: '639 Shoshone Circle',\n" +
  "    date: '12/4/2019',\n" +
  "    gender: 'Male'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 12,\n' +
  "    first_name: 'Fredia',\n" +
  "    last_name: 'Chesswas',\n" +
  "    street: '11 Manufacturers Way',\n" +
  "    date: '3/26/2020',\n" +
  "    gender: 'Female'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 13,\n' +
  "    first_name: 'Tyne',\n" +
  "    last_name: 'Feehily',\n" +
  "    street: '22 Fuller Hill',\n" +
  "    date: '6/11/2020',\n" +
  "    gender: 'Female'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 14,\n' +
  "    first_name: 'Raphael',\n" +
  "    last_name: 'McTrustie',\n" +
  "    street: '08009 Farmco Hill',\n" +
  "    date: '4/18/2020',\n" +
  "    gender: 'Male'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 15,\n' +
  "    first_name: 'Elihu',\n" +
  "    last_name: 'Loughead',\n" +
  "    street: '6 Gina Hill',\n" +
  "    date: '8/23/2020',\n" +
  "    gender: 'Male'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 16,\n' +
  "    first_name: 'Lyndsay',\n" +
  "    last_name: 'Duddle',\n" +
  "    street: '902 Veith Road',\n" +
  "    date: '6/15/2020',\n" +
  "    gender: 'Female'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 17,\n' +
  "    first_name: 'Dexter',\n" +
  "    last_name: 'Kob',\n" +
  "    street: '76901 Maple Parkway',\n" +
  "    date: '12/2/2019',\n" +
  "    gender: 'Male'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 18,\n' +
  "    first_name: 'Mia',\n" +
  "    last_name: 'Pharro',\n" +
  "    street: '25 Walton Trail',\n" +
  "    date: '8/10/2020',\n" +
  "    gender: 'Female'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 19,\n' +
  "    first_name: 'Lynnette',\n" +
  "    last_name: 'Jaggard',\n" +
  "    street: '1407 Westend Avenue',\n" +
  "    date: '11/10/2019',\n" +
  "    gender: 'Female'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 20,\n' +
  "    first_name: 'Thane',\n" +
  '    last_name: "O\'Growgane",\n' +
  "    street: '514 Summerview Point',\n" +
  "    date: '9/26/2019',\n" +
  "    gender: 'Male'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 21,\n' +
  "    first_name: 'Idalina',\n" +
  "    last_name: 'Piborn',\n" +
  "    street: '25753 Milwaukee Pass',\n" +
  "    date: '7/20/2020',\n" +
  "    gender: 'Female'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 22,\n' +
  "    first_name: 'Don',\n" +
  "    last_name: 'Camm',\n" +
  "    street: '96062 Pleasure Parkway',\n" +
  "    date: '4/11/2020',\n" +
  "    gender: 'Male'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 23,\n' +
  "    first_name: 'Danit',\n" +
  "    last_name: 'Mackin',\n" +
  "    street: '44 Clove Road',\n" +
  "    date: '5/1/2020',\n" +
  "    gender: 'Female'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 24,\n' +
  "    first_name: 'Reta',\n" +
  "    last_name: 'Imlen',\n" +
  "    street: '7 Superior Way',\n" +
  "    date: '5/10/2020',\n" +
  "    gender: 'Female'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 25,\n' +
  "    first_name: 'Tillie',\n" +
  "    last_name: 'Clemente',\n" +
  "    street: '421 Buhler Point',\n" +
  "    date: '11/11/2019',\n" +
  "    gender: 'Female'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 26,\n' +
  "    first_name: 'Mendy',\n" +
  "    last_name: 'Bullene',\n" +
  "    street: '4 Canary Court',\n" +
  "    date: '4/15/2020',\n" +
  "    gender: 'Male'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 27,\n' +
  "    first_name: 'Vladamir',\n" +
  "    last_name: 'Hamfleet',\n" +
  "    street: '49 Golf View Street',\n" +
  "    date: '9/28/2019',\n" +
  "    gender: 'Male'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 28,\n' +
  "    first_name: 'Marsha',\n" +
  "    last_name: 'Rubberts',\n" +
  "    street: '93 Colorado Court',\n" +
  "    date: '4/19/2020',\n" +
  "    gender: 'Female'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 29,\n' +
  "    first_name: 'Vern',\n" +
  "    last_name: 'Josuweit',\n" +
  "    street: '1 Trailsway Avenue',\n" +
  "    date: '3/30/2020',\n" +
  "    gender: 'Male'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 30,\n' +
  "    first_name: 'Paulie',\n" +
  '    last_name: "O\'Currine",\n' +
  "    street: '2 Mifflin Alley',\n" +
  "    date: '4/20/2020',\n" +
  "    gender: 'Male'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 31,\n' +
  "    first_name: 'Martha',\n" +
  "    last_name: 'Goscar',\n" +
  "    street: '4 International Center',\n" +
  "    date: '10/2/2019',\n" +
  "    gender: 'Female'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 32,\n' +
  "    first_name: 'Flossy',\n" +
  "    last_name: 'Haughin',\n" +
  "    street: '8732 Becker Alley',\n" +
  "    date: '2/21/2020',\n" +
  "    gender: 'Female'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 33,\n' +
  "    first_name: 'Bradan',\n" +
  "    last_name: 'Pratt',\n" +
  "    street: '76149 Old Gate Place',\n" +
  "    date: '9/9/2019',\n" +
  "    gender: 'Male'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 34,\n' +
  "    first_name: 'Yankee',\n" +
  "    last_name: 'Tyreman',\n" +
  "    street: '3 Carey Alley',\n" +
  "    date: '6/2/2020',\n" +
  "    gender: 'Male'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 35,\n' +
  "    first_name: 'Natalya',\n" +
  "    last_name: 'Sawtell',\n" +
  "    street: '78 Commercial Center',\n" +
  "    date: '4/2/2020',\n" +
  "    gender: 'Female'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 36,\n' +
  "    first_name: 'Ynez',\n" +
  "    last_name: 'Danell',\n" +
  "    street: '97 Sunnyside Junction',\n" +
  "    date: '2/12/2020',\n" +
  "    gender: 'Female'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 37,\n' +
  "    first_name: 'Laural',\n" +
  "    last_name: 'Dust',\n" +
  "    street: '5916 Scoville Parkway',\n" +
  "    date: '9/16/2019',\n" +
  "    gender: 'Female'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 38,\n' +
  "    first_name: 'Catriona',\n" +
  "    last_name: 'Nel',\n" +
  "    street: '7361 Pond Court',\n" +
  "    date: '1/12/2020',\n" +
  "    gender: 'Female'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 39,\n' +
  "    first_name: 'Heather',\n" +
  "    last_name: 'Kleinzweig',\n" +
  "    street: '7525 Iowa Terrace',\n" +
  "    date: '5/31/2020',\n" +
  "    gender: 'Female'\n" +
  '  },\n' +
  '  {\n' +
  '    id: 40,\n' +
  "    first_name: 'Lanny',\n" +
  "    last_name: 'Flippini',\n" +
  "    street: '158 Buena Vista Way',\n" +
  "    date: '10/12/2019',\n" +
  "    gender: 'Female'\n" +
  '  }\n' +
  '];\n' +
  '</script>\n' +
  '<style scoped></style>';
