import { connection } from './connection';

export const selectUserByEmail = async(
    email: string
    ): 
    Promise<any> => {

    try {
        const result = await connection('User_Arq')
      .select('*')
      .where({ email })
 
    return result[0]

    } catch (error) {
        throw new Error(error.message || error.sqlMessage);
    }
}