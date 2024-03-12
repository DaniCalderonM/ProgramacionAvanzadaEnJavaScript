//Instruccion para importar a la clase padre Animal
import Animal from "./animal.js"

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }

    //Metodo Leon
    rugir() {
        //Aqui deberian ir las instrucciones para que suene el sonido
        //indicado
    }
}
//Instruccion para exportar a la clase Leon
export default Leon;