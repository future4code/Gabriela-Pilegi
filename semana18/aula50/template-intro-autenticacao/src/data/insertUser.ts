import { user }  from "../types";
import connection from "../connection"

export const insertUser = async (newUser: user) => {
    await connection(('to_do_list_users'))
      .insert(newUser)
}