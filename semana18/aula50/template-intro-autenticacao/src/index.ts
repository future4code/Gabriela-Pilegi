import app from "./app"
import { getUserById } from './endpoints/getUserbyId'
import createUser from './endpoints/createUser'
import { login } from "./endpoints/login"

app.post('/user/signup', createUser)
app.post('/login', login)
app.get('/user/profile', getUserById)