export const templateCode =
  '<template>\n' +
  '  <v-icell-select\n' +
  '    :label="state.label"\n' +
  '    :placeHolder="state.placeHolder"\n' +
  '    :option="state.option"\n' +
  '    :expanded="state.expanded"\n' +
  '    :icon="state.icon"\n' +
  '    :value="state.value"\n' +
  '    @input="onInput"\n' +
  '  ></v-icell-select>\n' +
  '</template>\n' +
  '\n' +
  '<script lang="ts">\n' +
  "import { reactive } from '@vue/composition-api';\n" +
  '\n' +
  'export default {\n' +
  '  setup(){\n' +
  '    const state = reactive({\n' +
  "      label: '',\n" +
  '      expanded: true,\n' +
  "      icon: 'earth',\n" +
  "      placeHolder: 'earth',\n" +
  "      option: ['Option 1', 'Option 2', 'Option 3'],\n" +
  '      value: null\n' +
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
