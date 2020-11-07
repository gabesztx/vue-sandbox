import { NavigationGuardNext, Route } from 'vue-router';
import {
  getWorld,
  getCountries,
  getCountryDetail,
  setWorldData,
  setCountriesData,
  setCountryDetailData,
} from '@/services/covid-data.service';
import router from '@/router';

export const wordBeforeEnter = (to: Route, from: Route, next: NavigationGuardNext) => {
  getWorld().then((res) => {
    setWorldData(res.data);
    next();
  });
};

export const countryBeforeEnter = (to: Route, from: Route, next: NavigationGuardNext) => {
  getCountries().then((res) => {
    setCountriesData(res.data);
    next();
  });
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
