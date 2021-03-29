import { Request, Response } from 'express'
import selectUserByName from '../data/selectUserByName'
import { user } from '../types/user'

export const getUserByName = async (req:Request, res:Response): Promise<void> => {
    try {
        const name:string = req.params.name as string

        if(!name) {
            res.statusCode = 406
            throw new Error("Please provide a name.");
        } else {
            const users: user[] = await selectUserByName(name)

            if(!users.length) {
                res.statusCode = 404
                throw new Error("No user found with that name");
            }

            res.status(200).send(users)
        }
    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}