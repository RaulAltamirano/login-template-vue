import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { useRefreshTokenStorage } from "../modules/auth/composables/useToken";
import { useAuth } from "../modules/auth/composables/useAuth";

const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const { getTokens } = useRefreshTokenStorage();
let isRefreshing = false;
let refreshPromise: Promise<any> | null = null;

const refreshToken = async () => {
  if (isRefreshing) {
    await refreshPromise;
    return;
  }
  isRefreshing = true;
  try {
    const { onUpdateRefreshToken } = useAuth();
    await getTokens();
    await onUpdateRefreshToken();
    console.info('Refresh token updated');
  } finally {
    isRefreshing = false;
  }
};

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  async (error: AxiosError) => {
    const errorResponse = error.response;
    try {
      if (errorResponse) {
        console.error('Response Error:', errorResponse);
        if (errorResponse.status === 401) {
          if (!isRefreshing) {
            refreshPromise = refreshToken();
          }
        }
      } else if (error.request) {
        console.error('Request Error:', error.request);
      } else {
        console.error('Error:', error.message);
      }
      return Promise.reject(error);
    } catch (error) {
      console.error('Error in response interceptor:', error);
      return Promise.reject(error);
    }
  }
);

api.interceptors.request.use(async (config) => {
  const tokens = await getTokens();
  if (tokens) {
    config.headers.Authorization = `Bearer ${tokens.accessToken}`;
  }
  return config;
}, error => {
  console.error('Error in request interceptor:', error);
  return Promise.reject(error);
});

export const ApiService = {
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await api.get<T>(url, config);
      return response.data; 
    } catch (error) {
      console.error('Error in ApiService.get:', error);
      throw error;
    }
  },

  async post<T>({ url, data, config }: { url: string; data?: any; config?: AxiosRequestConfig }): Promise<T> {
    try {
      const response = await api.post<T>(url, data, config);
      return response.data; 
    } catch (error) {
      console.error('Error in ApiService.post:', error);
      throw error;
    }
  },
};
