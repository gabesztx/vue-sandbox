export const templateCode =
  '<template>\n' +
  '  <v-icell-select\n' +
  '    :label="state.label"\n' +
  '    :place-holder="state.placeHolder"\n' +
  '    :option="state.option"\n' +
  '    :expanded="state.expanded"\n' +
  '    :multiple="state.multiple"\n' +
  '    :value="state.value"\n' +
  '    @input="onInput"\n' +
  '  ></v-icell-select>\n' +
  '</template>\n' +
  '\n' +
  '<script lang="ts">\n' +
  "import { reactive } from '@vue/composition-api';\n" +
  '\n' +
  'export default {\n' +
  '  setup() {\n' +
  '    const state = reactive({\n' +
  "      label: '',\n" +
  "      placeHolder: '',\n" +
  '      expanded: true,\n' +
  '      multiple: true,\n' +
  '      nativeSize: 4,\n' +
  "      option: ['Palvin Barbi', 'Mihalik Enikő', 'Ördög Nóra', 'Szabó Erika', 'Flint', 'Silver', 'Billy', 'Heisenberg'],\n" +
  "      value: ''\n" +
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
