//Criar um usuário - Endpoint 1

import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "../connection";
import { Request, Response } from 'express'

const putUser = async ( 
    req: Request,
    res: Response
) : Promise<void> => {

    try {
        await connection.raw (
            `INSERT INTO ToDoListUser (id, name, nickname, email)
            VALUES (
                "${req.body.id}",
                "${req.body.name}",
                "${req.body.nickname}",
                "${req.body.email}"
            );`
        )
    
        res.status(201).send("Usuário criado com sucesso!");

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error.")
        
    }
}

export default putUser;