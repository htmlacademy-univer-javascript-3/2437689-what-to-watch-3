import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {StatusCodes} from "http-status-codes";
import {getToken} from "./token.ts";
import {processErrorHandle} from "./error-handler.ts";

const BaseUrl = 'https://13.design.pages.academy/wtw';
const timeout = 5000;

type DetailMessageType = {
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
        baseURL: BaseUrl,
        timeout: timeout,
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
        (error: AxiosError<DetailMessageType>) => {
            if (error.response && shouldDisplayError(error.response)) {
                const detailMessage = error.response.data;

                processErrorHandle(detailMessage.message);
            }

            throw error;
        }
    );
    return api;
};

