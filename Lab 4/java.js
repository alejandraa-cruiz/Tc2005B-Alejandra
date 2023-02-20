//1. Entrada: un número pedido con un prompt. Salida: Una tabla con los números del 1
// al número dado con sus cuadrados y cubos. Utiliza document.write para producir la salida
let number = prompt ("Enter a number:");
document.write("Question 1. <br>")
for (let i = 1; i <= number; i ++){
    document.write(i + " _ " + (i*i) + " _ " + (i*i*i), "<br>");
}

//2. 
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
    document.write("Question 2. Incorrect answer", "<br>")
}

document.write("Time spend answering: " + totalT + " miliseconds")
