import axios, { AxiosInstance } from 'axios'

const axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
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
