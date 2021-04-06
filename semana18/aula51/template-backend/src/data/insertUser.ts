import { User }  from "../types";
import connection from "../connection"

export const insertUser = async (newUser: User) => {
    await connection(('to_do_list_users'))
      .insert(newUser)
} 