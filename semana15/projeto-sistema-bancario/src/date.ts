import {users, userAccount} from './users'

export const today : number = new Date().getTime()

export const getTimestamp = (date: string): number => {
    const [day, month, year] = date.split("/")
    
    return new Date(`${year}-${month}-${day}`).getTime()
}

export const findCpf = (cpf: number): userAccount | undefined => {

    return users.find(account => {
        return account.cpf === cpf
    })
    
}


export const isAdult = (birth: string): boolean => {

    const birthTimestamp: number = getTimestamp(birth)
    const calcTime: number = (today - birthTimestamp) / 1000
    const age: number = calcTime/(60 * 60 * 24 * 365)

    return age >= 18
}
