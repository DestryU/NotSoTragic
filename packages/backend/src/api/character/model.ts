import supabase from '../../supabaseClient'
import supa from '../../supabaseClient'

/* Reusable interface for the Character object */
export interface Character {
    char_name: string,
    char_race: string,
    char_class: string,
    personality: string,
    backstory: string
}

/* Database function that inserts a character. Must be of the Character shape */
export const insertCharacter = async (character: Character) => {
    const { char_name, char_race, char_class, personality, backstory } = character

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

/* Database function that fetches all data from the 'chatacters' table */
export const fetchAllCharacters = async () => {
    const {data, error} = await supa
    .from('characters')
    .select('*')

    if (error) {
        throw new Error(error.message)
    }

    return data

}


export const removeOldCharacters = async () => {
    const now = new Date()
    const cutoffDate = new Date(now.getTime() - (1000 * 60 * 60 * 24 * 30))

    const {data, error, count} = await supa
    .from('characters')
    .delete()
    .lt('created_at', cutoffDate.toISOString())

    if (error) {
        throw new Error(error.message)
    }

    return count || 0
}
