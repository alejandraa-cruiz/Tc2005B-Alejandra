const express = require('express');

const router = express.Router();

router.get('/pedirAlimento', (request, response, next) => {

    let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Conejitos.com</title>
    </head>
    <body>
        <h1>Venta de alimentos</h1>
        <form action="/conejos/pedirAlimento" method="POST">
            <fieldset>
                <legend>Selecciona cuantos kilos de alimento quieres pedir:</legend>
                <div>
                    <input type="number" id="alfalfa" name="alfalfa" value="0" min="0">
                    <label for="alfalfa"> Heno de alfalfa</label>
                </div>
                <div>
                    <input type="number" id="avena" name="avena" value="0" min="0">
                    <label for="avena"> Heno de avena</label>
                </div>
                <div>
                    <input type="number" id="pellets" name="pellets" value="0" min="0">
                    <label for="pellets"> Pellets</label>
                </div>
            </fieldset>
            <br>
            <input type="submit" value="Pedir alimento">
        </form>
    </body>
    </html>
    `;

    response.send(html);
});

router.post('/pedirAlimento', (request, response, next) => {
    console.log(request.body);

    response.send("<h1>Resumen de pedido</h1>" +
        "Tu pedido es: <br> <br>" + request.body.alfalfa + " kilos de heno de alfalfa <br>" 
    + request.body.avena + " kilos de heno de avena <br>" + request.body.pellets + " kilos de pellets <br>  <br> ¡Gracias por tu compra :) !");
   
});

router.get('/checklist', (request, response, next) => {
    let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Conejitos.com</title>
    </head>
    <body>
        <h1>Checklist para tu conejo</h1>
        <form action="/conejos/checklist" method="POST">
            <fieldset>
                <legend>A continuación te presentamos la checklist para tener a tu peludito sano y feliz:</legend>
                <div>
                    <input type="checkbox" id="heno" name="heno">
                    <label for="heno">Heno disponible en todo momento</label>
                </div>
                <div>
                    <input type="checkbox" id="pellets" name="pellets">
                    <label for="pellets"> Pellets o alimento seco</label>
                </div>
                <div>
                    <input type="checkbox" id="agua" name="agua" >
                    <label for="agua"> Plato de cerámica para el agua</label>
                </div>
                <div>
                    <input type="checkbox" id="litterbox" name="litterbox">
                    <label for="litterbox"> Litterbox o arenero para entrenar a tu conejo</label>
                </div>
            </fieldset>
            <br>
            <input type="submit" value="Más información">
        </form>
    </body>
    </html>
    `;
    response.send(html);
})

router.post('/checklist', (request, response, next) => {
    let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Conejitos.com</title>
    </head>
    <body>
        <h1>Conejo Minilop</h1>
        <h3>Alimentación</h3>
        <table cellspacing="15">
          <thead>
            <tr>
              <th>Edad</th>
              <th>Recomendaciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12 weeks</td>
              <td>100% heno de alfalfa, 1 taza de pellets, muy pocas verduras</td>
            </tr>
            <tr>
              <td>7 meses a un año</td>
              <td>75% heno de alfalfa, 25% heno de avena, 1/2 taza de pellets. Pocas verduras y muy pocas frutas </td>
            </tr>
            <tr>
                <td>Un año a cinco años</td>
                <td>100% heno de avena, 1/4 taza de pellets. Verduras y poca fruta </td>
            </tr>
          </tbody>
       </table>
    </body>
    </html>
    `;
    response.send(html);
})
module.exports = router;