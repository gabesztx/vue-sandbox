import http from 'axios';

export let countriesData = [];
export let countryDetailData = [];

export const getCountries = (): Promise<any> => {
  return http.get(`http://localhost:5000/countries`);
};
export const getCountryDetail = (countryCode): Promise<any> => {
  return http.get(`http://localhost:5000/countries/${countryCode}`);
};

export const setCountries = (data) => {
  countriesData = data;
};

export const setCountryDetailData = (data) => {
  console.log('setCountryDetailData');
  countryDetailData = data;
};
