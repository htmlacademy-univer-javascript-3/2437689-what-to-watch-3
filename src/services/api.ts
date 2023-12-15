import axios, {AxiosInstance} from 'axios';

const BaseUrl = 'https://13.design.pages.academy/wtw';
const timeout = 5000;

export const createAPI = (): AxiosInstance =>
  axios.create({
    baseURL: BaseUrl,
    timeout: timeout,
  });
