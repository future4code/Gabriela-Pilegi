import connection from "../connection";

export default async function updateUser(
    id: string,
    name?: string,
    nickname?: string,
    email?: string
    ) {
        if (name) {
            await connection.raw (`
                UPDATE toDoListUsers
                SET name = '${name}'
                WHERE id = '${id}';
            
            `)
        }

        if (nickname) {
            await connection.raw (`
                UPDATE toDoListUsers
                SET nickname = '${nickname}'
                WHERE id = '${id}';
            
            `)
        }

        if (email) {
            await connection.raw (`
                UPDATE toDoListUsers
                SET email = '${email}'
                WHERE id = '${id}';
            
            `)
        }
    
}