class Cliente{
    constructor(id, nombre, apellido, dni, email, password){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.email = email;
        this.password = password;
    }

    modificarDatos(nuevosDatos){
        this.nombre = nuevosDatos.nombre || this.nombre;
        this.apellido = nuevosDatos.apellido || this.apellido;
        this.dni = nuevosDatos.dni || this.dni;
        this.email = nuevosDatos.email || this.email;
    }
    eliminarCliente() {
        console.log(`Cliente ${this.id} eliminado.`);
      }
}
export default Cliente;