import connection from "../connection";

export default async function selectUserByType(type: string)
:Promise<any> {
    const result = await connection("aula48_exercicio")
    .select("*")
    .where("type", type)

    return result
}