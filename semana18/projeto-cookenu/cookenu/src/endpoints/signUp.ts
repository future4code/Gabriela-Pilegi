import {Request, Response} from "express"
import { insertUser } from "../data/insertUser"
import { generateId } from "../services/generateId"
import { generateHash } from "../services/hashManager"
import { user } from "../types"

export const signUp = async (
    req: Request,
    res: Response
): Promise<any> => {

    const { name, email, password, role } = req.body

    let errorCode = 400

    try {
        const id: string = generateId()
        
        if (!name) {
            errorCode = 422
            throw new Error("Please, provide a name.") 
        }

        if (!email) {
            errorCode = 422
            throw new Error("Please, provide an e-mail.")
        }

        if (!email.includes("@")) {
            errorCode = 422
            throw new Error ("Invalid email.");            
        }

        if (!password || password.length < 6) {
            errorCode = 422
            throw new Error("Please, provide a password with at least 6 characters.")
        }


        const passwordHash: string = await generateHash(password)
        const newUser: user = {
            id: id,
            name: name,
            email: email,
            password: passwordHash,
            role: role || "NORMAL"
        }

        await insertUser(newUser);

        const token = generateId(id, newUser)

        res.status(201).send({token})


    } catch (error) {
        res.send({
            message: error.message || error.sqlMessage
        })
    }

}