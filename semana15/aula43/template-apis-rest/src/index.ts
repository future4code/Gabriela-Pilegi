//importando express com Request e Response e cors
import express, {Request, Response} from 'express';
import cors from 'cors';

//extra: importando configuração de rede do node
import { AddressInfo } from "net";
import { resourceLimits } from 'node:worker_threads';
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

type user = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}


let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
]

// Exercício 1 - Mostrar todos os usuários

app.get("/users", (req: Request, res: Response) => {
    let errorCode: number = 400

    try {
        const result = users
        res.status(200).send({ quantity: users.length, users: result })
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})


// Exercício 2 - Buscar usuários que tenham uma propriedade type específica
app.get("/users/:type", (req: Request, res: Response) => {
    let errorCode: number = 400
    const types = [ "ADMIN", "NORMAL"]

    try {
        const type: string = (req.params.type as string).toUpperCase()

        if (!types.includes(type)) {
            throw new Error("Not found.")
        }

        const result: user[] = users.filter((user) => {
            return user.type.toUpperCase() === type
        })

        res.status(200).send(result)

    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

// Exercício 3 - Buscar usuário por nome
app.get("/users/:name", (req: Request, res: Response)=>{
    let errorCode: number = 400;

    try {
        const name: string = req.query.name as string

        if (!name) {
            errorCode = 422
            throw new Error("Invalid value for name.")
        }

        const userName = users.find(((u: user) => u.name === name))

        if (!userName) {
            errorCode = 404
            throw new Error("Not found.")
        };

        res.status(200).send(userName)
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  
