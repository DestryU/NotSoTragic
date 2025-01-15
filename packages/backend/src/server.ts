import express from 'express'
import dotenv from 'dotenv'
/* - - - - - - - - - - */
import characterRouter from './api/character/router'


/* Sets up the use of .env variables */
dotenv.config()

/* Initializes the express server, sets the PORT variable */
const app = express()
const PORT = process.env.PORT

app.use(express.json())


/* Couples a URL with a designated router file */
app.use('/api/character', characterRouter)


/* Awknowledges the launch of the server, displaying the corresponding port */
app.listen(PORT, () => {
    console.log(`All systems green on port: ${PORT}`)
})