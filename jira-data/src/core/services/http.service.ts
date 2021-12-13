import http from 'axios';

// const env = process.env.NODE_ENV;
// const host = env === 'development' ? process.env.VUE_APP_DEV_HOST : process.env.VUE_APP_PROD_HOST;
// const host = 'http://localhost:4200';
const config = {
  headers: {
    Authorization: `Bearer ${process.env.VUE_APP_JIRA_TOKEN}`,
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*',
  },
  baseURL: '/',
};
export const getData = (): Promise<any> => {
  // return http.get(`${host}/rest/agile/1.0/board`, config);
  return http.get(`/rest/agile/1.0/board`, config);
};
/*
export const postData = (data: any): Promise<any> => {
  return http.post(`postData`, data, config);
};
*/
