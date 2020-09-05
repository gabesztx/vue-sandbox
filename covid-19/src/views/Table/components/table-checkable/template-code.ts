export const templateCode =
  '<template>\n' +
  '  <v-icell-table\n' +
  '    :data="state.data"\n' +
  '    :columns="state.columns"\n' +
  '    :checkable="state.checkable"\n' +
  '    :checked-rows="state.checkedRows"\n' +
  '    :header-checkable="state.headerCheckable"\n' +
  '    :checkbox-position="state.checkboxPosition"\n' +
  '    :is-row-checkable="state.isRowCheckable ? onEnabledFirstRowCheckable : onDisabledFirstRowCheckable"\n' +
  '    @onCheckedChange="onCheckedChange"\n' +
  '  >\n' +
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
  '      isRowCheckable: true,\n' +
  '      checkable: true,\n' +
  "      checkboxPosition: 'left',\n" +
  '      headerCheckable: true,\n' +
  '      checkedRows: [data[0], data[2]],\n' +
  '    })\n' +
  '\n' +
  '    const onCheckedChange = (value: any) => {\n' +
  '      state.checkedRows = value;\n' +
  '    };\n' +
  '    const onCheckboxPosition = (value: string) => {\n' +
  "      state.checkboxPosition = value === 'left' ? 'right' : 'left';\n" +
  '    };\n' +
  '    const onEnabledFirstRowCheckable = (row: any) => {\n' +
  '      return row.id !== 0;\n' +
  '    };\n' +
  '    const onDisabledFirstRowCheckable = (row: any) => {\n' +
  '      return row.id !== 1;\n' +
  '    };\n' +
  '    return {\n' +
  '      state,\n' +
  '      onCheckedChange,\n' +
  '      onCheckboxPosition,\n' +
  '      onEnabledFirstRowCheckable,\n' +
  '      onDisabledFirstRowCheckable\n' +
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
