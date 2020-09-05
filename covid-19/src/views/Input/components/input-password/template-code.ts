export const templateCode =
  '' +
  '<template>\n' +
  '  <v-icell-input\n' +
  '    :label="state.label"\n' +
  '    :value="state.value"\n' +
  '    :type="state.type"\n' +
  '    :password-reveal="state.passwordReveal"\n' +
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
  "      label: '',\n" +
  "      value: '',\n" +
  "      type: 'password',\n" +
  '      passwordReveal: true\n' +
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
