//Criar um usuário - Endpoint 1

import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "../connection";
import { Request, Response } from 'express'
import insertUser from "../data/insertUser";

export default async function createUser(
    req: Request, 
    res: Response
) {
    try {
        if (
            !req.body.name ||
            !req.body.nickname ||
            !req.body.email
        ) { 
            res
            .status(400)
            .send("Preencha name, nickname e email.")

            return
        }

        const id: string = Date.now() + Math.random().toString()

        await insertUser(
            id,
            req.body.name,
            req.body.nickname,
            req.body.email
        ) 

        res
            .status(200)
            .send("Usuário criado com sucesso.")

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
    
}

