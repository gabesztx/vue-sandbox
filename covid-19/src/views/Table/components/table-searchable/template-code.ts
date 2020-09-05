export const templateCode =
  '<template>\n' +
  '  <v-icell-table\n' +
  '    :data="state.data"\n' +
  '    :columns="state.columns">\n' +
  '  </v-icell-table>\n' +
  '</template>\n' +
  '\n' +
  '<script lang="ts">\n' +
  "import { reactive } from '@vue/composition-api';\n" +
  '\n' +
  'export default {\n' +
  '  setup(){\n' +
  '    const state = reactive({\n' +
  '      data: data,\n' +
  '      columns: columns\n' +
  '    });\n' +
  '    return {\n' +
  '      state\n' +
  '    };\n' +
  '  }\n' +
  '};\n' +
  'const data = [\n' +
  "  { id: 1, first_name: 'Jesse', last_name: 'Simmons', date: '2016-10-15', gender: 'Male' },\n" +
  "  { id: 2, first_name: 'John', last_name: 'Jacobs', date: '2016-12-15', gender: 'Male' },\n" +
  "  { id: 3, first_name: 'Tina', last_name: 'Gilbert', date: '2016-04-26', gender: 'Female' },\n" +
  "  { id: 4, first_name: 'Clarence', last_name: 'Flores', date: '2016-04-10', gender: 'Male' },\n" +
  "  { id: 5, first_name: 'Anne', last_name: 'Lee', date: '2016-12-06', gender: 'Female' }\n" +
  '];\n' +
  '\n' +
  'const columns = [\n' +
  '  {\n' +
  "    field: 'id',\n" +
  "    label: 'ID',\n" +
  '    searchable: true\n' +
  '  },\n' +
  '  {\n' +
  "    field: 'first_name',\n" +
  "    label: 'First Name',\n" +
  '    searchable: true\n' +
  '  },\n' +
  '  {\n' +
  "    field: 'last_name',\n" +
  "    label: 'Last Name'\n" +
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
  '</script>\n' +
  '<style scoped></style>';
