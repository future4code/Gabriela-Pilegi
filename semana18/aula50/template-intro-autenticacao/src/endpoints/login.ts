import { Request, Response } from 'express'
import { user } from '../types'
import connection from '../connection';
import { selectUserByEmail } from '../data/selectUserByEmail';
import { generateToken } from '../services/authentication';

export const login = async (req:Request, res:Response) => {

    const { email, password } = req.body

    try {
        if(!email || email.indexOf("@") === -1){
            throw new Error("Invalid email")
        }

        if(!password || password.length < 6){
        
            throw new Error("A senha deve conter no mínimo 6 caracteres.")
        }

        const newUser = {
            email: email,
            password: password
        }

        const user = await selectUserByEmail(newUser.email)

        if(!user){
            res.statusCode = 404
            throw new Error("Usuário não encontrado");
        }

        if (user.password !== newUser.password) {
            throw new Error("Senha inválida")
        }

        const token = generateToken({ id: user.id })
      
          res.status(200).send({ token })
 
    } catch (error) {
        res.send({ message: error.message })
    }
}