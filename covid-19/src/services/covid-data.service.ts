import http from 'axios';

export let globalData = [];

export const getAllGlobalData = (): Promise<any> => {
  const url = `http://192.168.1.8:5000/covid`;
  return http.get(url);
};

export const setGlobalData = (data) => {
  globalData = data;
};
