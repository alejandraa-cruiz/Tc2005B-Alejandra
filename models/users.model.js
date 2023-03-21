const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class User {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(my_user) {
        this.nombre = my_user.nombre || 'John  Doe';
        this.username = my_user.username || 'johndoe';
        this.password = my_user.password || 'johndoehohndoe';
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return bcrypt.hash(this.password, 12)
        .then((password_cifrado) => {
            return db.execute(`
                INSERT INTO usuarios (nombre, username, password)
                VALUES (?, ?, ?)
            `, [this.nombre, this.username, password_cifrado]);
        })
        .catch((error) => { console.log(error) });
    }

    static fetchOne(username) {
        return db.execute(`
            SELECT * 
            FROM usuarios
            WHERE username = ?
        `, [username]);
    }


}