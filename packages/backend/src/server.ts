import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
/* - - - - - - - - - - */
import characterRouter from './api/character/router'


/* Sets up the use of .env variables */
dotenv.config()

/* Initializes the express server, sets the PORT variable */
const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cors({
    origin: ['https://notsotragic.vercel.app', 'https://notsotragic.vercel.app/', 'http://localhost:3000', 'http://localhost:3000/'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],}))


/* Couples a URL with a designated router file */
app.use('/api/character', characterRouter)


/* Awknowledges the launch of the server, displaying the corresponding port */
app.listen(PORT, () => {
    console.log(`All systems green on port: ${PORT}`)
})