const Books = require ('../models/books.model');

exports.get_books = (request, response, next) => {
    response.render('home', {books: Books.fetchAll()})
}

exports.get_new = (request, response, next) => {
    response.render('newBook');
}