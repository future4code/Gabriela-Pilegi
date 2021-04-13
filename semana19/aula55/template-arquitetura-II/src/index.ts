import express from 'express'
import cors from 'cors'
import { signup } from './controller/signup'
import { createTask } from './controller/createTask'
import { getTaskById } from './controller/getTaskById'
import { login } from './controller/login'
import userRouter from './routers/userRouter'
import taskRouter from './routers/taskRouter'

const app = express()

app.use(express.json())
app.use(cors())

// app.post('/user/signup', signup)
// app.post('/user/login', login)

// app.put('/task', createTask)
// app.get('/task/:id', getTaskById)

app.use('/user', userRouter)
app.use('/task', taskRouter)

app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})