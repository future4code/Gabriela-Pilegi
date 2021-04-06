import { Request, Response } from 'express';
import { insertUser } from '../data/insertUser';
import { generateId } from '../services/generateId';
import { AuthenticationData, generateToken } from '../services/authentication'
import { User } from '../types'
import { hash } from '../services/hashManager'


export const createUser = async (
    req: Request, 
    res: Response
    ) => {
    const { email, password } = req.body
    try {
        const id: string = generateId()

        if (!email || email.indexOf("@") === -1) {
            throw new Error("E-mail inválido.")
        }

        if (!password || password.length < 6) {
            throw new Error("Senha inválida.")
        }

        const passwordHash: string = await hash(password)

        const newUser: User = {
            id: id,
            email: email,
            password: passwordHash
        }

        await insertUser(newUser);

        const token = generateToken({id})

        res.status(200).send({token})

    } catch (error) {
        res.send({
            message: error.message || error.sqlMessage
        })
    }
}