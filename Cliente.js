// cliente.js
class Cliente {
    constructor(id, nombre, apellido, dni, email, password) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.email = email;
        this.password = password;
    }

    actualizarNombre(nombre) {
        this.nombre = nombre;
    }

    actualizarApellido(apellido) {
        this.apellido = apellido;
    }
}

export default Cliente;
