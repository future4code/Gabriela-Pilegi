import { createTask } from "../controller/createTask"
import { getTaskById } from "../controller/getTaskById"
import express from 'express'

const taskRouter = express.Router()

taskRouter.put('/', createTask)
taskRouter.get('/:id', getTaskById)

export default taskRouter