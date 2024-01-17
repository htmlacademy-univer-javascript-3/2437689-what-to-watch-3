import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {getToken} from './token.ts';
import {errorHandle} from './error-handler.ts';
import {StatusCodes} from 'http-status-codes';

const BASE_URL = 'https://13.design.pages.academy/wtw';
const TIMEOUT = 5000;

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => StatusCodeMapping[response.status];

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
    (error: AxiosError<{error: string}>) => {
      if (error.response && shouldDisplayError(error.response)) {
        errorHandle(error.response.data.error);
      }

      throw error;
    }
  );
  return api;
};

