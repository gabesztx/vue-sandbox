import { NavigationGuardNext, Route } from 'vue-router';
import { getWorldData, setWorldData } from '@/services/covid-data.service';

export const worldBeforeEnter = (to: Route, from: Route, next: NavigationGuardNext) => {
  getWorldData().then(res => {
    setWorldData(res.data)
    next();
  });
};