import axiosInstance from './axiosInstance'

export const fetchData = async () => {
    try {
        const response = await axiosInstance.get('/api/character')
        return response.data
    } catch (error) {
        console.error('Error fetching data: ', error)
        throw error
    }
}
