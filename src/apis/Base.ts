import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

class Api {
  private createAxios(headerOption?: any) {
    return axios.create({
      baseURL: BASE_URL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headerOption,
      },
      params: {
        api_key: API_KEY,
      },
    });
  }
  protected async get(url: string, params?: any, headerOption?: any) {
    const axios = this.createAxios(headerOption);
    return await axios.get(url, { params });
  }

  protected async post(url: string, data: any, headerOption?: any) {
    const axios = this.createAxios(headerOption);
    return await axios.post(url, data);
  }
  protected async put(url: string, data: any, headerOption?: any) {
    const axios = this.createAxios(headerOption);
    return await axios.put(url, data);
  }
  protected async delete(url: string, data: any, headerOption?: any) {
    const axios = this.createAxios(headerOption);
    return await axios.delete(url, { data });
  }
}
export default Api;
