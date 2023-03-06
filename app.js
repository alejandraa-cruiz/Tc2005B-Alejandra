const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

const conejosRutas = require('./routes/conejos.routes');
app.use('/conejos', conejosRutas);


app.use((request, response, next) => {
    console.log('Middleware de error!');
    response.status(404);
    response.send('Lo sentimos, su solicitud no puede ser atendida'); 
});

app.listen(3000);