import axios, { AxiosInstance } from 'axios'

const axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_LOCAL_BACKEND_URL || 'http://localhost:5000',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
})

axiosInstance.interceptors.request.use(request => {
    console.log('Starting Request', request);
    return request;
});

axiosInstance.interceptors.response.use(response => {
    console.log('Response:', response);
    return response;
}, error => {
    console.log('Error Response:', error.response);
    return Promise.reject(error);
});

export default axiosInstance
