const express = require('express')

const authRouter = require('./routers/auth.router')

const PORT = 5000
const app = express()

app.use(express.json())
app.use('/auth', authRouter)

const StartServer = async () => {
    try {
        app.listen(PORT, () => console.log(`server started at ${PORT}`))
    } catch (error) {
        console.log(error);
    }
}
StartServer()