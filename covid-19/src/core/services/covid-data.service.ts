import http from 'axios';

export let worldData = {} as any;
export let countriesData = [] as any;
export let continentsData = [] as any;
export let countryDetailData = {} as any;

const env = process.env.NODE_ENV;
// console.log('ENV', env);
const host = env === 'development' ? process.env.VUE_APP_DEV_HOST : process.env.VUE_APP_PROD_HOST;

export const getWorld = (): Promise<any> => {
  return http.get(`${host}/getWorld`);
};
export const getCountries = (): Promise<any> => {
  return http.get(`${host}/getCountries`);
};
export const getCountryDetail = (countryCode): Promise<any> => {
  return http.get(`${host}/getCountries/${countryCode}`);
};
export const getContinents = (): Promise<any> => {
  return http.get(`${host}/getContinents`);
};
export const getContinent = (continent): Promise<any> => {
  return http.get(`${host}/getContinents/${continent}`);
};
export const setWorldData = (data) => {
  worldData = data;
};
export const setContinentsData = (data) => {
  continentsData = data;
};
export const setCountriesData = (data) => {
  countriesData = data;
};
export const setCountryDetailData = (data) => {
  countryDetailData = data;
};
