export type userAccount = {
    name: string,
    cpf: number,
    birth: string,
    balance: number,
    transaction: transaction[]
}


export type transaction = {
    amount: number,
    date: number,
    description: string
}

export const users: userAccount[] = [ 
    {
        name: "Primeiro Usuário",
        cpf: 123456789,
        birth: "30/02/1985",
        balance: 500,
        transaction: [{
            amount: 600,
            date: 19032021,
            description: "Depósito"
        }]
    },
    {
        name: "Segundo Usuário",
        cpf: 987654321,
        birth: "29/02/1990",
        balance: 300,
        transaction: [{
            amount: 300,
            date: 19032021,
            description: "Depósito"
        }]
    }
]