import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

import { useRefreshTokenStorage } from "../modules/auth/composables/useToken";
import { useAuth } from "../modules/auth/composables/useAuth";

const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const { getTokens } = useRefreshTokenStorage()
// api.interceptors.response.use(
//   (response: AxiosResponse) => {
//     return response.data;
//   },
//   (error: AxiosError) => {
//     const errorResponse = error.response;
//     if (errorResponse) {
//       console.error('Response Error:', errorResponse);
//       if (errorResponse.status === 401) {
//         onUpdateRefreshToken()
//       }
//     } else if (error.request) {
//       console.error('Request Error:', error.request);
//     } else {
//       console.error('Error:', error.message);
//     }
//     return Promise.reject(error);
//   }
// );



api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const { onUpdateRefreshToken } = useAuth()
      await getTokens()
      await onUpdateRefreshToken()
    }
    if (error.response.status === 500) {
      // retry the request after a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return axios(originalRequest);
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

