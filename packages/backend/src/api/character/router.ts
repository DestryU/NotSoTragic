import { Router } from "express"
import { postCharacter } from "./controller"

const router = Router()

router.post("/", postCharacter)

export default router