import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:2024",
    headers: {
        'Content-Type': 'application/json',
      },
    
})

export default axiosInstance;