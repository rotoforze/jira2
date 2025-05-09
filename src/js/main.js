// Función para cargar la página al inicio
// Esta función se ejecuta al cargar la página y oculta la app y el mensaje de error de inicio de sesión
// y muestra el formulario de inicio de sesión.
function cargarPagina() {
    console.log("Cargando la página...");
    const errorLogeo = document.querySelector(".error-inicio-sesion");
    const app = document.querySelector(".app");
    
    // ponemos una imagen aleatoria de fondo
    ponerImagenAleatoria();

    app.className += " oculto";
    errorLogeo.className += " oculto";
}

// Función para poner una imagen aleatoria de fondo en la página de inicio de sesión y en la app
// Esta función genera un número aleatorio entre 1 y 5 y lo usa para seleccionar una imagen de fondo
// de un conjunto de imágenes. Luego, aplica esa imagen como fondo a los contenedores de la página de inicio de sesión y de la app.
// Las imágenes deben estar en la carpeta src/img y deben llamarse imagen1.jpg, imagen2.jpg, etc.
// Esta función se llama al cargar la página y cada vez que se recarga la página.
function ponerImagenAleatoria() {
    // Guardamos los contenedores de la página de inicio de sesión y de la app en un array
    // para poder aplicarles el fondo de forma más sencilla
    const contenedores = [ document.querySelector(".inicioSesion"), document.querySelector(".app") ];

    const x = Math.floor(Math.random() * 5) + 1; // Genera un número aleatorio entre 1 y 5

    // Cambia el fondo de los contenedores de la página de inicio de sesión y de la app
    for (const contenedor of contenedores) {
        contenedor.setAttribute("style", "background-image: url(./src/img/imagen"+x+".jpg); background-size: cover; background-position: center; background-repeat: no-repeat;");
    }
}

// Importar la función iniciarSesion desde el archivo gestorInicioSesion.js
import { iniciarSesion } from "./gestorInicioSesion.js";

// Función para iniciar sesión al pulsar el botón o la tecla Enter
function comprobarTeclado(event) {
    switch (event.key) {
        case 'Enter':
            iniciarSesion();
            break;
        default:
            guardarTodasLasTarjetas();
            break;
    }
}

// Añadir evento a los botones de inicio de sesión
document.querySelector(".boton-inicio-sesion").addEventListener("click", iniciarSesion);

// Añadir evento a los campos de texto para que se pueda iniciar sesión al pulsar Enter
document.addEventListener("keydown", () => { comprobarTeclado(event); });

// Añadir evento a los botones de cerrar sesión
for (const boton of document.querySelectorAll("#cerrarSesion")) {
   boton.addEventListener("click", () => {window.location.reload();});
}

// Si no existe el contador de tarjetas en localStorage, inicializarlo a 1
// Esto se hace para que al crear la primera tarjeta, el id sea "tarjeta1"
if (localStorage.getItem("contadorTarjetas") === null || localStorage.getItem("contadorTarjetas") === undefined || localStorage.getItem("contadorTarjetas") === 0) {
    localStorage.setItem("contadorTarjetas", 1);
}

import { crearElemento } from "./crearElementos.js";
// Añadir evento al botón de crear proyectos
// Al pulsar el botón, se crea un nuevo elemento y se añade al contenedor de "por empezar"
document.querySelector("#crearProyecto").addEventListener("click", crearElemento);

import { cargarElementosGuardados, guardarTodasLasTarjetas } from "./gestorElementosLocalStorage.js";
// Cargar los elementos guardados en localStorage al cargar la página
cargarElementosGuardados();

// Cargar la página al inicio
cargarPagina();