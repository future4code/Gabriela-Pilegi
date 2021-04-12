import { user } from "../types"
import connection from "../connection"



export const insertUser = async (newUser: user) => {
    try {
      await connection((TABELAAAA ))
        .insert(newUser)
    } catch (error) {
      throw new Error(error.message || error.sqlMessage);
    }
}