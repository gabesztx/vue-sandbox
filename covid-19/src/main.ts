import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import App from './App.vue';
import router from './router';

// Import UI
import Buefy from 'buefy';

// Import Style
import './assets/scss/app.scss';

// Import Plugins
import InputPlugin from '@/components/input/input';

// Import Components
import SelectComponent from '@/components/select.vue';
import DateTimeComponent from '@/components/datepicker.vue';
import DateTimePickerComponent from '@/components/datetimepicker.vue';
import CheckboxComponent from '@/components/checkbox.vue';
import LegendComponent from '@/components/legend.vue';
import ButtonComponent from '@/components/button.vue';
import TableComponent from '@/components/table.vue';
import CodeBoxComponent from '@/shared/components/code-box/code-box.vue';
import NavBarComponent from '@/shared/components/nav-bar/nav-bar.vue';

// Validation
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { required, length } from 'vee-validate/dist/rules';
import { extend } from 'vee-validate';

extend('required', required);
extend('length', length);

Vue.use(Buefy, {
  defaultDayNames: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
  defaultMonthNames: [
    'Január',
    'Február',
    'Március',
    'Április',
    'Május',
    'Június',
    'Július',
    'Augusztus',
    'Szeptember',
    'Október',
    'November',
    'December',
  ],
  defaultFirstDayOfWeek: 1,
  defaultTrapFocus: true,
  defaultDatepickerYearsRange: [-100, 60],
});
Vue.use(VueCompositionApi);
// Vue.use(VuexCompositionApi);
Vue.use(InputPlugin);

Vue.config.productionTip = false;

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationObserver', ValidationObserver);

// Shared Components
Vue.component('bue-nav-bar', NavBarComponent);
Vue.component('code-box', CodeBoxComponent);

// Entry Components
// Vue.component('v-icell-input', InputComponent);
Vue.component('v-icell-select', SelectComponent);
Vue.component('v-icell-date', DateTimeComponent);
Vue.component('v-icell-datetime', DateTimePickerComponent);
Vue.component('v-icell-checkbox', CheckboxComponent);
Vue.component('v-icell-legend', LegendComponent);
Vue.component('v-icell-button', ButtonComponent);
Vue.component('v-icell-table', TableComponent);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
