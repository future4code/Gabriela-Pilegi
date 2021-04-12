import { connection } from './connection'
import { user} from '../model/user'

export const insertUser = async (
    user: user
) => {
    await connection
    .insert({
        id: user.id,
        email: user.email,
        name: user.name,
        password: user.password,
        role: user.role
    })
    .into('User_Arq')
}
