import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

class HttpService {
  http: AxiosInstance;
  private _isPending = 0;

  constructor(){
    this.http = axios.create({
      headers: {
        Authorization: `Bearer ${process.env.VUE_APP_JIRA_TOKEN}`,
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*',
      },
      baseURL: '/',
    });

  }

  get<R>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<R>>{
    return this.http.get(url, {
      ...config,
    });
  }

  post<R, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<R>>{
    return this.http.post(url, data, {
      ...config,
    });
  }
}

export default new HttpService();
