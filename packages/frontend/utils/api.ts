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

export const createNewCharacter = async (character: {
    char_name: string,
    char_race: string,
    char_class: string,
    personality: string,
    backstory: string
}) => {
    try {
        const response = await axiosInstance.post('/api/character', character)
        return response.data
    } catch (error) {
        console.error('Error creating character: ', error)
        throw error
    }
}