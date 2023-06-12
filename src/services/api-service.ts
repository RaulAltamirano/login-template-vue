import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
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
      console.error('Response Error:', errorResponse);
    } else if (error.request) {
      console.error('Request Error:', error.request);
    } else {
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

// api.interceptors.request.use(
//   (config: AxiosRequestConfig) => {
//     const token = getTokenFromLocalStorage(); // Implement your token retrieval logic
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error: AxiosError) => {
//     console.error('Request Error:', error);
//     return Promise.reject(error);
//   }
// );


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

