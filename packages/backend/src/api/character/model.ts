import supa from '../../supabaseClient'

export interface Character {
    char_name: string,
    char_race: string,
    char_class: string,
    personality: string,
    backstory: string
}

export const createCharacter = async (char_name: string, char_race: string, char_class: string, personality: string, backstory: string) => {
    const {data, error} = await supa
    .from('characters')
    .insert([
        { char_name, char_race, char_class, personality, backstory }
    ])
    .select()

    if (error) {
        throw new Error(error.message)
    }

    return data[0]
}