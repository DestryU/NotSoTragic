import { Request, Response } from 'express'
import { insertCharacter, fetchAllCharacters, removeOldCharacters, Character } from './model'
import { validateCharacter } from './validator'

/*
    Routed controller function that executes the validator and model functions.

    This currently has an issue that I can't figure out for the life of me, which is the fact
    that if I Promise anything other than 'any' the server crashes. I really need to figure
    this out, and see if I can't find help.

*/
export const postCharacter = async (req: Request, res: Response): Promise<any>=> {    

    const character: Character = req.body
    const validCharacter = validateCharacter(character)

    if (!validCharacter.isValid) { 
        return res.status(400).json({ error: validCharacter.error })
    }

    try {

        const data = await insertCharacter(character)
        return res.status(201).json({ message: 'Character created', data })

    } catch (error) {
        
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message })
        } else {
            return res.status(500).json({ error: 'Something went wrong.' })
        }

    }
}

export const getAllCharacters = async (req: Request, res: Response): Promise<any> => {
    try {
        const allCharacters = await fetchAllCharacters()
        return res.status(200).json(allCharacters)
    } catch (error) {
        console.error('Error fetching characters:', error)
        return res.status(500).json({ error: 'Something went wrong.' })
    }

}

export const deleteOldCharacters = async (req: Request, res: Response): Promise<any> => {
    try {
        await removeOldCharacters()
        return res.status(200).json({ message: 'Old characters deleted', count: 0 })
    } catch {
        return res.status(500).json({ error: 'Something went wrong.' })
    }
}