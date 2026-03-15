#СиВД 
# Оператор SELECT

```PostgreSQL
SELECT * FROM superheroes
```

(•) Оператор SELECT: позволяет вынуть нужные данные из таблицы, синтаксис которого:
- SELECT - имя самого оператора
- $*$ - звёздочка выбирает все данные, то есть все столбцы, вместо неё можно написать любые столбцы, которые нужны выбрать из таблицы
- FROM - оператор, который указывает из какой таблицы доставать данные
- superheroes - таблица из которой достаются данные

```PostgreSQL
SELECT name,appearances FROM superheroes
```

(•) В данном примере будет создана таблица состоящая из двух столбцов: name и appearances

```PostgreSQL
SELECT name as hero_name,appearances FROM superheroes
```

(•) В данном примере оператор AS (as) позволяет создать псевдоним для столбца, то есть в данном примере создаться таблица, состоящая из столбцов hero_name и appearances.

```PostgreSQL
SELECT DISTINCT(name) FROM superheroes
```

(•) Оператор DISTINCT() позволяет получить уникальные значения столбца, указанного внутри него.

```PostgreSQL
SELECT DISTINCT(name) 
FROM superheroes
LIMIT 10
```

(•) Ключевое слово LIMIT позволяет вывести только определённое количество результатов, то есть N-количество строк столбцов

# Оператор WHERE

```PostgreSQL
SELECT *
FROM superheroes
WHERE align = 'Reformed Criminals'
```

(•) Оператор WHERE позволяет выбирать определённые строки по фильтру, синтаксис операторов:

| Оператор | назначение                               |
| -------- | ---------------------------------------- |
| =        | Равно                                    |
| <>, !=   | Неравно                                  |
| >        | Больше                                   |
| >=       | Больше или равно                         |
| <        | Меньше                                   |
| <=       | Меньше или равно                         |
| between  | Значение находится в указанном диапазоне |
| in       | Значение входит в список                 |
| like     | Проверка строки на соответствие шаблону  |

```PostgreSQL
SELECT *
FROM superheroes
WHERE year BETWEEN 2000 and 2005
```

(•) Применение оператора BETWEEN: "Все супергерои, год первого появления которых лежит в значениях от 2000 включительно до 2005 включительно"

```PostgreSQL
SELECT *
FROM superheroes
WHERE hair IN ('Strawberry Blond Hair', 'Red Hair', 'Auburn Hair')
```

(•) Применение оператора IN: "Все супергерои, волосы которых попадают в указанные список"

```PostgreSQL
SELECT *
FROM superheroes
WHERE hair LIKE '%Blond%'
```

(•) Применение оператора LIKE: "Все супергерои, в названии волос которых есть слово 'Blond' "
(•) Шаблоны оператора LIKE:
- % - любое количество символов (включая 0)
- _ - ровно один символ

(•) Логические операции в WHERE:

| Операция | Назначение     |
| -------- | -------------- |
| AND      | Логическое И   |
| OR       | Логическое ИЛИ |
| NOT      | Логическое НЕ  |


```PostgreSQL
SELECT *
FROM superheroes
WHERE gender = 'Female Characters'
      AND
      aling = 'Bad Characters'
```

(•) Применение операции AND: ''Все супергерои женского пола и являющиеся отрицательными персонажами"

```PostgreSQL
SELECT *
FROM superheroes
WHERE hair = 'Red Hair'
 OR hair = 'Strawberry Blond Hair'
 OR hair = 'Auburn Hair'
```

(•) Применение операции OR: ''Все супергерои, волосы которых являются хотя бы одним из указанных типов волос"

```PostgreSQL
SELECT *
FROM superheroes
WHERE hair NOT IN ('Blond Hair','Black Hair','Brown Hair','Red Hair')
```

(•) Применение операции NOT в связке с IN: ''Все супергерои, волосы которых необычного цвета"

# Оператор ORDER BY

```PostgreSQL
SELECT *
FROM superheroes
ORDER BY year
```

(•) Оператор ORDER BY позволяет сортировать полученную таблицу, по умолчанию сортировка по возрастанию (ASC):
- ASC (ascending) - сортировка по возрастанию
- DESC (descending) - сортировка по убыванию

```PostgreSQL
SELECT *
FROM superheroes
WHERE aling = 'Bad Characters'
ORDER BY year appearances DESC
```

(•) Применение фильтра и сортировки одновременно

```PostgreSQL
SELECT *
FROM superheroes
ORDER BY year, appearances
```

(•) Сортировка по возрастанию по нескольким параметрам, сначала происходит сортировка по атрибуту (столбцу) year, а потом сортировка по столбцу appearances

Создание таблицы в SQL

```PostgreSQL
CREATE TABLE superheroes(
    id INT,
	name VARCHAR(100),
	align VARCHAR(30),
	eye VARCHAR(30),
	hair VARCHAR(30),
	gender VARCHAR(30),
	appearances INT,
	year INT,
	universe VARCHAR(10)
)
```

(•) Создание таблицы в SQL происходит с помощью оператора CREATE TABLE с дальнейшим указанием названия таблицы, после названия в круглых скобках через запятую указывается пара слов, создающих столбец, где первое слово - это название столбца, а второе слово - это тип данных, который будет в этом столбце.


| Тип данных                      | Назначение                                                                                               |
| ------------------------------- | -------------------------------------------------------------------------------------------------------- |
| CHARACTER(n), CHAR(n)           | Строка фиксированной длины n                                                                             |
| CHARACTER VARYNG(n), VARCHAR(n) | Строка переменной длины, максимальная длина n                                                            |
| BOOLEAN                         | Логический тип данных                                                                                    |
| INTEGER, INT                    | Целое число                                                                                              |
| NUMERIC(p,s)                    | Действительное число  (p - количество значащих цифр, s - количество цифр после запятой). Хранится точно. |
| REAL                            | Действительное число одинарной точности, формат IEEE 754                                                 |
| DOUBLE PRECISION                | Действительное число двойной точности, формат IEEE 754                                                   |
| DATE                            | Дата                                                                                                     |
| TIMESTAMP                       | Дата и время                                                                                             |
