"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.characterSchema = void 0;
exports.validateCharacter = validateCharacter;
const zod_1 = require("zod");
/* Definition of the character zObject. Used for comparing data to for validation */
exports.characterSchema = zod_1.z.object({
    char_name: zod_1.z.string().min(1, 'What is the adventurer called?'),
    char_race: zod_1.z.string().min(1, 'From where does the adventurer hail?'),
    char_class: zod_1.z.string().min(1, "What is the adventurer's profession?"),
    personality: zod_1.z.string().max(100, 'That description is too long for their traits.'),
    backstory: zod_1.z.string().max(500, 'That description is too long for their backstory.')
});
/* Function that compares input data to the specified zObject. Sets isValid based on result */
function validateCharacter(character) {
    try {
        exports.characterSchema.parse(character);
        return { isValid: true };
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            return { isValid: false, error: error.errors[0].message };
        }
        else {
            return { isValid: false, error: 'Something went wrong.' };
        }
    }
}
