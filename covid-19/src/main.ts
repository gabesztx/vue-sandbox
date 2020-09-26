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
import PageComponent from '@/views/Covid/Page.vue';
import CountryComponent from '@/views/Covid/Country.vue';
import CountryDetailComponent from '@/views/Covid/CountryDetail.vue';

// Validation
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { required, length } from 'vee-validate/dist/rules';
import { extend } from 'vee-validate';

// extend('required', required);
// extend('length', length);

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
// Vue.use(VuexCompositionApi);
Vue.use(VueCompositionApi);
Vue.use(InputPlugin);

Vue.config.productionTip = false;

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationObserver', ValidationObserver);


// Entry Components
// Vue.component('v-icell-input', InputComponent);
// Vue.component('v-icell-select', SelectComponent);
// Vue.component('v-icell-date', DateTimeComponent);
// Vue.component('v-icell-datetime', DateTimePickerComponent);
// Vue.component('v-icell-checkbox', CheckboxComponent);
// Vue.component('v-icell-legend', LegendComponent);
// Vue.component('v-icell-button', ButtonComponent);
Vue.component('v-icell-table', TableComponent);
Vue.component('v-page', PageComponent);
Vue.component('v-page-country', CountryComponent);
Vue.component('v-page-country-detail', CountryDetailComponent);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
