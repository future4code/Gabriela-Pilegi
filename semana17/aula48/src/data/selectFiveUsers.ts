import  connection from "../connection"

export default async function selectOnlyFive(page:string):Promise<any> {
    const resultsPerPage: number = 5
    const pageNumber: number = Number(page)
    const offset: number = resultsPerPage * (pageNumber - 1)
    const result = await connection("aula48_exercicio")
    .select("*")
    .limit(resultsPerPage)
    .offset(offset)

    return result
}