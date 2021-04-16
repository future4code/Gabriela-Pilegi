import { generateId } from '../services/generateId'
import { hash } from '../services/hashManager'
import { convertStringToUserRole, signupInput } from '../model/user'
import { insertUser } from '../data/insertUser'
import { generateToken } from '../services/authenticator'


export const signUpBusiness = async (input: signupInput): Promise<string> => {
    try {
        
        if (!input.name || 
            !input.email || 
            !input.password || 
            !input.role) {
            throw new Error('Preencha todos os campos (name, email, password).')
        }

        if (!input.email.includes('@')) {
            throw new Error('E-mail inválido.')
        }
        
        if (input.password.length < 6) {
            throw new Error('A senha deve conter pelo menos 6 caracteres.')
        }

        const id: string = generateId()
        const hashManager: string = await hash(input.password)


        await insertUser({
            id,
            name: input.name,
            email: input.email,
            password: hashManager,
            role: convertStringToUserRole(input.role) 
        })

        const token: string = generateToken({
            id,
            role: convertStringToUserRole(input.role)
        })

        return token
        
    } catch (error) {
        throw new Error(error.message);
    }

}