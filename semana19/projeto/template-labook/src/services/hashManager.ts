import * as bcrypt from 'bcryptjs';
import dotenv
 from 'dotenv'

dotenv.config()

export class HashManager {
   public hash = async (plainText:string):Promise<string> => {
       const cost = Number(process.env.BCRYPT_COST)
       const salt = await bcrypt.genSalt(cost)
       return bcrypt.hash(plainText, salt)
   }

   public compare = async (plainText:string, cypherText:string):Promise<boolean> => {
       return bcrypt.compare(plainText, cypherText)
   }
}
