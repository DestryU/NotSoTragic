import axios, { AxiosInstance } from 'axios'

const axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
})

export default axiosInstance
