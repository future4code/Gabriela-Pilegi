### Exercício 1
a)
O round é o fator chamado "cost" (custo numérico), que está relacionado à segurança da senha. 
Quanto maior esse valor, maior é o tempo para execução do algoritmo - mas também maior a segurança.
Já o salt é um dado aleatório gerado pelo bcrypt para ser um valor adicionado ao conteúdo que será criptografado. O valor padrão a ser utilizado é 12.

b)
```
export const hash = async(s: string): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST)
    const salt = await bcrypt.genSalt(rounds)
    const result = await bcrypt.hash(s, salt)
    return result
}
```

c)
```
export const compare = async(
    s: string, 
    hash: string
    ): 
    Promise<boolean> => {
    return bcrypt.compare(s, hash);
  }
```

### Exercício 2
a) O endpoint de cadastro deve ser modificado primeiro para que os novos usuários cadastrados tenham sua senha criptografada. 
### Exercício 3
### Exercício 4
### Exercício 5
### Exercício 6