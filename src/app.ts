import express from 'express'
import cors from 'cors'
import configENV from './config/configEnv'
import router from '@routes/index'
const app = express()

app.use(cors())

app.use(express.json());


app.use(router)


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(configENV.PORT, () => {
    console.log('Server is running on port 3000')
})    