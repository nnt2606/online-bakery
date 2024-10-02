import axiosInstance from "./axiosInstance";

export const getAllProduct = async() => {
    const response = await axiosInstance.get("/product/all");
    return response;
}

export const getProductDetail = async(id) => {
    const response = await axiosInstance.get("/product/view/"+id);
    return response;
}

export const addNewProduct = async(data) => {
    const response = await axiosInstance.post("/product/add", data);
    return response;
}

export const editProduct = async(id, data) => {
    const response = await axiosInstance.put("/product/update/"+id, data);
    return response;
}

export const deleteProduct = async(id, data) => {
    const response = await axiosInstance.delete("/product/remove/"+id, data);
    return response;
}