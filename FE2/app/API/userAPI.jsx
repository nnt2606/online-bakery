import axiosInstance from "./axiosInstance";

export const userLogin = async(data) => {
    const response = await axiosInstance.post("/account/signin", data);
    return response;
}