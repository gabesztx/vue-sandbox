import { NavigationGuardNext, Route } from 'vue-router';
import { getAllGlobalData, getAllData, setAllData } from '@/services/covid-data.service';
export const covidBeforeEnter = (to: Route, from: Route, next: NavigationGuardNext) => {
  if (getAllData().length) {
    next();
  } else {
    getAllGlobalData().then(res => {
      setAllData(res.data.data);
      next();
    });
  }
};

/*const unSubscribe = store.subscribe((mutation, state: any) => {
  if (state.covid.allItems.length) {
    unSubscribe();
    store.dispatch('covid/setLoading', false);
    next();
  }
});
store.dispatch('covid/setLoading', true);
store.dispatch('covid/getAllItems');*/
