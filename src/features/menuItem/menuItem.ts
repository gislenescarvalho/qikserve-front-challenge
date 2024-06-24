import { createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../services/axiosInstance";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getProducts: AsyncThunk<any, void, object> = createAsyncThunk(
  "menuItem/getProducts",
  async () => {
    const response = await apiClient.get("/menu");
    return response.data;
  }
);
