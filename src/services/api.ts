import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {StatusCodes} from 'http-status-codes';
import {getToken} from './token.ts';
import {errorHandle} from './error-handler.ts';

const BASE_URL = 'https://13.design.pages.academy/wtw';
const TIMEOUT = 5000;

type DetailMessage = {
  type: string;
  message: string;
};

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true,
};

const shouldDisplayError = (response: AxiosResponse) =>
  !!StatusCodeMapping[response.status];

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });

  api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getToken();
    if (token && config.headers) {
      config.headers['x-token'] = token;
    }

    return config;
  });
  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessage>) => {
      if (error.response && error.response.data && shouldDisplayError(error.response)) {
        const detailMessage = error.response.data;
        errorHandle(detailMessage.message);
      }

      throw error;
    }
  );
  return api;
};

