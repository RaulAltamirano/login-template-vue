import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

import { useRefreshTokenStorage } from "../composable/useToken";
import { useAuth } from "../composable/useAuth";

const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
const { getTokens } = useRefreshTokenStorage()
// const { onUpdateRefreshToken } = useAuth()

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    const errorResponse = error.response;
    if (errorResponse) {
      console.error('Response Error:', errorResponse);
      if (errorResponse.status === 401) {
        // onUpdateRefreshToken()
      }
    } else if (error.request) {
      console.error('Request Error:', error.request);
    } else {
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);


api.interceptors.request.use(async (config) => {
  const tokens = await getTokens();
  if (tokens) {
    config.headers.Authorization = `Bearer ${tokens.accessToken}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});


export const ApiService = {
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await api.get<T>(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async post<T>(res: { url: string, data?: any, config?: AxiosRequestConfig }): Promise<T> {
    const { url, config, data } = res
    try {
      const response = await api.post<T>(url, data, config);
      return response as any
    } catch (error) {
      throw error;
    }
  },
};

