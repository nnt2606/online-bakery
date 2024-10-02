import axiosInstance from "./axiosInstance";

export const adminLogin = async(data) => {
    const response = await axiosInstance.post("/admin/signin", data);
    return response;
}

export const adminUpdate = async(id,data) => {
    const response = await axiosInstance.put("/admin/edit/"+id, data);
    return response;
}