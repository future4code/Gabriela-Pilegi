import { Request, Response } from 'express';
import { signUpBusiness } from '../business/signUpBusiness';


export const signUp = async (
    req: Request, 
    res: Response
) => {
    try {
        const { name, email, password, role } = req.body

        const newUser = {
            name,
            email,
            password,
            role: role || 'NORMAL'
        }

        const token = await signUpBusiness(newUser)

        res.status(200).send({ 
            message: 'Usuário criado com sucesso.',
            token
        })
    } catch (error) {
        res.status(400).send(error.message)
        
    }
    
}