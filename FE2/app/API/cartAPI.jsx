import axiosInstance from "./axiosInstance";

export const getCart = async(userId) => {
    const response = await axiosInstance.get("/cart/view/"+ userId);
    return response;
}

export const addItemToCart = async(userId, data) => {
    const response = await axiosInstance.post("/cart/add/"+userId, data);
    return response;
}

export const removeItemToCart = async(userId, data) => {
    const response = await axiosInstance.post("/cart/remove/"+userId, data);
    return response;
}

export const updateItemToCart = async(userId, data) => {
    const response = await axiosInstance.post("/cart/update/"+userId, data);
    return response;
}
