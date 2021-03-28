### Exercício 1
a) A resposta traz um objeto com as informações do ator ou atriz com o id correspondente (no caso do exercício, id = 001)

b) 
```
const getActorByName = async (name: string) : Promise<any> => {
    try {
        const result = await connection.raw(`
            SELECT * FROM Actor WHERE name = "${name}";
        `);
        return result[0][0];
    } catch (error) {
        console.log(error.sqlMessage || error.message);
    };
};

export default getActorByName;
```