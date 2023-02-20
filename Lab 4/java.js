//1. Entrada: un número pedido con un prompt. Salida: Una tabla con los números del 1
// al número dado con sus cuadrados y cubos. Utiliza document.write para producir la salida
let number = prompt ("Enter a number:");
document.write("Question 1. <br>")
for (let i = 1; i <= number; i ++){
    document.write(i + " _ " + (i*i) + " _ " + (i*i*i), "<br>");
}

//2. Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria. Salida: La página debe indicar
// si el resultado fue correcto o incorrecto, y el tiempo que tardó el usuario en escribir la respuesta.
const numberone=Math.round(Math.random()*10);
const numberOne = Math.round (Math.random()*10);
const numberTwo = Math.round (Math.random() * 10);
const addition = numberOne + numberTwo;
const startT= new Date ();
let answer1 = prompt ("Add both numbers " + numberOne + " + " + numberTwo + " :");
const endT = new Date();
const totalT = endT - startT ;

if (answer1==addition){
    document.write("Question 2. Correct answer", "<br>");
}

else{
    document.write("Question 2. Incorrect answer", "<br>");
}

document.write("Time spend answering: " + totalT + " miliseconds", "<br>");

//3. Función: contador. Parámetros: Un arreglo de números. Regresa:La cantidad de números negativos en el arreglo,
// la cantidad de 0's, y la cantidad de valores mayores a 0 en el arreglo.

function counter (array1){
    let positive = 0;
    let negative = 0;
    let zero = 0;

    array1.forEach(element => {
        if (element>0) positive++;
        if (element<0) negative++;
        if (element == 0) zero++;
    });

    document.write("Question 3.", "<br>");
    document.write("Numbers that are positive in the array: " + positive, "<br>");
    document.write("Numbers that are negative in the array: " + negative, "<br>");
    document.write("Numbers that are zero in the array: " + zero, "<br>");
    
}
const array1=[1,2,3,4,5,0,0,-1,-2,-3];
counter(array1)