import { isValid, z } from 'zod'
import { Character } from './model'

/* Definition of the character zObject. Used for comparing data to for validation */
export const characterSchema = z.object({
    char_name: z.string().min(1, 'What is the adventurer called?'),
    char_race: z.string().min(1, 'From where does the adventurer hail?'),
    char_class: z.string().min(1, "What is the adventurer's profession?"),
    personality: z.string().max(100, 'That description is too long for their traits.'),
    backstory: z.string().max(500, 'That description is too long for their backstory.')
})

/* Function that compares input data to the specified zObject. Sets isValid based on result */
export function validateCharacter(character: Character) {
    try {
        characterSchema.parse(character)
        return { isValid: true }
    } catch (error) {
        
        if (error instanceof z.ZodError) {
            return { isValid: false, error: error.errors[0].message}
        } else {
        return { isValid: false, error: 'Something went wrong.' }
        }
    }
}