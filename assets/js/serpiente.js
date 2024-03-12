//Instruccion para importar a la clase padre Animal
import Animal from "./animal.js"

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }

    //Metodo Serpiente
    sisear() {
        //Aqui deberian ir las instrucciones para que suene el sonido
        //indicado
    }
}
//Instruccion para exportar a la clase Serpiente
export default Serpiente;