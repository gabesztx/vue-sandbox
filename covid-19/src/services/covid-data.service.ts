import http from 'axios';

export let countryData = [];
export let worldData = [];

export const getCountries = (): Promise<any> => {
  const url = `http://localhost:5000/countries`;
  return http.get(url);
};
export const setCountries = (data) => {
  countryData = data;
};


export const getCountryDetail = (countryCode): Promise<any> => {
  const url = `http://localhost:5000/countries/${countryCode}`;
  return http.get(url);
};

export const getWorldData = (): Promise<any> => {
  const url = `http://localhost:5000/world`;
  return http.get(url);
};


export const setWorldData = (data) => {
  worldData = data;
};
