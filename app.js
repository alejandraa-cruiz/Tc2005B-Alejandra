const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const isAuth = require('./util/is-auth');

const app = express();


app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use(express.static(path.join(__dirname, 'public')));

const usersRoutes = require('./routes/users.routes');
app.use('/users',usersRoutes);
const bookRoutes = require('./routes/books.routes');
app.use('/books', isAuth, bookRoutes);


app.use((request, response, next) => {
    console.log('Middleware de error!');
    response.status(404);
    response.send('Lo sentimos, su solicitud no puede ser atendida'); 
});

app.listen(3000);