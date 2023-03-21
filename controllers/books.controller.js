const Book = require ('../models/books.model');

exports.get_books = (request, response, next) => {
    const cookies = request.get('Cookie') || '';
    let consultas = cookies.split('=')[1] || 0;

    consultas++;

    //Crear una cookie
    response.setHeader('Set-Cookie', 'consultas=' + consultas + '; HttpOnly');

    response.setHeader('Set-Cookie', 'books=cookieBook');
    response.render('home', {books: Book.fetchAll(),
        last_book: request.session.last_book || '',
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || '',
        privilegios: request.session.privilegios || [],
    });
};

exports.get_new = (request, response, next) => {
    response.render('newBook',{
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || '',
    });
};

exports.post_new = (request, response, next) => {

    const book = new Book({
        name: request.body.name,
        author: request.body.author,
        image: request.body.image,
        quote: request.body.quote,
        rate: request.body.rate,
    });

    book.save();

    request.session.last_book = book.name;

    response.status(300).redirect('/books/home');
};
