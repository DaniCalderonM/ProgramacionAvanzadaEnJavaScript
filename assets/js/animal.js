//Clase Padre
class Animal {
    //Propiedades: nombre, edad, img, comentarios, sonido
    constructor(nombre, edad, img, comentarios, sonido) {
        this._nombre = () => {
            return nombre;
        }
        this._edad = () => {
            return edad;
        }
        this._img = () => {
            return img;
        }
        this._comentarios = () => {
            return comentarios;
        }
        this._sonido = () => {
            return sonido;
        }
    }

    //Metodos get nombre, edad, img, comentarios, sonido
    get nombre() {
        return this._nombre;
    }

    get edad() {
        return this._edad;
    }

    get img() {
        return this._img;
    }

    get sonido() {
        return this._sonido;
    }

    get comentarios() {
        return this._comentarios;
    }

    //Metodo set comentario
    set comentarios(nuevo_comentario) {
        return this._comentarios = () => {
            return nuevo_comentario;
        }
    }
}

//Instruccion para exportar la clase Animal
export default Animal;