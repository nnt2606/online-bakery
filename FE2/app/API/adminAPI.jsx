import axiosInstance from "./axiosInstance";

export const adminLogin = async(data) => {
    const response = await axiosInstance.post("/admin/signin", data);
    return response;
}