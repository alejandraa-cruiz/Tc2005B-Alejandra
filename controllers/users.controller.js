exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/books/home'); //Este código se ejecuta cuando la sesión se elimina.
    });
};