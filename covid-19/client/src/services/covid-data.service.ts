import http from 'axios';

export let worldData = {} as any;
export let countriesData = [] as any;
export let countryDetailData = {} as any;

export const getWorld = (): Promise<any> => {
  return http.get(`http://localhost:5000/world`);
};
export const getCountries = (): Promise<any> => {
  return http.get(`http://localhost:5000/countries`);
};
export const getCountryDetail = (countryCode): Promise<any> => {
  return http.get(`http://localhost:5000/countries/${countryCode}`);
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
