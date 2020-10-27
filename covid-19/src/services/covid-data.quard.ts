import { NavigationGuardNext, Route } from 'vue-router';
import { getCountries, setCountries, getCountryDetail } from '@/services/covid-data.service';
import router from '@/router';

export const countryBeforeEnter = (to: Route, from: Route, next: NavigationGuardNext) => {
  getCountries().then((res) => {
    setCountries(res.data);
    next();
  });
};

export const countryDetailBeforeEnter = (to: Route, from: Route, next: NavigationGuardNext) => {
  getCountryDetail(to.params.countryCode).then(res => {
    if (!res.data) {
      router.push({ path: '/countries' });
      next(false);
    } else {
      next();
    }
  });
};
