import { httpService } from '../services/http.service';
const host = 'covid-193.p.rapidapi.com';
const url = `https://${host}`;
const option = {
  headers: {
    'content-type': 'application/octet-stream',
    'x-rapidapi-host': host,
    'x-rapidapi-key': '65bb882af8msh78eb85b5f8ffeefp1821cdjsn66610ff72d14',
    useQueryString: true,
  },
};
/*export const $getStatistics = (params?: any): Observable<any> => {
  return from(httpService.get(`${url}/statistics`, {
    ...option,
    params: params
  })).pipe(
    map(value => value.data.response)
  );

};*/
