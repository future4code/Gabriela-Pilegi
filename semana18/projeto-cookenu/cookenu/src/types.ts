  
export type user = {
    id: string,
    name: string,
    email: string,
    password: string,
    role: ROLE
}

export enum ROLE {
    NORMAL = 'NORMAL',
    ADMIN = 'ADMIN'
}