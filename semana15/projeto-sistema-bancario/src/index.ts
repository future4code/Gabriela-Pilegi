import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { getTimestamp, isAdult, findCpf } from './date'
import { userAccount, users } from "./users";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/account/create", (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        if (!req.body.name || !req.body.cpf || !req.body.birth) {
            errorCode = 422
            throw new Error("Preencha os campos corretamente.")
        }

        if (!getTimestamp(req.body.birth)) {
            errorCode = 422
            throw new Error("Data inválida. (Preencha com DD/MM/YYYY)")
        }

        const openAccount: boolean = isAdult(req.body.birth)

        if (!openAccount) {
            errorCode = 401
            throw new Error("É necessário ter pelo menos 18 anos para criar uma conta.")
        }

        const validateCpf: userAccount  | undefined = findCpf(req.body.cpf)
 
        if (validateCpf) {
            errorCode = 409
            throw new Error("Não é possível criar uma nova conta com um CPF já existente.")
        }

        const newAccount: userAccount = {
            name: req.body.name,
            cpf: req.body.cpf,
            birth: req.body.birth,
            balance: 0,
            transaction: []
        }

        users.push(newAccount)

        res.status(201).send({ message: "Conta criada com sucesso!" })

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
})