//Instruccion para importar a la clase padre Animal
import Animal from "./animal.js"

class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }

    //Metodo Lobo
    aullar() {
        //Aqui deberian ir las instrucciones para que suene el sonido
        //indicado
    }
}
//Instruccion para exportar a la clase Lobo
export default Lobo;