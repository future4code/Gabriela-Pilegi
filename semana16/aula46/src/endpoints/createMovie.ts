import { Request, Response } from "express";
import connection from "./../connection";

const createMovie = async (req: Request, res: Response): Promise<void> => {
  try {
    await connection.raw(
    `INSERT INTO Movie (id, title, synopsis, release_date, rating_score, playing_limit_date)
    VALUES (
        "${Date.now()}",
        "${req.body.title}",
        "${req.body.synopsis}",
        "${req.body.releaseDate}",
        "${req.body.ratingScore}",
        "${req.body.playingLimitDate}"
    )
    `
    );
    res.status(201).send("Filme cadastrado com sucesso!");
  } catch (error) {
    res.status(400).send("Error.");
  }
};

export default createMovie;