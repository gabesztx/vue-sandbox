import { NavigationGuardNext, Route } from 'vue-router';
import { getCountryData, setCountryData } from '@/services/covid-data.service';

export const countryBeforeEnter = (to: Route, from: Route, next: NavigationGuardNext) => {
  getCountryData().then(res => {
    setCountryData(res.data)
    next();
  });
};
