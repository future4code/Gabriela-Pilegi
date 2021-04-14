
### Exercício 1
a) Acredito que a representação dos ids com strings seja melhor devido à maior possibilidade de combinações para que o id nunca seja repetido. 
b) 
```
import { v4 } from "uuid"
const generateId = (): string => v4()
export default generateId
```

### Exercício 2
a) O código cria a conexão com o banco de dados e a função createUser insere um novo usuário na tabela userTableName, com os campos id, email e senha.

b)
```
CREATE TABLE IF NOT EXISTS to_do_list_users (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    nickname VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL
    password VARCHAR (64) NOT NULL
);
```

c)
```
export type user = {
   id: string
   email: string
   password: string
   name: string
   nickname: string
}
```

```
import { user }  from "../types";
import connection from "../connection"

export const insertUser = async (newUser: user) => {
    await connection(('to_do_list_users'))
      .insert(newUser)
}
```

### Exercício 3
a) Transforma a chave em string para que o id seja aceito.

b)
```
import * as jwt from "jsonwebtoken";

type AuthenticationData = {
    id: string;
  }
  const expiresIn = "20m";

 export const generateToken = (input: AuthenticationData): string {
    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
}
```

### Exercício 4
```
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
            throw new Error('Digite um endereço de e-mail válido')
        };

        if ( password.length < 6 ) {
            throw new Error('A senha deve conter no mínimo 6 caracteres.')
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
  ```

### Exercício 5
```
import connection from "../connection";

export const selectUserByEmail = async(email: string
    ): 
    Promise<any> => {
        
    try {
        const result = await connection("Users_Aula50")
      .select("*")
      .where({ email })
 
    return result[0]
    } catch (error) {
        throw new Error(error.message || error.sqlMessage);
    }
}
```

### Exercício 6
a) 
```
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
```
b) 
```
if(!email || email.indexOf("@") === -1){
  throw new Error("Invalid email")
}
```

### Exercício 7
a) "As any" diz que o resultado do payload pode ser de qualquer tipo, para que não retorne um erro. 

b)
```
export const getTokenData = (token: string): AuthenticationData => {
  return jwt.verify(
    token,
    process.env.JWT_KEY as string
  ) as AuthenticationData
}
```

### Exercício 8
a) 
```
import connection from "../connection"

export const selectUserById = async(id: string): Promise<any> => {
    try {
        const result = await connection("to_do_list_users")
      .select("*")
      .where({ id })
 
    return result[0]
    } catch (error) {
        throw new Error(error.message || error.sqlMessage);
    }
}
```

b)
```
import { Request, Response } from "express"
import { selectUserById } from "../data/selectUserById"
import { AuthenticationData, getTokenData } from "../services/authentication"

export const getUserById = async (req: Request,  res: Response) => {
    try {
        const token: string = req.headers.authorization as string
        const tokenData: AuthenticationData = getTokenData(token)

        const user = await selectUserById(tokenData.id)

        if(!user){
            res.statusCode = 404
            throw new Error('User not found!');
        }

        res.status(200).send({
            message: {
                id: user.id,
                email: user.email
            }
        })
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })    
    }
}
```