import { Request, Response } from "express";
import connection from "../connection";

const getMovieLimit = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await connection.raw(`
    SELECT * FROM Movie LIMIT 10
  `);

    res.status(200).send(result[0]);
  } catch (error) {
    res.status(400).send("Error");
  }
};

export default getMovieLimit;