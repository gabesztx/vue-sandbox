import { NavigationGuardNext, Route } from 'vue-router';
import { getHttpGlobalData, getGlobalData, setGlobalData } from '@/services/covid-19-tracking.service';

export const beforeEnter = (to: Route, from: Route, next: NavigationGuardNext) => {
  if (getGlobalData().length) {
    next();
  } else {
    getHttpGlobalData().then(res => {
      setGlobalData(res.data.data);
      next();
    });
  }
};
