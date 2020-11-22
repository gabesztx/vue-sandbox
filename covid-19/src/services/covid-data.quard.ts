import router from '@/router';
import { NavigationGuardNext, Route } from 'vue-router';
import {
  getWorld,
  getContinents,
  getCountries,
  getCountryDetail,
  setWorldData,
  setContinentsData,
  setCountriesData,
  setCountryDetailData,
} from '@/services/covid-data.service';

export const wordBeforeEnter = (to: Route, from: Route, next: NavigationGuardNext) => {
  getWorld().then((res) => {
    setWorldData(res.data);
    next();
  });
};

export const countryBeforeEnter = (to: Route, from: Route, next: NavigationGuardNext) => {
  Promise.all([getCountries(), getContinents()]).then((values) => {
    setCountriesData(values[0].data);
    setContinentsData(values[1].data);
    next();
  });
  /*getCountries().then((res) => {
    next();
  });*/
};

export const countryDetailBeforeEnter = (to: Route, from: Route, next: NavigationGuardNext) => {
  getCountryDetail(to.params.countryCode).then((res) => {
    if (!res.data) {
      router.push({ path: '/countries' });
      next(false);
    } else {
      setCountryDetailData(res.data);
      next();
    }
  });
};
