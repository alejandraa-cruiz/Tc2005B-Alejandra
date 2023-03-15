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

//Crear el modelo de la clase Books
module.exports = class Books{
    //Constructor de la clase. Sirve para crear un nuevo objeto con ciertas propiedades
    constructor(my_book){
        this.name = my_book.name || "If he had been with me";
        this.author = my_book.author || "Laura Nowlin";
        this.image = my_book.image || "https://m.media-amazon.com/images/I/81GNCzI3CJL.jpg";
        this.quote = my_book.quote || "It was understood by everyone that I belonged to Finny and that we belonged together";
        this.rate = my_book.rate || "❤️❤️❤️";
    }

    //Sirve para guardar de manera persistente un nuevo objeto en la lista books
    save(){
        books.push(this);
    }

    static fetchAll(){
        return books;
    }
}