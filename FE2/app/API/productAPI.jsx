import axiosInstance from "./axiosInstance";

export const getAllProduct = async() => {
    const response = await axiosInstance.get("/product/all");
    return response;
}

export const getProductDetail = async(id) => {
    const response = await axiosInstance.get("/product/view/"+id);
    return response;
}