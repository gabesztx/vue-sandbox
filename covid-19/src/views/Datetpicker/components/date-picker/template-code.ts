export const templateCode =
  '<template>\n' +
  '  <v-icell-date\n' +
  '    :label="state.label"\n' +
  '    :placeHolder="state.placeHolder"\n' +
  '    :minDate="state.minDate"\n' +
  '    :maxDate="state.maxDate"\n' +
  '    v-model="state.value"\n' +
  '    @input="onInput($event)"\n' +
  '  ></v-icell-date>\n' +
  '</template>\n' +
  '\n' +
  '<script lang="ts">\n' +
  "import moment from 'moment';\n" +
  "import { reactive } from '@vue/composition-api';\n" +
  '\n' +
  'export default {\n' +
  '  setup() {\n' +
  '    const state = reactive({\n' +
  "      label: 'Date',\n" +
  "      placeHolder: 'Choose date',\n" +
  "      minDate: moment().subtract(5, 'days').toDate(),\n" +
  "      maxDate: moment().add(5, 'days').toDate(),\n" +
  '      value: moment().toDate()\n' +
  '    });\n' +
  '    const onInput = (value: any) => {\n' +
  '      state.value = value;\n' +
  '    };\n' +
  '    return {\n' +
  '      state,\n' +
  '      onInput\n' +
  '    };\n' +
  '  }\n' +
  '};\n' +
  '</script>\n' +
  '<style scoped></style>';
