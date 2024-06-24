// axiosInstance.ts
import createAxiosInstance from "./axiosFactory";

const BASE_URL = "https://cdn-dev.preoday.com/challenge/";

const apiClient = createAxiosInstance({
  baseURL: BASE_URL,
  timeout: 5000, // Custom timeout
  headers: {
    "X-Api-Key": "9d7a8e6b-3d8f-4b5f-9d1d-5b7c0c0c0c0c",
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, Content-Length, X-Requested-With",
    "Access-Control-Allow-Credentials": "true",
  },
});

export default apiClient;
