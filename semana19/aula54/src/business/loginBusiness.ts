import { selectUserByEmail } from '../data/selectUserByEmail'
import { user } from '../model/user'
import { generateToken } from '../services/authenticator'
import { compare } from '../services/hashManager'



export const loginBusiness = async (input: any): Promise<string> => {
    try {
        if (!input.email || !input.password) {
            throw new Error('Informe e-mail e senha.')
        }

        const user: user = await selectUserByEmail(input.email)

        if (!user) {
            throw new Error('Usuário não encontrado.')
        }

        const passwordIsCorrect: boolean = await compare(input.password, user.password)

        if (!passwordIsCorrect) {
            throw new Error('Senha incorreta.')
        }

        const token: string = generateToken({
            id: user.id,
            role: user.role
        })

        return token
    } catch (error) {
        throw new Error(error.message)
    }
}