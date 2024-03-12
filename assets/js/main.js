//Importacion de las clases
//import Animal from "./animal.js";
import Leon from "./leon.js";
import Lobo from "./lobo.js";
import Oso from "./oso.js";
import Serpiente from "./serpiente.js";
import Aguila from "./aguila.js";

// Función para crear instancias de las clases de animales
//segun los datos del formulario.
function crearInstancias(nombreAnimal, edadAnimal, comentariosAnimal) {
    //Creamos la variable vacia instanciaAnimal, para utilizarla
    //y asignarle un valor dentro del switch segun cada animal.
    let instanciaAnimal;
    //La declaracion switch nos permite evaluar la expresion comparando
    //el valor de esa expresion con una instancia (case), es decir,
    //si el parametro nombreAnimal es igual a alguno de los nombres de los
    //animales, entonces crea la instancia de clase correspondiente una vez llamada la funcion.
    switch (nombreAnimal) {
        case "Leon":
            instanciaAnimal = new Leon(edadAnimal, comentariosAnimal);
            console.log("Se creo la instancia León")
            break;
        case "Lobo":
            instanciaAnimal = new Lobo(edadAnimal, comentariosAnimal);
            console.log("Se creo la instancia Lobo")
            break;
        case "Oso":
            instanciaAnimal = new Oso(edadAnimal, comentariosAnimal);
            console.log("Se creo la instancia Oso")
            break;
        case "Serpiente":
            instanciaAnimal = new Serpiente(edadAnimal, comentariosAnimal);
            console.log("Se creo la instancia Serpiente")
            break;
        case "Aguila":
            instanciaAnimal = new Aguila(edadAnimal, comentariosAnimal);
            console.log("Se creo la instancia Aguila")
            break;
        default:
            alert('Animal no reconocido');
            console.log("Animal no reconocido");
            break;
    }
    //Retornamos instanciaAnimal para tener el valor segun el case correspondiente
    //y la instancia de clase.
    return instanciaAnimal;
}

//Creamos la funcion limpiarFormulario para devolverlo a su estado
//inicial luego de registrar un animal.
function limpiarFormulario() {
    document.getElementById("animal").selectedIndex = 0;
    document.getElementById("edad").selectedIndex = 0;
    document.getElementById("comentarios").value = "";
    document.getElementById("preview").innerHTML = "";
}

//El siguiente bloque de codigo nos permitira a travez de un envento click en el elemento con id "btnRegistrar"
//en primer lugar, obtener valores del formulario mediante la id;
//en segundo lugar, crear las instancias de las clases, dado que le estamos asignando a una variable
//dentro de ella el llamado a la funcion crearInstancias; en tercer lugar, estamos mediante la manipulación del
//DOM mostrando en la tabla los animales registrados con el formulario; y en cuarto lugar llamamos a la funcion
//"limpiarFormulario" que nos permite Devolver el formulario a un estado inicial luego de registrar a cada animal.

