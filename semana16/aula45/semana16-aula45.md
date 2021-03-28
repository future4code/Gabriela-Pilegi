```sql

### Exercício 1
```
SELECT * FROM Actor;

ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";
```
a) ALTER TABLE Actor DROP COLUMN salary: Remover a coluna "salary" da tabela.
b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6): Alterar o nome da coluna gender para sex, com o tipo VARCHAR com no máximo 6 caracteres.
c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255): Alterar o número máximo de caracteres da coluna gender para até 255 caracteres.
d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

### Exercício 2
```
SELECT * FROM Actor;
```
a) 
```
UPDATE Actor
SET name = "Nicette Bruno", birth_date = "1933-01-07"
WHERE id = 3;
```

b)
```
UPDATE Actor
SET name = "Juliana Pães"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "Juliana Pães";
```
c) 
```
UPDATE Actor
SET name = "Selton Mello", 
	salary = 2000000,
	birth_date = "1972-12-30",
	gender = "male", 
	favorite_ice_cream_flavor = "Chocolate",
	type = "Director"
WHERE id = 5;
```

d)
```
UPDATE Actor
SET name = "Cláudia Raia"
WHERE id = 10;
```
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
O banco de dados não encontrou nada com esse id (10) e, portanto, nada foi alterado.

### Exercício 3
a)
```
SELECT * FROM Actor;

DELETE FROM Actor
WHERE name = "Fernanda Montenegro";
```
b)
```
DELETE FROM Actor
WHERE gender = "male"
AND salary > 100000000;
```
### Exercício 4

SELECT COUNT(*) FROM Actor;
SELECT COUNT(*) FROM Actor WHERE gender = "female";
SELECT AVG(salary) FROM Actor;

a)
```
SELECT MAX(salary) FROM Actor;
```
b)
```
SELECT MIN(salary)
FROM Actor
WHERE gender = "female";
```
c) 
```
SELECT COUNT(*) FROM Actor
WHERE gender = "female";
```
d)
```
SELECT SUM(salary) FROM Actor;
```

### Exercício 5
a) A query vai contar as atrizes e atores agrupando-os por gênero, que é uma das características que possuem em comum.
b) 
```
SELECT id, name FROM Actor
ORDER BY name DESC;
```
c)
``` 
SELECT * FROM Actor
ORDER BY salary;
```
d)
```
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```
e)
```
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;
```

### Exercício 6
a)
```
ALTER TABLE Movie
ADD playing_limit_date DATE DEFAULT(CURDATE());
```
b) 
```
ALTER TABLE Movie CHANGE rating rating FLOAT;
```
c)
```
SELECT * FROM Movie;
UPDATE Movie
SET playing_limit_date = "2021-03-23"
WHERE id = "001";
```
d)
```
UPDATE Movie
SET title = "O senhor dos anéis"
WHERE id = 001;

```
O resultado é 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0. Ele não afeta a tabela porque o filme de id = 1 já não existe mais.


### Exercício 7
a)
```
SELECT COUNT(*) FROM Movie WHERE rating > 7.5;
```
O resultado do número de filmes exibidos é 3. 

b)
```
SELECT AVG(rating) FROM Movie;
```
A nota média dos filmes é 9.333...

c)
```
SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();
```
A quantidade de filmes em cartaz é 0. 

d)
```
SELECT COUNT(*) FROM Movie WHERE release_date > CURDATE();
```
A quantidade de filmes a serem lançados é 0.

e)
```
SELECT MAX(rating) FROM Movie;
```
A nota máxima de um filme foi 10.

f)
```
SELECT MIN(rating) FROM Movie;
```
A nota mínima de um filme foi 8.

### Exercício 8
a)
```
SELECT * FROM Movie ORDER BY title;
```

b)
```
SELECT * FROM Movie ORDER BY title LIMIT 5;
```

c)
```
SELECT * FROM Movie 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;
```

d)
```
SELECT * FROM Movie 
ORDER BY rating DESC 
LIMIT 3;
```

