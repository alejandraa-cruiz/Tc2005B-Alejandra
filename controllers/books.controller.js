const books = [
    {
        nombre: 'If he had been with me',
        author: 'Laura Nowlin',
        imagen: 'https://m.media-amazon.com/images/I/81GNCzI3CJL.jpg',
        quote: 'It was understood by everyone that I belonged to Finny and that we belonged together',
        handle: '@ifhehadbeenwithme',
        calificacion: '❤️❤️❤️',

    },

    {
        nombre: 'Reminders of him',
        author: 'Colleen Hoover',
        imagen: 'https://m.media-amazon.com/images/I/617uZq23IPL.jpg',
        quote: 'There was before you and there was during you. For some reason, I never thought there would be an after you.',
        handle: '@remindersofhim',
        calificacion: '❤️❤️',

    },
]

exports.get_books = (request, response, next) => {
    response.render ('home');
}