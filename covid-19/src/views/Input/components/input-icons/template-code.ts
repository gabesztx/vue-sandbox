export const templateCode =
  '<template>\n' +
  '  <v-icell-input\n' +
  '    :label="state.label"\n' +
  '    :value="state.value"\n' +
  '    :type="state.type"\n' +
  '    :place-holder="state.placeHolder"\n' +
  '    :icon="state.icon"\n' +
  '    :icon-clickable="state.iconClickable"\n' +
  '    @input="onInput"\n' +
  '    @icon-click="onIconClick"\n' +
  '  ></v-icell-input>\n' +
  '</template>\n' +
  '\n' +
  '<script lang="ts">\n' +
  "import { reactive } from '@vue/composition-api';\n" +
  '\n' +
  'export default {\n' +
  '  setup(){\n' +
  '    const state = reactive({\n' +
  "      label: '',\n" +
  "      placeHolder: 'email',\n" +
  "      icon: 'email',\n" +
  "      value: '',\n" +
  '      iconClickable: false,\n' +
  '    });\n' +
  '    const onIconClick = () => {\n' +
  "      alert('Clicked on the icon!');\n" +
  '    };\n' +
  '    const onInput = (ev: InputEvent, value: any) => {\n' +
  '      state.value = value;\n' +
  '    };\n' +
  '    return {\n' +
  '      state,\n' +
  '      onInput,\n' +
  '      onIconClick,\n' +
  '    };\n' +
  '  }\n' +
  '};\n' +
  '</script>\n' +
  '<style scoped></style>';
