const Book = require ('../models/books.model');

exports.get_books = (request, response, next) => {
    response.render('home', {books: Book.fetchAll()})
};

exports.get_new = (request, response, next) => {
    response.render('newBook');
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

    response.status(300).redirect('/books/home');
};
