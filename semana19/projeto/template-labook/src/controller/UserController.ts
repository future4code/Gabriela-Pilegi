import { hash } from "bcryptjs";
import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { SignUpInputDTO } from "../model/User";

export class UserController {
    //Se há req e res, é controller
    async signUp(
        req: Request, 
        res: Response) {

    try {
        let message = "Success!"

        const input: SignUpInputDTO = {
            name: req.body.name,
            email: req.body.password,
            password: req.body.password
        }
        
        // const { name, email, password } = req.body
        // if (!input.name || !input.email || !input.password) {
        //     res.statusCode = 406
        //     message = '"name", "email" and "password" must be provided'
        //     throw new Error(message)
        // }
     
        // const id: string = generateId()
     
        // const cypherPassword = await hash(password);
     
        // await connection('labook_users')
        //     .insert({
        //     id,
        //     name,
        //     email,
        //     password: cypherPassword
        // })
     
        // const token: string = generateToken({ id })
        // essas validações precisam ser feitas na camada de business (regras de negócio)

        const userBusiness = new UserBusiness()
        const token = await userBusiness.signUp(input)
     
        res.status(201).send({ message, token })
     
        } catch (error) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
     
            res.send({ message })
        }
     }
     
}