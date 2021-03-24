import connection from "../connection";
import express, { Express, Request, Response } from 'express';

const getActorByName = async (name: string) : Promise<any> => {
    try {
        const result = await connection.raw(`
            SELECT * FROM Actor WHERE name = "${name}";
        `);
        return result[0][0];
    } catch (error) {
        console.log(error.sqlMessage || error.message);
    };
};

export default getActorByName;