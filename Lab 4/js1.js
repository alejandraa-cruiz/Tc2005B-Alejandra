//2. Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria. Salida: La página debe indicar
// si el resultado fue correcto o incorrecto, y el tiempo que tardó el usuario en escribir la respuesta.
const numberone=Math.round(Math.random()*10);
const numbertwo=Math.round(Math.random()*10);
let sum=numberone+numbertwo;
//const start= new Date();

let result= prompt("Ingrese el resultado de" + numberone + "+" + numbertwo);

//const end= new Date();
//const time= end - start;

if(sum==result){
    document.write("<br","Pregunta 2.resultado correcto");
    document.write("Tiempo en resolver la pregunta");
}
else{
    document.write("<br","Pregunta 2. Resultado incorrecto");
    document.write("Tiempo en resolver la pregunta");
}