import axiosInstance from "./axiosInstance";

export const getAllOrder= async(id) => {
    const response = await axiosInstance.get("/order/all/"+id);
    return response;
}

export const getOrderDetail = async(orderId) =>{
    const response = await axiosInstance.get("/order/view/"+orderId);
    return response;
}

export const getUserOrder = async(id) => {
    const response = await axiosInstance.get("/order/history/"+id);
    return response;
}

export const placeOrder = async(data) => {
    const response = await axiosInstance.post("/order/create",data);
    return response;
}

export const approveOrder = async(orderId, data) => {
    const response = await axiosInstance.post("/order/approve/"+orderId, data);
    return response;
}

export const rejectOrder = async(orderId, data) => {
    const response = await axiosInstance.post("/order/reject/" + orderId, data);
    return response;
}

export const cancelOrder = async(orderId, data) => {
    const response = await axiosInstance.post("/order/cancel/"+orderId, data);
    return response;
}

export const closeOrder = async(orderId, data) => {
    const response = await axiosInstance.post("/order/close/"+orderId, data);
    return response;
}