class Usuario {

    constructor(
        id,
        nombre,
        email,
        password,
        fechaRegistro,
        foto,
        ultimosPedidos
    ){

        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.fechaRegistro = fechaRegistro;
        this.foto = foto;
        this.ultimosPedidos = ultimosPedidos;

    }

}

module.exports = Usuario;