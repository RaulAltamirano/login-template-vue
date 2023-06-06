import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    const errorResponse = error.response;
    if (errorResponse) {
      console.error('Response Error:', errorResponse.data);
    } else if (error.request) {
      console.error('Request Error:', error.request);
    } else {
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

const ApiService = {
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await api.get<T>(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await api.post<T>(url, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default ApiService;