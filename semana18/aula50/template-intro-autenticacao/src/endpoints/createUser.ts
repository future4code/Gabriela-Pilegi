import { Request, Response } from 'express';
import { insertUser } from '../data/insertUser';
import generateId from '../services/idGenerator';
import { AuthenticationData } from '../services/authentication'
import { User } from '../types'

export default async function createUser (
    req: Request,
    res: Response
) : Promise<void> {

    let errorCode: number = 400

    try {
        const { email, password } = req.body;

        if ( !email || !password ) {
            errorCode = 406;
            throw new Error('Informe e-mail e senha.');
        }

        if ( !email.includes("@") ) {
            errorCode = 406;
            throw new Error('Digite um e-mail válido.');
        }

        if ( password.length < 6 ) {
            errorCode = 406;
            throw new Error('A senha deve conter no mínimo 6 caracteres.');
        }

        const newUser: User = {
            id: generateId(),
            email: email,
            password: password
        }

        await insertUser(newUser)

        const authData: AuthenticationData = {id: newUser.id}
        const token = generateId(authData)

        res.status(200).send({token})

    } catch (error) {
        res.status(errorCode).send(error.sqlMessage || error.message );
    }
}