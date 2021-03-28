import connection from "../connection";

export default async function insertTask(
    id: string, 
    title: string,
    description: string,
    deadline: string,
    authorId: string
) {
    await connection ('toDoListTasks')
    .insert ({ 
        id,
        title, 
        description, 
        deadline,
        authorId
    })
}