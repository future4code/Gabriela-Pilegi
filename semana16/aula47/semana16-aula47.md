### Exercício 1
a) Uma chave estrangeira é um campo que estabelece a relação entre duas ou mais tabelas no banco de dados, conectando-a através de chave primária.

b)
```
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES 
	(
    "002", 
    "Legal",
    7, 
    "002"),
    (
    "003", 
    "Bem louco",
    8, 
    "003"),
    (
    "004", 
    "Empolgante",
    9, 
    "004"
    );
```

c) 
```
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES 
	(
    "001", 
    "Amei",
    8,
    "001"
   );
```

Não é possível fazer a avaliação para um filme que não existe. Aparece a mensagem:
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`epps-gabriela-pilegi`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`)). Isso acontece porque para fazer a avaliação, é necessário o ID do filme a que ela faz referência e, como não existe, não é possível.

d)
```
ALTER TABLE Movie DROP COLUMN rating;
```

e)
```
DELETE FROM Movie 
WHERE id = "002"
```

Não é possível apagar o filme. A seguinte mensagem de erro é exibida:
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`epps-gabriela-pilegi`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
Para conseguir apagá-lo, seria necessário, primeiramente, apagar todas as referências à ele para que ficasse desvinculado de outros dados.

### Exercício 2
a) 
```
CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
	actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```
A tabela acima relaciona o id de um determinado filme com os atores que participaram dele. É uma relação N:M pois cada ator pode participar de vários filmes, bem como o filme é composto por vários atores.

b)
```
INSERT INTO MovieCast (actor_id, movie_id) VALUES
("001", "002"),
("002", "003"),
("002", "002"),
("004", "003"),
("001", "002"),
("002", "004");
```
c)
```
INSERT INTO MovieCast (actor_id, movie_id) VALUES
("009", "002");


Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`epps-gabriela-pilegi`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
```
Não foi possível relacionar os dados porque o ator 009 é inexistente e, para adicioná-lo a um filme, o id precisa ser válido. 

d)
```
DELETE FROM Actor
WHERE id = "002";
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`epps-gabriela-pilegi`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
```
Não foi possível apagar esse ator porque ele está relacionado à tabela de elenco de um filme. Para apagar o ator, seria necessário primeiro desvinculá-lo dessa tabela com o elenco do filme.

### Exercício 3
### Exercício 4
### Exercício 5
### Exercício 6
