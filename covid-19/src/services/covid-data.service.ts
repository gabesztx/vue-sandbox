import http from 'axios';

export let worldData = {} as any;
export let countriesData = [] as any;
export let countryDetailData = {} as any;

const env = process.env.NODE_ENV;
console.log('ENV', env);
const host = env === 'development' ? process.env.VUE_APP_DEV_HOST : process.env.VUE_APP_PROD_HOST;

export const getWorld = (): Promise<any> => {
  return http.get(`${host}/world`);
};
export const getCountries = (): Promise<any> => {
  return http.get(`${host}/countries`);
};
export const getCountryDetail = (countryCode): Promise<any> => {
  return http.get(`${host}/countries/${countryCode}`);
};
export const setWorldData = (data) => {
  worldData = data;
};
export const setCountriesData = (data) => {
  countriesData = data;
};
export const setCountryDetailData = (data) => {
  countryDetailData = data;
};
