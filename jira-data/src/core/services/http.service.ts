import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from "axios";

const token = process.env.VUE_APP_JIRA_TOKEN;
// const basicAuth = window.btoa(`gabor.martus@icellmobilsoft.hu:${token}`);
// const basicAuth = window.btoa(`gabesztx@gmail.com:${token}`);

class HttpService {
  http: AxiosInstance;

  constructor(){
    this.http = axios.create({
      headers: {
        Authorization: `Bearer ${token}`,
        // Authorization: `Basic ${basicAuth}`,
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        "Access-Control-Allow-Origin": "*"
      },
      baseURL: "/"
    });

  }

  get<R>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<R>>{
    return this.http.get(url, {
      ...config
    });
  }

  put<R, D = unknown>(
    url: string,
    data: D,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<R>> {
    return this.http.put(url, data, {
      ...config,
    });
  }

  post<R, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<R>>{
    return this.http.post(url, data, {
      ...config
    });
  }
}

export default new HttpService();
