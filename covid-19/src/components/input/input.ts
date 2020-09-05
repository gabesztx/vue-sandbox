import Input from './input.vue';

const InputPlugin = {
  install(Vue: any) {
    Vue.component(Input.name, Input);
  },
};

export default InputPlugin;

export { Input as VIcellInput };
