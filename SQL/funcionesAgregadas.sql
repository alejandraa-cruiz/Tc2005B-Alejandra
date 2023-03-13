/*Película (título, año, duración, encolor, presupuesto, nomestudio, idproductor)
Elenco (título, año, nombre, sueldo)
Actor (nombre, dirección, telefono, fechanacimiento, sexo)
Productor (idproductor, nombre, dirección, teléfono)
Estudio (nomestudio, dirección)*/

/*El ingreso total recibido por cada actor, sin importar
 en cuantas películas haya participado.*/
 
    SELECT Nombre, SUM (Sueldo) as 'Total Ingresos'
    FROM Elenco
    GROUP BY Nombre
    ORDER BY SUM (Sueldo) DESC

/* El monto total destinado a películas por
 cada Estudio Cinematográfico, durante la década de los 80's. */
    SELECT nomestudio, SUM(presupuesto)
    FROM Película
    WHERE anio BETWEEN 1980 AND 1989
    GROUP BY nomestudio
    ORDER BY SUM(presupuesto) ASC

 /*  Nombre y sueldo promedio de los actores (sólo hombres) que
  reciben en promedio un pago superior a 5 millones de dolares por película.*/

    SELECT nombre, AVG(sueldo) as 'Sueldo promedio'
    FROM Elenco as E, Actor as A
    WHERE E.sueldo> 5000000 AND A.sexo = 'masculino'
    GROUP BY E.nombre
    ORDER BY AVG(sueldo) DESC

  /* Título y año de producción de las películas con menor presupuesto.
   (Por ejemplo, la película de Titanic se ha producido en varias veces entre
   la lista de películas estaría la producción de Titanic y el año que fue
   filmada con menor presupuesto).*/
    SELECT titulo, anio
    FROM Película
    GROUP BY titulo
    HAVING MIN(presupuesto)
    ORDER BY presupuesto DESC
    

   /*Mostrar el sueldo de la actriz mejor pagada.*/
    SELECT nombre
    FROM Elenco
    GROUP BY nombre
    HAVING MAX (sueldo)
