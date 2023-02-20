//variables constantes, consola (log, info, warn, error, assert)
//Alcance de las variables
// se usa var y let para deinir variables
//se usa const para que el cliente no modifique el valor 
//console.log("") registro en la consola
//console.info("") mostrar una información, concatenar con + 
//console.warn() y console.erro()
//console.assert() == igual === estrictamente igual
//alcance de las variables
//alert prompt confirm
//function numero_alitas(){return 12}
//console.log(numero_alitas())
//arrow function let cantidad_alitas=()=>{return 12};
//console.log(cantidad_alitas())
//Defining java script in html <script src="js.js"></script>

//1. Entrada: un número pedido con un prompt. Salida: Una tabla con los números del 1
// al número dado con sus cuadrados y cubos. Utiliza document.write para producir la salida
const number=prompt("Ingresa el número:");
document.write("Número ","Cuadrado ","Cubo","<br>");
for (let i = 1;i <= number; i ++) {
    document.write(i,"   |   ", i*i, "   |   ", i*i*i,"<br>");
}

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
//Función: contador. Parámetros: Un arreglo de números. Regresa:
// La cantidad de números negativos en el arreglo, la cantidad de 0's, y la cantidad de valores mayores a 0 en el arreglo.
function contador(array1){
    let negativos=0;
    let positivos=0;
    let cero=0;

array1.forEach(element => {
    if(element==0){cero++;}
    if(element<0){negativos++;}
    if(element>0){positivos++;}
});
 document.write("Número de ceros: "+ cero + ". De negativos" + negativos + ". De positivos" + positivos);
}
const array1=[1,2,3,4,5,0,0,-1,-2,-3];