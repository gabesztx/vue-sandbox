import { NavigationGuardNext, Route } from 'vue-router';
import { getAllGlobalData, setGlobalData } from '@/services/covid-data.service';
export const covidBeforeEnter = (to: Route, from: Route, next: NavigationGuardNext) => {
  getAllGlobalData().then(res => {
    setGlobalData(res.data)
    next();
  });
};
