import { Request, Response } from "express";
import connection from "./../connection";

const updateSalary = async (req: Request, res: Response): Promise<void> => {
  try {
    await connection("Actor")
      .update({
        name: req.body.name,
        salary: req.body.salary,
        birth_date: req.body.birthDate,
        gender: req.body.gender,
      })
      .where({ id: req.params.id });
    res.status(201).send("Salário alterado.");
  } catch (error) {
    res.status(400).send("Error");
  }
};

export default updateSalary;