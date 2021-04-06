import { Request, Response } from 'express';
import { insertUser } from '../data/insertUser';
import generateId from '../services/idGenerator';
import { AuthenticationData, generateToken } from '../services/authentication'
import { user } from '../types'
import connection from '../connection'

export default async function createUser (
    req: Request,
    res: Response
) : Promise<void> {

    let errorCode: number = 400;

    try {

        const { name, nickname, email, password } = req.body
  
        if (!name || !nickname || !email || !password) {
            errorCode
            throw new Error("Preencha os campos 'name','nickname', 'password' e 'email'.")
        }
  
        const [user] = await connection('to_do_list_users')
           .where({ email })
  
        if (user) {
            throw new Error('E-mail já cadastrado.')
        }

        if ( !email.includes("@") ) {
            throw new Error("Digite um endereço de e-mail válido")
        };

        if ( password.length < 6 ) {
            throw new Error("A senha deve conter no mínimo 6 caracteres.")
        };
  
        const id: string = generateId()
  
        const newUser: user = { id, name, nickname, email, password }
  
        await connection('to_do_list_users')
           .insert(newUser)
  
        const token: string = generateToken({ id })
  
        res.status(201).send({ newUser, token })
  
     } catch (error) {
  
        if (res.statusCode === 200) {
           res.status(500).send({ message: "Internal server error" })
        } else {
           res.send({ message: error.message })
        }
     }
  }