export const templateCode =
  '<template>\n' +
  '  <v-icell-input\n' +
  '    :label="state.placeHolder"\n' +
  '    :place-holder="state.placeHolder"\n' +
  '    :rounded="state.rounded"\n' +
  '    :size="state.size"\n' +
  '    :disabled="state.disabled"\n' +
  '    :loading="state.loading"\n' +
  '    :field-type="state.fieldType"\n' +
  '    :value="state.value"\n' +
  '    @onInput="onInput"\n' +
  '  ></v-icell-input>\n' +
  '</template>\n' +
  '\n' +
  '<script lang="ts">\n' +
  "import { reactive } from '@vue/composition-api';\n" +
  '\n' +
  'export default {\n' +
  '  setup() {\n' +
  '    const state = reactive({\n' +
  '      rounded: false,\n' +
  '      disabled: false,\n' +
  '      loading: false,\n' +
  "      label: '',\n" +
  "      placeHolder: '',\n" +
  "      size: '',\n" +
  "      fieldType: '',\n" +
  "      value: '',\n" +
  '    });\n' +
  '    const onInput = (ev: InputEvent, value: any) => {\n' +
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
