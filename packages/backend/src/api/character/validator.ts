import { z } from 'zod'

export const characterSchema = z.object({
    char_name: z.string().min(1, 'What is the adventurer called?'),
    char_race: z.string().min(1, 'From where does the adventurer hail?'),
    char_class: z.string().min(1, "What is the adventurer's profession?"),
    personality: z.string().max(100, 'That description is too long for their traits.'),
    backstory: z.string().max(500, 'That description is too long for their backstory.')
})