### Exercício 1
a)  1. CREATE TABLE - criar uma nova tabela chamada Actor.
2. VARCHAR (255) - string de, no máximo, 255 caracteres.
3. DATE - representa uma data, seguindo o formato YYYY-MM-DD.
4. VARCHAR (6) - string de, no máximo, 6 caracteres.
5. PRIMARY KEY - chave primária, um campo para identificador único de uma tabela.
6. NOT NULL - descreve que aquele campo específico tem o preenchimento obrigatório.

```
CREATE TABLE Actor (
id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
```
b) 1. O comando “SHOW DATABASES” mostra todos os bancos de dados existentes.
```
SHOW DATABASES
```
2. O comando “SHOW TABLES” mostra as tabelas já criadas dentro daquele banco de dados específico. No caso do exercício proposto, foi mostrada a tabela Actor.
```
SHOW TABLES
```

c) O comando DESCRIBE Actor mostra a tabela Actor, trazendo os campos Field com os campos da tabela que foi criada (id, name, salary, birth_date, gender), os tipos desses campos (varchar, float, date), se é opcional ou não (nesse caso, todos os campos têm “NO” para Null), o id aparece como chave primária, e aparece um campo Default com valor Null. 

### Exercício 2 
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
	"001",
    "Tony Ramos", 
    400000,
    "1948-08-25",
    "male"
);
  ```

a)
 ```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
	"002",
    "Glória Pires", 
    1200000,
    "1963-08-23",
    "female"
);
``` 
b) 
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
	"002",
    "Taís Araújo", 
    1500000,
    "1978-11-25",
    "female"
);
```
    Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMÁRIA'
O erro aconteceu porque não é possível gravar dois atores com o mesmo ID, uma vez que esta é a chave primária da tabela. Sendo assim, o valor do ID não pode se repetir. 

c)
```
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```
Error Code: 1136. Column count doesn't match value count at row 1
Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1
Os campos passados para inserir a atriz contém apenas 3 parâmetros (id, name, salary), enquanto o dado passados possui 5 valores. (id, name, salary, birth_date, gender).

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

d)
```
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
```
Error Code: 1364. Field 'name' doesn't have a default value
Código de erro: 1364. O campo 'nome' não tem um valor padrão.
O valor do campo nome não foi informado para esse ator e, na criação da tabela, foi definido que esse campo não pode ser Null.
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
```

e)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
```

Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1
Ao inserir o novo ator ou atriz, o campo de data de nascimento deve estar entre aspas.

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

```

f) 
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Wagner Moura",
  1500000,
  "1976-06-27", 
  "male"
);

```

### Exercício 3
a) 
```
SELECT * FROM Actor WHERE gender = "female";
```
b)  
```
SELECT name, salary FROM Actor WHERE name = "Tony Ramos";
```

c) 
```
SELECT * FROM Actor WHERE gender = "invalid";
```
Utilizando esta query, apareceu a tabela mas com os campos todos vazios, porque o gênero é um campo obrigatório e todas as atrizes e atores cadastrados tem como valor “female” ou “male” nesse campo.

d) 
```
SELECT id, name, salary FROM Actor WHERE salary > 500000
```

e) 
```
SELECT id, nome from Actor WHERE id = "002"
```
Error Code: 1054. Unknown column 'nome' in 'field list'
Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'
A coluna do nome não existe, está com o nome errado. O campo referente ao nome que pertence à tabela é “name”.
```
SELECT id, name from Actor WHERE id = "002";
```

### Exercício 4
```
SELECT * FROM Actor 
WHERE (name LIKE "A%" or name LIKE "J%") AND salary >  300000;
```
a) A query exibe todos os atores existentes na tabela cujo nome inicie com as letras A ou J e que possuem um salário superior a 300000.

b)
```
 SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;
```
c)
```
SELECT * FROM Actor
WHERE name LIKE "%g%" or "%G%";
```
d)
```
SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;
```

### Exercício 5
a) 
```
CREATE TABLE Movie(
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);
```

b) 
```
INSERT INTO Movie (id, title, synopsis, release_Date, rating) 
VALUES(
	"001",
	"Se Eu Fosse Você",
	"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
	"2006-01-06",
	7
);
```	
c) 
```
INSERT INTO Movie (id, title, synopsis, release_Date, rating) 
VALUES(
	"002",
	"Doce de mãe",
	"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
	"2012-12-27",
	10
);

```

d)
```
INSERT INTO Movie (id, title, synopsis, release_Date, rating) 
VALUES(
	"004",
	"O Auto da Compadecida",
	"O filme mostra as aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo no sertão da Paraíba, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região. Somente a aparição da Nossa Senhora poderá salvar esta dupla.",
	"2000-09-10",
	10
);
```
e) 
```
INSERT INTO Movie (id, title, synopsis, release_Date, rating) 
VALUES(
	"004",
	"O Auto da Compadecida",
	"O filme mostra as aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo no sertão da Paraíba, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região. Somente a aparição da Nossa Senhora poderá salvar esta dupla.",
	"2000-09-10",
	10
);
```

### Exercício 6
a) 
``` 
SELECT id, title, rating FROM Movie WHERE id = "004";
```

b) 
```
SELECT * FROM Movie WHERE title = "Dona Flor e seus dois maridos";
```

c)
```
SELECT id, title, synopsis FROM Movie WHERE rating >= 7;
```

### Exercício 7
a)
```
SELECT * FROM Movie WHERE title LIKE "%vida%";
```
b)
```
SELECT * FROM Movie WHERE title LIKE "%auto%" OR synopsis LIKE "%flor%";
```
c)
```
SELECT * FROM Movie WHERE release_date < "2015-03-22";
```
d)
```
SELECT * FROM Movie WHERE release_date < "2015-03-22"
AND (title LIKE "%maridos%" 
OR synopsis LIKE "%senhora%")
AND rating > 7;
```