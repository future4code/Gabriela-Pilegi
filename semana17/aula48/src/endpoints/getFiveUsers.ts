import { Request, Response } from "express";
import selectFiveUsers from '../data/selectFiveUsers'

export const getFiveUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const page = req.query.page as string;

    const result = await selectFiveUsers(page);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};