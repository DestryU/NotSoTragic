import { Router } from "express"
import { postCharacter, getAllCharacters, deleteOldCharacters } from "./controller"

/* Initializes the express router */
const router = Router()

/* Sets the headers and HTTP request, executing a corresponding controller function on hit */
router.post('/', postCharacter)
router.get('/', getAllCharacters)
router.delete('/', deleteOldCharacters)

export default router