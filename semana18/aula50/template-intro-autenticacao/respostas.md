
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


### Exercício 5

### Exercício 6

### Exercício 7

### Exercício 8