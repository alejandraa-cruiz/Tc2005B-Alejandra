const books = [
    {
        name: 'If he had been with me',
        author: 'Laura Nowlin',
        image: 'https://m.media-amazon.com/images/I/81GNCzI3CJL.jpg',
        quote: 'It was understood by everyone that I belonged to Finny and that we belonged together',
        rate: '❤️❤️❤️',

    },

    {
        name: 'Reminders of him',
        author: 'Colleen Hoover',
        image: 'https://m.media-amazon.com/images/I/617uZq23IPL.jpg',
        quote: 'There was before you and there was during you. For some reason, I never thought there would be an after you.',
        rate: '❤️❤️',

    },
];

exports.get_books = (request, response, next) => {
    response.render ('home', {books: books});
}