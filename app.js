const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const isAuth = require('./util/is-auth');

const app = express();
const multer = require('multer');

app.use(bodyParser.urlencoded({extended: false}));



//fileStorage: Es nuestra constante de configuración para manejar el almacenamiento
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        //'uploads': Es el directorio del servidor donde se subirán los archivos 
        callback(null, 'uploads');
    },
    filename: (request, file, callback) => {
        //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
        //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
        callback(null, new Date().toISOString() + '-' + file.originalname);
    },
});

//Idealmente registramos multer después de bodyParser (la siguiente línea ya debería existir)
app.use(bodyParser.urlencoded({ extended: false }));

//En el registro, pasamos la constante de configuración y
//usamos single porque es un sólo archivo el que vamos a subir, 
//pero hay diferentes opciones si se quieren subir varios archivos. 
//'archivo' es el nombre del input tipo file de la forma
app.use(multer({ storage: fileStorage }).single('archivo'));

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