import { Request, Response } from 'express'
import { z } from 'zod'
import { createCharacter } from './model'
import { characterSchema } from './validator'

export const postCharacter = async (req: Request, res: Response) => {    

    const { char_name, char_race, char_class, personality, backstory } = req.body

    try {

        // const validCharacter = characterSchema.parse(req.body)
        // const { char_name, char_race, char_class, personality, backstory } = validCharacter

        const newCharacter = await createCharacter(char_name, char_race, char_class, personality, backstory)
        console.log('Created the character: ', newCharacter)

        res.status(201).json(newCharacter)
        
    } catch (error) {

        // if (error instanceof z.ZodError) {
        //     return res.status(400).json({ errors: error.errors })
        // }

        console.error('There was an error creating a new character: ', error)
        res.status(500).json({ message: 'Something went wrong.' })

    }
}