//Evento click en elemento con id "btnRegistrar"
document.getElementById("btnRegistrar").addEventListener("click", function () {
    //Obtenemos valores del formulario
    const nombreAnimal = document.getElementById("animal").value;
    const edadAnimal = document.getElementById("edad").value;
    const comentariosAnimal = document.getElementById("comentarios").value;

    //Creamos la instancia del animal correspondiente
    const instanciaAnimal = crearInstancias(nombreAnimal, edadAnimal, comentariosAnimal);

    ////Visualizamos en consola los valores
    console.log(`Valores al crear la Instancia: Nombre: ${nombreAnimal}, Edad: ${edadAnimal}, Comentarios: ${comentariosAnimal}`)
    //Visualizamos en consola la devolucion de la insntancia de clase creada
    console.log("Devolucion Instancia: ", instanciaAnimal);

    //En esta seccion implementamos la logica para mostrar los datos en la tabla
    //segun el animal creado en el formulario
    //Creamos una variable fila que crea un elemento div dentro de la tabla
    const fila = document.createElement("div");
    //Agregamos la clase "animal-row" para poder modificarla en el css
    fila.classList.add("animal-row");

    //Creamos el contenido que ira dentro del div (fila)
    //Nombre del animal
    //Creamos la variable nombre que crea un elemento parrafo dentro del div (fila)
    const nombre = document.createElement("p");
    //con textContent tenemos acceso al texto dentro de nombreAnimal
    nombre.textContent = nombreAnimal;
    //Le añadimos el elemento p (nombre) al div (fila)
    fila.appendChild(nombre);

    //Imagen correspondiente al animal
    //Creamos la variable imagen que crea un elemento img dentro del div (fila)
    const imagen = document.createElement("img");

    //Intentamos cargar la imagen en JPG
    imagen.src = `assets/img/${nombreAnimal}.jpg`;
    //Con el evento onerror, logramos que si no encuentra la extension jpg, cargue 
    //el png
    imagen.onerror = function () {
        imagen.src = `assets/img/${nombreAnimal}.png`;
    };
    //Agregamos el alt a la imagen
    imagen.alt = nombreAnimal;
    //Agregamos la clase "animal-image" para poder modificarla en el css
    imagen.classList.add("animal-image");
    //Le añadimos el elemento img(imagen) al div (fila)
    fila.appendChild(imagen);

    //Edad del animal
    //Creamos la variable edad que crea un elemento parrafo dentro del div (fila)
    const edad = document.createElement("p");
    //con textContent tenemos acceso al texto dentro de edadAnimal
    edad.textContent = edadAnimal;
    //Le añadimos el elemento p(edad) al div (fila)
    fila.appendChild(edad);

    //Comentarios del animal
    //Creamos la variable comentarios que crea un elemento parrafo dentro del div (fila)
    const comentarios = document.createElement("p");
    //con textContent tenemos acceso al texto dentro de comentariosAnimal
    comentarios.textContent = `Comentarios: ${comentariosAnimal}`;
    //Le añadimos el elemento p(comentarios) al div (fila)
    fila.appendChild(comentarios);

    //Finalmente agregamos el div (fila) a la tabla
    document.getElementById("Animales").appendChild(fila);

    //Devolver el formulario en un estado inicial luego de
    //registrar a cada animal. (Opcional)
    limpiarFormulario();
});

//Realizar por lo menos una función autoejecutable IIFE.
//Esta IIFE contiene dentro de ella la funcion asincrona que nos permite conectarnos
//al json y obtener los datos de los animales que este tiene.
(function () {
    //Realizar una consulta asíncrona utilizando una función async/await para conectarse
    //al archivo json y obtener las imágenes correspondientes a los animales.
    async function leerAnimales() {
        try {
            //Nos conectamos mediante fetch al archivo json
            const response = await fetch('animales.json');
            //Visualizamos en consola el response
            console.log("Devolucion response: ", response);
            //Si el response.estatus es igual a 200, 
            //realizamos la ejecucion de nuestro programa
            if (response.status == 200) {
                const animales = await response.json();
                //Visualizamos en consola el response.json
                console.log("Devolucion response.json: ", animales);

                //Prueba para recorrer las propiedades de animales.json
                // animales.animales.forEach(animal => {
                //     console.log(`-Nombre: ${animal.name} -Imagen: ${animal.imagen} -Sonido: ${animal.sonido} `)
                // });

                //En este apartado realizamos la logica para obtener las
                //imágenes correspondientes a los animales.
                //Creamos las variables para conectarlas con el html de acuerdo a su id
                const animalEscogido = document.getElementById("animal");
                const contenedorPreview = document.getElementById("preview");
                //Hacemos un evento "change" en animalEscodigo para cambiar segun el 
                //animal seleccionado
                animalEscogido.addEventListener("change", function () {
                    //Creamos la variable valor animal, la cual se le asigna el valor de animalEscogido
                    const valorAnimal = animalEscogido.value;
                    //Utilizamos el metodo find para obtener el valor que cumple la condicion (que el nombre del
                    //animal sea igual al de valorAnimal)
                    const animalEncontrado = animales.animales.find(animal => animal.name === valorAnimal);
                    //Si esto se cumple, entonces añadimos la imagen correspondiente al animal
                    //y quitamos el padding-5 para que se visualice correctamente nuestra imagen en el div con id "preview"
                    if (animalEncontrado) {
                        contenedorPreview.innerHTML = `<img src="assets/img/${animalEncontrado.imagen}" alt="${animalEncontrado.name}" class="img-fluid config-img">`;
                        contenedorPreview.parentElement.classList.remove("p-5");
                        //De no encontrar la igualdad del nombre, dejamos vacio el contenedor.
                    } else {
                        contenedorPreview.innerHTML = "";
                    }
                });
                //Si el response.estatus es distinto a 200, mediante un throw new Error creamos nuestro
                //error personalizado y lo utilizamos en el catch mediante un alert
            } else {
                throw new Error('¡Ha ocurrido un Error! Disculpe las molestias')
            }
        } catch (err) {
            alert(err);
        }
    }
    leerAnimales();
})();
