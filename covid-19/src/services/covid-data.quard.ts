import { NavigationGuardNext, Route } from 'vue-router';
export const covidBeforeEnter = (to: Route, from: Route, next: NavigationGuardNext) => {
  next();
};
