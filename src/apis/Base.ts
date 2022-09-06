import axios, { AxiosInstance } from 'axios';
// import config from '../config/config';

class Api {
  //   private axios: AxiosInstance;
  //   constructor() {}
  //   private createAxios(token: string, headerOption?: any) {
  //     return axios.create({
  //       baseURL: config.SERVER_URL,
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${token}`,
  //         ...headerOption
  //       }
  //     });
  //   }
  //   protected async get(
  //     url: string,
  //     formData: any,
  //     token: string,
  //     headerOption?: any
  //   ) {
  //     const axios = this.createAxios(token, headerOption);
  //     return await axios.get(url, { params: formData });
  //   }
  //   protected async post(
  //     url: string,
  //     data: any,
  //     token: string,
  //     headerOption?: any
  //   ) {
  //     const axios = this.createAxios(token, headerOption);
  //     return await axios.post(url, data);
  //   }
  //   protected async put(
  //     url: string,
  //     data: any,
  //     token: string,
  //     headerOption?: any
  //   ) {
  //     const axios = this.createAxios(token, headerOption);
  //     return await axios.put(url, data);
  //   }
  //   protected async delete(
  //     url: string,
  //     data: any,
  //     token: string,
  //     headerOption?: any
  //   ) {
  //     const axios = this.createAxios(token, headerOption);
  //     return await axios.delete(url, { data });
  //   }
}

export default Api;
