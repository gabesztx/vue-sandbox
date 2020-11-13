import http from 'axios';

export class HttpService {
  get(url: string, option: any): Promise<any>{
    return http.get(url, option);
  }
}
export const httpService = new HttpService();
