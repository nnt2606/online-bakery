import axiosInstance from "./axiosInstance";

export const userLogin = async(data) => {
    const response = await axiosInstance.post("/account/signin", data);
    return response;
}

export const userRegister = async(data) => {
    const response = await axiosInstance.post("/account/signup", data);
    return response;
}

export const userUpdate = async(id, data)=> {
    const response = await axiosInstance.put("/account/edit/"+id, data);
    return response;
}