import http from 'axios';

export let countryData = [];
export let worldData = [];

export const getCountryData = (): Promise<any> => {
  const url = `http://localhost:5000/country`;
  return http.get(url);
};

export const getWorldData = (): Promise<any> => {
  const url = `http://localhost:5000/world`;
  return http.get(url);
};

export const setCountryData = (data) => {
  countryData = data;
};

export const setWorldData = (data) => {
  worldData = data;
};

// conxt valamiService = new ValamiService()
