// Gestor de elementos en localStorage
// Este módulo se encarga de guardar y cargar las tarjetas en localStorage
// y de añadir los eventos a los botones de mover y eliminar tarjetas.
export function guardarTodasLasTarjetas() {
    const contenedorPorEmpezar = document.querySelector("#por-empezar");
    const contenedorEnProgreso = document.querySelector("#en-progreso");
    const contenedorFinalizado = document.querySelector("#finalizado");

    // Guardar las tarjetas de cada contenedor en localStorage
    localStorage.setItem("por-empezar", contenedorPorEmpezar.outerHTML);
    localStorage.setItem("en-progreso", contenedorEnProgreso.outerHTML);
    localStorage.setItem("finalizado", contenedorFinalizado.outerHTML);
}

// Cargar los elementos guardados en localStorage al cargar la página
// Esta función se llama al cargar la página para restaurar el estado de los contenedores
export function cargarElementosGuardados() {
    const contenedorPorEmpezar = document.querySelector("#por-empezar");
    const contenedorEnProgreso = document.querySelector("#en-progreso");
    const contenedorFinalizado = document.querySelector("#finalizado");

    // Cargar las tarjetas de cada contenedor desde localStorage
    if (localStorage.getItem("por-empezar") !== null) {
        contenedorPorEmpezar.innerHTML = localStorage.getItem("por-empezar");
    }
    if (localStorage.getItem("en-progreso") !== null) {
        contenedorEnProgreso.innerHTML = localStorage.getItem("en-progreso");
    }
    if (localStorage.getItem("finalizado") !== null) {
        contenedorFinalizado.innerHTML = localStorage.getItem("finalizado");
    }

    // Añadir los eventos a los botones de mover y eliminar tarjetas
    // para que funcionen después de cargar las tarjetas
    ponerEventosEnLosBotones();
}


import { eliminarTarjeta } from "./eliminarElementos.js";
import { moverALaDerecha, moverALaIzquierda } from "./moverElementos.js";

// Añadir eventos a los botones de mover y eliminar tarjetas
// Esta función se llama al cargar el contenido del localStorage
// para asegurarse de que todos los botones tienen los eventos correspondientes
function ponerEventosEnLosBotones() {
    for (const boton of document.querySelectorAll(".btnMoverDerecha")) {
        boton.addEventListener("click", moverALaDerecha );
    }
    for (const boton of document.querySelectorAll(".btnMoverIzquierda")) {
        boton.addEventListener("click", moverALaIzquierda);
    }
    for (const boton of document.querySelectorAll(".btnEliminar")) {
        boton.addEventListener("click", () => { eliminarTarjeta(boton); });
    }
}