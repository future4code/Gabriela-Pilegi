import connection from "../connection";

export default async function selectTaskById(
    id: string
) : Promise<any> {

    const result = await connection.raw(`
        SELECT tasks.*, users.nickname FROM toDoListTasks AS tasks
        JOIN toDoListUsers AS users
        ON authorId = users.id
        WHERE tasks.id = ${id};
    `)
    //raw retorna um array dentro de outro array
    return result[0][0]

}