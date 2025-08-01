import axiosInstance from "./axiosInstance";

export const getFetcher = async (url) => {
  try {
    const res = await axiosInstance.get(url);
    return res.data;
  } catch (error) {
    console.log("Error: ", error);
  }
};
