import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import { i18n } from './locales/i18n';
import { noData } from '@/core/filters/table.filter';
import InputComponent from '@/components/input.vue';
import TableComponent from '@/components/table.vue';
import CellBase from '@/shared/components/cell-base/cell-base.vue';
import CellImage from '@/shared/components/cell-image/cell-image.vue';
import CellButton from '@/shared/components/cell-button/cell-button.vue';
import CellIcon from '@/shared/components/cell-icon/cell-icon.vue';
import CellCountry from '@/shared/components/cell-country/cell-country.vue';

import App from './App.vue';

import router from './router';
// Buefy
import './shared/buefy';
// Styles
import './assets/scss/app.scss';

// Validations
// import './core/utils/validations';

// Filters
Vue.filter('nodata', noData);

// Components
Vue.component('v-icell-table', TableComponent);
Vue.component('v-icell-input', InputComponent);
Vue.component('cell-base', CellBase);
Vue.component('cell-base', CellBase);
Vue.component('cell-image', CellImage);
Vue.component('cell-button', CellButton);
Vue.component('cell-icon', CellIcon);
Vue.component('cell-country', CellCountry);

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
