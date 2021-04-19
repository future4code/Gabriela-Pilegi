// export type user = {
//     id: string,
//     name: string,
//     email: string,
//     password: string
//  }

export type User = {
    id: string,
    name: string,
    email: string,
    password: string
 }

 export interface SignUpInputDTO {
     // dados de entrada do signup
     name: string,
     email: string,
     password: string

 }