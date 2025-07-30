import axiosInstance from "./axiosInstance";

export const getFetcher = async (url) => {
  try {
    const res = await axiosInstance.get(url);
    return res.data;
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const postFetcher = async (url, data) => {
  try {
    const res = await axiosInstance.post(url, data);
    return res.data;
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const putFetcher = async (url, data) => {
  try {
    const res = await axiosInstance.put(url, data);
    return res.data;
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const deleteFetcher = async (url) => {
  try {
    const res = await axiosInstance.delete(url);
    return res.data;
  } catch (error) {
    console.log("Error: ", error);
  }
};
