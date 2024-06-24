// axiosFactory.ts
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

interface AxiosFactoryConfig extends AxiosRequestConfig {
  baseURL: string;
  timeout?: number;
  headers?: Record<string, string>;
}

const createAxiosInstance = (config: AxiosFactoryConfig): AxiosInstance => {
  const instance = axios.create({
    baseURL: config.baseURL,
    timeout: config.timeout || 10000, // Default timeout of 10 seconds
    headers: config.headers || {
      "Content-Type": "application/json",
    },
  });

  // Add a request interceptor if needed
  instance.interceptors.request.use(
    (requestConfig) => {
      // Modify request configuration here
      return requestConfig;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Add a response interceptor if needed
  instance.interceptors.response.use(
    (response) => {
      // Modify response data here
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

export default createAxiosInstance;
