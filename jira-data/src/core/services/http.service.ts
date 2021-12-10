import http from 'axios';

// const env = process.env.NODE_ENV;
// const host = env === 'development' ? process.env.VUE_APP_DEV_HOST : process.env.VUE_APP_PROD_HOST;
const host = 'http://localhost:80';
const config = {
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*',
  },
  // baseURL: "/",
};
export const getData = (): Promise<any> => {
  return http.get(`${host}/getData`, config);
};
export const postData = (data: any): Promise<any> => {
  return http.post(`${host}/postData`, data, config);
};
