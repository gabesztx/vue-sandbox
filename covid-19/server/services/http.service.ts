import axios from 'axios';

export class HttpService {
  get(url: string, option: any): Promise<any>{
    return axios.get(url, option);
  }
}
export const httpService = new HttpService();
