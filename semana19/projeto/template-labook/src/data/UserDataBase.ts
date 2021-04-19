import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {

    // criar método para inserir usuário
    async insertUser(user: User) {
        try {
            await this.connection('labook_users')
            .insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
        })
            
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
        
    }
    

}