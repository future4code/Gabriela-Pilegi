import { UserDatabase } from "../data/UserDataBase";
import { SignUpInputDTO, User } from "../model/User";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/idGenerator";

import { Authenticator } from "../services/Authenticator"
export class UserBusiness {
    // UserBusiness vai receber como entrada o input, que é do tipo SignUpInputDTO
    async signUp(input: SignUpInputDTO): Promise<string> {

        try {
            
            if (!input.name || !input.email || !input.password) {
                // res.statusCode = 406 - o res está no userController, não precisa ficar aqui
                // message = '"name", "email" and "password" must be provided'
                throw new Error('"name", "email" and "password" must be provided')
            }

            const idGenerator = new IdGenerator()
            const id: string = idGenerator.generateId()
            // não é uma função solta, é um método da classe IdGenerator

            const hashManager = new HashManager()
            const cypherPassword = await hashManager.hash(input.password);
        
        // await connection('labook_users')
        //     .insert({
        //     id,
        //     name,
        //     email,
        //     password: cypherPassword
        // })
        // a camada de data é quem gerencia o banco
            
            const user: User = {
                id,
                name: input.name,
                email: input.email,
                password: cypherPassword

            }

            const userDatabase = new UserDatabase()
            await userDatabase.insertUser(user)
            
            const tokenManager = new Authenticator()
            const token: string = tokenManager.generateToken({ id })

            return token
     
        } catch (error) {
            throw new Error(error.message)
            
    }

    }
}