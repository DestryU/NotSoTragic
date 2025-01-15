import express from 'express'
import dotenv from 'dotenv'
/* - - - - - - - - - - */
import characterRouter from './api/character/router'

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())

app.use('/api/character', characterRouter)

app.listen(PORT, () => {
    console.log(`All systems green on port: ${PORT}`)
})