import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import router from './router';
import Buefy from 'buefy';
import { i18n } from './locales/i18n';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { noData } from '@/filters/table.filter';
import App from './App.vue';
import InputComponent from '@/components/input.vue';
import TableComponent from '@/components/table.vue';
import CellBase from '@/shared/components/cell-base/cell-base.vue';
import CellImage from '@/shared/components/cell-image/cell-image.vue';
import CellButton from '@/shared/components/cell-button/cell-button.vue';
import CellIcon from '@/shared/components/cell-icon/cell-icon.vue';

// Styles
import './assets/scss/app.scss';

// Validations
import './core/validations';

// Filters
Vue.filter('nodata', noData);

// Components
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('v-icell-table', TableComponent);
Vue.component('v-icell-input', InputComponent);
Vue.component('cell-base', CellBase);
Vue.component('cell-base', CellBase);
Vue.component('cell-image', CellImage);
Vue.component('cell-button', CellButton);
Vue.component('cell-icon', CellIcon);

Vue.use(Buefy);
Vue.use(VueCompositionApi);

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount('#app');

// Vue.component('v-page-country', CountryComponent);
// Vue.component('v-page-country-detail', CountryDetailComponent);
// Vue.component('v-page', PageComponent);
