console.log("hola desde node");
//el modulo filesystem sirve para acceder al sistema de archivos de la computadora
const filesystem = require('fs');
//la diferencia entre writefile y writefilesync es que en sync se bloquea node y no puede atender a los demás clientes 
filesystem.writeFileSync('hola.txt','Hola');

//Función que recibe un arreglo de número y regresa un promedio 
function average(){
    let sum = 0;
    let lenght=0;
    array.forEach(element => {
        sum = sum + element;
        lenght ++;

    });
    let average = sum / lenght;
    console.log(average);
}
array=[1,2,3,4,5,6,7,8,9];
average(array);

//Una función que reciba un string y escriba el string en un archivo txt
function write(){
    filesystem.writeFileSync('hola.txt',text);
}
let text= "Tengo antojo de unas papas crisscut";
write(text);

//Crear un servidor web que envié una petición al servidor y le responda. Que te lleve a una de las páginas de los laboratorios pasados
// http es un módulo que permite crear servidores web y manejar las peticiones y respuestas
const http = require('http');

const server = http.createServer( (request, response) => {    
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Lab 1</title>
    </head>
    <body>
        <table cellspacing='20'>
            <tr>
              <td><img src='foto formal circle.png'  height="200 px" width="200 px" alt="alejandra foto de perfil"></td>
              <td>
                <h1>Alejandra Cabrera</h1>
                <p>A01704463</p>
                <p>a01704463@tec.mx</p>
                <p><em> SEITC y  Comité Talenta</em></p>
                <p>Studying ITC at TEC 💙🐏 </p>
                </td>
            </tr>
          </table>
        
          <hr>
          <h3>Scholarity</h3>
          <ul>
            <li>Prepa Tec generación 2018-2021 </li>
            <li>Ingeniería en Tecnologías Computacionales 2021-presente</li>
          </ul>
          <h3>Hobbies</h3>
          <ol>
            <li>Reading fiction, romance and self growth books.</li>
            <li>Acrilic and watercolor painting</li>
            <li>Animal content and NATGEO</li>
            <li>I love spending time doing playlists</li>
            <li>Going to the gym, running and yoga</li>
          </ol>
        
           <h3>Work Experience</h3>
           <table cellspacing="15">
             <thead>
               <tr>
                 <th>Dates</th>
                 <th>Work</th>
               </tr>
             </thead>
             <tbody>
               <tr>
                 <td>2021-2022</td>
                 <td>Interpreter foir Lenguage Line Solutions</td>
               </tr>
                 <td>2021-present</td>
                 <td>Studying at Tec de Monterrey ITC </td>
               <tr>
             </tbody>
          </table>
          <h3>Skills </h3>
          <!--Nested Table down here -->
          <table>
            <tr>
              <td><table cellspacing="8">
                <tr>
                  <td>Data Science</td>
                  <td>⭐ </td>
                </tr>
                <tr>
                  <td>Web Developing  </td>
                  <td>⭐</td>
                </tr>
              </table></td>
              <td><table cellspacing="8">
                <tr>
                  <td>Object Oriented Programming</td>
                  <td>⭐⭐</td>
                </tr>
                <tr>
                  <td>Data Structures</td>
                  <td>⭐</td>
                </tr>
              </table></td>
            </tr>
          </table>
        
        
             </tr>
           </table>
        <h3>Questions: An introduction to HTML</h3>
        <ul>
            <li>The Internet is a global, interconnected network of computing devices. The World Wide Web is one set of software services running on the internet.
                Internet is the roads that connects cities together while www contains the things you see in the roads.</li>
            <li>HTML5 includes new semantic elements, includes simple doctype declaration, multimedia supporting tags and handles inaccurate syntax errors.
                Uses SQL database, web storage. All these characteristics are not included in HTML 4. </li>
            <li>If a web server returns a 200 code or 2xx means not error, successful request.</li>
            <li>If the user tried to access and got a 404 request is not a developer mistake is a client mistake so there is no need of correcting the web site.
                Whereas 500 mistake means developer error and we must correct it.</li>
            <li>The URL is formed by protocol, domain, path and parameters. </li>
            <li>A deprecated attribute is one that is outdated, they are no longer allowed, read correctly,
                or become obsolete. Examples of deprecated attributes and tags: font, frame, frameset, noframes,
                font, dir, basefont, etc.</li>
            <li>Chrome 109 on Windows 10 browser scores 476 out of 555 points.</li>
            <li>HTTP Methods:
                <ol>
                    <li>GET: use to request data (not modified) from a specified resource.</li>
                    <li>POST: send data to a server to create a resource</li>
                    <li>PUT: update the existing resource on a server by using the content in the body of the request.</li>
                    <li>HEAD: same as get but it doesn't contain body in the response</li>
                    <li>TRACE: Diagnostic purposes, body contains the exact request message</li>
                    <li>PATCH: Apply partial modifications</li>
                    <li>DELETE: Delete the specified resource </li>    
                </ol>
            </li>
            <li>Defining Tables in HTML:
                <ul>
                    <li>thead, tbody, tfoot semantic elements</li>
                    <li>table /table to create the table</li>
                    <li>td tag for table column</li>
                    <li>tr tag for table row</li>
                </ul>
                
            </li>
            <li>Notes: get consultar, post para enviar; post lleva un body y el get solo lleva un head
                <ol>
                    <li>¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando ingresas tu usuario y contraseña en algún sitio? ¿Por qué? 
                        Se usa POST</li>
                    <li>¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página a través de un URL?
                        Se usa GET</li>
                    <li>Cuáles son los principales controles de una forma HTML5?
                        Input, form, label, button</li>
                    <li>¿Cuál es el ciclo de vida de los sistemas de información?
                        Análisis, planeación, diseño, desarrollo, pruebas, despliegue, mantenimiento, evaluación, desecho</li>
                    <li>¿Cuál es el ciclo de desarrollo de sistemas de información?
                        Definición de requerimientos, análisis de diseño y del software, implementación y prueba de unidades, integración y prueba del sistema, operación y mantenimiento.
                    </li>
                </li>
                </ol>
                
                
                
                
        </ul>
    </body>
    <footer>
        <p>Done using <a href="https://code.visualstudio.com/"> Visual Estudio Code</a></p>
        
    </footer>
    </html>`);
    response.write("Hola :) !");
    response.end();
});

server.listen(1000);