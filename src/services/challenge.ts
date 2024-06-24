import apiClient from "./axiosInstance";

const getVenue = async ({ id }: { id: number }) => {
  try {
    const response = await apiClient.get(`/venue/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching example data:", error);
    throw error;
  }
};

const getMenu = async () => {
  try {
    const response = await apiClient.get("/menu");
    return response.data;
  } catch (error) {
    console.error("Error fetching example data:", error);
    throw error;
  }
};

export { getVenue, getMenu };
